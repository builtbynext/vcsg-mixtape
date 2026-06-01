"use client"

import { useCallback, useRef, useState } from "react"

import type { Tape, Track } from "@/lib/tape-types"
import { formatTapeDate } from "@/lib/tape-types"
import { Markdown } from "@/components/markdown"

function pad(n: number) {
  return String(n).padStart(2, "0")
}

function Reel({ spinning }: { spinning: boolean }) {
  return (
    <div className="reel">
      <div className={`reel-spokes${spinning ? " spinning" : ""}`}>
        <div className="reel-spoke" />
        <div className="reel-spoke" />
        <div className="reel-spoke" />
        <div className="reel-spoke" />
      </div>
      <div className="reel-inner" />
    </div>
  )
}

function DemoVideo({
  track,
  loaded,
  onLoad,
}: {
  track: Track
  loaded: boolean
  onLoad: () => void
}) {
  if (!track.youtubeId) return null

  if (!loaded) {
    return (
      <div className="demo-video">
        <button
          type="button"
          className="demo-video-facade"
          style={{
            backgroundImage: `url(https://i.ytimg.com/vi/${track.youtubeId}/hqdefault.jpg)`,
          }}
          onClick={onLoad}
          aria-label={`Play ${track.name} on YouTube`}
        />
        <div className="demo-video-play" aria-hidden>▶</div>
      </div>
    )
  }

  return (
    <div className="demo-video">
      <iframe
        src={`https://www.youtube.com/embed/${track.youtubeId}?autoplay=1&rel=0`}
        title={track.name}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

function Accordion({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  return (
    <div className="accordion">
      <button
        type="button"
        className="accordion-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{label}</span>
        <span className={`accordion-chevron${open ? " open" : ""}`}>▸</span>
      </button>
      {open && <div className="accordion-content">{children}</div>}
    </div>
  )
}

export function MixtapeExperience({ tape }: { tape: Tape }) {
  const { tracks } = tape
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [loadedVideos, setLoadedVideos] = useState<Record<number, boolean>>({})
  const refs = useRef<Array<HTMLDivElement | null>>([])

  const jumpTo = useCallback((index: number) => {
    setActiveIndex(index)
    setIsPlaying(true)
    setLoadedVideos((prev) => ({ ...prev, [index]: true }))
    refs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [])

  const loadVideo = useCallback((index: number) => {
    setLoadedVideos((prev) => ({ ...prev, [index]: true }))
    setActiveIndex(index)
    setIsPlaying(true)
  }, [])

  const activeTrack = tracks[activeIndex]
  const tapeCode = `${tape.tapeNumber}${tape.side}`
  const nowPlaying = activeTrack
    ? `now playing: track ${pad(activeIndex + 1)} / ${activeTrack.name}`
    : "press play to begin"

  const stats = [
    { label: "demos", value: String(tracks.length) },
    ...(tape.runtime ? [{ label: "runtime", value: tape.runtime }] : []),
    ...(tape.builders != null ? [{ label: "builders", value: String(tape.builders) }] : []),
    ...(tape.inTheRoom != null ? [{ label: "in the room", value: String(tape.inTheRoom) }] : []),
  ]

  return (
    <>
      <div className="tape-hero">
        <div className="tape-eyebrow">Vol. {tape.tapeNumber}</div>
        <h1 className="tape-title">{tape.title}</h1>
        <div className="tape-meta">
          {tape.date && <span>{formatTapeDate(tape.date)}</span>}
          {tape.location && <><span className="dot">·</span><span>{tape.location}</span></>}
          <span className="dot">·</span>
          <span>{tracks.length} demos</span>
          {tape.curator && <><span className="dot">·</span><span>Curated by {tape.curator}</span></>}
        </div>

        <div className="tape-cassette">
          <Reel spinning={isPlaying} />
          <div className="tape-window">
            <div className="tape-label-title">Vibe Coders SG — {tapeCode}</div>
            <div className="tape-label-sub">{nowPlaying}</div>
          </div>
          <Reel spinning={isPlaying} />
          <div className="tape-controls">
            <button
              type="button"
              className="ctrl-btn"
              aria-label="Previous track"
              disabled={activeIndex === 0}
              onClick={() => jumpTo(Math.max(0, activeIndex - 1))}
            >⏮</button>
            <button
              type="button"
              className={`ctrl-btn${isPlaying ? " active" : ""}`}
              onClick={() => isPlaying ? setIsPlaying(false) : jumpTo(activeIndex)}
            >
              {isPlaying ? "⏸ PAUSE" : "▶ PLAY"}
            </button>
            <button
              type="button"
              className="ctrl-btn"
              aria-label="Next track"
              disabled={activeIndex >= tracks.length - 1}
              onClick={() => jumpTo(Math.min(tracks.length - 1, activeIndex + 1))}
            >⏭</button>
            <button
              type="button"
              className="ctrl-btn"
              aria-label="Stop"
              onClick={() => setIsPlaying(false)}
            >⏹</button>
          </div>
        </div>

        {stats.length > 0 && (
          <div className="tape-stats">
            {stats.map((s) => (
              <div className="stat-cell" key={s.label}>
                <div className="stat-label">{s.label}</div>
                <div className="stat-val">{s.value}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {tape.note && (
        <div className="tape-note">
          <Markdown>{tape.note}</Markdown>
        </div>
      )}

      <div className="tape-section-head">
        <span className="section-label">Tracklist — all {tracks.length} demos</span>
        <div className="section-line" />
        <span className="section-label">click to jump</span>
      </div>

      <div className="tracklist">
        {tracks.map((track, i) => (
          <button
            type="button"
            key={`${track.name}-${i}`}
            className={`track-row${i === activeIndex ? " active" : ""}`}
            onClick={() => jumpTo(i)}
          >
            <div className="track-num">{pad(i + 1)}</div>
            <div>
              <div className="track-name">{track.name}</div>
              <div className="track-builder">{track.builder}</div>
            </div>
            <div className="track-dur">{track.duration ?? "--:--"}</div>
          </button>
        ))}
      </div>

      <hr className="tape-divider" />

      {tracks.map((track, i) => (
        <div
          key={`demo-${track.name}-${i}`}
          className="demo-section"
          id={`track-${i + 1}`}
          ref={(el) => { refs.current[i] = el }}
        >
          <div className="demo-num">
            Track {pad(i + 1)}{track.duration ? ` · ${track.duration}` : ""}
          </div>
          <div className="demo-header">
            <div>
              <div className="demo-name">{track.name}</div>
              <div className="demo-builder">{track.builder}</div>
            </div>
            {track.youtubeId && (
              <a
                className="yt-badge"
                href={`https://www.youtube.com/watch?v=${track.youtubeId}`}
                target="_blank"
                rel="noreferrer"
              >
                <div className="yt-dot" />
                watch on youtube
              </a>
            )}
          </div>

          <DemoVideo
            track={track}
            loaded={Boolean(loadedVideos[i])}
            onLoad={() => loadVideo(i)}
          />

          {track.whatTheyBuilt && track.whatTheyBuilt.length > 0 && (
            <div className="demo-summary-box">
              <div className="summary-head">what they built</div>
              <ul className="summary-bullets">
                {track.whatTheyBuilt.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          )}

          {track.whyYouShouldCare && (
            <div className="why-matters">
              <div className="why-label">why you should care</div>
              <div className="why-text">{track.whyYouShouldCare}</div>
            </div>
          )}

          {track.description && (
            <Accordion label="expanded description">
              <Markdown>{track.description}</Markdown>
            </Accordion>
          )}

          {track.screenshots && track.screenshots.length > 0 && (
            <div className="screenshot-grid">
              {track.screenshots.map((shot, j) => (
                <div className="screenshot-cell" key={j}>
                  {shot.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={shot.image}
                      alt={`${track.name} screenshot ${j + 1}`}
                      loading="lazy"
                    />
                  ) : (
                    <span>screenshot {j + 1}</span>
                  )}
                  {shot.timestamp && <div className="screenshot-ts">{shot.timestamp}</div>}
                </div>
              ))}
            </div>
          )}

          {i < tracks.length - 1 && <hr className="tape-divider" />}
        </div>
      ))}
    </>
  )
}
