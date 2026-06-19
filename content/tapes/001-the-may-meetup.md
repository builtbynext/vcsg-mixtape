---
title: "Vibe Coders SG #0, Cosy Demo Nights ✨"
tapeNumber: "001"
side: 0
date: 2026-05-28
location: LorongAI @ 22 Cross
locationUrl: https://lorong.ai/
curator: Stewart
curatorUrl: https://linkedin.com/in/stewartsg
decoder: Carillus
decoderUrl: https://x.com/_carillus
runtime: 1h 38m
builders: 10
inTheRoom: 29
color: b
published: true
tracks:
  - name: Nexus
    builder: ilia
    youtubeId: CMSr3IxtPRk
    duration: "07:08"
    builderLinkedinUrl: https://www.linkedin.com/in/tivin/
    builderWebsiteUrl: ""
    builderInstagramUrl: ""
    builderTiktokUrl: ""
    builderXUrl: ""

  - name: Dojojojo
    builder: Reynard + May Yee
    youtubeId: lr0MXPg4V6Y
    duration: "08:12"
    builderLinkedinUrls:
      - name: Reynard
        url: https://linkedin.com/in/reynard-lee-a700a39b
      - name: May Yee
        url: https://linkedin.com/in/may-yee-lai
    builderWebsiteUrl:  https://dojojojo.com/
    builderInstagramUrl: https://www.instagram.com/official.dojojojo/
    builderTiktokUrl: https://www.tiktok.com/@official.dojojojo
    builderXUrl: ""

  - name: Senior Says
    builder: Kay T + Pradnya
    youtubeId: jJE-kTBoLOo
    duration: "09:52"
    builderLinkedinUrls:
      - name: Kay T
        url: https://www.linkedin.com/in/kaytttt/
      - name: Pradnya
        url: https://www.linkedin.com/in/pradnya-nir-uxer-coder/
    builderWebsiteUrl: https://www.community-hackathon.gov.sg/2025/seniorsays/
    builderInstagramUrl: ""
    builderTiktokUrl: ""
    builderXUrl: ""

  - name: Joodle
    builder: Yuxuan
    youtubeId: H5-qtYMQzZY
    duration: "10:58"
    builderLinkedinUrl: https://www.linkedin.com/in/li-yuxuan/ 
    builderWebsiteUrl: https://liyuxuan.dev/apps/joodle 
    builderInstagramUrl: https://www.instagram.com/joodlejournaling
    builderTiktokUrl: ""
    builderXUrl: ""

  - name: Things Take Time
    builder: Chester
    youtubeId: pvLO1iWS4vo
    duration: "12:26"
    builderLinkedinUrl: https://www.linkedin.com/in/chesterhow/
    builderWebsiteUrl: https://apps.apple.com/us/app/things-take-time-logbook/id6758779782
    builderInstagramUrl: ""
    builderTiktokUrl: ""
    builderXUrl: https://x.com/itsnotchester?s=20

  - name: Parking by EigenMoto
    builder: Kai Wei
    youtubeId: xeSug3RhySk
    duration: "11:43"
    builderLinkedinUrl: https://www.linkedin.com/in/kohkaiwei/
    builderWebsiteUrl: https://parking.eigenmoto.com/
    builderInstagramUrl: https://www.instagram.com/eigenmoto
    builderTiktokUrl: https://www.tiktok.com/@eigenmoto
    builderXUrl: ""

  - name: Can Check
    builder: Saiful
    youtubeId: S4NtH3hRFGo
    duration: "08:18"
    builderLinkedinUrl: https://www.linkedin.com/in/saifulanuarsg/
    builderWebsiteUrl: https://cancheck.co/
    builderInstagramUrl: ""
    builderTiktokUrl: ""
    builderXUrl: ""

  - name: Aid for the blind
    builder: Freddy
    youtubeId: E86PG3mDFK4
    duration: "09:41"
    builderLinkedinUrl: https://www.linkedin.com/in/bboxfred/
    builderWebsiteUrl: ""
    builderInstagramUrl: ""
    builderTiktokUrl: ""
    builderXUrl: ""

  - name: Grunt work to Impactful work
    builder: Cheryl
    youtubeId: Ix5D7msnuzk
    duration: "08:16"
    builderLinkedinUrl: https://www.linkedin.com/in/cherylwonguxd/
    builderWebsiteUrl: ""
    builderInstagramUrl: ""
    builderTiktokUrl: ""
    builderXUrl: ""

  - name: Handmade
    builder: Reza + Wondo
    youtubeId: 1Rr8E74d3k8
    duration: "11:41"
    builderLinkedinUrls:
      - name: Reza Ilmi
        url: https://www.linkedin.com/in/rezailmi/
      - name: Wondo Jeong
        url: https://www.linkedin.com/in/wondojeong/
    builderLinkedinUrl: 
    builderWebsiteUrl: https://usehandmade.com
    builderInstagramUrl: ""
    builderTiktokUrl: ""
    builderXUrl: https://x.com/rezailmi
