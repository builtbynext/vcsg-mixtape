import { MixtapeExperience } from "@/components/mixtape-experience"
import { TapeNav } from "@/components/tape-nav"
import { TapeShelf } from "@/components/tape-shelf"
import { getAllTapes } from "@/lib/tapes"

export default async function HomePage() {
  const tapes = await getAllTapes()
  const latest = tapes[0]

  return (
    <div className="mix-root">
      <h2 className="sr-only">The Mixtape by Vibe Coders SG — meetup recaps, decoded</h2>
      <TapeNav tapes={tapes} />
      {latest ? (
        <>
          <MixtapeExperience tape={latest} />
          <hr className="tape-divider" />
          <TapeShelf tapes={tapes} activeSlug={latest.slug} />
        </>
      ) : (
        <div className="tape-hero">
          <div className="tape-eyebrow">No tapes yet</div>
          <h1 className="tape-title">The shelf is empty</h1>
          <p style={{ fontSize: 13, color: "var(--color-text-muted)", marginTop: 8 }}>
            Add your first tape to <code>content/tapes/</code>.
          </p>
        </div>
      )}
    </div>
  )
}
