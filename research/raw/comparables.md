# Comparables: what wins environmental and student hackathons
Started 2026-10-09 ~18:35 IST. Raw notes. Plain sentences. Every line has its URL.

## NASA Space Apps 2025 global winners
- https://www.nasa.gov/learning-resources/stem-engagement-at-nasa/nasa-announces-2025-international-space-apps-challenge-global-winners/ (Dec 18, 2025)
- 114,000+ participants, 551 local events, 167 countries, 11,500+ submissions, 10 global winners (about 0.09%).
- Judged by subject matter experts from NASA and partners.
- Earth/climate-flavoured winners:
  - Twisters (Mexico), Best Use of Technology, challenge "Will It Rain on My Parade?": SkySense web app, NASA Earth obs data + AI, ultra-local personal weather risk, "suggesting the safest time windows for activities". Team page quote (https://www.spaceappschallenge.org/2025/meet-the-2025-global-winners/): "We designed, built, and deployed a stable system quickly ... our interface turned scientific tools into an everyday assistant that helps anyone answer a simple question, 'Will it rain on my parade?'"
  - QUEÑARIS (Peru), Local Impact: water scarcity in Arequipa tied to queñua forest loss; NASA data + drones + AI to pick reforestation spots. Very local, named city, named tree.
  - Zumorroda-X (Egypt), Art & Technology: pixel game on how farmers adapt to heat waves and floods using NASA data.
  - Gaia+LEO (US), Global Connection: optimisation of orbital vs ground data centres to cut power and water demand.
  - Astro Sweepers: "credit score" for satellites (sustainability score). Simple one-line frame.
  - Photonics Odyssey (India), Most Inspirational: satellite internet for 700M unconnected Indians. Quote: "lifting a child studying under a lantern in remote Ladakh".
- No air-quality project won globally in 2025, even though there was an air-quality challenge (NASA article mentions "developing tools to evaluate air quality").
- Pattern: winners answer one plain question for one named place or person; awards are split by category (data, tech, storytelling, local impact), so each winner is best at one thing.

## NASA Space Apps 2024 global winners
- https://www.nasa.gov/learning-resources/stem-engagement-at-nasa/nasa-international-space-apps-challenge-announces-2024-global-winners/ (Jan 16, 2025)
- 93,520 registered, 163 countries, 9,996 submissions, 10 winners.
- Earth/climate winners: GaamaRamma "Waterwise" (Best Use of Data; farmers manage water in drought); NVS-knot (Galactic Impact; soil moisture + evapotranspiration -> planting risk app for farmers, Ukraine); Innovisionaries Eco-Metropolis (city-building game on real env data); TerraTales (climate stories for Egypt/Brazil/Germany + AI forecast + game); Connected Earth Museum (virtual museum with AI host); Team I.O. Local Impact (turns GIS data into plain info for everyone).
- Pattern: real open data (NASA) turned into a decision for one named user (farmer, planner); or storytelling/game. Plain dashboards on their own did not win "Best Use of Data"; Waterwise tied data to a farmer's water decision.

## Devpost official demo advice
- https://info.devpost.com/blog/6-tips-for-making-a-hackathon-demo-video : demo video "one of the first things that judges will look at"; "in around three minutes". Tips: plan from ideation; write own script ("Try to avoid ChatGPT here ... too generic"); budget seconds per section; "start your video with a quick overview" because "judges will likely review multiple projects back to back"; "Explain what your app does ... in the first few seconds"; "Don't ... speed up the audio to fit"; "highly visual ... show your project in use"; "Spend a little time showing the technical aspects ... but don't get too bogged down"; leave 2-3 h at the end to record/upload; YouTube gives link before upload finishes; mark "Not for Kids" so judges can view.
- https://info.devpost.com/blog/how-to-present-a-successful-hackathon-demo (Brandon Kessler, Devpost CEO, first in TechCrunch): 1 set scene in a few sentences; 2 demo working project, "Skip mundane flows such as creating user credentials, and have any needed text copied to your clipboard", "it's crucial to show resolution to the problem you initially identified so your audience can see a) what your project does, and b) that you've completed the key components of it"; 3 "sell the dream" in a sentence or two; online page: screenshots + video.
- https://help.devpost.com/article/84-video-making-best-practices : "we recommend creating a screencast ... without the gimmicks"; "Snazzy marketing videos ... don't help others understand and evaluate your app"; explain what it does "in the first few seconds", treat opening "as you would a movie trailer"; edit out messy parts; multiple takes; YouTube processing "could take anywhere from a few minutes to several hours".
- https://gdg-vt-spring.devpost.com/rules (Solution Challenge 2026 GDG event): "judges will only review the first 2 minutes of a demo video if it is longer". Shows strict cutoffs are common.

## AWS ASDI Global Hackathon 2022 (AWS-sponsored sustainability, Devpost)
- https://aws.amazon.com/blogs/publicsector/announcing-winners-2022-amazon-sustainability-data-initiative-asdi-global-hackathon/ (Oct 18, 2022)
- $100K prizes; Devpost page says 1,458 participants (https://aws-asdi.devpost.com/ search snippet; page itself bot-blocked).
- Judging (11 judges): "maximize value and can be scalable, simple to use, and are broadly accessible; show a robust implementation using ASDI data; and demonstrate creativity and strong alignment with the SDGs".
- 1st RAMADDA ASDI (solo, Jeff McWhirter): S3 plugin + 16 ASDI datasets incl. First Street flood risk, NEXRAD, visual interfaces. (An existing open-source repo extended; would be banned under our "build only after the clock" rule.)
- 2nd Green Space Suggestion Tool (UK): Sentinel-5P air data + population density -> where to put green space in cities; SageMaker processing job, ECR, Docker. => air data turned into a siting decision, not a dashboard.
- 3rd Agri-able (Singapore): iSDAsoil + climate -> best crop for a location.
- 1st runner-up (India, Param Jeet, Jayanth Ajay): waterbody monitoring for Indian subcontinent in summer, Sentinel-2 NDMI, forecast water availability.
- 2nd runner-up (India team): wildfire fuel map from Sentinel-2 + weather for indigenous stewards.
- Honourable mention DataPlanet: 3D globe of datasets incl. OpenAQ air quality. => the plain "visualise AQI on a globe" entry ranked last of six.
- Lesson: AWS judges rewarded open data on AWS (Registry of Open Data / ASDI) + a decision for a named group.

## Google Solution Challenge 2024 winners
- https://blog.google/innovation-and-ai/technology/developers-tools/meet-the-students-that-are-changing-the-world-through-technology/ (Jul 1, 2024)
- Top 3: ATTI (Korea, dementia voice assistant, Flutter, Firebase, Gemini); Spoon Share (Aurangabad, India; surplus food to hungry, Flutter, Firebase, Maps API, volunteer approval); Alpha-Eye (Nigeria, eye disease detection). People's Choice: Saheli (NIT Jalandhar; women's commute safety in Delhi, Gemini chatbot).
- Topmate snippet (https://topmate.io/shuence/1339005, not opened in full): Spoon Share "achieved over 1,500 ..." (likely users; unverified).
- Format note: multi-month, real users expected; top 10 demo day. Different from a 3-day hack.
- Only one of 4 winners is environmental (food waste), and it is framed as hunger + waste, with a named user flow (donor -> volunteer check -> person in need).

## First Commit (same organiser, same judging rubric) title scan
- Source: /Users/sher/project/hacker/research/raw/firstcommit_projects.json (1,180 projects scraped from https://www.wemakedevs.org/aws/first-commit/projects).
- 62 titles contain "AI-powered"; 70 contain "agent"; 51 contain setu/sathi/mitra/sahay.
- About 35 civic complaint/report titles (CivicFix appears 4+ times: "civicfix", "CivicFix", "CivicFix AI", "CivicFix: Fraud-Proof..."). None placed.
- Env-ish titles: 7 waste (mostly food waste), 9 water/flood (FloodRoute, FloodSense x2, ResQNet), 1 air (Vayu satellite-ground fusion), 3 climate/weather, ~10 energy (SolarLens quote checker, PulseGrid, SmartCharge, RoofGrid, Tripwire electricity theft with Strands + Cedar). None of these won a top-3 prize. FreshTrace (food spoilage e-nose, IoT Core) was a runner-up.
- 3 winners were: elder care companion (Suraksha), AWS ops night-shift agent (Beacon), fire drill sim (CampusEvac). All have a named user and a moment (fall at home, 3 AM page, fire drill).

## AWS AI Agent Global Hackathon 2025 (Devpost, AWS) -- 1st place was a WASTE project
- Winners: https://aws-agent-hackathon.devpost.com/updates/38140-congratulations-to-the-winners-of-the-aws-ai-agent-global-hackathon (announced at re:Invent 2025)
- Rules/criteria: https://aws-agent-hackathon.devpost.com/ : $45K cash; 1st $16K. Judging weights: Potential Value/Impact 20%; Creativity 10%; Technical Execution 50% ("Must use the technology ... well-architected? reproducible?"); Functionality 10%; Demo Presentation 10% ("Does it include the end-to-end agentic workflow?"). ~30 judges, nearly all AWS staff (SAs, ProServe, GTM). Submission: repo, text, ~3-min video, deployed URL.
- 1st: EcoLafaek (https://devpost.com/software/ecolafaek , https://www.ecolafaek.com/). Solo founder from Timor-Leste (Ajito Nelson Lucio da Costa, LinkedIn https://www.linkedin.com/in/ajitonelson , from search snippet).
  - Problem: Dili makes 300+ t waste/day, 100+ t uncollected (JICA survey data); blocks drains -> floods in rainy season.
  - Build: Flutter app (photo + GPS, offline SQLite cache); Bedrock Nova-Pro classifies waste type + severity from photo; AgentCore runtime chains 5 tools (SQL, Code Interpreter charts, Folium hotspot map, Browser tool); Titan Embed image vectors for "similar reports"; S3; Lightsail backend; CodeBuild -> ECR ARM64; dashboard on Vercel; TiDB.
  - Proof: "50+ waste reports submitted", "3+ active mobile app users", "25+ AI agent interactions"; tested on Android 15 and iOS "with real waste photos". YouTube description: "50+ real reports" (https://www.youtube.com/watch?v=ZWKOsdWfSsA snippet).
  - Named after sacred crocodile "Lafaek". Strong local identity + first-person "As a young person living in Timor-Leste".
  - Judges' blurb stressed: "multi-modal reasoning and AgentCore to autonomously chain tools", "map pollution hotspots", "actionable insights" for authorities, "over 100 tons of daily uncollected waste in Dili".
  - Current site: citizens report -> AI verifies -> municipal staff app with before/after photo proof -> public tracking. Also a public bin map.
  - LESSON: a "report a problem" civic app CAN win when (a) the builder is local with real data and real reports, (b) the sponsor's newest service (AgentCore) does the core work, (c) one number anchors the pain.
- 2nd AegisAgent (insurance claims, Kiro, "100% of the code generated by AI", 5 days). 3rd Province (tax filing, 100% accuracy on Form 1040).

## HackMIT 2025 (24 h, 1,000+ students)
- https://www.khoury.northeastern.edu/khoury-undergrads-win-three-categories-at-prestigious-mit-hackathon/ (Feb 5, 2026)
  - Sustainability track 1st: "Griddy" -- micro-grid on homemade iron-air batteries (fertiliser chemicals, makerspace). Physical, novel, hands-on. Not an app.
  - EigenCloud side track: "Kava" -- AI insurance claim pack after Jan 2025 California wildfires; "have a whole package ready to go in just a couple of minutes". Climate-disaster aftermath, one concrete user task.
  - Entertainment winner EyeCraft quote (Xiaole Su): "Having a successful demo from top to bottom is so rare in hackathons these days because people try to go so above and beyond that nothing works ... One thing that really made us stand out is how well the demo worked and how everything flowed together. It was a product that you could use."
- https://www.linkedin.com/posts/infosys_hackmit-greenai-genai-activity-7388839495334445056-Eg-8 (Infosys, Oct 2025): Infosys challenge "Carbon-Conscious Intelligence". 1st runner-up XiaoPrompt: prompt optimisation API "reduces token usage by 53% while maintaining over 96% model output accuracy" (Claude Haiku distil + translate to Chinese, "25-40% more token-efficient"), dashboard for carbon reduction. => measured before/after numbers.

## SIH 2024 environment winner example
- https://www.linkedin.com/posts/rohitnirban_sih2024-smartindiahackathon-innovation-activity-7273963680466149377-Xied (Dec 2024): winner on PS "Online Real-Time Monitoring of Water Bodies in Delhi NCT": website with real-time water quality "using satellite technology and hardware to monitor". 6-person team incl. hardware expert, mapping specialist, "Presentation genius", UI/UX designer.
- SIH format: ministry-set problem statements, 5-7 colleges per PS at finale (https://www.djsce.ac.in/docs/SIH%20GRAND%20FINALE%202024.pdf snippet), so each PS has its own winner. Not directly comparable to open themes.
- https://www.sihbuddy.in/ (third-party, Claude-analysed): SIH 2026 has 240 PS (182 software, 58 hardware), 18 themes, 35 orgs. Advice: "Check that ... the dataset is actually supplied rather than assumed, that the theme is not already crowded, and that a judge can see the thing work in about ninety seconds."

## Breath of Fresh Air AI Hackathon, Univ. of Utah (AWS flagship sponsor) -- closest comparable for AIR track
- https://rai.utah.edu/air-quality-hackathon-recap/ (June 2025 per page; event June 4-5; no year in text but "inaugural"; Bedrock + SageMaker access)
- 16 teams, 85 participants, 16 judges in 3 pitch pods (industry, govt incl. Utah Dept of Air Quality, academia). Criteria named: "innovative ideas, use of AI, and presentations". One-pager required.
- 1st BreatheSafe ($1,500 + $1,250 AWS credits): ML on EPA data + weather forecast + user traits (asthma, COPD, pregnancy, age, outdoor work) -> texts/emails an easy risk score. One-pager quote: "Salt Lake City ranks among the top 10 worst U.S. cities for short-term air pollution ... Raw AQI data isn't enough. We need tools that translate it into clear, health-focused alerts." Judges liked: traditional ML, "clear, compelling presentation", functionality, React mobile-friendly UI. First hackathon for the team.
- 2nd LumaVita: asthma kids + families, localized AQ data. 3rd Fresh Route: walking route with cleaner air.
- NVIDIA's Choice: Team Fireball, PM2.5 forecast without met sensors or chemical transport models (cheap model).
- Honourable mention "Simple": "An interactive city map dashboard that provides visualization of current and forecasted air quality." => the plain AQI dashboard placed below every personalised/actionable tool.
- Other HMs: cap-and-trade sim; traffic genetic algorithm.
- LESSON for Air track: winners turned AQI into a personal decision (alert for my health, my route). The map dashboard lost.

## SIH 2025 environment winners
- https://www.thehindu.com/news/national/karnataka/smart-india-hackathon-concludes-at-vtu-in-belagavi/article70380860.ece (Dec 10, 2025): 36-hour finale. "AI-based Pollution Source Identification for Delhi NCR" won by Rajiv Gandhi Institute of Technology, Vellore -- "AI-powered dashboard to assist in environmental policy planning". Clean & Green won by KC College of Engineering. Each winner Rs 1.5 lakh.
- SIH 2025 Hardware: "Low-Cost Decentralized Smart Air Purification and Monitoring System" winner (https://www.linkedin.com/posts/bhoomi-bhardwaj-8657a428b_smartindiahackathon-sihwinner-innovationwithimpact-activity-7407143662230474752-tkdE , Dec 2025). Mentor comment: "clarity of thought, simple-yet-powerful execution".
- SIH 2025 PS 25166 "Smart Sabarmati Riverfront & Urban Water Bodies" won by NIT Rourkela (Instagram/X snippet only, https://x.com/nitrourkela/status/2000833680345063562 ; not opened).
- Note: in SIH, a dashboard can win because the ministry asked for it (PS-defined user = government). In open-theme events, dashboards have no named user.

## Live Indian air hackathon problem list (useful for problem framing)
- https://mybharat.gov.in/vo/pages/event_detail?event_name=Air-Quality-Improvement-hackathon&key=387214503988 : Nagar Nigam Dehradun "Clean Air Hackathon", Sep 1 - Oct 9, 2026. PS: road dust, traffic emissions at junctions, C&D dust, waste burning (AI/GIS hotspot, citizen reporting, early warning), green barriers, ward-level AQI prediction, 24-48 h forecast, source identification. Special: "Doon Clean Air Mission -- Identify the source, predict the hotspot and recommend the action." Data listed: AQI/PM, traffic, ward maps, construction sites, waste-burning complaints, met data, green cover.

## Imagine Cup (Microsoft) -- health/accessibility dominate; Earth rarely wins overall
- World champions list: https://imaginecup.microsoft.com/winners -> 2025 Argus (low-vision wearable), 2024 FROM YOUR EYES (Turkey), 2023 TAWI (Kenya; auditory processing disorder per https://techcrunch.com/2023/05/23/kenyas-tawi-takes-on-auditory-processing-disorder-to-win-microsoft-imagine-cup/ title), 2022 V Bionic (hand rehab exoskeleton), 2021 REWEBA, 2020 Hollo, 2019 EasyGlucose. No Earth-category world champion visible 2019-2026.
- 2026: https://techcommunity.microsoft.com/blog/studentdeveloperblog/announcing-the-2026-imagine-cup-world-champion/4524686 (Jun 2, 2026). Champion CopyFlag (creator copy detection), $150K. Finalist SpoilSafe (CMU): sensor data via Azure IoT Hub, Data Explorer, Synapse, AI Foundry -> real-time freshness estimate, cut food waste. Finalist Revora Health.
  - Note: SpoilSafe (sensor food freshness) mirrors FreshTrace (ESP32 e-nose) runner-up at First Commit. Sensor-backed food spoilage keeps placing.
- 2025 champion Arjun Oberoi quote (https://news.microsoft.com/signal/articles/imagine-cup-2026-student-ai-competition/): "technical ability is table stakes ... the ability to pitch is what really differentiates".
- 2022 Earth-category entries (https://techcommunity.microsoft.com/blog/studentdeveloperblog/meet-the-2022-imagine-cup-epic-challenge-winners/3029957): runners-up only -- Rurusi (farmer SMS chatbot, Mexico), 6E Resources (IoT sewage treatment plant, India), IoTian (aquaponics), Green Vault (UK, product carbon emissions lookup). Epic Challenge entry = 3-minute pitch video.
- Format note: Imagine Cup is a months-long startup contest; not a 3-day hack.

## GitHub repo counts (proxy for crowding), gh api search/repositories total_count, 2026-10-09
- carbon footprint calculator 1,839; carbon footprint tracker 2,916; aqi dashboard 1,912; air quality prediction 5,737; waste classification 5,570; waste segregation 3,457; plastic waste detection 293; tree planting 2,293; climate chatbot 256; civic issue reporting 4,043; flood prediction 4,038; heatwave 2,254; e-waste 7,952 (noisy term); water leak detection 706; ev charging station finder 288.
- Caveat: counts include coursework and noise; they show supply of look-alike projects, not judge outcomes.

## How much time judges spend (online, video-first)
- https://help.devpost.com/article/64-judging-public-voting : "we often send a max of 30 projects to judges with the expectation that scoring will take about 5 hours" => about 10 min per project including video, text, repo.
- First Commit judge Siddharth Dayalwal: "35 projects, one very full weekend" (see firstcommit.md). Same order: ~10 min each or less.
- https://worldslargesthackathon.devpost.com/forum_topics/41387-judging-process-question (Devpost manager Michelle Brain, 2025): "judges are not required to test the Project and may choose to judge based solely on the text description, images, and video provided in the Submission." Also: after deadline "the contents of your submission ... are locked"; wrong link cannot be fixed.
- Devpost criteria default: idea quality, implementation, potential impact, equal weights.

## Seattle Climate Hackathon 2025 (Amazon, Microsoft sponsors)
- https://www.linkedin.com/posts/psapiecha_climatetech-hackathon-aiforgood-activity-7329204032135135232-XFGR (May 2025): winner YIMBY AI -- helps homeowners build ADUs / small multifamily: simplifies permitting, pre-approved plans, connects pros; "lower-carbon way to meet Washington's urgent housing needs". 72 h. Tips: 1-2 personas; study precedents; outline user flow "what screens are needed to tell your story"; low-fi wireframes; simple demo with predefined actions. Teammate: "Prioritize Ruthlessly!"
- Note: climate win framed through housing permits (adjacent problem, concrete paperwork task), not emissions tracking.
- More counts (same method): rooftop solar 1,047; stubble burning 98; water tanker 230; urban heat island 1,001; waterlogging 306; ewaste recycling 118; kabadiwala 310.
- Reading: India-specific operational problems (stubble burning, tankers, waterlogging) have 10-50x fewer look-alike repos than carbon calculators, waste classifiers, AQI predictors, civic reporters.

## Small Devpost climate hackathons: winner badges (scraped gallery HTML, alt="Winner")
- https://climatechangemakers2025.devpost.com/project-gallery (youth, 3 days, 37 projects): 15 of first 24 carry Winner badge. Winners include tree-planting app "Be my tree", AI-carbon calculator "SustainEdge", e-waste helper "EcoWiz", flood warning "FAWS", "CRiPAS" flood prediction Southern Africa, "Flowers of the Desert" shade for heat.
- https://ai-for-change.devpost.com/project-gallery (48 h, 44 projects): all 24 on first page badged (many category prizes). Includes generic AQI app "WeatherWise", "Recycle Scout AI", "EcoVision" littering reports.
- https://hacktheclimate.devpost.com/project-gallery (21 projects): 3 winners -- Methane Leaks (Unit8, satellite methane), Purple Penguins (climate law search graph), Eruza (waste automation).
- https://dev-season-of-code.devpost.com/project-gallery : EcoQuest (gamified carbon + digital plant) badged Winner (search snippet).
- LESSON: in tiny youth hacks, generic eco apps "win" because most entries get a prize. That is not evidence they win at a 1,000+ submission event judged by AWS engineers. At big events (AWS Agent, ASDI, Space Apps, First Commit) the generic types do not appear among top winners.

## Google Solution Challenge APAC 2025
- https://gulfnews.com/world/asia/pakistan/pakistani-students-win-big-at-google-solution-challenge-2025-1.500184786 (Jul 2, 2025): ~3,300 students, 750 teams, 12 countries; final in Manila with ADB + Hack2skill. Winner "Best AI Use Case": GeoGemma (Institute of Space Technology, Islamabad) -- geo LLM: surface temperature, forest loss for any location, Gemini integration. Sponsor model is in the product name.
- Repo: https://github.com/GeoGemma/GeoGemma-APAC-2025 (created 2025-03-10, gh search). Later fork describes it as "an opensource GeoLLM for planetary scale spatial analysis via natural language prompts".
- India GDG on Campus Solution Challenge 2025 (Hack2skill) winner: Cloud Catalysts (drug discovery) per LinkedIn snippet https://www.linkedin.com/posts/hack2skill_gdg-on-campus-solution-challenge-2025-winners-activity-7350577326537007105-s8LY (not opened). Runners-up Fast & Furious, ResQtech (Instagram snippet).

## FAO-UNDP SCALA climate hackathon Asia-Pacific 2023
- https://www.adaptation-undp.org/scala-hackathon-for-asia-and-the-pacific-team-splicing-from-mongolia (Apr 2023): 76 applicants, 16 teams bootcamp, 8 pitched, 3 judges.
- Winner Team Splicing (Mongolia): livestock data app for herd planning tied to Mongolia's livestock tax law and NDC. Team = researchers at Research Institute of Animal Husbandry (domain experts). Stat used: "96 percent of Mongolian herders already use mobile phones"; 71M livestock in 2022.
- LESSON: domain knowledge + hook into an existing government policy + one adoption stat.

## AWS AI for Bharat Hackathon 2026 (AWS + Hack2skill + YourStory) -- AWS-judged Indian comparable
- https://yourstory.com/2026/06/crop-insurance-conversational-analytics-ai-for-bharat-hackathon (Jun 25, 2026): ~96,000 registrations; 1,400+ working prototypes; 2 phases (learning: labs + blogs on AWS Builder Center; then build). Each winning team Rs 3 lakh. Top 36 grand finalists (IIIT-Delhi post https://www.instagram.com/p/DXJfGe7D6v2/).
- Student winners (https://www.linkedin.com/posts/hack2skill_ai-for-bharat-winners-activity-7449433011382550528-k8TO , Apr 13, 2026): Function Override (SocraticDev), Content Room, Rayquaza EX (BimaSathi).
- BimaSathi (IIIT-Delhi): WhatsApp-first, voice, 7 Indian languages, PMFBY crop insurance claims; Rekognition checks damage photos; SHA-256 tamper hashes; GPS check; Bedrock Nova Pro; Transcribe + Polly; Step Functions claim workflow; DynamoDB; S3; Cognito; SAM; Twilio WhatsApp. Generates PMFBY-compliant PDF claim pack + appeal letter for rejected claims. Operator dashboard for CSC (Common Service Centre) staff. Repo https://github.com/ammarsksk/BimaSathi (created 2026-02-27). YourStory: "helping farmers successfully complete claims processes during periods of loss".
- Kisan Mitra AI (Professional track): soil health report -> fertiliser advice (Bedrock, Textract, Rekognition), voice in regional dialects. YourStory: "Rather than prioritizing technical complexity alone, the team focused on accessibility, usability, and linguistic inclusion."
- Content Room: "What tipped the scale ... was its focus on cultural context and regional adaptation, rather than simple translation."
- PATTERN shared with HackMIT Kava (wildfire claim pack) and EcoLafaek (municipal job + proof): the winning output is a finished artefact a real institution accepts (claim pack, cleanup job, appeal letter), not a chart.

## Space Apps judging criteria (search snippets only, pages not opened in full)
- https://www.spaceappschallenge.org/2026/local-events/sakhir/ snippet: "Influence: How much influence (quality and quantity) can this project have? Does it address a big problem or a little problem?" Others: Creativity, Validity, Relevance, Presentation (https://www.scribd.com/document/782519298/NASA-Space-Apps-Challenge snippet).

## Teammate notes reused (not re-verified by me)
- firstcommit.md: Beacon demo structure "pain (3 AM, 4 questions) -> live flow -> safety (2 IAM roles) -> AWS list -> 'it is deployed' -> lessons learned". Leaked First Commit score split (Reddit, single source): AWS 10, Idea 8, Execution 4, Demo 4, Design 4 out of 30. Judge Siddharth Dayalwal: "The best entries showed their work - real Step Functions, tested Lambda functions, working deployments; not just an architecture diagram and a promise."
- firstcommit.md: FloodSense (Leaf Ninjas, Patna) had a before/after number "0 vs 33 flooded roads crossed" but did not place.
- wmd_history.md: organiser tip "If you have a live demo, make sure we can open it without signing up." "Be clear about AWS. Which services you used, how you used them".

## SYNTHESIS (my reading of the evidence above)
### What the big-event winners share
1. A named person in a named place at a named moment: farmer filing a PMFBY claim after crop loss (BimaSathi); citizen photographing waste in Dili (EcoLafaek); asthmatic Salt Lake resident on an inversion day (BreatheSafe); "Will it rain on my parade?" (Twisters); Amma, 72, Bengaluru (Suraksha).
2. Output is an action or finished artefact, not a chart: alert, claim pack, cleanup job, safe time window, route, appeal letter.
3. Sponsor tech does the core work and is in the story: AgentCore chain (EcoLafaek), Rekognition + Transcribe + Step Functions (BimaSathi), SageMaker processing on ASDI data (Green Space tool), Gemini/Gemma in the name (GeoGemma).
4. Proof of reality: real reports/users (EcoLafaek 50+ reports, 3 users), real public data (EPA, Sentinel, JICA, NASA), measured before/after (XiaoPrompt 53% tokens at 96% accuracy).
5. Domain knowledge or local identity: Timor-Leste founder; Mongolian livestock researchers; IIIT-Delhi team on PMFBY.
6. Works end to end: EyeCraft quote; Devpost CEO "show resolution to the problem"; First Commit judge "working deployments".
### What loses or ranks low
- Plain AQI/climate map dashboards: Utah "Simple" = honourable mention; ASDI DataPlanet 3D globe = honourable mention (6th of 6).
- Generic civic report apps without a local owner: ~35 at First Commit, none placed. (EcoLafaek is the exception and shows the conditions.)
- Carbon footprint calculators / gamified eco habits / tree planting: thousands of GitHub repos; only "win" at tiny youth hacks where most entries get badges; absent from big-event winner lists checked.
- Waste photo classifiers alone: 5,570 + 3,457 repos; EcoLafaek used classification only as step 1 of a pipeline that ends in a municipal job.
- Climate chatbots: few repos (256) but no winners found in big events; Imagine Cup/Space Apps winners are tools, not Q&A bots.

## Gaps / could not verify
- aws-asdi.devpost.com bot-blocked; spaceappschallenge.org winner and honourable-mention pages show a redirect notice only (used nasa.gov instead).
- SIH result pages (sih.gov.in) gave proxy errors; SIH winners taken from The Hindu and team LinkedIn posts.
- Medium posts (Solution Challenge strategies, climate hackathon recaps) bot-blocked.
- No Indian student hackathon (HackCBS, Hack36, ETHIndia) sustainability-track winner found with a source in the time spent.
- Spoon Share "1,500" figure is a topmate snippet only. REWEBA (Imagine Cup 2021) topic not checked.
- GitHub counts are noisy proxies.
Finished ~19:20 IST 2026-10-09.

## Verification
Fact-check by adversarial checker, 2026-10-09 ~19:30 IST. I re-opened each source below. Verdicts: confirmed / partly / refuted / unverifiable.

1. EcoLafaek won 1st at AWS AI Agent Global Hackathon 2025 - CONFIRMED, with one correction.
   - https://aws-agent-hackathon.devpost.com/updates/38140-... : "1st Place: EcoLafaek". Blurb names Nova-Pro, AgentCore tool chaining, "over 100 tons of daily uncollected waste in Dili". 2nd AegisAgent (insurance claim review), 3rd Province (IRS tax forms).
   - https://aws-agent-hackathon.devpost.com/ : 1st place $16,000. Pool $45,000.
   - https://devpost.com/software/ecolafaek : "As a young person living in Timor-Leste"; JICA 300+ t/day, 100+ t uncollected; "50+ waste reports submitted and analyzed"; "3+ active mobile app users"; "25+ AI agent interactions"; "Tested on Android 15 and iOS devices with real waste photos". Stack as stated (also Kiro, TiDB, Vercel).
   - CORRECTION: at judging time, the cleanup-job loop did NOT exist. Devpost lists "status update ... mark reports as Resolved" and "Before/after photo comparison to verify cleanup" under "What's next". The judged version was report + classify + agent analytics dashboard. The current www.ecolafaek.com (opened today) does show "verified, mapped cleanup jobs", a Staff app and before/after photo proof - built after the win. So "closes the loop to a cleanup job" did not drive the win.

2. AWS AI Agent hackathon weights - CONFIRMED.
   - Same page: Potential Value/Impact 20%, Creativity 10%, Technical Execution 50% ("well-architected? reproducible?"), Functionality 10%, Demo 10%. I counted 31 judges listed, nearly all AWS staff.

3. Leaked First Commit split AWS 10 / Idea 8 / Exec 4 / Demo 4 / Design 4 - PARTLY.
   - Reddit post exists (u/Any-Hour-974, 2026-09-28): Ship It track, 25/30 = AWS Usage 8/10, Idea and Impact 6/8, Execution 4/4, Demo Video 4/4, Design and Usability 3/4. One commenter: 23, 7/8 on idea. Single self-report.
   - Caveat: First Commit page says "Cloud usage counts only in Ship It ... Best UI is judged on design and usability." Env Hacks page says local and deployed projects "are scored with the same care, and each track is judged on its own". So the 10-point AWS weight may not carry over.
   - "Same rubric" is PARTLY true: both events use the same five headings (Idea and Impact, Built on AWS, Design and usability, Execution, Demo video), but prize structure differs (First Commit: Ship It / Build It / Best UI; Env Hacks: three topic tracks).
   - Judge quote confirmed (Siddharth Dayalwal LinkedIn, 2026-09-24): "35 projects, one very full weekend of code review"; "The best entries showed their work - real Step Functions, tested Lambda functions, working deployments". He also praised "campus grievance systems" and "DBT/welfare navigation" as India-specific work - so civic tools were not scorned by this judge.

4. Utah Breath of Fresh Air hackathon - CONFIRMED, but it is a SMALL event.
   - https://rai.utah.edu/air-quality-hackathon-recap/ : AWS "flagship sponsor"; 16 teams, 85 participants, 16 judges. 1st BreatheSafe ($1,500 + $1,250 AWS credits), quote "Raw AQI data isn't enough..." confirmed. 2nd LumaVita, 3rd Fresh Route, NVIDIA's Choice Team Fireball, honourable mentions Simple (map dashboard), Iforgotsry, T-LOCC.
   - Year: June 4-5, 2025 (https://rai.utah.edu/hackathon-2025/ search snippet; sustainability.utah.edu snippet "June 4 - Friday, June 6, 2025").
   - CORRECTION: the summary calls this one of "the big environmental hackathons". It had 16 teams. Also Team Fireball, a pure PM2.5 forecasting model with no user action, won NVIDIA's Choice - so forecasting tools can still win a sponsor prize.

5. AWS AI for Bharat 2026 - CONFIRMED numbers; PARTLY on "judges valued".
   - https://yourstory.com/2026/06/crop-insurance-conversational-analytics-ai-for-bharat-hackathon (2026-06-25): "nearly 96,000 registrations", "more than 1,400 working prototypes", "Each winning team received Rs 3 lakh". BimaSathi: WhatsApp-first, seven languages, "insurer-ready claim packs", operator dashboard. Content Room quote confirmed.
   - Kisan Mitra AI is a Professional/Startup track winner, not a student winner.
   - "Rather than prioritizing technical complexity alone, the team focused on accessibility..." describes the TEAM, written by the YourStory author. It is not a statement of how judges scored. "Judges valued access over complexity" is inference.
   - https://github.com/ammarsksk/BimaSathi README confirms SAM, Lambda, Step Functions, Bedrock Nova Pro, Rekognition, Transcribe, Polly, DynamoDB, S3, Cognito, Twilio, SHA-256 hashes, GPS check, PMFBY-compliant PDF claim pack, appeal docs. 7 languages include English. Repo created 2026-02-27, 0 stars. IIIT-Delhi affiliation not in README or YourStory (rests on the Instagram post, not opened by me).

6. Devpost judging claims - CONFIRMED.
   - https://worldslargesthackathon.devpost.com/forum_topics/41387-... : manager Michelle Brain: "judges are not required to test the Project and may choose to judge based solely on the text description, images, and video". Submissions "locked in for the judges" after deadline.
   - https://help.devpost.com/article/64-judging-public-voting : "we often send a max of 30 projects to judges with the expectation that scoring will take about 5 hours". 10 min/project is derived. This is Devpost practice; Env Hacks runs on WeMakeDevs, not Devpost.
   - https://help.devpost.com/article/84-video-making-best-practices : screencast "without the gimmicks"; pitch "in the first few seconds"; upload "could take anywhere from a few minutes to several hours or more". Confirmed.
   - https://info.devpost.com/blog/how-to-present-a-successful-hackathon-demo (Brandon Kessler, CEO): "Quickly set the scene", "Skip mundane flows such as creating user credentials", "show resolution to the problem". Confirmed.
   - https://info.devpost.com/blog/6-tips-for-making-a-hackathon-demo-video : the "avoid ChatGPT", "don't speed up the audio" and "Not for Kids" lines are tips from community members quoted by Devpost, not Devpost staff. The 2-3 h line is "leave at least two or three hours before the end ... to polish, record, and upload".

7. First Commit winners and crowding - CONFIRMED.
   - https://www.wemakedevs.org/aws/first-commit/projects : 1st Ship It Suraksha; 2nd Build It Beacon Night Shift; 3rd Best UI CampusEvac. Runners-up: Magpie, FreshTrace, Expressive captions, Factcade. No civic-report or environment title in top 3.
   - My recount of firstcommit_projects.json (1,180 titles): "AI-powered" 62, "agent" 70, setu/sathi/mitra/sahay 51 - exact match. "CivicFix" 5 titles. Civic/complaint/grievance regex: 35, but that bucket also includes scheme navigation and scam-complaint tools, so "35 civic reporting apps" is loose. Air 1, waste 7 (mostly food waste), flood/water 4 by my regex.

8. GitHub repo counts - CONFIRMED (re-ran today via gh api search/repositories): stubble burning 98, kabadiwala 310, aqi dashboard 1,912, carbon footprint calculator 1,839, water tanker 230, civic issue reporting 4,043, waste classification 5,570. Still a noisy proxy.

9. NASA Space Apps 2025 - CONFIRMED, one counter-example.
   - https://www.nasa.gov/.../nasa-announces-2025-international-space-apps-challenge-global-winners/ (2025-12-18): 114,000+ participants, 551 events, 167 countries, 11,500+ submissions, 10 winners. Air quality was a challenge; no winner is about air. Twisters/SkySense "safest time windows"; QUEÑARIS Arequipa water/queñua.
   - Counter-example: Zumorroda-X (Egypt) won the Art & Technology Award with mini games about how farmers adapt to heat waves and flooding. So a climate game did win at Space Apps 2025. This weakens "gamified eco apps are absent from big-event winners" (it is an education game, not a habit tracker).
   - The "deployed a stable system quickly" quote was not on the nasa.gov page; it presumably comes from the spaceappschallenge.org page I did not re-open. Unverified by me.

10. ASDI 2022, HackMIT 2025, Imagine Cup 2026, Solution Challenge - CONFIRMED.
   - ASDI blog (2022-10-18): $100K prizes, 11 judges, six winners. 1st RAMADDA ASDI (extended an existing repository), 2nd Green Space Suggestion Tool (Sentinel-5P + population, SageMaker processing, ECR), 3rd Agri-able, 1st runner-up Indian waterbody NDMI tool, 2nd runner-up wildfire fuel map, honourable mention DataPlanet (3D globe, OpenAQ) listed last.
   - Khoury (2026-02-05): HackMIT 1,000+; Griddy 1st sustainability (iron-air batteries); Kava 1st EigenCloud side track ("a whole package ready to go in just a couple of minutes"); EyeCraft quote "Having a successful demo from top to bottom is so rare..." confirmed.
   - Imagine Cup 2026 (techcommunity, 2026-06-02): champion CopyFlag; finalists Revora Health and SpoilSafe (Azure IoT Hub, Data Explorer, Synapse, AI Foundry). Confirmed.
   - Google Solution Challenge 2024 (blog.google, 2024-07-01): three top prizes (ATTI, Spoon Share, Alpha-Eye) + People's Choice (Saheli). Spoon Share confirmed as top-3.
   - Gulf News (2025-07-02): GeoGemma won Best AI Use Case at APAC Solution Challenge; ~3,300 students, 750 teams, 12 countries. Confirmed.

Side finding (official page, opened today): https://www.wemakedevs.org/aws/env now says "Claim $25 in AWS credits" and "If you use all of it, you can request $25 more from us". The shared context said organisers "can grant more on request" with no amount. Plan for $200 free tier + $25, not open-ended credits.
