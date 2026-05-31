export interface Screenshot {
  image: string
  timestamp?: string
}

export interface Track {
  name: string
  builder: string
  youtubeId?: string
  duration?: string
  whatTheyBuilt?: string[]
  whyYouShouldCare?: string
  screenshots?: Screenshot[]
}

export interface Tape {
  slug: string
  title: string
  tapeNumber: string
  side: string
  date: string
  location?: string
  curator?: string
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
