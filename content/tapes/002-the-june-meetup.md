---
title: "Vibe Coders SG #1, Just for the Lulz 🤡"
tapeNumber: "002"
side: 1
date: 2026-06-19
location: Hustle @ Somerset 331
locationUrl: https://lorong.ai/
curator: Stewart
curatorUrl: https://linkedin.com/in/stewartsg
decoder: Stewart
decoderUrl: https://linkedin.com/in/stewartsg
runtime: 35m 25s
builders: 68
inTheRoom: 41
color: c
published: true
tracks:
  - name: Xinni's Agentic Life OS
    builder: Xinni
    youtubeId: "lu2a3fIX14w"
    duration: "04:51"
    builderLinkedinUrl: "https://www.linkedin.com/in/xinni/"
    builderWebsiteUrl: ""
    builderInstagramUrl: "https://www.instagram.com/mushopea/"
    builderTiktokUrl: ""
    builderXUrl: ""
    builderPatreonUrl: ""
    builderSpotifyUrl: ""
    builderYoutubeUrl: ""

  - name: Seasons
    builder: Cassandra
    youtubeId: "fUUKpWJHKOw"
    duration: "05:19"
    builderLinkedinUrl: "https://www.linkedin.com/in/cassandralimxy/"
    builderWebsiteUrl: ""
    builderInstagramUrl: ""
    builderTiktokUrl: ""
    builderXUrl: ""
    builderPatreonUrl: ""
    builderSpotifyUrl: ""
    builderYoutubeUrl: ""

  - name: Video Creation Tool
    builder: Melvin
    youtubeId: "bZ22Y1hxsWs"
    duration: "05:29"
    builderLinkedinUrl: "https://www.linkedin.com/in/wei-rong-ho-740725146/"
    builderWebsiteUrl: ""
    builderInstagramUrl: "https://www.instagram.com/carillusart/"
    builderTiktokUrl: ""
    builderXUrl: "https://x.com/CarillusArt"
    builderPatreonUrl: ""
    builderSpotifyUrl: ""
    builderYoutubeUrl: ""

  - name: Ami
    builder: Alifa
    youtubeId: "Vjwr3kifLLQ"
    duration: "05:31"
    builderLinkedinUrl: "https://www.linkedin.com/in/alifaputrinda/"
    builderWebsiteUrl: "https://substack.com/@cooldownnotes"
    builderInstagramUrl: ""
    builderTiktokUrl: ""
    builderXUrl: ""
    builderPatreonUrl: ""
    builderSpotifyUrl: ""
    builderYoutubeUrl: ""

  - name: Soft Garden
    builder: Celeste
    youtubeId: "41gwphCAUUI"
    duration: "06:11"
    builderLinkedinUrl: "https://www.linkedin.com/in/celestenguiux/"
    builderWebsiteUrl: "https://www.softgarden.studio/"
    builderInstagramUrl: "https://www.instagram.com/twinklesparkles"
    builderTiktokUrl: ""
    builderXUrl: ""
    builderPatreonUrl: ""
    builderSpotifyUrl: ""
    builderYoutubeUrl: ""

  - name: Vibe Coded Studio
    builder: Thu Ya
    youtubeId: "ZLcwyYBQEfg"
    duration: "05:21"
    builderLinkedinUrl: "https://www.linkedin.com/in/thuyakyaw/"
    builderWebsiteUrl: ""
    builderInstagramUrl: ""
    builderTiktokUrl: ""
    builderXUrl: ""
    builderPatreonUrl: ""
    builderSpotifyUrl: ""
    builderYoutubeUrl: ""

  - name: Play Me
    builder: Sasha
    youtubeId: "uRESbdEnokU"
    duration: "02:43"
    builderLinkedinUrl: "https://linkedin.com/in/salima-nadira"
    builderWebsiteUrl: ""
    builderInstagramUrl: ""
    builderTiktokUrl: ""
    builderXUrl: ""
    builderPatreonUrl: "https://patreon.com/sasashamusic"
    builderSpotifyUrl: "https://open.spotify.com/artist/3Rg4OQYmAMECf2x1KUeHnd"
    builderYoutubeUrl: "https://www.youtube.com/c/SashaMVs"

---

## Xinni's Agentic Life OS

### What it is

