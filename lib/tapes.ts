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

  const screenshots = normalizeScreenshots(t.screenshots)

  const linkedinUrls = Array.isArray(t.builderLinkedinUrls)
    ? (t.builderLinkedinUrls as unknown[])
        .map((e) => {
          const entry = (e ?? {}) as Record<string, unknown>
          return { name: String(entry.name ?? ""), url: String(entry.url ?? "") }
        })
        .filter((e) => e.url)
    : []

  return {
    name: String(t.name ?? ""),
    builder: String(t.builder ?? ""),
    builderLinkedinUrl: t.builderLinkedinUrl ? String(t.builderLinkedinUrl) : undefined,
    builderLinkedinUrls: linkedinUrls.length ? linkedinUrls : undefined,
    builderWebsiteUrl: t.builderWebsiteUrl ? String(t.builderWebsiteUrl) : undefined,
    builderInstagramUrl: t.builderInstagramUrl ? String(t.builderInstagramUrl) : undefined,
    builderXUrl: t.builderXUrl ? String(t.builderXUrl) : undefined,
    builderTiktokUrl: t.builderTiktokUrl ? String(t.builderTiktokUrl) : undefined,
    builderPatreonUrl: t.builderPatreonUrl ? String(t.builderPatreonUrl) : undefined,
    builderSpotifyUrl: t.builderSpotifyUrl ? String(t.builderSpotifyUrl) : undefined,
    youtubeId: t.youtubeId ? String(t.youtubeId) : undefined,
    youtubeStartTime: typeof t.youtubeStartTime === "number" ? t.youtubeStartTime : undefined,
    duration: t.duration ? String(t.duration) : undefined,
    screenshots: screenshots.length ? screenshots : undefined,
  }
}

interface TrackDescription {
  name: string
  content: string
}

function parseTrackBody(
  tracks: Track[],
  body: string,
): { descriptions: TrackDescription[]; recap: string } {
  const trimmed = body.trim()
  if (!trimmed) return { descriptions: [], recap: "" }

  const separatorMatch = trimmed.match(/\n{2,}---\n{2,}/)
  if (!separatorMatch) {
    return { descriptions: [], recap: trimmed }
  }

  const sepIndex = separatorMatch.index!
  const descriptionsBlock = trimmed.slice(0, sepIndex)
  const recap = trimmed.slice(sepIndex + separatorMatch[0].length).trim()

  const trackNames = new Set(tracks.map((t) => t.name))
  const descriptions: TrackDescription[] = []

  const headingRegex = /^## (.+)$/gm
  const matches = [...descriptionsBlock.matchAll(headingRegex)]

  for (let i = 0; i < matches.length; i++) {
    const name = matches[i][1].trim()
    if (!trackNames.has(name)) continue

    const contentStart = matches[i].index! + matches[i][0].length
    const contentEnd =
      i + 1 < matches.length ? matches[i + 1].index! : descriptionsBlock.length

    const content = descriptionsBlock.slice(contentStart, contentEnd).replace(/^\n+/, "").trim()
    if (content) {
      descriptions.push({ name, content })
    }
  }

  return { descriptions, recap }
}

async function parseTape(filePath: string): Promise<Tape> {
  const raw = await fs.promises.readFile(filePath, "utf8")
  const { data, content } = matter(raw)
  const slug = path.basename(filePath).replace(/\.mdx?$/, "")

  const tracks: Track[] = Array.isArray(data.tracks)
    ? data.tracks.map(normalizeTrack)
    : []

  const { descriptions, recap } = parseTrackBody(tracks, content)

  const descriptionMap = new Map(descriptions.map((d) => [d.name, d.content]))
  for (const track of tracks) {
    const desc = descriptionMap.get(track.name)
    if (desc) track.description = desc
  }

  return {
    slug,
    title: String(data.title ?? slug),
    tapeNumber: String(data.tapeNumber ?? ""),
    side: String(data.side ?? "A"),
    date: data.date ? String(data.date) : "",
    location: data.location ? String(data.location) : undefined,
    locationUrl: data.locationUrl ? String(data.locationUrl) : undefined,
    curator: data.curator ? String(data.curator) : undefined,
    curatorUrl: data.curatorUrl ? String(data.curatorUrl) : undefined,
    decoder: data.decoder ? String(data.decoder) : undefined,
    decoderUrl: data.decoderUrl ? String(data.decoderUrl) : undefined,
    runtime: data.runtime ? String(data.runtime) : undefined,
    builders: typeof data.builders === "number" ? data.builders : undefined,
    inTheRoom: typeof data.inTheRoom === "number" ? data.inTheRoom : undefined,
    color: data.color ? String(data.color) : undefined,
    published: data.published !== false,
    note: recap || undefined,
    tracks,
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
