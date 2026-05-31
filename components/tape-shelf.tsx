import Link from "next/link"

import type { Tape } from "@/lib/tapes"
import { formatTapeDate } from "@/lib/tapes"

export function TapeShelf({
  tapes,
  activeSlug,
}: {
  tapes: Tape[]
  activeSlug?: string
}) {
  return (
    <>
      <div className="tape-section-head">
        <span className="section-label">The Shelf — all tapes</span>
        <div className="section-line" />
      </div>
      <div className="tape-shelf">
        {tapes.map((tape) => (
          <Link
            key={tape.slug}
            href={`/tapes/${tape.slug}`}
            className={`shelf-tape${tape.slug === activeSlug ? " active" : ""}`}
          >
            <div className={`shelf-tape-stripe tape-color-${tape.color ?? "a"}`} />
            <div className="shelf-tape-num">{tape.tapeNumber}</div>
            <div className="shelf-tape-name">{tape.title}</div>
            <div className="shelf-tape-date">{formatTapeDate(tape.date)}</div>
            <div className="shelf-tape-tracks">
              {tape.tracks.length} tracks{tape.runtime ? ` · ${tape.runtime}` : ""}
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