---

## Nexus

### What it is

Ilia describes a personal infrastructure management system powered by about 13 to 14 open-source agents that automate and manage various self-hosted services and operations.

### Why this was made

Ilia, a Chief Information Security Officer (CISO) and self-hosting enthusiast, built this system to replace manual server management, configuration files, and complex setups. Managing multiple self-hosted replacements for common services like Google Photos and Canva became cumbersome and error-prone.
The system was created to automate infrastructure tasks, proactively identify and fix issues, and handle operations without constant manual intervention. It reflects the presenter's long experience in cybersecurity and system architecture, aiming to streamline infrastructure management for someone with technical knowledge.

### Why this matters

Managing self-hosted infrastructure manually is complex and error-prone, especially for many services.
Automating operations reduces human error and frees time from repetitive tasks.
Using open-source agents makes the system customizable and transparent.
Vibecoding enabled the presenter to build and coordinate multiple agents that communicate and collaborate, making infrastructure management more accessible and efficient for technically skilled users.

### How it works

Ilia interacts with a key agent called Nexus via Discord, giving it instructions about new apps or infrastructure changes. Nexus then asks clarifying questions, plans the work, and delegates tasks to other agents. These agents handle everything from building and running services to auditing and repairing issues.
All operations are logged and securely stored, including secrets like passwords and API keys. The system can handle quick prototypes or critical infrastructure tasks, with human oversight to approve important decisions and maintain control.

### Try This

If you want to experiment, try setting up a simple chatbot that can take instructions and perform basic tasks, like opening issues or managing files, to understand how automation can help with managing projects.

### Under the hood

- The system uses a fleet of open-source agents that communicate primarily through Discord channels. It integrates with a self-hosted Git repository to store plans, logs, and artifacts securely. The agents share capabilities such as browsing and reading data, and Nexus acts as the central coordinator.
- The presenter emphasizes the importance of system architecture knowledge before building such automation. Guardrails and approval mechanisms are crucial to prevent autonomous agents from causing damage. The system also automatically generates presentation decks as part of its responsibilities.

### Suggestions for your own projects:
- Start with a clear system architecture plan before automating complex workflows.
- Use communication channels (like Discord) to coordinate multiple agents or bots.
- Implement approval steps to maintain human control over critical operations.

## Dojojojo

### What it is

Dojojojo is a gamified fitness app where your workouts actually mean something. Track your steps, nutrition, and exercise to grow and evolve your pet and card collection — then take your pets equipped with cards into auto battles. Vision AI tracks your moves in real time and blends in with levelling mechanics, staying consistent has never been this fun.

### Why this was made

The project was created by a husband-and-wife team, Reynard and May Yee. It was inspired by the presenters' childhood love for games like Tamagotchi and Mega Man.

They wanted to solve the problem of maintaining fitness motivation by combining nurturing game mechanics with physical activity. The project aims to make fitness more engaging through gamification features like streaks and tactical action elements.

### Why this matters

