---
title: "Vibe Coders SG #3, Designing with AI, without the slop 🔥"
tapeNumber: "004"
side: 3
date: 2026-09-03
location: Apple Developer Center @ Fusionopolis
locationUrl: https://luma.com/moiou7uc
curator: Stewart
curatorUrl: https://linkedin.com/in/stewartsg
runtime: 1h 24m 45s
color: d
published: true
tracks:
  - name: Pico cam
    builder: Soon
    youtubeId: QmV2jH2yojU
    duration: "06:29"
    builderLinkedinUrl: https://www.linkedin.com/in/soontiac
    builderWebsiteUrl: https://picocam.app/
    builderInstagramUrl: ""
    builderTiktokUrl: ""
    builderXUrl: https://x.com/soontiago
    builderPatreonUrl: ""
    builderSpotifyUrl: ""
    builderYoutubeUrl: ""

  - name: Dojojojo
    builder: Reynard + May Yee
    youtubeId: BbCwPBVuYts
    duration: "09:02"
    builderLinkedinUrls:
      - name: Reynard
        url: https://linkedin.com/in/reynard-lee-a700a39b
      - name: May Yee
        url: https://linkedin.com/in/may-yee-lai
    builderWebsiteUrl: https://dojojojo.com/
    builderInstagramUrl: https://www.instagram.com/official.dojojojo/
    builderTiktokUrl: https://www.tiktok.com/@official.dojojojo
    builderXUrl: ""
    builderPatreonUrl: ""
    builderSpotifyUrl: ""
    builderYoutubeUrl: ""

  - name: DesignCode 5 – Taste in the Age of Agentic Coding
    builder: Meng To
    youtubeId: 3NLcu6ftiLE
    duration: "09:53"
    builderLinkedinUrl: https://www.linkedin.com/in/mengto
    builderWebsiteUrl: https://designcode.io
    builderInstagramUrl: https://www.instagram.com/mengto
    builderTiktokUrl: ""
    builderXUrl: https://x.com/mengto
    builderPatreonUrl: ""
    builderSpotifyUrl: ""
    builderYoutubeUrl: https://www.youtube.com/@designcodeteam

  - name: Liquid Glass on Apple Platforms to create beautifully created app experiences
    builder: Jia Chen
    youtubeId: WaVoHDekMvo
    duration: "11:57"
    builderLinkedinUrl: https://www.linkedin.com/in/jia-chen-yee
    builderWebsiteUrl: https://jiachen.app
    builderInstagramUrl: https://www.instagram.com/jiachenyee
    builderTiktokUrl: ""
    builderXUrl: https://x.com/jiachenyee
    builderPatreonUrl: ""
    builderSpotifyUrl: ""
    builderYoutubeUrl: ""

  - name: LAIOS
    builder: Yu Xuan
    youtubeId: I-HJ2MOMKcM
    duration: "16:15"
    builderLinkedinUrl: https://www.linkedin.com/in/li-yuxuan/
    builderWebsiteUrl: https://liyuxuan.dev/apps/joodle
    builderInstagramUrl: https://www.instagram.com/joodlejournaling
    builderTiktokUrl: ""
    builderXUrl: ""
    builderPatreonUrl: ""
    builderSpotifyUrl: ""
    builderYoutubeUrl: ""

  - name: Jiak Simi
    builder: Kimberley
    youtubeId: siHna8oZrps
    duration: "15:40"
    builderLinkedinUrl: https://www.linkedin.com/in/kimberley-tan-638bb1106
    builderWebsiteUrl: https://jiaksimi.ai/
    builderInstagramUrl: ""
    builderTiktokUrl: ""
    builderXUrl: ""
    builderPatreonUrl: ""
    builderSpotifyUrl: ""
    builderYoutubeUrl: ""

  - name: AI Usage-Limit Tracker & Reminder Board
    builder: Edmund
    youtubeId: JvWsdToJjnU
    duration: "01:44"
    builderLinkedinUrl: ""
    builderWebsiteUrl: "https://github.com/EdmundLimBoEn"
    builderInstagramUrl: ""
    builderTiktokUrl: ""
    builderXUrl: "https://x.com/edmundlimboen"
    builderPatreonUrl: ""
    builderSpotifyUrl: ""
    builderYoutubeUrl: ""

  - name: Panelist Discussion
    builder: Group Q&A
    youtubeId: feFNQdnhv38
    duration: "13:45"
    builderLinkedinUrl: ""
    builderWebsiteUrl: ""
    builderInstagramUrl: ""
    builderTiktokUrl: ""
    builderXUrl: ""
    builderPatreonUrl: ""
    builderSpotifyUrl: ""
    builderYoutubeUrl: ""
