# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Important: Next.js Version

This project uses **Next.js 16** (with Turbopack), which has breaking changes from older versions in your training data. Before writing any Next.js-specific code, check `node_modules/next/dist/docs/` for current APIs and conventions.

## Commands

```bash
npm run dev        # Start dev server (Turbopack)
npm run build      # Production build
npm run lint       # ESLint
npm run format     # Prettier
npm run typecheck  # TypeScript check
```

## Architecture

**VCSG Mixtape** is a static site for Vibe Coders SG meetup recaps, using a cassette tape metaphor. No database — content is markdown files with YAML frontmatter.

### Content → Data flow

1. Tape data lives in `/content/tapes/*.md` — each file is one meetup
2. `lib/tapes.ts` reads these files using `gray-matter`, wrapped in React `cache()` for deduplication
3. Pages consume data via server components; only `MixtapeExperience` is a client component

### Tape markdown schema

The markdown filename (minus `.md`) becomes the URL slug — e.g. `content/tapes/003-the-may-meetup.md` → `/tapes/003-the-may-meetup`. Only files with `published: true` in frontmatter are served.

Frontmatter fields: `title`, `tapeNumber`, `side`, `date`, `location`, `curator`, `runtime`, `builders`, `inTheRoom`, `color`, `published`, `note`, `tracks[]`. Each track has `name`, `builder`, `youtubeId`, `duration`, `whatTheyBuilt[]`, `whyYouShouldCare`, `screenshots[]`. Types defined in `lib/tape-types.ts`.

### Routing

- `/` — latest tape as featured player + full shelf of all tapes
- `/tapes/[slug]` — individual tape; statically generated via `generateStaticParams()`
- `/about` — static info page

### Component split

- **Server components:** all pages, `TapeNav`, `TapeShelf`
- **Client component:** `MixtapeExperience` — cassette player UI with YouTube embed, play/pause/next/previous, reel spin animation, track selection

### Styling

Tailwind CSS 4 with custom CSS variables (`--color-bg`, `--color-text`, `--color-border`, etc.) defined in `app/globals.css`. Dark mode via `.dark` class. Four Google Fonts loaded in `app/layout.tsx` as CSS variables. shadcn/ui with Radix Nova style (`components.json`).

### Images

Next.js `<Image>` remote patterns are configured for YouTube thumbnails (`i.ytimg.com`, `img.youtube.com`) in `next.config.ts`.
