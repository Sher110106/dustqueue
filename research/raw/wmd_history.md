# WeMakeDevs hackathon history: raw notes
Gathered Fri 2026-10-09 evening IST. Angle: past WeMakeDevs winners and what judges reward.

## Source index (opened)
- https://www.wemakedevs.org/hackathons (list of all events; stats counters do not render in fetch)
- https://www.wemakedevs.org/llms.txt
- https://www.wemakedevs.org/aws/first-commit
- https://www.wemakedevs.org/aws/first-commit/projects (WINNERS of Event 01)
- https://www.wemakedevs.org/aws/first-commit/judges
- https://archive.wemakedevs.org/hackathons/futurestack25 and /projects
- https://archive.wemakedevs.org/hackathons/tambo and /projects
- https://archive.wemakedevs.org/hackathons/lingohack25 and /projects
- https://archive.wemakedevs.org/hackathons/accomplish

## WeMakeDevs as a business (llms.txt)
- Says it is "a go-to-market engine for developer tools". Partners get "GitHub stars, signups".
- "$220,000+ in prize money awarded", "200,000+ developers", "80,000+ organic GitHub stars", "400+ pull requests merged into partner repos".
- Partners named: Accomplish, Archestra, Cerebras, Cline, CodeRabbit, III, Kestra, Lingo, Meta, Portia, Tambo, Together AI.
- Meaning: in sponsor hackathons the sponsor wants adoption. Deep sponsor use is what they pay for. The AWS tour is the same shape: AWS Builder Center signups, student verification, blogs on Builder Center.

## Hackathon list page (wemakedevs.org/hackathons), prize lines in page order (newest first)
Links in order: /aws, /aws/first-commit, /hackathons/falkordb, luma rotehack, /hackathons/trueforge, ai-engineer-mixer, roast-my-pr, scrape-verse, luma zero-downtime, zerops, archive: signoz, cognee, coral, openmetadata, vision, february, accomplish, 2fast2mcp, tambo, motiahack25, assemblehack25, lingohack25, futurestack25, agenthack25, luma cc52l7pn, hackfrost24, wemakedevs-stream devpost, cloudnativehack21 devpost.
Prize lines in order: "Prizes worth Rs 1 Crore and fast-track job interviews at AWS"; "Rs 20 Lakh in prizes and Fast Track to Amazon Job Interviews" (this is the First Commit card, not Env Hacks); "$10,000 across three tracks"; "$5,000 in prizes, including a MacBook Pro"; "$10,000 in prizes, including an NVIDIA DGX Spark"; "Full day of building, breaking and rethinking AI"; "Can you write code that is clean, readable and scalable?"; "$15,000 in prizes, including an NVIDIA DGX Spark"; "NVIDIA DGX Spark Supercomputer + Keychron Keyboards"; "MacBook Neo + $5,000 in Zerops credits"; "MacBook Air, iPad Air & Job Interviews"; "$10,000+ in prizes + Job Interviews"; "$10,000+ in prizes"; "$7,000+ in prizes & Job interviews"; "$4,000+ ..."; "Samsung Galaxy Flip 7 + $40,000 in prizes"; "$3,000+ ..."; "$10,000+ ..."; "$6,000+ ..."; "$3,000+ in prizes & GSoC mentorship"; "$20,000+ in cash prizes"; "Rs 50,000+ in prizes + Lingo credits"; "$15,000+ across Cerebras, Meta & Docker"; "MacBook Pro, iPhone 16 & iPad Air"; ...
(Mapping of prize line to event is by order only; verify per page.)


## FIRST COMMIT (AWS Bharat Builds Tour Event 01), Sept 17-20 2026. Most relevant precedent.
Sources: https://www.wemakedevs.org/aws/first-commit , /projects , /projects/all , /projects/blogs , /judges
- Theme open: "build something that solves a real problem". Tracks were prizes, not entry choices: Ship It (1st, Rs 2,00,000 + $3,000 credits), Build It (2nd, Rs 1,50,000 + $2,000), Best UI (3rd, Rs 1,00,000 + $1,000). 4 runners-up $1,000 credits. Top 5 blogs got Logitech keyboards.
- Same 5 judging criteria as Env Hacks (Idea and Impact, Built on AWS, Design and Usability, Execution, Demo video). First Commit text: "Ship It runs on AWS services, which is where the grand prize is decided." "Cloud usage counts only in Ship It, where architecture and cost decisions are part of the work."
- /projects/all says "1180 projects". FreshTrace README claims "13,660+ registered builders" (team claim, not official page).
- So 7 prize winners out of 1180 = about 0.6%. Plus top 5 blogs.
- Judges: 28 people listed. Mostly DevRel, senior engineers, founders from New Relic, Adobe, Qualcomm, Appwrite, Apple, Unity; 2 from Amazon (SDE, Solutions Architect). Ayan Masood (judge) was a Lingo hackathon participant in 2025. Judges are WeMakeDevs community DevRel people, not only AWS staff.

### Winners (from /aws/first-commit/projects; repos checked with gh api)
1. Ship It 1st: "Suraksha - An Agentic Companion for an aging parent". Team StarBugs (3: @thatoneuke, @harshendra, @shash1278). Live https://suraksha.d2dqtm6sqego9a.amplifyapp.com/ Code https://github.com/harshendram/firstcommit-hack (created 2026-09-20; TS, Python, Kotlin).
   - Galaxy Wear OS watch + tablet voice in Hindi/Hinglish for "Amma (72, Bengaluru)". Family escalation chain.
   - AWS: Amplify Hosting, Cognito, API Gateway, Lambda (containers via ECR), CDK, Bedrock (Nova 2 Lite), "Strands-style tools", Transcribe, Polly, DynamoDB single table, Cedar ConsentGuard, Secrets Manager, KMS, EventBridge (1 min), Step Functions (waitForTaskToken), CloudWatch, CloudTrail, IAM.
   - Design rules quoted: "No silent LLM fallbacks"; "The model decides language and judgement; code decides actions."; "Most days, Suraksha says nothing at all. That's the point."
   - Hardware in demo (watch). Persona-led story.
2. Build It 2nd: "Beacon Night Shift: the on-call agent that fixes the 3 AM page with your voice". Solo (@prashantthakur77). Code https://github.com/Prashant-thakur77/Beacon (Python, TS). Live Lambda function URL. Demo https://youtu.be/a3SxZHvIkCo . Blog on builder.aws.com.
   - "Built solo in a weekend for the AWS First Commit hackathon."
   - Bedrock Nova 2 Lite, Strands agent with seven tools, Step Functions, CloudWatch, CloudTrail, EventBridge, DynamoDB, S3+CloudFront, Transcribe. Runs locally with moto ("make setup && make local"), "only Bedrock is scripted". CI badge, release, tests.
   - Repo later reused for AssemblyAI hackathon on another branch; main kept "exactly as it was judged" (tag first-commit-submission).
   - Note: a dev-tool (on-call SRE) won the Build It prize. Not every winner is social impact.
