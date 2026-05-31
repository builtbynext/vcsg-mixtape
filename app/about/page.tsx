import type { Metadata } from "next"

import { TapeNav } from "@/components/tape-nav"
import { TapeShelf } from "@/components/tape-shelf"
import { getAllTapes } from "@/lib/tapes"

export const metadata: Metadata = {
  title: "About — The Mixtape",
  description: "What The Mixtape is and how Vibe Coders SG records each meetup.",
}

export default async function AboutPage() {
  const tapes = await getAllTapes()

  return (
    <div className="mix-root">
      <TapeNav tapes={tapes} />

      <div className="tape-hero">
        <div className="tape-eyebrow">About</div>
        <h1 className="tape-title">Liner Notes</h1>
        <div className="tape-meta">
          <span>Vibe Coders SG</span>
          <span className="dot">·</span>
          <span>Singapore</span>
        </div>
      </div>

      <div className="about-body">
        <div className="about-block">
          <div className="about-label">what this is</div>
          <ul>
            <li>The Mixtape is our recap of every Vibe Coders SG meetup — each demo becomes a track you can play.</li>
            <li>Every track links to its own video on YouTube, so you can watch the full demo whenever you like.</li>
            <li>Tapes are edited as markdown files committed straight to the repo — no database, just files.</li>
          </ul>
        </div>

        <div className="about-quote">
          <p>
            Demos are ephemeral. A mixtape is something you keep, share, and pass around.
            We wanted the recaps to feel the same way.
          </p>
        </div>
      </div>

      <hr className="tape-divider" />
      <TapeShelf tapes={tapes} />
    </div>
  )
}
