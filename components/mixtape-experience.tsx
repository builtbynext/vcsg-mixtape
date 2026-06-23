"use client"

import { useCallback, useEffect, useRef, useState } from "react"

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

function LinkedInIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

function TiktokIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z"/>
    </svg>
  )
}

function PatreonIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M15.386 0.524c-4.764 0-8.64 3.876-8.64 8.64 0 4.75 3.876 8.613 8.64 8.613 4.75 0 8.613-3.864 8.613-8.613C24.004 4.4 20.14 0.524 15.386 0.524z" />
      <path d="M0 0.658v22.682h3.15V0.658H0z" />
    </svg>
  )
}

function SpotifyIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.522 17.308a.748.748 0 0 1-1.028.272 14.548 14.548 0 0 0-5.404-1.984c-2.153-.256-4.066.14-5.702 1.183a.748.748 0 1 1-.744-1.298c1.842-1.09 4.012-1.535 6.414-1.267 2.025.24 3.894.92 5.556 2.022a.75.75 0 0 1 .272 1.028zm1.448-3.412a.937.937 0 0 1-1.293.341 11.433 11.433 0 0 0-6.354-1.876c-1.776-.21-3.352.115-4.687 1.007a.938.938 0 0 1-1.11-1.512c1.633-1.07 3.557-1.457 5.677-1.207 2.434.289 4.674 1.11 6.66 2.443a.937.937 0 0 1 .34 1.293zm.124-3.559a1.125 1.125 0 0 1-1.548.41 13.662 13.662 0 0 0-7.287-2.127c-2.125-.253-4.004.138-5.592 1.165a1.125 1.125 0 1 1-1.312-1.828c1.872-1.11 4.082-1.563 6.531-1.3 2.787.332 5.369 1.272 7.677 2.793a1.125 1.125 0 0 1 .41 1.548z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  )
}

