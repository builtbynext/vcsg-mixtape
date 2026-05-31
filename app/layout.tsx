import type { Metadata } from "next"
import {
  Geist_Mono,
  IBM_Plex_Mono,
  Libre_Baskerville,
  Special_Elite,
} from "next/font/google"

import "./globals.css"

const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
})
const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-special-elite",
})
const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-baskerville",
})

export const metadata: Metadata = {
  title: "The Mixtape — Vibe Coders SG",
  description: "Meetup recaps from Vibe Coders SG, decoded track by track.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${mono.variable} ${plexMono.variable} ${specialElite.variable} ${baskerville.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
