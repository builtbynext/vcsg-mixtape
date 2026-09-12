import Link from "next/link"

import type { Tape } from "@/lib/tapes"
import { formatTapeDate } from "@/lib/tapes"

export function TapeNav({ tapes }: { tapes: Tape[] }) {
  return (
    <nav className="tape-nav">
      <Link href="https://vibecoderscommunity.github.io/" className="tape-logo">
        Mixtape <span>by Vibe Coders SG</span>
      </Link>
      <div className="tape-navlinks">
        {tapes.map((tape) => (
          <Link key={tape.slug} href={`/tapes/${tape.slug}`}>
            Event #{tape.side} – {formatTapeDate(tape.date)}
          </Link>
        ))}
      </div>
    </nav>
  )
}