function LinkedInButton({ track }: { track: Track }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [open])

  const multi = track.builderLinkedinUrls
  const single = track.builderLinkedinUrl

  if (multi && multi.length > 0) {
    return (
      <div className="builder-link-popover-wrap" ref={ref}>
        <button
          type="button"
          className="builder-link-icon"
          onClick={() => setOpen((v) => !v)}
          aria-label="LinkedIn profiles"
          aria-expanded={open}
        >
          <LinkedInIcon />
        </button>
        {open && (
          <div className="builder-link-popover">
            {multi.map((entry) => (
              <a
                key={entry.url}
                href={entry.url}
                target="_blank"
                rel="noopener noreferrer"
                className="builder-link-popover-item"
                onClick={() => setOpen(false)}
              >
                <LinkedInIcon />
                <span>{entry.name}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    )
  }

  if (single) {
    return (
      <a href={single} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="builder-link-icon">
        <LinkedInIcon />
      </a>
    )
  }

  return null
}

function BuilderLinks({ track }: { track: Track }) {
  const links = [
    { href: track.builderWebsiteUrl, icon: <GlobeIcon />, label: "Website" },
    { href: track.builderInstagramUrl, icon: <InstagramIcon />, label: "Instagram" },
    { href: track.builderTiktokUrl, icon: <TiktokIcon />, label: "TikTok" },
    { href: track.builderXUrl, icon: <XIcon />, label: "X" },
    { href: track.builderPatreonUrl, icon: <PatreonIcon />, label: "Patreon" },
    { href: track.builderSpotifyUrl, icon: <SpotifyIcon />, label: "Spotify" },
  ].filter((l) => l.href)

  const hasLinkedin = !!(track.builderLinkedinUrls?.length || track.builderLinkedinUrl)
  if (!hasLinkedin && !links.length) return null

  return (
    <div className="builder-links">
      <LinkedInButton track={track} />
      {links.map((l) => (
        <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" aria-label={l.label} className="builder-link-icon">
          {l.icon}
        </a>
      ))}
    </div>
  )
}

function DemoVideo({
  track,
  loaded,
  onLoad,
  iframeRef,
}: {
  track: Track
  loaded: boolean
  onLoad: () => void
  iframeRef: (el: HTMLIFrameElement | null) => void
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
        >
          <div className="demo-video-play" aria-hidden>▶</div>
        </button>
      </div>
    )
  }

  return (
    <div className="demo-video">
      <iframe
        ref={iframeRef}
        src={`https://www.youtube.com/embed/${track.youtubeId}?autoplay=1&rel=0&enablejsapi=1`}
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

const ALWAYS_VISIBLE = ["what it is", "why this was made", "why this matters"]
const ACCORDION_SECTIONS = ["how it works", "under the hood", "try this"]

function parseDescriptionSections(md: string): { heading: string; content: string }[] {
  const sections: { heading: string; content: string }[] = []
  const lines = md.split("\n")
  let heading = ""
  let buf: string[] = []

  for (const line of lines) {
    if (line.startsWith("### ")) {
      if (buf.join("").trim()) sections.push({ heading, content: buf.join("\n").trim() })
      heading = line.slice(4).trim()
      buf = []
    } else {
      buf.push(line)
    }
  }
  if (buf.join("").trim()) sections.push({ heading, content: buf.join("\n").trim() })
  return sections
}

function TrackDescription({ description }: { description: string }) {
  const sections = parseDescriptionSections(description)
  const visible = sections.filter((s) => ALWAYS_VISIBLE.includes(s.heading.toLowerCase()))
  const accordions = sections
    .filter((s) => {
      const lower = s.heading.toLowerCase()
      return ACCORDION_SECTIONS.some((k) => lower.startsWith(k))
    })
    .sort((a, b) => {
      const aIsTry = a.heading.toLowerCase().startsWith("try this")
      const bIsTry = b.heading.toLowerCase().startsWith("try this")
      return aIsTry === bIsTry ? 0 : aIsTry ? 1 : -1
    })

  return (
    <>
      {visible.map((s) => (
        <div key={s.heading} className="track-desc-section">
          <div className="track-desc-heading">{s.heading}</div>
          <Markdown>{s.content}</Markdown>
        </div>
      ))}
      {accordions.map((s) => (
        <Accordion
          key={s.heading}
          label={s.heading.toLowerCase().startsWith("try this") ? "Recommended to try" : s.heading}
        >
          <Markdown>{s.content}</Markdown>
        </Accordion>
      ))}
    </>
  )
}

function sendYTCommand(iframe: HTMLIFrameElement | null | undefined, cmd: string) {
  iframe?.contentWindow?.postMessage(JSON.stringify({ event: "command", func: cmd, args: "" }), "*")
}

function isSameCreditPerson(
  curator?: string,
  decoder?: string,
  curatorUrl?: string,
  decoderUrl?: string,
): boolean {
  if (!curator || !decoder) return false
  if (curator.trim().toLowerCase() === decoder.trim().toLowerCase()) return true
  return Boolean(curatorUrl && decoderUrl && curatorUrl === decoderUrl)
}

function CreditName({ name, url }: { name: string; url?: string }) {
  return url ? (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {name}
    </a>
  ) : (
    name
  )
}

export function MixtapeExperience({ tape }: { tape: Tape }) {
  const { tracks } = tape
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [loadedVideos, setLoadedVideos] = useState<Record<number, boolean>>({})
  const [showScrollTop, setShowScrollTop] = useState(false)
  const refs = useRef<Array<HTMLDivElement | null>>([])
  const iframeRefs = useRef<Array<HTMLIFrameElement | null>>([])

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

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

  const sameCreditPerson = isSameCreditPerson(
    tape.curator,
    tape.decoder,
    tape.curatorUrl,
    tape.decoderUrl,
  )

  return (
    <>
      <div className="tape-hero">
        <div className="tape-eyebrow">Mixtape Vol. {tape.tapeNumber}</div>
        <h1 className="tape-title">{tape.title}</h1>
        <div className="tape-meta">
          {tape.date && <span>{formatTapeDate(tape.date)}</span>}
          {tape.location && <><span className="dot">·</span><span>{tape.locationUrl ? <a href={tape.locationUrl} target="_blank" rel="noopener noreferrer">{tape.location}</a> : tape.location}</span></>}
          <span className="dot">·</span>
          <span>{tracks.length} demos</span>
          {sameCreditPerson ? (
            <>
              <span className="dot">·</span>
              <span>
                Curated & decoded by{" "}
                <CreditName
                  name={tape.curator!}
                  url={tape.curatorUrl ?? tape.decoderUrl}
                />
              </span>
            </>
          ) : (
            <>
              {tape.curator && (
                <>
                  <span className="dot">·</span>
                  <span>
                    Curated by <CreditName name={tape.curator} url={tape.curatorUrl} />
                  </span>
                </>
              )}
              {tape.decoder && (
                <>
                  <span className="dot">·</span>
                  <span>
                    Decoded by <CreditName name={tape.decoder} url={tape.decoderUrl} />
                  </span>
                </>
              )}
            </>
          )}
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
              onClick={() => {
                if (isPlaying) {
                  sendYTCommand(iframeRefs.current[activeIndex], "pauseVideo")
                  setIsPlaying(false)
                } else {
                  jumpTo(activeIndex)
                }
              }}
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
              onClick={() => {
                sendYTCommand(iframeRefs.current[activeIndex], "stopVideo")
                setIsPlaying(false)
              }}
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
              <div className="demo-builder">
                {track.builderLinkedinUrl
                  ? <a href={track.builderLinkedinUrl} target="_blank" rel="noopener noreferrer">{track.builder}</a>
                  : track.builder}
              </div>
              <BuilderLinks track={track} />
            </div>
            {track.youtubeId && (
              <a
                className="yt-badge"
                href={`https://www.youtube.com/watch?v=${track.youtubeId}${track.youtubeStartTime ? `&t=${track.youtubeStartTime}s` : ""}`}
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
            iframeRef={(el) => { iframeRefs.current[i] = el }}
          />

          {track.description && <TrackDescription description={track.description} />}

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

      {showScrollTop && (
        <button
          type="button"
          className="scroll-top-btn"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑ top
        </button>
      )}
    </>
  )
}