---

## Pico cam

### What it is

Pico cam is a tiny instant camera for iPhone that turns the Dynamic Island into a tiny hidden Polaroid camera. Pulling down the Dynamic Island expands it into a full retro camera interface — complete with shake-to-develop, filters, and a physical-feeling dial, all modeled on classic Polaroid cameras.

### Why this was made

Soon, a product designer, loves cameras and wanted to channel that joy into design — obsessing over every sound and haptic (filter dial, zoom, flash, settings) rather than just shipping a functional camera app.

### Why this matters

- A tiny, constrained UI space (the Dynamic Island) can become a surprisingly rich, joyful interaction if enough craft goes into it.
- Nostalgia-driven design (Polaroid mechanics) can resonate even with users — like kids at the exhibition — who've never touched a physical camera.
- Sound design can come from anywhere: a plastic comb recorded on Voice Memos became the dial sound.
- Pixel-perfect device-specific alignment work (matching every iPhone notch/Dynamic Island size since the iPhone 11) is invisible craft that makes an app feel "real."

### How it works

The camera lives behind the Dynamic Island; dragging it down triggers the expand-to-camera animation, with shake gestures and filter dials mimicking analog Polaroid behavior.

Sound and haptics were custom-designed per interaction. Alignment was tuned per device using the iOS simulator to match each phone's exact notch/pill dimensions and the surrounding screw details.

### Try This

Prototype one small, delightful interaction (a sound, a haptic, a single gesture) before building the full feature — the creator's process was built on constant small tuning passes like the comb-recording experiment.

### Under the hood

- Platform: iOS, built around the Dynamic Island API.
- Custom sound design (e.g., a recorded plastic comb repurposed as a dial sound).
- Per-device pixel alignment using the iOS simulator across all notch/Dynamic-Island sizes since iPhone 11.
- Traction: launch-day revenue covered upfront costs (~150 SGD for Kodak subscription + Apple developer fee); 26,000 users in the first 28 days (~1,000/day).
- Shown at a public exhibition in January, where kids improvised playful/unexpected uses (drawing with a marker, mirrored selfies, an "infinite Picocam" photo).

### Suggestions for your own projects:

- Put disproportionate craft into "invisible" details (sound, haptics, pixel alignment) — users feel it even if they can't name it.
- Test with unexpected users (like kids) to discover creative uses you didn't design for.
- Look at upcoming platform features (iOS 17, Apple Wallet, Live Activities) as a roadmap for new interaction ideas — the creator is prototyping stickers, a Wallet photo strip, and camera-less capture via Lock Screen/Live Activities.



## Dojojojo



### What it is

Dojojojo is a gamified fitness app where workouts feed a pet, a card collection, and auto battles. Described as Tamagotchi meets Duolingo for healthy living. Users grow and evolve a pixel companion by logging steps, nutrition, and workouts, with mini-games like a computer-vision push-up checker that verifies joint positions for correct form.

### Why this was made

The husband-and-wife team wanted to make fitness tracking feel like play rather than a chore, pairing a evolving pixel-companion loop with real health logging. The app is built in Flutter (with original illustration from artists), and the team leaned on AI coding tools and design references to create a delightful fitness app

### Why this matters