This project highlights how "vibecoding" allows individuals to build complex, integrated health and gaming systems that previously required large development teams.

  * **Accessibility**: It demonstrates how a small team can integrate advanced features like pose tracking and micro-animations without deep specialized knowledge.
  * **Customization**: The presenter shows how developers can now create their own custom AI tools and extensions to optimize their specific personal workflows.
  * **Context Management**: It explores new ways to manage large amounts of project information, making it easier for solo creators to keep track of complex codebases.

### How it works

Users grow their virtual pets by tracking their steps, nutrition and workout. They integrated motion-tracking models that follows a user's form during workouts. They integrated an AI coach to guide and help users better plan for their personalised health journey.

### Try This

A beginner can try using a tool like NotebookLM to store their project notes and ideas, then use a standard AI chat tool to "talk" to those notes to brainstorm new steps for their project.

### Under the hood

Reynard and May Yee utilizes a complex stack of AI agents and custom scripts to manage development. He uses Pico (transcribed as "P code" or "PI code") to connect various tools and create custom extensions, specifically to access a model he identifies as GPT-5.5 (transcribed as "GP 5.5s"). For coding, he employs a loop combining Claude (transcribed as "plot") and Aider (transcribed as "OS") to automatically resolve pull request issues.

  * **Custom Context Sync**: The presenter uses a tool called ENTR to run a script that automatically syncs markdown files from a local folder to Google Drive, which then feeds into NotebookLM.
  * **Codebase Layering**: To manage context efficiently, he uses Graphify to layer his codebase lookups and Tree-sitter to parse code structures.
  * **Quality Control**: He uses custom "skills" created for Codex to review his implementations after every coding session.

### Suggestions for your own projects:

  * Use a tool like ENTR to automatically sync your local project notes to a cloud-based research tool like NotebookLM (transcribed as "notebook LPN") for an always up-to-date AI knowledge base.
  * Create a custom automated loop using Codex to review your code implementations and catch errors immediately after every session.
  * Structure your codebase lookups using tools like Graphify (transcribed as "graphify") and Tree-sitter (transcribed as "three C") to help AI agents navigate large projects without wasting expensive context.




## Senior Says

### What it is

This project is a voice-enabled digital form system designed to help volunteers and staff who provide senior care. It allows users to create forms, record conversations during house visits, transcribe audio into notes, and generate summaries to improve record-keeping and efficiency.

### Why this was made

The creators identified that volunteer work in senior care is often manual and inefficient, relying heavily on memory and paper records. This made tracking and updating information difficult and time-consuming. They wanted to simplify this process by automating data capture during house visits to reduce the burden on volunteers.

The project originated from the team's own experience working with seniors, many of whom are volunteers themselves, and recognizing the challenges they faced in managing information. They aimed to create a tool that could be easily accessed and used by volunteers to improve their workflow.

### Why this matters

- Manual record-keeping reduces efficiency and impacts the quality of care for seniors.  
- Automating audio capture and transcription speeds up data entry and reduces errors.  
- Making the tool accessible as a website rather than an app increases ease of use for volunteers.  
- Vibecoding enabled rapid prototyping and iteration based on user feedback, allowing the team to quickly improve the product.

### How it works

Volunteers create digital forms that can be shared with others. During house visits, they press record and have natural conversations with seniors. The system captures the audio, transcribes it into text notes, and generates a summary highlighting key points. This replaces manual note-taking and paper forms with automated, searchable digital records.

### Try This

Try recording a simple conversation on your phone and then use a free transcription service online to see how audio can be converted into text notes automatically.

### Under the hood

The team initially built an app but switched to a website for better accessibility. They used OpenAI's Whisper model for audio transcription, which supports multiple languages including Chinese, with ongoing work to improve Tamil and Malay recognition. They combined different large language models (LLMs) and APIs to structure the data and generate smart summaries.

They also explored scanning and converting handwritten paper forms into digital text to handle existing records. The use of Cursor (a low-code platform) helped speed up development and iteration.

### Suggestions for your own projects:
- Use voice transcription models like Whisper to automate note-taking in fieldwork.  
- Prioritize accessibility by choosing web platforms over apps when targeting diverse users.  
- Combine multiple AI models to enhance data processing and summarization capabilities.

