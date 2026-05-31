import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { MixtapeExperience } from "@/components/mixtape-experience"
import { TapeNav } from "@/components/tape-nav"
import { TapeShelf } from "@/components/tape-shelf"
import { getAllTapes } from "@/lib/tapes"

export async function generateStaticParams() {
  return (await getAllTapes()).map((tape) => ({ slug: tape.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const tape = (await getAllTapes()).find((t) => t.slug === slug)
  if (!tape) return { title: "Tape not found — The Mixtape" }
  return {
    title: `${tape.title} — The Mixtape`,
    description: `Tape ${tape.tapeNumber} · ${tape.tracks.length} demos from Vibe Coders SG, decoded track by track.`,
  }
}

export default async function TapePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const tapes = await getAllTapes()
  const tape = tapes.find((t) => t.slug === slug)
  if (!tape) notFound()

  return (
    <div className="mix-root">
      <h2 className="sr-only">{tape.title} — The Mixtape by Vibe Coders SG</h2>
      <TapeNav tapes={tapes} />
      <MixtapeExperience tape={tape} />
      <hr className="tape-divider" />
      <TapeShelf tapes={tapes} activeSlug={tape.slug} />
    </div>
  )
}
