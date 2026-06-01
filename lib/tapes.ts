import fs from "node:fs"
import path from "node:path"

import matter from "gray-matter"
import { cache } from "react"

import type { Screenshot, Tape, Track } from "./tape-types"

export type { Screenshot, Tape, Track } from "./tape-types"
export { formatTapeDate } from "./tape-types"

const TAPES_DIR = path.join(process.cwd(), "content", "tapes")

function normalizeScreenshots(raw: unknown): Screenshot[] {
  if (!Array.isArray(raw)) return []
  return raw.map((s) => {
    const shot = (s ?? {}) as Record<string, unknown>
    return {
      image: String(shot.image ?? ""),
      timestamp: shot.timestamp ? String(shot.timestamp) : undefined,
    }
  })
}

function normalizeTrack(raw: unknown): Track {
  const t = (raw ?? {}) as Record<string, unknown>

  let whatTheyBuilt: string[] | undefined
  if (Array.isArray(t.whatTheyBuilt)) {
    whatTheyBuilt = t.whatTheyBuilt.map(String)
  } else if (typeof t.whatTheyBuilt === "string" && t.whatTheyBuilt.trim()) {
    whatTheyBuilt = t.whatTheyBuilt
      .split("\n")
      .map((l) => l.replace(/^[-*]\s*/, "").trim())
      .filter(Boolean)
  }

  const screenshots = normalizeScreenshots(t.screenshots)

  return {
    name: String(t.name ?? ""),
    builder: String(t.builder ?? ""),
    youtubeId: t.youtubeId ? String(t.youtubeId) : undefined,
    duration: t.duration ? String(t.duration) : undefined,
    whatTheyBuilt,
    whyYouShouldCare: t.whyYouShouldCare ? String(t.whyYouShouldCare) : undefined,
    screenshots: screenshots.length ? screenshots : undefined,
  }
}

async function parseTape(filePath: string): Promise<Tape> {
  const raw = await fs.promises.readFile(filePath, "utf8")
  const { data, content } = matter(raw)
  const slug = path.basename(filePath).replace(/\.mdx?$/, "")

  return {
    slug,
    title: String(data.title ?? slug),
    tapeNumber: String(data.tapeNumber ?? ""),
    side: String(data.side ?? "A"),
    date: data.date ? String(data.date) : "",
    location: data.location ? String(data.location) : undefined,
    curator: data.curator ? String(data.curator) : undefined,
    curatorUrl: data.curatorUrl ? String(data.curatorUrl) : undefined,
    decoder: data.decoder ? String(data.decoder) : undefined,
    decoderUrl: data.decoderUrl ? String(data.decoderUrl) : undefined,
    runtime: data.runtime ? String(data.runtime) : undefined,
    builders: typeof data.builders === "number" ? data.builders : undefined,
    inTheRoom: typeof data.inTheRoom === "number" ? data.inTheRoom : undefined,
    color: data.color ? String(data.color) : undefined,
    published: data.published !== false,
    note: content.trim() || undefined,
    tracks: Array.isArray(data.tracks) ? data.tracks.map(normalizeTrack) : [],
  }
}

export const getAllTapes = cache(async (): Promise<Tape[]> => {
  let files: string[]
  try {
    files = await fs.promises.readdir(TAPES_DIR)
  } catch {
    return []
  }

  const tapes = await Promise.all(
    files
      .filter((f) => /\.mdx?$/.test(f))
      .map((f) => parseTape(path.join(TAPES_DIR, f))),
  )

  return tapes
    .filter((t) => t.published)
    .sort((a, b) => b.tapeNumber.localeCompare(a.tapeNumber))
})

export async function getTape(slug: string): Promise<Tape | undefined> {
  return (await getAllTapes()).find((t) => t.slug === slug)
}