## Joodle

### What it is

Joodle is a mobile app that helps users quickly journal their day by drawing a simple doodle and adding a short note, creating a visual diary of daily moments.

### Why this was made

Yuxuan created Joodle because they wanted a fun and motivating way to journal daily without writing long paragraphs. After busy days, it was easy to forget what happened, so having a quick visual reminder was important. The app encourages users to capture one meaningful or fun moment each day through drawing.

The goal is to build a collection of 365 personal doodles over a year, making it easy to recall daily experiences visually. This approach suits people who prefer creative expression over traditional journaling.

### Why this matters

* Visual journaling offers a simple, engaging alternative to text-heavy diaries, lowering the barrier to daily reflection.
* The app integrates with Apple's ecosystem (widgets, live activities), making the journaling experience seamless and accessible.
* Sharing features allow users to easily post their doodles on social media, encouraging community and motivation.
* Vibecoding enabled rapid prototyping and integrating interactive features like animations and widgets without heavy coding.

### How it works

Users draw a quick doodle each day and add a small note describing the moment. The app stores these drawings in a grid view, letting users scroll through their year visually. Tapping a doodle plays an animation of the drawing process, enhancing the memory recall. Widgets show recent or random doodles on the home screen for quick access.

The app also includes templates for sharing doodles with or without notes, and users can customize colors and designs. A camera tracing feature helps users start a drawing by tracing a photo if they don't know what to draw.

### Try This

Try drawing a simple doodle about your day and add a short note - it's a great way to record ideas!

### Under the hood

Yuxuan built the app for the Apple ecosystem, using widgets and live activities to display doodles outside the app. The app animates drawings by replaying the strokes, adding a dynamic element to the journal entries.

An interactive tutorial guides users through the app's features. It uses a system where each UI element has an ID, and tutorial steps have start and end conditions defined in a JSON-like structure. This allows the tutorial to respond to user actions, such as tapping buttons or dismissing screens, making onboarding smoother.

Challenges included optimizing performance to keep the UI smooth with many images and navigating Apple's app store policies.

### Suggestions for your own projects:

* Use unique IDs for UI elements to build interactive tutorials that respond to user actions.
* Animate user-generated content by replaying drawing strokes to enhance engagement.
* Integrate platform-specific features like widgets to increase app visibility and user interaction.


## Things Take Time

### What it is

Things Take Time is a habit tracking app designed for individuals who want to record and visualize their daily habits with rich context, making it easier to understand their routines over time.

### Why this was made

Chester, a software engineer, developed Things Take Time because he personally used a manual method of habit tracking by editing messages to himself daily. He found existing habit tracker apps lacking because they show habits in isolation without context, making it hard to understand why habits were missed or how they relate to each other.

He wanted a tool that combined the simplicity of his message-editing method with a more visual, contextual approach. Analog methods like bullet journaling inspired him, but he needed a digital solution that was less tedious and more visually clear.

### Why this matters

- Habit trackers often show isolated data points, missing the bigger picture of daily context.
- TakeTime offers a grid layout where each row is a day and each column is a habit, allowing users to see multiple habits and their context at a glance.
- This contextual richness helps users better understand their habits and motivates continued use.
- The project demonstrates how vibecoding can enable individuals to build personalized apps tailored to their unique needs without relying on generic solutions.

### How it works

Things Take Time organizes habits in a grid where each row represents a day and each column represents a habit. Users can quickly check off habits daily using a simple interface. This layout allows users to scan horizontally across a day to see all habits completed or missed, providing immediate context rather than isolated data points.

### Try This

Try tracking one habit daily by writing a simple note or message to yourself each morning or evening about whether you completed it and how you felt. This manual step breaks the problem into manageable daily updates and helps build awareness of your habits.

### Under the hood

Chester built Things Take Time as a mobile app available on the App Store. The app features a bottom sheet interface for quick habit check-offs and uses a grid-style layout inspired by analog habit trackers and message editing.

He used Figma extensively for design iterations and emphasized that building a quality app takes time and continuous effort over many months. The project roadmap includes new tracker types and translations, showing ongoing development based on user feedback.

