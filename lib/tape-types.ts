export interface Screenshot {
  image: string
  timestamp?: string
}

export interface Track {
  name: string
  builder: string
  builderLinkedinUrl?: string
  builderLinkedinUrls?: { name: string; url: string }[]
  builderWebsiteUrl?: string
  builderInstagramUrl?: string
  builderXUrl?: string
  builderTiktokUrl?: string
  builderPatreonUrl?: string
  builderSpotifyUrl?: string
  builderYoutubeUrl?: string
  youtubeId?: string
  youtubeStartTime?: number
  duration?: string
  description?: string
  screenshots?: Screenshot[]
}

export interface Tape {
  slug: string
  title: string
  tapeNumber: string
  side: string
  date: string
  location?: string
  locationUrl?: string
  curator?: string
  curatorUrl?: string
  decoder?: string
  decoderUrl?: string
  runtime?: string
  builders?: number
  inTheRoom?: number
  color?: string
  published: boolean
  note?: string
  tracks: Track[]
}

export function formatTapeDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString("en-SG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}
