import Link from "next/link"

import type { Tape } from "@/lib/tapes"
import { formatTapeDate } from "@/lib/tapes"

export function TapeNav({ tapes }: { tapes: Tape[] }) {
  const [latest, prev] = tapes

  return (
    <nav className="tape-nav">
      <Link href="https://vibecoderscommunity.github.io/" className="tape-logo">
        Mixtape <span>by Vibe Coders SG</span>
      </Link>
      <div className="tape-navlinks">
        {latest && (
          <Link href={`/tapes/${latest.slug}`}>
            Event #{latest.side} – {formatTapeDate(latest.date)}
          </Link>
        )}
        {prev && (
          <Link href={`/tapes/${prev.slug}`}>
            Side {prev.side} · {formatTapeDate(prev.date)}
          </Link>
        )}
      </div>
    </nav>
  )
}