3. Best UI 3rd: "CampusEvac". Team 3 BUILDS (3). Live https://main.d3skpx6qxc85hh.amplifyapp.com/ Code https://github.com/AfreenInnovates/campus . Demo https://youtu.be/FhgTfCz0ou8
   - Two-player real-time fire evacuation drill in browser 3D (React Three Fiber, Rapier). Evacuee + warden roles.
   - AWS: AppSync Events (realtime), DynamoDB, Polly narration, SES v2, CDK, Amplify Hosting.
   - Safety/disaster theme, game-like UI. Best UI went to a 3D sim, not a dashboard.
Runners-up ($1,000 credits each):
4. "Magpie - AI-native finance workspace". VOXTON (4). https://github.com/akkki007/magpie (repo created 2026-08-30 but commits only 2026-09-19/20 in API). README has "Honest status" table. Bun, Postgres. Live https://magpie.akkki.tech/
5. "FreshTrace". Powerpuff Girls (4). https://github.com/RakshitChaturvedi/FreshTrace . Live S3 site. Video https://www.youtube.com/watch?v=2fs2fxV5wJw
   - ESP32-S3 e-nose (SGP41 + BME280) hardware -> AWS IoT Core (mTLS) -> food spoilage shelf-life estimate (Arrhenius kinetics). "100% AWS-native". FOOD WASTE = environment-adjacent.
   - README badge claims "Won 2nd Prize"; official page says runner-up. README video chapters run past 3:00 (3:10 chapter).
6. "Expressive captions". Need sleep (3). https://github.com/sept1st2c/Daks-caption_VoiceAgent-video-editing . Demo https://youtu.be/D836OKdoY2g
   - Hinglish captions styled by emphasis; voice agent edits. Sarvam for Hinglish text + AWS Transcribe hi-IN for word timings. Terraform. README: "BACKEND SERVICES ARE DOWN DUE TO COST ISSUE".
7. "Factcade - AI Operations Copilot for your Factories". Solo (@alikhan207). https://github.com/Alikhan207/Factcade
   - Small factories. Machine fails -> cascade -> loss per hour in rupees -> AI plan -> owner approves.
   - Amplify, API Gateway, Lambda, Bedrock Nova Pro via Strands Agents SDK, DynamoDB, EventBridge.
   - Quote: "The AI never computes money. The cascade is deterministic". Fallback rule-based plan "and the UI says so". README tip: warm Lambda before recording, show CloudWatch logs as "second screen for the 'where AWS fits' part".