### Suggestions for your own projects:  
- Build tools that solve your own problems first to maintain motivation.  
- Use simple, familiar metaphors (like grids or messages) to design interfaces that users can easily understand.  
- Embrace long-term development and incremental improvements rather than rushing to finish.


## Parking by EigenMoto

### What it is

A motorcycle parking app designed for riders in Singapore that helps users find nearby motorcycle parking spots easily on a map, with up-to-date information crowdsourced from the community.

### Why this was made

Kai Wei, a motorcycle rider himself, experienced frustration with existing parking apps in Singapore that poorly support motorcycles. Despite many apps for car parking, none provide clear, accessible, or current information for motorcycle parking, treating motorcyclists as second-class users.

Kai Wei wanted a simple, user-friendly solution that shows motorcycle parking locations and updates dynamically. Since official sources like LTA and URA do not provide reliable or current motorcycle parking data, he manually collected and filtered data, sometimes using AI to assist, to build a functional app.

### Why this matters

- Motorcyclists in Singapore lack good digital tools for parking, causing inconvenience and wasted time.  
- Existing data sources are outdated or incomplete, making it hard to rely on official channels.  
- AI tools enabled rapid development of the app's infrastructure, allowing Kai to focus on solving the core problem of data accuracy and user experience.  
- Crowdsourcing data from motorcyclists helps keep the app's information current, addressing a gap that traditional data providers do not fill.

### How it works

The app displays a map where users can locate motorcycle parking spots near their destination. Users can click on a spot to get directions via Google Maps or Waze. The app relies on crowdsourced data submissions from motorcyclists, which Kai manually verifies and filters to maintain accuracy.

AI helped automate the initial building of the app and data harvesting processes, but human judgment is still essential for validating user-submitted information and handling edge cases like unofficial parking spots.

### Try This

If you ride a motorcycle, try noting down or sharing information about parking spots you use and see how crowdsourcing can help improve community tools. Alternatively, think about how you might gather and verify data for a problem you face.

### Under the hood

Kai Wei used Claude Code and a UI library called Get Shit Done Redux (transcribed as "Get Shit Done") to build the app quickly. AI was employed to write parts of the web app and set up data collection workflows. The app is designed to be low-cost and scalable, aiming to serve most of Singapore's motorcyclists.

Key challenges include verifying crowdsourced data and categorizing parking spots into public, private, special-use (like Grab delivery rider spots), and unofficial parking areas. Kai is exploring ways to handle these categories responsibly, especially unofficial spots that might carry liability risks.

### Suggestions for other projects:  

- Use AI to scaffold initial app development to accelerate progress.  
- Combine AI automation with manual verification for data quality.  
- Consider user experience carefully, including supporting multiple navigation apps to accommodate different user preferences.

## Can Check

### What it is

cancheck is a web-based social assistance matching tool designed to help people find relevant social support resources easily. It is aimed at social workers, clients in need of assistance, and anyone struggling to navigate social aid options.

### Why this was made

Saiful, a design strategist, was inspired by conversations with his partner, a new social worker, who highlighted the difficulty clients face in finding appropriate social assistance. Despite his experience in other fields, he found resourcing challenging in social work. Motivated to solve this problem, the presenter created cancheck as a passion project to simplify access to social aid.

The project also served as a personal challenge for the presenter to apply his problem-solving skills practically, beyond teaching design strategy and innovation. He documented the entire process to share insights and demonstrate his capability to execute a project end-to-end.

### Why this matters

* Finding social assistance resources is a common and stressful problem for both social workers and clients.
* cancheck makes resource matching accessible by simplifying the search and tailoring results to user behavior.
* The tool's user-centric design, including clear language and easy-to-share information, lowers barriers for users unfamiliar with complex systems.
* Vibecoding and no-code tools enabled the presenter to build and iterate the project quickly without deep programming knowledge.

### How it works

cancheck asks users three simple questions about their situation and location. Based on the answers, it provides a list of relevant social assistance schemes and nearby service centers. The interface is designed to be easy to understand and share, with expandable sections and clear language, so users can quickly find and save the information they need.