- Reference collection (Mobbin, Dribbble, Design Spells) plus a "watch" skill that studies video for micro-animations helps close the gap AI-generated UI usually has around motion/interaction detail.
- Markdown-based guardrails (locking in brand color, text-box style, and Apple's Human Interface Guidelines) let the team stop repeating instructions and keep design consistent across sessions.
- Generating multiple variants (three, specifically) from the same prompt gives room to mix-and-match the best parts rather than accepting a single AI output.
- Code-quality guardrails (cognitive complexity/cyclomatic analysis, pixel-accurate visual diffing) in CI/CD keep AI-assisted code from degrading over time.


### How it works

Design references and screen recordings feed into prompts so Claude can replicate real micro-animations, not just static layouts. A markdown rules file encodes persistent constraints (colors, styling, HIG compliance) that every generation must follow. 

For iOS-specific work, Xcode View MCP handles Xcode tasks directly, and SimSim spins up multiple memory-optimized simulators in parallel to capture every screen/state into a design graph for reference and debugging. 

Pull requests run through automated guardrails — visual diffing and complexity analysis — before merge, with local Mac machines used for integration to avoid costly cloud macOS runners.

### Try This

Before prompting for new UI, collect 2–3 concrete references (including short screen recordings of micro-animations, not just static screenshots) and write your must-keep constraints into a project rules/markdown file — this alone cuts down on repeated corrections.

### Under the hood
 

– Stack: Flutter, Claude for coding, Q for slides/screenshots/preview videos, Xcode View MCP, SimSim (parallel simulators).

– Skills: "groom me" (clarify/plan before merging), "watch" (study video to reproduce micro-animations), "show me" (diagram architecture/code flow for debugging).

– Guardrails: markdown rules file (brand color, text style, HIG reference), pixel-accurate visual comparison, cognitive-complexity/cyclomatic-complexity analysis (AST-based) gating merges.

– Game references: a multiplayer mode blending Vampire Survivors and Fortnite, plus a card game drawing on childhood retro multiplayer games, both tied into the fitness loop.

– Launch: app releasing Q4, promoted via QR code and Instagram.



### Suggestions for your own projects:

- Build a "watch"-style habit of studying reference videos frame-by-frame for micro-interactions before asking AI to generate UI.
- Encode non-negotiable design rules (colors, HIG, spacing) in a persistent file so you're not re-prompting them every session.
- Add automated code-quality gates (complexity analysis, visual diffs) to CI/CD early, even if it costs more, to keep AI-assisted contributions from drifting.



## DesignCode 5 – Taste in the Age of Agentic Coding

### What it is

Meng explains that as coding agents like Codex can build full iOS apps from a single prompt, the differentiator left for humans is "taste" — craftsmanship in prompting, tool choice, and creative direction. 

He also demonstrated building a live survey-style iOS app in SwiftUI via Codex + an iOS-focused plugin, and also discusses DreamCut, a Mac app he built for himself to record and edit his own video content.

### Why this was made

Meng used to teach SwiftUI line-by-line, where students could only prototype small experiences and rarely shipped to the App Store. 

Now that agentic tools can generate working apps from a prompt, he wanted to answer: if the agent can do the technical work, what's actually left for humans to contribute? 

His answer — taste — reframes what's worth teaching and practicing now.

### Why this matters

- The barrier to building an app has dropped to: a Mac, an agent (Codex), and the ability to prompt well — no deep technical background required.
- "Taste" — knowing which prompts, skills, and libraries to reach for, and when — becomes the actual craft once code generation itself is commoditized.
- Building tools for your own workflow (like DreamCut) can be more effective than assembling several off-the-shelf tools, and can scale to a real audience (videos made with it reaching hundreds of thousands to millions of views).
- Counterintuitively, leaning fully into AI tooling pushed the speaker to be more human — going outside, showing his face, talking to people — rather than replacing that need.

### How it works

In Codex, he installs a plugin (a curated collection of skills for building iOS apps), starts a local project, picks a model tier (extra-high for quality, faster for live demos), and prompts in natural language (via Whisper Flow) — e.g., "build an iOS app that surveys the audience and lets them select options, use the iOS simulator, use SwiftUI." 

The agent scaffolds and runs the app in the simulator; AI-generated concepts/mockups can be further annotated, edited, and iterated on before testing.

### Try This

Before reaching for a tutorial or template, try prompting an agent (with an iOS/relevant plugin installed) to build a small, well-scoped version of your idea end-to-end

Next, focus your own effort on refining the prompt and curating the output rather than writing the boilerplate yourself.

### Under the hood

- Stack: Codex (coding agent), an iOS-skills plugin, Xcode/iOS Simulator, SwiftUI, Whisper Flow (voice prompting).
- Dream Cut: a self-built Mac app replacing Screen Studio/CapCut for recording and editing his own demo/social videos.
- Workflow shift: landing pages built for presentations instead of traditional slide decks.
- Model selection: switching between higher-quality and faster model tiers depending on whether it's a live demo or prepared work.



### Suggestions for your own projects:

- Treat prompt-writing and tool/skill selection as the primary craft to develop, not just code syntax.
- Build small internal tools for your own repetitive workflows (content creation, testing, deployment) rather than stitching together generic apps.
- Don't let agentic tooling become a reason to isolate — use the time it frees up to get out, show your work, and gather real feedback.



## Liquid Glass on Apple Platforms to create beautifully created app experiences

### What it is

A talk on why an app can be "great" and still "not feel right" — and how Apple's new design system (of which liquid glass is only one part) is meant to fix that. 

Jia Chen walks through eight design principles that landed this year, then zeroes in on familiarity: concentricity, the content-vs-controls layer split, and when to use each of the three glass materials so an app feels at home on the device.

### Why this was made

Jia Chen kept hearing the same unhelpful critique — "this is great, but it doesn't feel right" — and people couldn't say what that meant. He wanted language for it. After a night of community demos, he shifted from community-building to the new platform work: not liquid glass as a skin, but how hardware and software are supposed to blend into one experience.

### Why this matters

- "Doesn't feel right" is a real failure mode, and Apple's eight principles (purpose, responsibility, flexibility, craft, agency, familiarity, simplicity, delight) give you words for it.
- Liquid glass is the familiar name, but it's a subset. The design system is about blending hardware and software — if you only chase the glass, you miss the foundation.
- Concentricity is why Settings, Clock, and iMessage feel like one family: tab bars nest into corners, radii match the device, interactions lift into the controls layer. Your app should not suddenly "show them off."
- Native controls give you the material, the motion, and accessibility for free. Custom glass is a last resort, not a flex.
- Delight and craft (Pico cam's details, the personality in vibe-coded projects) are named as first-class principles, not extras.

### How it works

Split the screen into two layers. Content is the map, the list, the photos — flat, in the background. Controls are the interactive bits: tab bars, accessory buttons, sheets with detents. Liquid glass belongs on the controls layer so users can see what is interactive and what is not.

The material itself morphs like a liquid, not a static pane, and it is intelligent: on a dark background it goes dark (and the reverse) with no extra work. App icons got the same treatment — glass that holds up in dark mode and the new tinted mode.

If you truly need custom glass, there are three types: **clear** (see-through, lensing — media/video behind play-pause), **regular** (enough contrast to put readable text on; users can now tint it), and **tinted** (a prominent or destructive button, not a decorative popup).

### Try This

Open one screen and label every element as content or control. Put glass only on the controls. If a card, list, or background is frosted just to look expensive, take it off.

### Under the hood

- Eight 2026 HIG principles: purpose, responsibility, flexibility, craft, agency, familiarity, simplicity, delight.
- Concentricity from the WWDC design-system talks: nested corners, matching radii, a living controls layer.
- Three glass materials: clear, regular, tinted.
- Native controls include accessibility with no extra work.
- Homework: watch the design videos at developer.apple.com/videos — Jia Chen's recommendation whether you write code or prompt it.



### Suggestions for your own projects:

- Use native controls first. Custom glass only when a specific interaction actually needs it.
- Treat liquid glass as a material that marks interactivity, not a theme you pour over the whole app.
- Design for familiarity: if it wouldn't sit next to Settings and iMessage without a jolt, it isn't finished.
- Watch the HIG/WWDC design videos before inventing your own glass language.



## LAIOS

### What it is

A custom-built multi-agent orchestration system by Yu Xuan (Mobbin) for coordinating AI coding agents on his own projects, rather than using off-the-shelf tools. He demos it alongside two things built with it: Joodle, an iOS journaling app with doodle drawing, and an experimental web-based "mind palace" / life graph that maps personal taste.

### Why this was made

Existing agent orchestration tools didn't give him what he wanted: the ability to pause and steer agents, see a plan before building starts, choose which parts to hand off vs. stay hands-on for, save cost by matching model tier to task, and — most importantly — a system that learns from its own mistakes over time and improves.

### Why this matters

- Splits "roles" (permanent — skills, permissions, knowledge, one job done well) from "agents" (disposable — spun up per session, shut down after, but feeding lessons back into the persistent role/memory layer).
- Agent performance degrades past roughly half a context window, so breaking tasks into smaller pieces handed off between agents keeps quality consistent.
- A chat-first "butler" layer lets the human manage/delegate without needing to code, while gates control what gets automated vs. reviewed by a person.
- Interactive HTML plan mode (with prototypes you can manipulate before code is written) and a verification/checklist report close the loop between planning, building, and review.
- The self-updating loop — the system proposing fixes to itself and restarting on approval — is a concrete example of self-improving automation most current tools don't offer.
- The "mind palace" shows AI-assisted taste-building: linking disparate personal interests (music, objects, film) into a graph, then having AI surface new recommendations from the pattern of links.

### How it works

Two graphs drive the system: a task graph (how a task splits into parallel or dependent subtasks) and a state graph (the internal states/stages of the dev cycle). Roles are assigned skills, tools, default models, and permissions (e.g., some agents get no network access); agents spawned from those roles work with shared persistent context plus their own scratch pad, drawing on stored memories/lessons and blueprints. Work can be scheduled (e.g., resume at 2am), reviewed via a verifier against a checklist, and merged once satisfactory. Skills like Mobbin MCP (design references) and a testing tool called Argent (end-to-end iOS testing) plug into specific roles. Everything runs locally — no cloud dependency.

### Try This

Before adopting a heavier orchestration framework, try separating your own workflow into a couple of fixed "roles" (e.g., planner, builder, reviewer) with distinct permissions/model tiers, and log lessons/mistakes somewhere persistent that future sessions can read from — that's the core pattern behind the whole system.

### Under the hood

- Core system: LAIOS — role/agent split, task graph + state graph, chat-first "butler" interface, scheduling, plan mode (HTML/interactive prototypes), verification reports, self-proposed updates with restart-to-apply.
- Skills/tools: Mobbin MCP (design references/inspiration), Argent (end-to-end iOS testing with permission controls); built before Claude Code shipped its own workflow feature, which he compares against.
- Joodle: iOS journaling app — daily doodles (up to 3), camera-trace-to-doodle, left-handed support, zoom/rotate/position controls, optional auto-trace, sharing.
- Mind Palace / life graph: public read-only web app; collects anything personally resonant (music, objects, film, photos) via an iOS Shortcut posting to an API; items are linked with abstract user- or AI-generated connections; views include a life graph, a glass-panel board view, and a stream/timeline view; AI suggests new content based on the accumulated taste graph.



### Suggestions for your own projects:

- Separate "permanent knowledge" (roles, skills, lessons learned) from "disposable execution" (agent sessions) so improvements compound instead of resetting each run.
- Put a plan-review step (even a simple one) before code generation for anything design-sensitive — catching direction issues early is cheaper than fixing shipped output.
- If you want AI to help develop your own taste or judgment, feed it a structured, linked record of what you actually respond to, not just a flat list — the connections are where the useful suggestions come from.



## Jiak Simi



### What it is

Jiak Simi is Kimberley's Singapore food app — a personal palate compass. It learns how you actually eat, then answers *jiak simi?* (what to eat?) with places that fit you, not what is trending or paid.

### Why this was made

Kimberley got tired of answering the same daily question with the same few spots. Most food apps show nearby, popular, or advertised. She wanted taste: a map of your palate that gets sharper every meal. Built as a solo founder, with AI on the heavy lifting so time could go into craft and hyperlocal detail.

### Why this matters

- Jiak Simi's design is uniquely local — hawkers, halal, walking time, Singlish.
- Leveraging AI to build helps non-engineer like Kimberley spend more time on craftmanship and refining taste.
- Palate as a compass is a more powerful recommendations engine than typical food apps that rely on reviews



### How it works

You start from places you already love. The app maps you across flavours (heat, sweet, sour, umami, rich, fresh) into a personality. Picks come with a why, a you-versus-place compass, and honest walking or transit time. After you eat, you score it; the model tightens. Filters for occasion, budget, allergens, halal, veg sit on every pick.

### Try This

Name three places you would happily return to tomorrow and write the flavour overlap in six words. That is the compass before you write any code.

### Under the hood

- Native iOS and Android; site at jiaksimi.ai.
- Kimberley Tan, solo founder (ex-LinkedIn / xAI ops).
- Free, no ads; account optional except for saved lists. Singapore-only coverage at launch.



### Suggestions for your own projects:

- Encode a local question (*jiak simi*, not "discover restaurants") as the whole product.
- Show why a pick matches, not only a star rating.
- Spend AI time on the model; spend human time on the last mile of place data.



## AI Usage-Limit Tracker & Reminder Board

### What it is

Two small personal-use apps built by Edmund: (1) an AI usage-limit tracker, originally built for an OpenAI build week in July, that monitors subscription/plan limits and connects to a home Linux server over Tailscale, plus a home-screen widget; and (2) a reminder board — a simple sticky-note-style app synced across phone and Mac, inspired by an app called Mono, with MCP support so AI agents can also post reminders.

### Why this was made

The usage tracker exists because plan/subscription limits reset on a schedule he wanted visibility into on the go (e.g., checking on the train), and to get notified the moment a limit resets so he knows it's time to build again. The reminder board exists for a much more personal reason: he admits to forgetting homework and doomscrolling more than doing it, so he wanted reminders to surface exactly where he's already looking — his phone's home screen.

### Why this matters

- Small, single-purpose personal tools (a widget, a sticky note board) can solve real daily friction without needing to be full products.
- Connecting a personal app to your own infrastructure (home Linux server via Tailscale) is a lightweight way to get remote access without cloud hosting.
- Building for your own admitted bad habits (doomscrolling over homework) is a legitimate and relatable design brief.
- Wiring MCP into a simple reminder app turns a static sticky-note tool into something AI agents can proactively write to — a small but concrete example of agents acting on personal infrastructure.

### How it works

The usage tracker pulls subscription/plan usage data and displays it in an app plus a home-screen widget, syncing with a home Linux server over Tailscale, and pushes a notification when a plan's limit resets. The reminder board is a synced web app (phone + Mac) where the user signs in, adds reminders or quick notes, and sees them surfaced on their phone's home screen; it's connected via MCP so external agents can also add reminders.

### Try This

Pick one small, recurring personal annoyance (a limit you keep forgetting to check, a task you keep forgetting to do) and build the smallest possible widget or board for it — home-screen visibility alone (no fancy UI needed) can be the whole fix.

### Under the hood

- Usage tracker: home-screen widget, home Linux server, Tailscale for remote connectivity, push notifications on plan reset.
- Reminder board: cross-platform (iOS + Mac web app), sign-in/sync, home-screen surfacing, sticky-note-style quick capture, MCP integration for agent-generated reminders.
- Inspiration: reminder-board style app called Mono.
- Lightning demo (1:44). Socials and repo were not listed on the playlist — add them when we have them.



### Suggestions for your own projects:

- Build tools around your own habits and failure points (missed deadlines, forgotten limits) rather than starting from a "product idea" — the best personal software often starts as a complaint about yourself.
- Put the reminder or signal where you already look compulsively (home screen, lock screen) instead of a separate app you have to remember to open.
- If you're experimenting with MCP, a simple write-target like a reminders board is a low-stakes way to let an agent take a real action on your behalf.



## Panelist Discussion

### What it is

A panel Q&A following the individual project presentations, where builders reflected on lessons from vibe coding their apps and fielded audience questions on scoping, cross-platform development, competition from big incumbents, and maintaining code without a technical background.

Opening question: *If people remember one thing from your talk, what should it be?*

- Think from first principles — AI makes it easy to build fast, but speed without clear intent creates unnecessary baggage. Prioritize knowing exactly where you're going before you start.
- Be patient with yourself — especially without a coding background. Take one thing, make it good, then slowly add more. There's no rush.
- Just keep building — the barrier is low and mistakes aren't punished. When you're stuck, AI is what makes you free to keep going.
- Craft things with intention — intentionality is what separates an idea from an actual product.
- Focus on the one feature that matters — it's tempting to prompt for ten features, but pick the one that makes the difference and hold it to a high bar; AI will happily produce subpar work if you let it.
- Distribution is the most important thing — Meng shared building five apps over two years, one hitting $100K MRR before dropping 50% in a month. His answer to "AI could replace you in a month": stop being shy on camera, be more human, and own distribution.

**Q: How do you know when something is "done" instead of second-guessing yourself?** (from Guru, a data scientist)

Ship as soon as possible. Stop overthinking — post it on Twitter/LinkedIn and let real reception tell you if it's ready, rather than deciding "done" in isolation.

**Q: How does building for iOS/Swift differ from web or Android?**

Kimberley (no coding background, ships to both platforms): uses React Native as a single source of truth so updates go out to both Android and iOS at once.

Yu Xuan: leans into the Apple ecosystem to cut his own workload — his doodle app uses iCloud alone, avoiding the need for a database or auth (unless building something social). Web requires more infrastructure thinking (backend, auth, data safety) than iOS, and he prefers SwiftUI's declarative style over TypeScript for web UI work.

**Q: What if a large incumbent just copies your app?**

Meng noted he's living this now, competing against well-funded AI app builders (Lovable, valued at $5–13B, and Codex). His response: lean into distribution, talk to real people, solve locally-felt problems, open-source parts of his work, and offer a lifetime deal — something VC-backed competitors structurally won't do since they depend on subscriptions.

Another panelist pointed to speed as the edge: shipping every other day based on constant beta feedback, versus the many approval/design layers a large company needs before reaching the same user need.

**Q: As a non-technical founder, how do you maintain code and fix bugs after shipping?** (from Agnes)

Pit AI tools against each other — have Claude and Codex review one another's work. Even without being able to read the codebase yourself, this lets you catch gaps and get a second opinion on quality before trusting a change.

Recurring themes across answers:

- Speed is cheap now; judgment about what to build and when it's good enough is the actual bottleneck.
- Distribution, personal presence, and real-world feedback loops are repeatedly framed as the durable moat against both AI commoditization and well-funded competitors.
- Cross-platform and maintenance questions were answered with "reduce your own surface area" (React Native as single source of truth, iCloud instead of custom backend, AI-vs-AI review) rather than mastering every layer personally.

---



## The Recap

Seven builders plus a panel: instant-camera craft, a returning fitness world, taste in the age of agentic coding, Liquid Glass, a self-improving local agent system, a Singapore palate compass, and a pair of personal widgets for limits and reminders. Designing with AI, without the slop 🔥