### Top 5 blogs (Logitech keyboards), /projects/blogs
Slate (timetable, https://github.com/kavyan256/slate), KavachPay (financial control plane for AI agents), Career Agent, VaporTrace (distributed tracing for AWS event pipelines), Clusterbreak (simulate local AI clusters then deploy on AWS). All blogs on builder.aws.com.

### Environment-flavoured First Commit entries (not winners) seen on /projects/all first page
SolarLens (independent solar quote checker, Build It), Tshaai (sustainable infrastructure planning), FloodRoute (risk-aware navigation in urban floods, Bedrock + NASA satellite data, blog on builder.aws.com), ReshQMesh (emergency dispatch on real city maps), ARES (emergency response). So flood routing and solar checks were already tried at Event 01.

## Other WeMakeDevs hackathons: winners (from each /projects page)

### FutureStack GenAI Hackathon (Cerebras, Meta Llama, Docker), 29 Sept - 5 Oct 2025. "Our biggest hackathon yet." $15,000.
Sources: https://archive.wemakedevs.org/hackathons/futurestack25 , /projects
- Cerebras testimonial (Sarah Chieng, Head of DevX): "over 5,500 participants and 7,000+ API signups in just one hackathon".
- Judging: Potential Impact; Creativity & Originality ("how creatively sponsor technologies are applied"); Technical Implementation ("quality of integration with required sponsor technologies (Cerebras, Meta, Docker)"); Learning & Growth; Aesthetics & UX; Presentation & Communication ("clarity of the README, the quality of the demo video").
- Pro tip on page: "solves a real problem and provides a great user experience. The best projects often excel in multiple criteria!"
- Winners were per sponsor:
  - Best Use of Cerebras: VoiceGraph (Honey Paptan, solo). Speak automation, watch it execute. Cerebras Llama 4, Groq Whisper, Docker MCP Gateway. https://github.com/HoneyPaptan/voicegraph
  - Best Use of Llama: Sure AI (Adithya Vardhan Reddy). Multi-agent customer support/email/recruiting with embeddable widget. https://github.com/AdithyaVardhanReddyM/Sure-AI
  - Best Use of Docker: SRE Sentinel (Aryan Kumar). Monitors Docker containers, AI root cause, auto-fix via MCP. https://github.com/aryan877/sre-sentinel
- Top projects included social-impact items: CropGPT, Sahayak ASHA worker companion, Raktchain, disaster-mgmt, SwasthyaAI, speech-assist-device. None of these won.
- Participant post on archive page: a team built "an AI tool that helps you understand and reduce your carbon footprint" (not a winner).

### The UI Strikes Back (Tambo generative UI), Feb 2-7 2026. $6,000 ($3k/$2k/$1k) + interviews at Tambo.
Sources: https://archive.wemakedevs.org/hackathons/tambo , /projects
- Tambo CEO: "over 7,000 GitHub stars in just one week".
- Judging: Potential Impact; Creativity & Originality; Learning & Growth; Technical Implementation ("quality of integration with Tambo SDK"); Aesthetics & UX; "Best Use Case of Tambo".
- 1st DealDesk-Tambo (Team CipherX): AI-native contract workspace, risk radar, clause tuner. https://github.com/wafflebytes/DealDesk-Tambo
- 2nd Fireflow (Akinkunmi): natural-language n8n alternative. https://github.com/akinloluwami/fireflow
- 3rd Brilliant (Team MergeConflict): conversational calendar on Google Calendar. https://github.com/BeeBombshell/brilliant
- Top projects: InfraPilot (k8s dashboard), DeathStarOps (k8s), MediHealth CRM, Parental Handbook, ReliefOps (not winner). Count of registered Tambo components is a common brag ("46 custom Tambo components").

### The Multilingual Hackathon (Lingo.dev), 13-16 Nov 2025. Rs 1,00,000 (50k/30k/20k).
Sources: https://archive.wemakedevs.org/hackathons/lingohack25 , /projects
- Lingo: "difficult for us to pick winners".
- Judging: Impact; Creativity ("how Lingo is used in creative ways"); Learning & Growth; Technical ("quality of integration with Lingo CLI"); Aesthetics & UX. Page: "The more Lingo products you use, the more points you get."
- 1st Podcastify (Honey Paptan, solo): blog URL -> multilingual podcast audio. https://github.com/HoneyPaptan/podcastify
- 2nd SignLingua (Ariya P): hand gestures -> spoken, translated sentences (MediaPipe). Accessibility. Writeup admits "i have referred chatgpt". https://github.com/Ariya-rithvik/lingua/
- 3rd GlobSEO (Rahul Joshi): metadata translated to 60+ languages with Lingo CLI + Gemini SEO scoring. https://github.com/crypticsaiyan/GlobSEO
- Top (not winner): ReadyIndia AI (disaster alerts from USGS, GDACS, INCOIS, IMD in 11 languages). https://github.com/Shogun05/ReadyIndiaAI

### Automate Me If You Can (Accomplish.ai), Feb 16-22 2026. $3,000 = 30 x $100 + interviews.
Source: https://archive.wemakedevs.org/hackathons/accomplish
- Two tracks: 10 "highlight" winners for automations, top 20 merged PRs. Accomplish CEO: "5,000+ GitHub stars in a week".
- Judging: Real-World Impact; Creativity; Learning & Growth; Technical Execution; Demo & Presentation ("A 3-minute video that clearly demonstrates the problem, the solution, and the magic moment"); Best Use of Accomplish ("the more you use, the more impressed we'll be").
- Page advice: "Show the Before & After ... The more dramatic the transformation, the more likely you are to win."

### 2 Fast 2 MCP (Archestra). Source: https://archive.wemakedevs.org/hackathons/2fast2mcp/projects
- 1st TrendOps (Anish): governance-first MCP agent swarm on YouTube trends. https://github.com/anish-maheshwari/TrendOps-
- 2nd Preffer (Veer Adyani): AI portfolio pages with AI representative. https://github.com/veeradyani222/my-portfolio
- 3rd AgriBot (Althaf Asharaf): farmer crop guidance via MCP agents on Archestra, RBAC, dual-LLM injection defence, eSankhyiki price data. https://github.com/Althaf66/Agri-bot

### Motia hackathon (motiahack25). Source: https://archive.wemakedevs.org/hackathons/motiahack25/projects
- 1st Orchestrix (Aymaan Pathan): plain-English to API workflows. 2nd SocialOps (Abhinav Mahajan): creator brand deals. 3rd OpsGuard (Shubham Kumar): AI SRE that waits for human approval.

### AssembleHack25 (multi-sponsor: CodeRabbit, Vercel, Oumi, Kestra, Cline). Source: https://archive.wemakedevs.org/hackathons/assemblehack25/projects
- CodeRabbit: InFoundry (Rahul Joshi), cloud architect + SRE agent with human approvals. Vercel: InfuseAI (team of 4), RAG platform. Oumi: Vriksha AI, no-code model training. Kestra: Tria (Shivam Katare), Gmail triage with Kestra. Cline: Cadara (Joyston Monteiro), free 3D CAD learning for underprivileged children.
- Non-winner entries: AI-Disaster-Response-Orchestrator.

### AgentHack 2025 (Portia). Source: https://archive.wemakedevs.org/hackathons/agenthack25/projects
- MacBook Pro: DCRCA Agent (Team Dark Mode): "detecting, prioritizing, and coordinating disaster responses for authorities". https://github.com/anuj123upadhyay/dcrca_agent
- iPhone 16: Anti Money Laundering Agent (Atibhi Agrawal). iPad Air: YouTube Companion Agent.

### HackFrost 2024 (Kestra). Source: https://archive.wemakedevs.org/hackathons/hackfrost24/projects
- Category prizes: Best use of Kestra (ML data pipeline), Best UI/UX (VaChart: vacant train seats after chart prep, Indian Railways), Best AI/ML (retraining on drift), Best solo, "Best sustainability" ("AI-powered disaster relief social media data platform"; repo likely https://github.com/Yash636261/AidConnect, mapping by link order, unverified), Best OSS practices, Best documentation.
- Non-winner entries: plastic recycling rewards app; carbon footprint tracker.

### Vision Possible (Stream Vision Agents). Source: https://archive.wemakedevs.org/hackathons/vision/projects
- 1st ETMS (Rakshak): edge, privacy-first safety system: falls, wandering, health anomalies, "deterministic emergency orchestration", voice confirmation. https://github.com/Pavankumar07s/Vision-Possible
- 2nd OceanWatch (Karthika M): "real-time environmental intelligence agent" watching marine environments; "detects environmental pressure". https://github.com/m-karthika14/Oceanwatch-ai  <-- ENVIRONMENT WINNER
- 3rd Watcher (Marvellous): posture via YOLO angles.

### Back to the Metadata (OpenMetadata). Source: https://archive.wemakedevs.org/hackathons/openmetadata/projects
- "137 submissions". Open source track: "47 PRs · 27 contributors". Winners named only (Himanshu: MacBook Neo; Prasanth Cherukuri: iPad; DUNE: Keychron).

### Pirates of the Coral-bean (Coral). Source: https://archive.wemakedevs.org/hackathons/coral/projects
- Track 1: Miny Labs "Manthan" (team of 5 listed), MacBook Neo each. Track 2: Yash Dedhia, GSoC and open-source matchmaker, iPad.

### The Hangover Part AI (Cognee memory). Source: https://archive.wemakedevs.org/hackathons/cognee/projects
- Track 1 (OSS): Lethe (Vinayak Sonthalia, solo): on-call triage that can provably forget decommissioned systems. Writeup: "I benchmarked Cognee's four advertised capabilities against plain RAG ... three tied with the baseline; only forget clearly won, so I built the product around the one honest, provable win." Blind judge, measured receipts, "Certificate of Erasure". "Built solo in one week". https://github.com/vinayaksonthalia/lethe
- Track 2 (Cloud): Classroom Memory (Rajdeep Singh): per-student memory, teacher heat map. "a working product prototype, not only a demo ... a verification script that proves the live Cognee Cloud lifecycle." https://github.com/RajdeepKushwaha5/ClassroomMemory
- Best blog: RealtyRecall (Mahimai Raja J).

### Agents of SigNoz (observability). Source: https://archive.wemakedevs.org/hackathons/signoz/projects
- Stats on page: "Grand Winners 3", "Projects 350+", "Blogs 500+".
- Judge text: "Each of them pointed SigNoz at something real, agents, releases, even a hydroponic farm".
- Track 1: OTel instrumentation for CrewAI (Srinjoy Roy). Alert rule "proven to actually fire". Found a real SigNoz bug.
- Track 2: DebugProof (Dhruv Sachdev): release gate that blocks builds that would be hard to debug.
- Track 3 Build Your Own: RootCause (Shashwat Pratap Singh): "Observability pointed at a hydroponic farm instead of software." Dosing cycle = trace; pH/EC as span attributes; predictive alert "when the reservoir has under 3 hours left"; "fault-injection buttons make every surface light up live during the demo". https://github.com/Shrinet82/rootcause-hydro  <-- AGRI/WATER-ADJACENT WINNER
- Pre-event blog winner (Pooja Bhavani): self-hosted SigNoz on AWS EC2; praised as "honest, reproducible, start-to-finish account" that "does not skip the part where things broke".

### Zerops hackathon, Aug 8-9 2026, solo only. Source: https://www.wemakedevs.org/hackathons/zerops/projects ("271 projects")
- Best overall: Deplot AI (Manan): paste a repo -> architecture -> zerops.yaml -> deploy -> self-heal. MacBook Neo.
- Top social post: FlowForge AI (Raj Tiwari): SRE incident responder.
- Credits pool: ZeroArch, ScaleScope, Ephemera (per-PR preview envs; writeup: "I killed the worker mid provision over and over ... it always converged"; "An environment is only marked ready once an HTTP request to its public URL actually succeeds"), others.

### TrueForge (TrueFoundry + Qodo), Aug 24-30 2026, online + SF. $10,000 incl NVIDIA DGX Spark. Source: https://www.wemakedevs.org/hackathons/trueforge/projects ("286 projects" online)
- Best Use of TrueForge: ONCALL (Elijah Umana): on-call agent with checkpointed rollback.
- Best Code Quality: CapyGuard (Nelson Lai): sandboxed guard; "rebuilt structurally, when their own review trail caught it".
- Best UI: QUEST (Julius Olsson). Best Use of Bright Data: AgentRadar. Best blog: Mayday (Anamika Singh): incident responder that "waits for a human before anything changes state".

### Into the Scrape-Verse (Bright Data, Port, SigNoz), Aug 17-23 2026, online + SF. $15,000. Source: https://www.wemakedevs.org/hackathons/scrape-verse/projects
- Grand prize: Research Factory (Ben O'Connor, in person SF): turns cs.AI papers into code that ran; failed runs retry; "only code that actually ran reaches review".
- Best UI: ScrapeSentry (Himanshu Kumar). Best Clean Code: PriceGuardAI ("serves the last verified price rather than a wrong one"). Best Use of Bright Data: Trainable. Best Use of Port: The Scraper Factory ("agents run the floor and deterministic code holds the gates"). Best Use of SigNoz: InflationForge (everyday prices vs a year ago, map).
- Top 50 got swag; "coolpath-live" (verified public-service data) in top 50.

### AI Engineer Mixer (Bengaluru, Sarvam + Anakin), 2-hour build. Source: https://www.wemakedevs.org/hackathons/ai-engineer-mixer
- Winner: Third Hand, hands-free voice agent for technicians repairing industrial machines; 3D model; Sarvam in 22 Indian languages; Anakin live web for real part prices "with the source on screen".

### Pattern in judge write-ups (2026 events, written by WeMakeDevs)
Repeated praise words: real, proven, measured, honest, verified, deterministic gates, human approval, fallback that says so, "only code that actually ran". Repeated idea: on-call / incident / SRE agent (Motia OpsGuard, FutureStack SRE Sentinel, Zerops FlowForge, TrueForge ONCALL + Mayday, Cognee Lethe, First Commit Beacon). This idea is crowded but keeps winning in dev-tool events.

## KEY ORGANISER POSTS (opened)

### Kunal Kushwaha, "First Commit Hackathon Recap and What's Next", Oct 7 2026
https://www.wemakedevs.org/blogs/first-commit-hackathon-recap-and-whats-next
- "13,667 participants signed up, 4,270 teams formed, and by Sunday night 1,180 projects had been submitted." "1,400+ builders" at Polaris Bengaluru on Sept 19.
- "Many came with a live link you could open and use, not only a repository".
- "AWS mentors ran a hands-on workshop on building AI agents with the Strands Agents SDK, and you could see it in the submissions. Agents were everywhere, including at the top of the board."
- "people built for campus life, disaster response, climate and waste, health, agriculture and accessibility."
- On Suraksha: "It is the only one of the three winners built for somebody who is not the user."
- Beacon "Built solo over the weekend under the team name CoffeAndCode".
- Demo videos: Suraksha https://youtu.be/XVr34XeXvlE ; Beacon https://youtu.be/a3SxZHvIkCo ; CampusEvac https://youtu.be/FhgTfCz0ou8
- On blogs: "A write-up that explains what you chose, what broke and what you would do differently is the thing that holds up in an interview".
- "Ten students from the strongest projects at First Commit got the opportunity for fast-track interviews".
- About Env Hacks: "There is a Rs 20 lakh prize pool" (so the Rs 20 lakh figure IS in a Kunal blog, though not on the event page).
- Advice: "go through a few of them first. It is the quickest way to see what a finished four-day project looks like."

### Aayush Sharma (COO), "Announcing Environmental Hacks", Sept 29 2026
https://www.wemakedevs.org/blogs/announcing-environmental-hacks
- "Environment hackathons produce a lot of dashboards ... plots it on a map, colours the concerning parts red, and ships it." "a map mostly tells people something they can already sense. The projects that stand out go one step past that and answer what somebody should do differently because of it."
- Examples of decision-makers: school administrator (assembly indoors tomorrow?), housing society (which week to book tanker), ward office (which street the truck visits first), farmer (when to irrigate).
- "Our first judging criterion ... asks what changes for the people living with it. The second half is where most projects lose points".
- "You do not need a new data source to do this well. You need to know who you are building for."
- "a project that came out of something you actually noticed will almost always beat one picked off a list."
- Starter ideas published (so many teams will copy them): school AQI morning message for principal; outdoor worker (delivery rider) cleanest two hours; tanker predictor for one housing society; monsoon commute helper from resident reports; bin photo segregation checker with human confirm and monthly building score; rooftop solar payback by pincode irradiance.
- Data list: CPCB NAQI, OpenAQ, NASA FIRMS, IMD, India WRIS, data.gov.in, Registry of Open Data on AWS (Sentinel-2, Landsat, NOAA GOES, NASA POWER in S3). "starting from data that already lives there saves you a day."
- "Say plainly in your demo where your numbers come from and how fresh they are. That honesty reads as competence, not as a weakness."
- Blog: "the part most teams skip".
- "Write down one sentence describing the person you are building for, not the technology you plan to use."

### Aayush Sharma, "What is Happening in Delhi on 10 October", Oct 6 2026
https://www.wemakedevs.org/blogs/what-is-happening-in-delhi-on-10-october
- "Online submissions stay open until Sunday 11 October, 8:00 PM IST" <-- DEADLINE HOUR (blog, not schedule page).
- About 1,000 builders expected in the room. 11:00-12:30 Strands Agents workshop. 7:00-8:00 PM showcase.
- "The Amazon media team interviewing the strongest projects".
- Panel (Kunal, Saiyam Pathak, Piyush Garg) "is where you find out how they actually size one up".
- Strands "treats the model as a swappable provider, so the same code runs against something local or against Amazon Bedrock".
- "If you walk in with something that already runs, even badly, Saturday becomes the most valuable day".

### Kunal Kushwaha, "One Hackathon, $7K in Prizes ..." (Back to the Metadata), Apr 20 2026
https://www.wemakedevs.org/blogs/back-to-metadata
- Section "Your Roadmap To Winning": "These four moves line up with how judges think about submissions."
  1. "Start from a real problem: Something ... that you can name in one sentence. Vague 'nice to have' ideas rarely survive scoring."
  2. "Push past the first idea: Creativity and innovation are weighted heavily, so the obvious path is rarely the winning path."
  3. "Put OpenMetadata at the center: Deep integration with APIs, ingestion, lineage, or governance beats a thin wrapper that barely touches the platform."
  4. "Tell the story: A clear README plus a demo that shows the problem before the fix often decides placement when scores are close."
- Back to the Metadata: April 17-26 2026, $7,000, $100 per merged PR. 137 submissions (projects page).

### Sachin Sharma (CMO), "The Hangover Part AI" recap, Aug 22 2026
https://www.wemakedevs.org/blogs/hangover-wrap-up-blog
- June 29 - July 5 2026. "8,500+ registrations", "1200+ project submissions", "30+ countries", "$10,000 in prizes".
- "the two projects that won treated it as something closer to a living system: one that has to be curated, corrected, and occasionally emptied out." i.e. winners picked a sharp, non-obvious angle on the sponsor tech.
- Lethe demo https://youtu.be/3840gxTZWxY ; Classroom Memory demo https://www.youtube.com/watch?v=2AUA_g0S3Ks

### Kunal Kushwaha, "Hack All February" recap, Mar 12 2026
https://www.wemakedevs.org/blogs/hack-all-february
- "20,000+ participants across four hackathons", "1500+ project submissions", "20+ countries", "$40,000+ in prizes". (Tambo UI Strikes Back, Accomplish, 2 Fast 2 MCP/Archestra, and one more in Feb 2026.)
- Accomplish: "We wanted to see automation that solves real problems".

### WeMakeDevs social posts on First Commit (opened via fetch)
- Instagram, Sept 20 2026 (submission day tips), https://www.instagram.com/p/DdgKLXSAsar/ :
  "Write detailed answers. Explain the idea, the problem it solves and what the project actually does. If you are in a team, mention who did what."
  "Record a demo, 3 minutes max. A screen recording or a phone video is fine. Record it before you start the form since uploads take time, and put it on YouTube as unlisted or public."
  "If you have a live demo, make sure we can open it without signing up."
  "Be clear about AWS. Which services you used, how you used them, and what feedback you have."
- LinkedIn WeMakeDevs, Suraksha post (Sept 27 2026): team names Naomi Pereira, Harshendra M, Shashwath Prabhu. Lists AWS services one by one. Says Env Hacks "compete for Rs 20 lakh in prizes". https://www.linkedin.com/posts/wemakedevs_the-ship-it-track-winner-at-first-commit-activity-7509899197777686529-8klV
- LinkedIn WeMakeDevs, Beacon post (Oct 2 2026) calls Beacon "The Ship It track winner" (official page says Build It second prize). Lists Bedrock Nova 2 Lite, CloudTrail, Transcribe, Polly, Step Functions, Lambda, DynamoDB, SNS. https://www.linkedin.com/posts/wemakedevs_the-ship-it-track-winner-at-first-commit-activity-7511754714871554048-ropJ
- LinkedIn WeMakeDevs CampusEvac post (Oct 6 2026). https://www.linkedin.com/posts/wemakedevs_campusevac-turned-fire-evacuation-training-activity-7513063056516694016-hsf_
- Search snippet only (not opened): WeMakeDevs LinkedIn "16,000+ participants took part in the Bharat Builds Tour First Commit Hackathon" (blog says 13,667 signed up). Instagram snippet: "kicked off yesterday with 14,000 people online".
- Pattern: every WeMakeDevs winner post names each AWS service and its job. That is how they present winners; judges read "where AWS fits" the same way.

### Demo video lengths (curl of YouTube page, lengthSeconds)
- Suraksha https://youtu.be/XVr34XeXvlE : 182 s (3:02)
- Beacon https://youtu.be/a3SxZHvIkCo : 203 s (3:23) (README also links a separate "3-minute cut" file)
- CampusEvac https://youtu.be/FhgTfCz0ou8 : 170 s
- FreshTrace https://www.youtube.com/watch?v=2fs2fxV5wJw : 179 s
- Expressive captions https://youtu.be/D836OKdoY2g : 179 s
- Lethe (Cognee) : 171 s ; Classroom Memory (Cognee) : 479 s
- So winners sit at about 3 minutes. Two First Commit winners went slightly over 3:00 on YouTube. Env Hacks rule says under 3 min; do not copy the overrun.

### Other judge-advice sources
- Ajeet Raina (Docker Captain; ran FutureStack workshop), "Top 5 Tips to Win the FutureStack GenAI Hackathon", Sept 30 2025. https://www.ajeetraina.com/top-5-tips-to-win-the-futurestack-genai-hackathon/
  Third-party, not official. Points: sponsor tech mandatory, "meaningful integration, not superficial implementation"; "A single massive commit at the end looks suspicious"; README with setup, architecture, credits; "Show real functionality, not just slides"; live URL beats localhost; "Projects that are technically impressive but poorly presented often lose to slightly less technical projects with excellent communication"; "An excellent execution of a focused idea beats a half-finished ambitious project every time."
- Kunal interview "He Won 40+ Hackathons and Moved to the US" (Satyam), YouTube https://www.youtube.com/watch?v=nWgv_m_ooIE (2124 s). Transcript not retrievable (captions API returned empty). A "Satyam Singh, Co-Founder & CTO, Simulithic" was a First Commit judge; same person NOT verified.
- Kunal LinkedIn (Sept 2026): interview with team HackOGs, winners of Amazon HackOn. Post text only; no judging detail.

## Env Hacks competitor scan (GitHub, repos created since 2026-10-07 whose name/description mention the event). Run Oct 9 evening.
Command: gh search repos with queries "environmental hacks", "Environmental-Hacks", "bharat builds", "wemakedevs", etc. 46 unique repos. Most teams do not label repos, so real count is far higher.
Clusters seen (repo: one-line):
- School AQI alerts: LangerSword/saans ("School Air Action Notification System"; LangerSword won a First Commit top-5 blog with Clusterbreak), bhavya-jpg/khidki ("open the classroom window at the right minute"), Manasa-L-Hegde/breathesafe_aqi_advisory- (AQI forecast + school alerts, Lambda/API GW/S3/EventBridge/SNS), drishti1201/airsafe, AkibRaza3723/AirTrace.
- Rider/commuter exposure routing: syedasadiafatima182/ShuddhPath (two-wheeler exposure routing).
- Stubble smoke: HitanshGithub/dhuan (stubble-smoke forecast for North India).
- AQ data trust: thegoodengineers/ground-truth (which Delhi monitors can you trust).
- Housing-society water/tank/leak: navneet-cerecode/tanksaathi, Utkarsh2730/Environmental_Hackathon (AquaLedger), Jai-This-Side/JalOS, madhavkant29/LeakLedger, aadesh2036/AquaAgent.
- Floods: HimanshuJha-2005/Enki (crowdsourced waterlogging map), Raghavpatil10/FloodVision (depth from photos), officialshrutakirti94/ClimateOps, suryaprasanthcse/CASCADE-GLOF-Telemetry (glacial lake floods).
- Heat: RishvinReddy/heatcredit (heat resilience budget engine), ansh-logics/Environmental-Hacks-Heatshift, RehaanDev/second-tap (Heat and Water).
- Drought/groundwater/satellite: shloknarvekar/talaab (pond dry-by countdown from Sentinel-2 on AWS), tauqxxr7/JalSanket (groundwater telemetry triage).
- Waste: dcain2336/sortsmart (segregation advisor, AWS SAM), Faizan-313/wastewise, grvd5678/swachh-ai (RAG over SWM 2016, E-Waste 2022 rules; Gemini + ECS Fargate), suryaprakashsingh1705-sys/reloop-e-waste, Kanishka105 municipal waste complaints.
- Energy: sagnikvolt/SunSense, my-codespace/dg-solar-advisor (DG-to-solar for housing societies), CSNEHA20/grid-nudge.
Observation: these map almost one-to-one onto the six starter ideas in Aayush Sharma's Sept 29 blog (school AQI message, rider clean hours, tanker predictor, monsoon route, bin segregation checker, solar payback by pincode). Those six are now crowded.

## Repeat winners and judge overlap (from project pages)
- Honey Paptan: FutureStack Best Use of Cerebras (VoiceGraph), Lingo 1st (Podcastify), AgentHack top project (Startup Autopilot).
- Aymaan Pathan: Motia 1st (Orchestrix); top projects at Tambo (InfraPilot) and Lingo (DevBuddy).
- Rahul Joshi (github crypticsaiyan): Lingo 3rd (GlobSEO); AssembleHack CodeRabbit award (InFoundry).
- Team Dark Mode / Anuj Upadhyay: AgentHack 1st (DCRCA); Tambo top project (Terminus).
- Ayan Masood: Lingo top project News Sphere (repo Ayan-M-Dev/news-sphere) in Nov 2025; First Commit judge (linkedin.com/in/ayan-m-dev) in Sept 2026. Likely same person (matching handle).
- Meaning: WeMakeDevs regulars win often; some later become judges. Judges are builders who read READMEs and code.

## Kunal Kushwaha direct statements on judging (opened)
- X post, Sept 20 2026 08:21, https://x.com/kunalstwt/status/2101587446479618269 (10.5K views):
  "We have 16,000 people taking part ... 1,400+ people checked in to Bangalore".
  "Write detailed answers. Short one-liners make it hard for us to see what you built. Your project description should cover what the idea behind it was, what problem you or someone else faced that made you build it, and what the project actually does."
  "Record a demo video, 3 minutes max. A simple screen recording or a video from your phone is completely fine. Record it first, before you start filling the form, because uploading can take a while."
  "If you have a live demo ... We should not need to sign up or create an account to try it."
  "Be clear about AWS. Tell us which AWS services you used, how you used them in the project, and what feedback you have on them. This matters a lot for judging."
  "If you are in a team, mention what each person worked on so we can see how you split the work."
- LinkedIn video post, Oct 6 2026 (transcript on page), https://www.linkedin.com/posts/kunal-kushwaha_this-week-you-could-be-one-of-the-10-students-activity-7513223461494833152-K6QU :
  "last week 10 students got fast tracked interviews at Amazon"; "we gave away 20,00,000 in prizes" (for First Commit, as he says it); Env theme: "build something that helps the environment. Earth, water, air, energy, anything. It's up to your imagination."; "around 1000 students coming" to DTU.
- YouTube recap "First Commit: The First Hackathon of the Bharat Builds Tour" https://www.youtube.com/watch?v=kAPDUfaeh4M : description "16,000+ registrations online and 1,400+ builders at the offline Build Day".
- Env judges page https://www.wemakedevs.org/aws/env/judges returns 404 (not published as of Oct 9 evening).

## Past hackathon facts table (dates, sponsor, prize, scale). Counters on archive pages do not render; numbers below come from text/testimonials.
| Event | Dates | Sponsor(s) | Prize | Scale (source) |
| HackFrost | Nov 29 - Dec 1 2024 | Kestra | $10,000+ gadgets per member; had Best Solo, Sustainability Award | "over 2,000 participants" (Kestra CEO on page) |
| AgentHack 2025 | Aug 20-25 2025 | Portia | MacBook Pro / iPhone 16 / iPad Air, $6,000+ | n/a |
| FutureStack GenAI | Sept 29 - Oct 5 2025 | Cerebras, Meta, Docker (+OpenRouter credits) | $15,000 | "over 5,500 participants and 7,000+ API signups" (Cerebras) |
| Multilingual (Lingo) | Nov 13-16 2025 | Lingo.dev | Rs 1,00,000 | n/a |
| AI Agents Assemble | Dec 8-14 2025 | Cline, Kestra, Vercel, Oumi, CodeRabbit, Together AI | $20,000+ (per-sponsor awards) | n/a |
| Backend Reloaded (Motia) | Dec 15-21 2025 | Motia | $3,000 + GSoC mentorship | n/a |
| UI Strikes Back | Feb 2-7 2026 | Tambo | $6,000 | 7,000+ GitHub stars for Tambo |
| 2 Fast 2 MCP | Feb 8-15 2026 | Archestra | $10,000+ ($4k grand, $2k best duo, $1.5k best solo) | 3,000+ stars |
| Automate Me If You Can | Feb 16-22 2026 | Accomplish | $3,000 (30 x $100) | 5,000+ stars |
| Vision Possible | Feb 23 - Mar 1 2026 | Stream Vision Agents | $4,000+ | n/a |
| Hack All February total | Feb 2026 | 4 events | $40,000+ | 20,000+ participants, 1500+ submissions (Kunal blog) |
| Back to the Metadata | Apr 17-26 2026 | OpenMetadata/Collate | $7,000 + $100/merged PR | 137 submissions; 47 PRs, 27 contributors |
| Hangover Part AI | Jun 29 - Jul 5 2026 | Cognee | $10,000 | 8,500+ registrations, 1200+ submissions |
| Agents of SigNoz | 2026 (date not captured) | SigNoz | MacBook Air / iPad Air / iPhone Air | 350+ projects, 500+ blogs |
| Zerops Challenge | Aug 8-9 2026, solo only | Zerops | MacBook Neo + $5,000 credits | 271 projects |
| Into the Scrape-Verse | Aug 17-23 2026 | Bright Data, Port, SigNoz | $15,000 incl DGX Spark | top 50 listed |
| Agent Harness (TrueForge) | Aug 24-30 2026 | TrueFoundry, Qodo, Bright Data | $10,000 incl DGX Spark | 286 online projects |
| First Commit (AWS 01) | Sept 17-20 2026 | AWS | Rs 4.5L cash + $10k credits (+ runners-up, blogs) | 13,667 signups, 4,270 teams, 1,180 projects (Kunal blog) |
| Graph Hacks (FalkorDB) | Oct 15-18 2026 (upcoming) | FalkorDB | $20,000 | YouTube snippet only |

## Criteria shift worth noting
- Every sponsor hackathon 2024-2026 used: Potential Impact, Creativity & Originality, Learning & Growth, Technical Implementation, Aesthetics & UX, and often "Best use of <sponsor>" and "Presentation & Communication (README + demo video)".
- The AWS tour drops "Creativity & Originality" and "Learning & Growth". It keeps Impact, adds "Built on AWS" (gate), Design and Usability, Execution ("works"), Demo video. So for Env Hacks, a working, usable, clearly shown tool matters more than novelty.

## Tallies over 7 First Commit prize winners
- Agentic/LLM at core: Suraksha, Beacon, Magpie, Expressive captions, Factcade = 5/7. Not LLM-centred: CampusEvac (3D sim), FreshTrace (sensor + physics model) = 2/7.
- Solo: Beacon, Factcade = 2/7. Teams of 3-4: 5/7.
- Hardware shown: Suraksha (Galaxy Watch), FreshTrace (ESP32 e-nose) = 2/7.
- Dev tool: Beacon only (1/7). Others serve non-developers (elder care, fire drills, finance teams, food cold chain, Hinglish creators, small factories).
- Indian context in story: Suraksha (Amma, Bengaluru, Hindi), Expressive captions (Hinglish), Factcade (rupees, small factories) = 3/7.
- Deployed on AWS with live URL: all 7 list a Live link (Amplify, Lambda URL, S3 website, custom domain).
- READMEs with explicit limits section: Suraksha ("Limitations"), Beacon ("Known gaps"), Factcade ("Honest limits"), Magpie ("Honest status"). Team role table: Suraksha.

## Environment / climate / social-impact winners in WeMakeDevs history
- OceanWatch (Vision Possible 2nd, Feb-Mar 2026): marine monitoring; YOLO + audio FFT boat detection + turbidity; "deterministic formula" risk score. Simple stack, small README (1.4 KB). https://github.com/m-karthika14/Oceanwatch-ai
- RootCause (SigNoz Track 3 winner, 2026): hydroponic farm as a production service; simulated digital twin with explicit "What's real vs. simulated" section; "For judges" section with read-only login; section "How it maps to the judging criteria". https://github.com/Shrinet82/rootcause-hydro
- DisasterFlow / AidConnect (HackFrost 2024 Best Sustainability): social media disaster-need mapping. https://github.com/Yash636261/AidConnect (mapping of prize to repo by link order: likely)
- FreshTrace (First Commit runner-up 2026): food spoilage sensing.
- DCRCA (AgentHack 2025 1st): disaster response coordination with human validation. https://github.com/anuj123upadhyay/dcrca_agent
- AgriBot (2 Fast 2 MCP 3rd, Feb 2026): farmer guidance with govt price data.
- Cadara (AssembleHack Cline award): free CAD learning for underprivileged children.
- Non-winners on environment: carbon footprint tool (FutureStack), plastic recycling rewards and carbon tracker (HackFrost), ReadyIndia AI disaster alerts (Lingo top project), FloodRoute, SolarLens, Tshaai (First Commit).

## AWS usage among First Commit winners (README grep)
- All 7 winners deployed on AWS and filed a live link: Amplify Hosting (Suraksha, CampusEvac, Factcade), Lambda function URL (Beacon, Expressive captions), S3 website + IoT Core (FreshTrace), ECS Fargate + ALB + RDS Postgres (Magpie, per README DEPLOY.md note).
- AWS open-source tools inside winners: Strands Agents SDK (Beacon, Factcade; Suraksha says "Strands-style tools"), Cedar (Suraksha ConsentGuard). Beacon also runs fully local with moto.
- Bedrock (Nova 2 Lite / Nova Pro) used by Suraksha, Beacon, Factcade even though Bedrock is not on the event's listed "Ship It" service list.
- No winner was a local-only "Build It" project with no AWS deployment. Even the Build It prize (Beacon) was deployed.
- Many services per winner: Suraksha lists about 17 AWS services; Beacon about 10; CampusEvac 6; Factcade 6. Each service has a stated job in the README.

## Things I could not verify
- Exact submission counts for FutureStack, Lingo, Tambo, Motia, Assemble, AgentHack (archive counters render as blank).
- Scores or reasons for losing; WeMakeDevs rules say scores are not published.
- Satyam interview transcript (captions API returned empty).
- Whether Env Hacks uses the same judge panel as First Commit (env judges page 404).
- Whether Beacon's judged video was the 3:23 YouTube cut or the separate 3-minute file.

## Verification
Fact-check pass, Fri 2026-10-09, about 18:45 IST. I re-opened each source below. Verdicts: confirmed / partly / refuted / unverifiable.

1. Deadline is Sunday 11 Oct, 8:00 PM IST. CONFIRMED.
   - Aayush Sharma blog (Oct 6 2026), https://www.wemakedevs.org/blogs/what-is-happening-in-delhi-on-10-october : "Online submissions stay open until Sunday 11 October, 8:00 PM IST". Also: "submissions close at 8 PM on Sunday."
   - Schedule page https://www.wemakedevs.org/aws/env/schedule still says "The hours are being finalised: the kickoff call, the sessions, and the deadline the clock stops on." So the hour comes from a blog, not the schedule page. Re-check the schedule page on Sunday morning.
   - Side note: the schedule page now shows a "Claim $25 in AWS credits" button. Not checked further.

2. First Commit numbers: 13,667 signups, 4,270 teams, 1,180 projects, 7 prize winners. CONFIRMED.
   - Kunal recap (Oct 7 2026), https://www.wemakedevs.org/blogs/first-commit-hackathon-recap-and-whats-next : "13,667 participants signed up, 4,270 teams formed, and by Sunday night 1,180 projects had been submitted."
   - https://www.wemakedevs.org/aws/first-commit/projects/all shows "1180 projects". /projects lists 3 prizes + 4 runners-up. 7/1180 = 0.59%.
   - Same five criteria confirmed on https://www.wemakedevs.org/aws/first-commit (Idea and Impact, Built on AWS, Design and Usability, The execution, The demo video).
   - Kunal's X post says "16,000 people taking part". Headcounts differ by source.

3. All 7 First Commit winners had a live link on AWS. CONFIRMED, with one fix.
   - /projects lists Live links: Suraksha (amplifyapp.com), Beacon (lambda-url us-east-1), CampusEvac (amplifyapp.com), Magpie (magpie.akkki.tech), FreshTrace (s3-website ap-south-1), Expressive captions (lambda-url ap-south-1), Factcade (amplifyapp.com).
   - Fix: Magpie's live host is not shown to be ECS Fargate + RDS. magpie.akkki.tech resolves to 34.196.227.204, reverse DNS ec2-34-196-227-204.compute-1.amazonaws.com, served "via: 1.1 Caddy". So it is a single EC2 box. The README only says "DEPLOY.md is the runbook for AWS: ECS Fargate behind an ALB, RDS Postgres", and its Stack line says "Prisma 7 on local PostgreSQL". Still AWS, so the main claim holds.
   - Context the researcher left out: First Commit's page said "Ship It runs on AWS services, which is where the grand prize is decided" and "Cloud usage counts only in Ship It". So First Commit's own prize design pushed winners toward deploying. Env Hacks has no Build It / Ship It split. The precedent still points to deploying, but part of it came from that design.

4. Kunal's submission-day tips, incl. "what feedback you have on them. This matters a lot for judging." CONFIRMED.
   - Opened https://x.com/kunalstwt/status/2101587446479618269 directly (8:21 AM, Sep 20 2026, 10.5K views). Exact text: "Be clear about AWS. Tell us which AWS services you used, how you used them in the project, and what feedback you have on them. This matters a lot for judging." Also "3 minutes max", "We should not need to sign up or create an account to try it", "mention what each person worked on".
   - Instagram https://www.instagram.com/p/DdgKLXSAsar/ (Sep 20 2026) repeats the tips.

5. COO: environment projects lose points on "what changes for the people living with it"; Registry of Open Data "saves you a day". CONFIRMED.
   - https://www.wemakedevs.org/blogs/announcing-environmental-hacks (Sep 29 2026): "The second half is where most projects lose points"; "starting from data that already lives there saves you a day"; "Say plainly in your demo where your numbers come from and how fresh they are. That honesty reads as competence"; blog prize is "the part most teams skip". The six starter ideas match the researcher's list.

6. "Rs 20 lakh" prize pool for Env Hacks comes from Kunal's recap and LinkedIn, not the event page. CONFIRMED, with an addition.
   - Recap: "There is a ₹20 lakh prize pool, and ten students from the strongest projects get a fast-track interview with Amazon."
   - Addition: https://www.wemakedevs.org/hackathons now has an Env Hacks card (href /aws/env) reading "₹20 Lakh in prizes and Fast Track to Amazon Job Interviews". The First Commit card carries the same line. (The researcher's earlier note tied this card only to First Commit; the page has changed or was misread.)
   - Caution: First Commit's listed prizes were Rs 4.5 lakh cash + $10,000 credits, well under Rs 20 lakh by my rough sum. Env Hacks lists Rs 6 lakh cash + $10,000 credits + 5 AirPods. Treat "Rs 20 lakh" as a headline figure, not a sum of listed prizes. Plan on the per-track numbers.

7. 46 public repos labelled for Env Hacks, clustered on the six starter ideas. PARTLY.
   - I re-ran gh search repos (created >= 2026-10-07) on 7 queries ("environmental hacks", "Environmental-Hacks", "environmental hackathon", "bharat builds", "wemakedevs", "envhacks", "env hacks"): 46 unique repos. Count matches.
   - Spot-checked 10 repos; all exist, created Oct 8-9, and their descriptions name the event (saans, khidki, tanksaathi, Enki, sortsmart, dg-solar-advisor = SunSwitch, ShuddhPath, SunSense, swachh-ai, talaab).
   - But 9 of the 46 are empty (size 0): 23f2001033/Environmental-Hacks, Aryan107rn/We_make_dev_hackathon, Goutamishirol/EnvironmentalHacks, HitanshGithub/dhuan, TeenaBaskar2007/Environmental-Hacks, ayushtomar236/EnvironmentalHacks, newone-ss/Amazon_Environmental_Hacks, suryaprakashsingh1705-sys/reloop-e-waste, tauqxxr7/JalSanket. A few others have generic names only.
   - So the "one repo" on stubble burning (dhuan) and on e-waste (reloop-e-waste) are empty placeholders. The clusters are real but small (about 5 school-AQI repos, about 5 water-tank/leak repos). "Crowded" is a fair reading for school AQI and tank/leak; weak for the rest.

8. Judges check commit dates, not repo creation dates (Magpie). PARTLY.
   - Facts hold: gh api shows Magpie created_at 2026-08-30; 12 commits, all dated 2026-09-19 to 2026-09-20.
   - But one commit says "Keep the team's email addresses out of a public history", and commit order is not by date (the root-looking commit is dated Sep 20 11:39Z, after a Sep 19 commit). That points to rewritten history. pushed_at is 2026-09-22, after the deadline.
   - So we cannot tell what judges checked. The safe lesson stands: commit steadily during the event and do not rewrite history.

9. Winner demo video lengths. CONFIRMED.
   - curl of YouTube lengthSeconds: Suraksha XVr34XeXvlE 182; Beacon a3SxZHvIkCo 203; CampusEvac FhgTfCz0ou8 170; FreshTrace 2fs2fxV5wJw 179; Expressive captions D836OKdoY2g 179; Lethe 3840gxTZWxY 171.
   - Beacon README links YouTube plus a separate "3-minute cut" file in release v0.2.0. Which one the judges saw is unknown.

10. Judges are mostly engineers and DevRel, 2 from Amazon; a past participant later judged. PARTLY.
    - https://www.wemakedevs.org/aws/first-commit/judges : 28 judges. Amazon: Hannah Kwon (SDE), Manisha Choudhary (Solutions Architect). Rest from New Relic, Adobe, Qualcomm, Apple, Appwrite, Unity, startups. Confirmed.
    - Ayan Masood link rests on a handle match only. The Lingo page lists "News Sphere - Dedsec" (a top project, not a winner) with repo github.com/Ayan-M-Dev/news-sphere; the judge's LinkedIn is /in/ayan-m-dev. Likely the same person; not proven.
    - https://www.wemakedevs.org/aws/env/judges still returns 404.

Side checks (not formal verdicts)
- Beacon README: "Built solo in a weekend"; "Known gaps" line present; Strands Agents SDK named as the tool-calling agent. Matches.
- Factcade README: "The AI never computes money"; "Honest limits" section; "a good second screen for the 'where AWS fits' part". Matches.
- Suraksha README: "No silent LLM fallbacks"; Cedar ConsentGuard; Bedrock Nova 2 Lite with "Strands-style tools". Matches.
- FreshTrace and CampusEvac READMEs name no LLM (no Bedrock, Nova, GPT, Gemini, Strands). Supports "2 of 7 not LLM-centred".
- Magpie README: "98.6% match rate" on an 11,258-record synthetic batch; "Honest status" heading. Matches.
- HackFrost 2024 Best Sustainability: link order on https://archive.wemakedevs.org/hackathons/hackfrost24/projects puts Yash636261/AidConnect 5th, matching "Best sustainability" (5th prize line). Repo README title is "DisasterFlow: Real-time Disaster Response & Resource Management"; repo created 2024-11-29 (event start). Upgrade from "likely" to "confirmed".
- FutureStack criteria (Potential Impact, Creativity & Originality, Technical Implementation, Learning & Growth, Aesthetics & UX, Presentation & Communication) confirmed on https://archive.wemakedevs.org/hackathons/futurestack25 . Did not re-check Tambo, Lingo, Archestra, AgentHack, HackFrost criteria.
- Recap also says, for First Commit, "every submission was in the running for all three prizes".