### Try This

Try breaking down a complex problem into simple questions that guide users to solutions. For example, create a basic form that asks about a user's needs and location, then show tailored resources or advice based on their answers.

### Under the hood

Saiful built cancheck using no-code tools, primarily Claude Max and Notion for content management, and deployed it on Vercel for hosting and tracking. He did not write or review any code himself, relying entirely on no-code platforms.

Notable decisions include:
* Using simple, primary school-level language for all assistance schemes to ensure accessibility.
* Designing the interface so all information fits in a single screenshot for easy sharing.
* Documenting every step and change publicly to maintain transparency and support learning.

### Suggestions for your own projects:

* Use no-code tools to prototype and launch solutions quickly without programming skills.
* Focus on user behavior and accessibility to improve adoption and usefulness.
* Document your process thoroughly to share knowledge and attract collaborators.


## Aid for the blind

### What it is

Ray is a wearable device combining hardware and software designed to assist visually impaired people by providing AI-powered audio and visual aids. It uses a camera, bone conduction audio, and a microphone to help users navigate and identify objects and people around them.

### Why this was made

Freddy noticed that around 280 million people worldwide lack access to dedicated devices to assist with visual impairment. Motivated by this gap, they created Ray during a hackathon in under 12 hours to provide a practical aid combining hardware and AI software. The project aims to support visually impaired users in everyday situations, such as identifying products in a supermarket or recognizing people, while also offering safety features like emergency calls and location assistance.

### Why this matters

- Many visually impaired individuals do not have affordable or accessible assistive technology.
- Ray offers a wearable, AI-powered solution that can improve daily independence.
- Vibecoding enabled rapid prototyping of both hardware and software integration within a short time frame.
- The project focuses on future potential, aiming for improvements as technology like Google Glasses and better latency solutions become available.

### How it works

Ray uses a small camera to capture the user's surroundings, then processes the images with AI to identify objects or people. The device communicates information through bone conduction audio so the user can hear it without blocking ambient sounds. A microphone allows voice commands and interaction. The system also includes a family dashboard where interactions and locations are logged for safety monitoring.

### Try This

Try imagining how a wearable device could help you by describing objects around you out loud. This helps understand how AI can assist people by translating visual information into audio.

### Under the hood

Freddy built Ray using a combination of hardware components: a camera, bone conduction audio device, and microphone. The software includes AI models for object and face recognition, with plans to improve face recognition to help users identify friends. He also considered using a Raspberry Pi with camera modules but noted aesthetic and latency challenges. They also plan to collaborate with Interbio Technologies and support AI voice customization, including a Singlish accent for better user understanding.

### Suggestions for your own projects:

- Integrate family or caregiver dashboards to monitor user interactions for safety.
- Use bone conduction audio to keep users aware of their environment while receiving information.
- Focus on incremental improvements that may be imperfect now but can evolve with advancing technology.

## Grunt work to Impactful work

### What it is

Cheryl's project is an AI-powered workflow assistant that automates the review of business application licenses for the Singapore government. It acts like a virtual intern, handling repetitive tasks to save time for the license reviewer.

### Why this was made

Cheryl's workload doubled from reviewing three to seven licenses per week, increasing her time spent from ten hours to much more. Unable to get human help like an intern, she decided to build an AI-based solution herself. The goal was to reduce the manual effort involved in reviewing licenses and preparing reports for stakeholders.

This project arose from Cheryl's personal need to manage increased workload efficiently. It streamlines the front-end work of license review so she can focus on higher-impact tasks.

### Why this matters

- The license review process was time-consuming, taking about a week for some tasks; the AI assistant cut this by 80%.  
- Automating repetitive data entry and form annotation frees up valuable time for more critical analysis.  
- Using AI sub-agents makes the workflow scalable and adaptable without needing extensive coding skills.  
- The project demonstrates how vibecoding tools can empower non-technical users to build practical AI helpers for government work.

### How it works