Agentic OS is Xinni's personal live operating system — a fleet of AI agents that autonomously track finances, travel research, entertainment, parenting plans, and more. Each agent has a pixel avatar on a localhost dashboard, and scheduled Claude routines run daily and weekly against a connected GitHub repository.

### Why this was made

Xinni wanted to explore multi-agent orchestration without a complicated setup. The project started as a way to plan which countries to live in someday — tracking safety, news, and finances for places like Thailand — and grew into a full personal OS. Because it is built for herself, she can make it weird and personal: a parenting agent styled after the fetus from *Binding of Isaac*, a beauty agent hunting skincare in Japan, an entertainment agent for anime and games.

### Why this matters

- Shows that autonomous agents do not require exotic infrastructure — scheduled Claude routines plus GitHub hooks can be enough.
- Personal software can be deeply idiosyncratic when you own the whole stack.
- Multi-agent debate (cities arguing against each other) is a creative pattern for decision-making.
- A "harness improver" agent that reads arXiv papers weekly demonstrates self-improving automation loops.

### How it works

Xinni uses [claude.ai/code](https://claude.ai/code) on desktop with commands that run every day and every week, connected to a GitHub repo with hooks that execute routines. Agents produce automated reports — for example, a Thailand rep scans daily news on safety and splits findings across the roster. A travel agent has consult and intake modes; scanners drop new information that routes to the right agent. One agent is connected to therapy notes and deliberately pushes back on over-optimizing. A harness improver runs with the weeklies, searching for new memory and orchestration techniques from research papers.

### Try This

Set up a single scheduled Claude routine connected to a GitHub repo — even one daily report on a topic you care about — before trying to orchestrate multiple agents.

### Under the hood

- **Stack:** Claude routines, GitHub repo + hooks, localhost dashboard (port 5173), pixel agent roster with custom avatars.
- **Agents include:** beauty (Japan skincare), conferences (Korea), entertainment (anime/games), parenting, travel/finance, therapy-notes counterweight.
- **Harness improver:** reads arXiv on a weekly cadence to suggest memory and orchestration upgrades.
- **Presentation:** Xinni also used Claude Design to introduce the system at another meetup.

### Suggestions for your own projects:
- Start with one scheduled routine and one repo before scaling to a full agent roster.
- Give each agent a narrow domain and a distinct personality — it makes orchestration easier to reason about.
- Add a "skeptic" agent that challenges your defaults, especially for life decisions.

## Seasons

### What it is

Seasons is a casual, cozy journaling app for people who want to start journaling without the blank-canvas problem. Each journal entry generates a personalized stitch on a seasonal tapestry — spring, summer, autumn, winter — where each towel represents a day.

### Why this was made

Cassandra set a goal this year to journal more but found existing apps too intimidating. She built Seasons with her co-founder and partner Jean to make journaling lightweight and rewarding. The name reflects life's seasons — a season for building, meeting friends, finding love — and the app incentivizes the habit by revealing a blind-box-style stitch illustration after every entry.

### Why this matters

- Solves the blank page problem with photo capture, prompt shuffles, and playful rewards.
- Proves tactile, handcrafted design can be vibe-coded — Opus one-shotted the textures.
- Control dials for fine-tuning animations, haptics, and opacity bridge designer feel and engineer handoff.
- Shows a small team can ship something emotionally rich without a traditional app studio.

### How it works

Onboarding opens with a personalized note about why Seasons exists, then walks users through the tapestry. To journal, you write an entry — optionally attach a photo from the library or camera — and the app generates a stitch for that day. Prompt helpers offer lightweight nudges like "What was a small win you almost didn't count?" with shuffle-through options. The seasonal tapestry only reveals illustrations for days you actually journal.

### Try This

Journal one sentence about today and pair it with a photo — notice how much easier it feels than staring at an empty page.

### Under the hood

- Cassandra and Jean spent significant time crafting textures; early shader experiments were replaced when Opus generated the right tactile feel in one shot.
- **Control dials** expose texture size, animation duration, opacity, micro-animations, and haptics — Cassandra adjusts in-app, copies the config into Claude Code, and Jean spins a branch from there instead of back-and-forth "make this two pixels bigger" prompts.
- Onboarding is still a work in progress.

### Suggestions for your own projects:
- Use reward mechanics (stitches, streaks, reveals) to make habit apps feel playful rather than punitive.
- Build designer control panels that export config — it speeds up vibe-coding loops with a technical co-founder.
- Name and theme your app around life phases, not just features.

## Video Creation Tool

### What it is

Melvin's custom studio dashboard for VTuber and anime-adjacent video production — a visual pipeline tool built for artists who live in Discord, not Jira. It tracks stages, scripts, frames, references, issues, invoices, and automated frame review in one place.

### Why this was made

Melvin runs a studio doing online content creation and has ADHD. Standard project dashboards (Slack, Jira) fail content teams because there is no visual feedback on video pipelines. The artists he works with put everything into one long Discord thread — questions, requests, updates, corrections — with no structure. Six-hour meetings produce no notes. Before discovering Claude in February 2026, he tried open-source tools and Discord bots; none worked, so he built his own.

### Why this matters

- Project management tools designed for engineers do not fit creative pipelines with visual stages.
- Artists who only know Google Drive need interfaces they can click through, not tickets to parse.
- Cross-linked issues that surface in the dashboard, task tracker, and frame view keep feedback from getting lost.
- Automated script-to-frame review with Gemma catches mismatches before they ship.

### How it works

The dashboard shows every pipeline stage at a glance — what is done, what is not. A task tracker lets collaborators mark items complete with simple clicks. References hold character and asset docs. The script studio lets voice actors read live scripts online instead of juggling PDF versions. A frame view shows every shot in the video so artists can see where they sit in the pipeline. Click anywhere on a frame to file an issue ("change the hair color"); issues appear as dots across views and sync to the dashboard and task tracker. An automated review runs Gemma against each frame to check script-image alignment. Storyboard uploads slice handwritten boards and read titles automatically. Invoice submission and admin management live in the same tool.

### Try This

Map your creative project as visual stages (not a task list) and ask one collaborator which view would help them most — start there.

### Under the hood

- Built with Claude after months of failed experiments with Discord bots and open-source PM tools.
- **Script studio:** live script access for voice actors, no PDF versioning.
- **Frame view:** the feature artists love most for coordinating across pipeline stages.
- **Automated review:** Gemma checks each frame against script requirements.
- **Storyboard OCR:** upload handwritten boards, auto-slice and read numbered titles.

### Suggestions for your own projects:
- Design for the least technical person on your team, not the most organized.
- Link issues across every view so feedback never lives in only one place.
- Add automated checks (LLM or rules-based) for repetitive QA in visual pipelines.

## Ami

### What it is

Ami is Alifa's Telegram-based personal lifestyle assistant — a vibe-coded bot named Amy that books yoga classes, surfaces Singapore events, manages household restock, tracks expenses, and answers daily life questions through natural conversation.

### Why this was made

Alifa is a yoga teacher with a marketing and tech background. She heard about vibe coding with no coding experience — her day job is writing storylines and narratives. She wanted to build something she would use daily, and she envied friends who had human assistants. Ami exists to handle the repetitive coordination work: class booking, event discovery, budgeting, and calendar management.

### Why this matters

- Shows a non-engineer can ship a multi-integration assistant with Claude Code and plain-language instructions.
- Telegram works well as a clean, single-purpose channel when you do not already live in the app.
- The Instagram screenshot workaround is a practical pattern when bots cannot scrape social platforms.
- Connects Mindbody, Notion, Gmail, Drive, Sheets, YNAB, iCal, and Whoop into one conversational interface.

### How it works

Alifa installed Claude Code in her terminal, set up OpenAI, and described in her own words what Amy should do. She chose Telegram over WhatsApp because her Telegram was empty — only Amy lives there. Say "Good morning" and Amy returns sleep recovery and strain from Whoop, plus motivational nudges (including Sicily trip prep). Ask "How much money do I have left to eat out?" and Amy checks YNAB-style budgets. For yoga, Amy books classes via Mindbody; if your preferred slot is unavailable, it lists alternatives at your studio. For events, Instagram blocks bot access — so Alifa double-taps her phone to screenshot an event post, sends it to Amy, and Amy saves it to her calendar widget for weekend planning.

### Try This

Pick one daily chore (calendar, budget, or booking) and wire a Telegram bot to handle just that before adding more integrations.

### Under the hood

- **Tools:** Claude Code (terminal), Claude Pro subscription, OpenAI, Telegram bot.
- **Integrations:** Mindbody, Notion (yoga business), Gmail, Google Drive, Sheets, YNAB (manual Singapore workaround), iCal, Whoop.
- **Instagram gap:** screenshot → send to Amy → calendar entry; works for events that do not require separate registration.
- Alifa is still looking for better ways to discover events from Instagram — open to community suggestions.

### Suggestions for your own projects:
- Start with integrations you already use daily, not every API at once.
- Use a dedicated chat channel so your assistant does not get lost in group noise.
- When a platform blocks bots, design a human-in-the-loop capture flow (screenshots, forwards, shares).

## Soft Garden

### What it is

Soft Garden is a digital floral arrangement platform inspired by the rituals and emotions of real-world flower arranging — a slow, quiet space where users compose bouquets from focal flowers, fillers, greenery, and accents, then harvest the result.

### Why this was made

Celeste, a senior product designer at GIC, was observing conversations on LinkedIn about AI, burnout etc and was getting very stressed out. She signed up for a floral arrangement class with SkillsFuture credits and found something different from digital design: texture, movement, restraint, composition, and the feeling of time slowing down. She asked — if AI lowers the cost of creation, what becomes valuable? Speed, or beauty? Soft Garden explores whether software can be designed for feeling, not just productivity.

### Why this matters

- Challenges the "reduce to one click" mindset — value lives in the process, not completion.
- Hundreds of small decisions (lighting, shadow, pacing, animation) shape atmosphere over features.
- Recreates the irreversible moment of placing a stem in a vase — friends panicked at "holes" in real arrangements, so the digital version removes that fear.
- Shows Midjourney exploration plus hand-coded shadows can produce something quieter than corporate or Barbie-ish AI aesthetics.

### How it works

Users enter Soft Garden and click Begin. The scene shifts with careful shadowing — each flower's shadow is coded individually because Midjourney kept hallucinating random monsters at 4 a.m. Pick focal flowers, fillers like baby's breath, greenery like eucalyptus, and accent colors; preview how combinations look before committing. Continue to a harvest step. An MVP with two purpose paths confused users, so Celeste simplified to a snack bar: "How would you like to begin?" — including an option for friends who mentally crash when they see a bouquet forming.

### Try This

Spend ten minutes on something slow and tactile (flowers, ceramics, a walk) before opening your IDE — notice what feeling you want your software to carry.

### Under the hood

- Visual direction evolved from blue-toned cold-room mornings to quieter, more restrained palettes after rejecting corporate, retail, and overly expressive Midjourney outputs.
- Shadow and lighting per floral element are hand-coded; Midjourney generated base scenes but hallucination required heavy curation.
- Shaped by real floral parties with friends — design decisions came from watching where people hesitated or panicked.
- Celeste's question: can abstract ideas like calm and ritual still feel human in an AI-assisted world?

### Suggestions for your own projects:
- Design for atmosphere first — pacing, shadow, and restraint matter as much as features.
- Watch real users at the moment of commitment (the "hole in the vase") and remove friction there.
- When AI art tools hallucinate, plan for a hand-coded layer on top of generated assets.

## Vibe Coded Studio

### What it is

Vibe Coded Studio is Thu Ya's AI photo editing app for fixing bad event photos — transfer facial expressions from a good reference shot onto an awkward candid, swap clothes, upscale portraits, apply custom edits, and even go black-and-white. He also demoed AI video generation with character-sheet consistency for marketing walkthroughs.

### Why this was made

Thu Ya does a lot of public speaking. At one event, hundreds of photos were taken but only one usable shot surfaced — and it was not flattering. He wanted to post on LinkedIn without an octopus mascot photobombing the frame. Standard photo tools could not transfer expression from a better portrait, so he vibe-coded an app to do exactly that — and expanded it to clothing transfer, upscaling, and batch video guides with consistent characters.

### Why this matters

- Solves a very relatable problem: you have one bad official photo and one good reference — merge them.
- Expression and clothing transfer beat generic filters for professional headshots.
- Character sheets as reference images keep AI video protagonists consistent across scenes.
- Shows playful scope creep (upscaler, custom edit, B&W memorial mode) is valid when you own the tool.

### How it works

Upload a target image (the bad photo) and a reference (the good expression or outfit). Generate to transfer facial expression from reference to target — zoom in to compare. Clothing transfer works the same way: keep your preferred portrait, pull outfit from another shot. Custom edit lets you prompt fine adjustments (e.g. make something smaller). A separate upscaler enlarges portraits up to 4× with selectable AI models. For video, Thu Ya generates a character sheet (like 3D design turnaround references), then prompts with "Admire means this reference image" so Maya stays consistent across PCM badge-pickup guide scenes.

### Try This

Take one awkward photo and one you like of yourself — test whether expression transfer tools (or Thu Ya's approach) can salvage the post-worthy version.

### Under the hood

- Built for personal LinkedIn and marketing use; Thu Ya works in AI professionally and extends the same patterns to client-facing video.
- **Expression transfer:** reference image drives target output; octopus-free results confirmed live.
- **Upscaler:** 4× enlargement with model selection; side-by-side pixel comparison in demo.
- **Video consistency:** character sheet + explicit prompt scoping ("Maya is this person"); time-lapse wording in prompts can cause unintended fast-motion — read your prompts carefully.

### Suggestions for your own projects:
- Build the one photo fix you need before generalizing into a studio suite.
- Use character sheets for any multi-scene AI video where identity drift breaks trust.
- Keep prompt vocabulary explicit — ambiguous words like "time lapse" can hijack generation.

## Play Me

### What it is

Play Me is Sasha's interactive song-matching app for her comeback EP — a Phase One depository where users describe a feeling in free text and the app matches a track, lyric, and personalized explanation of why that lyric fits.

### Why this was made

Sasha is an independent dance pop artist releasing music since 2018 — formerly in a girl group that won a world competition. After setbacks and COVID, she is on a comeback arc with an EP years in the making: friends have heard the first half, but new songs are still unreleased. She wanted friends to reconnect with older tracks, discover new ones, and build hype — without polished visuals yet, the focus is pure functionality.

### Why this matters

- Shows artists can vibe-code fan engagement tools without waiting for a label or agency.
- Free-text mood input → song match is a novel discovery mechanic for unreleased music.
- Phased roadmap (match → listen → shareable story cards) is a sensible ship order.
- Live demo with audience input ("walking on sunshine — clouds with three liters of beer") proved the concept instantly.

### How it works

Phase One: users type anything nostalgic or descriptive into a text box. The app scans the EP catalog and returns a matched song, a specific lyric, and a short description of how that lyric relates to what they typed. In the demo, a volunteer's chaotic entry matched **Up and Up** with the lyric "I'm so high, I'm on another level, levitating with the stars tonight." Phase Two will add in-app listening. Phase Three will add shareable cards for stories and social.

### Try This

Describe your mood in one weird sentence and ask a friend which song on an album it sounds like — that is the core loop before you automate it.

### Under the hood

- Still under construction — no design or visuals yet; functionality first.
- Phase One: song depository + lyrics + interactive matching.
- Phase Two: embedded playback.
- Phase Three: shareable cards for Instagram stories and social promotion.
- Built to bridge old EP tracks and unreleased new material for the comeback push.

### Suggestions for your own projects:
- Ship Phase One interaction before polish — Sasha validated matching live with the room.
- If you are an artist, own the discovery layer between your music and your audience.
- Plan shareability (Phase Three) only after the core match moment works.

## Q&A

### What it is

Audience Q&A after the seven demos — questions for speakers on agent orchestration, design process, integrations, and vibe-coding workflows.

### Why this matters

The June meetup skewed personal, playful, and practical: personal OS agents, cozy journaling, creative studio tooling, lifestyle bots, slow software, photo rescue, and artist fan engagement. Q&A tied those threads together for builders at different skill levels.

### How it works

Attendees asked follow-up questions after each demo (Cassandra noted she would stay for process questions). Topics likely spanned Claude routines, control-dial workflows, creative pipeline tooling, Telegram bot integrations, and phased product launches.

---

## The Recap

Seven builders, seven very different vibes — from an agentic Life OS, iOS app for casual journalling with handmade and individually stitched illustrations to VTuber production dashboards, a Telegram lifestyle assistant, digital floral arrangement platform, AI photo rescue, and an interactive song-matching app. Just for the lulz, and somehow all of it useful.