Cheryl built three AI sub-agents and an operator that communicate to handle different parts of the license review. One agent processes Excel files of license data, automatically filling in form fields and calculating time savings. Another generates annotated PDF forms highlighting sections to keep, review, or remove. The system then compiles these outputs into slides for stakeholder presentations.

This workflow automates the manual steps Cheryl used to do herself, acting like a digital intern that handles routine tasks quickly and accurately.

### Try This

Try breaking down a repetitive task you do regularly into smaller steps. Then imagine how you could assign each step to a simple helper (an AI sub-agent) that follows clear instructions. Start small by automating just one part of the process, like filling out a form or summarizing data.

### Under the hood

Cheryl used a tool called Claude to build the AI sub-agents and define "skills," which are instructions guiding each sub-agent's actions. She learned how to create these skills by asking Claude itself for help, showing an interactive, self-teaching approach.

The agents handle tasks like counting license volumes, filling form fields row by row, calculating time saved, and generating annotated PDFs. The workflow is private and hosted internally, tailored specifically for Cheryl's license review role in the Singapore government.

### Suggestions for your own projects:

- Use modular sub-agents to divide complex workflows into manageable parts.  
- Leverage tools that provide interactive guidance to learn building AI helpers without deep coding knowledge.  
- Keep the solution private and customized when the use case is highly specific to your role or organization.


## Handmade

### What it is

This project is a design tool that runs directly on top of React applications, allowing designers to visually manipulate and edit app interfaces without deep coding knowledge.

### Why this was made

Reza, a designer bridging design and engineering, noticed that traditional design tools like Figma were mainly used for collaboration and whiteboarding rather than building assets engineers could directly use. Engineers began designing in their own ways, showcasing directly to users, which changed the design process.

To address this, Reza and Wondo created an open-source NPM package that adds direct manipulation tools to React projects. They aimed to make it easier for designers—who may not be comfortable installing packages—to use these tools by building a Mac app and cloud integration.

The goal was to improve the solution design phase by enabling designers to work visually on real app code, reducing the gap between design and engineering workflows.

### Why this matters

- It helps designers who are not familiar with coding to directly edit and manipulate React app interfaces visually.
- The tool supports onboarding projects automatically by detecting frameworks and dependencies, simplifying setup.
- It addresses the last 20% of design work that differentiates good apps from average ones, focusing on fine-tuning and pixel-perfect adjustments.
- By integrating with GitHub and cloud services, it fits into existing developer workflows without requiring designers to learn complex coding tools.

### How it works

The tool connects to a React project either from GitHub or a local folder. It detects the project's framework and dependencies, installs what's needed, and runs the app automatically.

Designers can switch the app into a "canvas mode" where they see rulers and can measure distances, adjust sizes, move elements, and edit styles visually. Changes are linked back to the exact lines of code that need editing.

The tool also allows hiding or showing UI elements and sends contextual information about code locations to help designers understand what they are modifying.

### Try This

If you have a React project, try downloading the app from usehandmade.com, open your project folder in it, and switch to canvas mode to experiment with moving and resizing elements visually.

### Under the hood

The project started as an open-source NPM package that provides direct manipulation tools for React. To make it accessible to designers, the team built a Mac app that integrates with cloud agents and browsers, enabling seamless connection and project management.

The app automatically detects project types (e.g., Next.js) and package managers to install dependencies and run the app with minimal user setup.

It includes features inspired by Figma, like rulers and measurement tools, and supports editing CSS properties such as width, height, and border radius directly on the canvas.

The team also experimented with timeline-based interfaces for complex animations and started exploring 3D direct manipulation for games.

### Suggestions for your projects:
- Build tools that integrate directly with your existing app code to enable visual editing without switching contexts.
- Automate project setup by detecting frameworks and dependencies to reduce onboarding friction.
- Incorporate familiar design features (rulers, measurement) into code-based tools to help designers feel comfortable.

---

## The Recap

Ten builders, ten very different ideas across iOS, OpenClaw, Parking Tech, Accessibility Tech, DesignOps Tooling and more. The most cosy demo night yet ✨
