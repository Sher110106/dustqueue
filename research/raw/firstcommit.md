# First Commit (Bharat Builds Tour Event 01) raw notes
Checked 2026-10-09 ~18:20 IST.

## Official pages
- https://www.wemakedevs.org/aws/first-commit : theme open, "build something that solves a real problem", any sector (healthcare, education, finance).
- Prize board: Ship It 1st prize Rs 2,00,000 + $3,000 AWS credits; Build It 2nd prize Rs 1,50,000 + $2,000; Best UI 3rd prize Rs 1,00,000 + $1,000; four runners-up $1,000 credits each; top 5 blogs Logitech gaming keyboard; tour kit to top teams.
- "Ship It ... is where the grand prize is decided." "Cloud usage counts only in Ship It, where architecture and cost decisions are part of the work. Best UI is judged on design and usability."
- Ship It: "Deploy it live on AWS and hand us a URL ... the architecture is part of the score."
- Judging criteria same five as env event (Idea and Impact, Built on AWS, Design and Usability, Execution, Demo video).
- In person: Polaris School of Technology Bangalore, Sept 19. Hosts listed: Kunal Kushwaha, Hitesh Choudhary.
- /winners and /results return 404. Winners are at /aws/first-commit/projects. Also /projects/all and /projects/blogs, /judges.
- /schedule still says "hours are being finalised" (never updated after event).

## Numbers (source: Kunal Kushwaha recap, published 2026-10-07)
URL: https://www.wemakedevs.org/blogs/first-commit-hackathon-recap-and-whats-next
- "13,667 participants signed up, 4,270 teams formed, and by Sunday night 1,180 projects had been submitted."
- "1,400+ builders join us for a day at Polaris School of Technology on 19 September"
- "The theme was open ... a lot of what came back was agents. Beyond that, people built for campus life, disaster response, climate and waste, health, agriculture and accessibility."
- "AWS mentors ran a hands-on workshop on building AI agents with the Strands Agents SDK, and you could see it in the submissions. Agents were everywhere, including at the top of the board."
- Suraksha: "It is the only one of the three winners built for somebody who is not the user."
- "Ten students from the strongest projects at First Commit got the opportunity for fast-track interviews with Amazon" (names not published).
- Recap also says for Environmental Hacks: "There is a ₹20 lakh prize pool" (so Rs 20 lakh figure IS in this recap blog, though not on the event page).
- Recap demo links: Suraksha https://youtu.be/XVr34XeXvlE ; Beacon https://youtu.be/a3SxZHvIkCo ; CampusEvac https://youtu.be/FhgTfCz0ou8

## Judges page https://www.wemakedevs.org/aws/first-commit/judges
28 judges: mostly devrel/engineers outside AWS (New Relic, Adobe, Qualcomm, Apple, Appwrite, Unity, Quantiphi...). Only 2 Amazon: Hannah Kwon (SDE), Manisha Choudhary (Solutions Architect).
Mentors page lists 8 LinkedIn links (arkodyutisaha, manisha-choudhary1410, jiteshudwani, amanrajbit, brijeshkdubey, makendran, jatinmehrotra, veeramani-a).

## Winners (official: https://www.wemakedevs.org/aws/first-commit/projects)
1. First prize, Ship It: Suraksha - An Agentic Companion for an aging parent. Team StarBugs (@thatoneuke, @harshendra, @shash1278). Live https://suraksha.d2dqtm6sqego9a.amplifyapp.com/ Code https://github.com/harshendram/firstcommit-hack
2. Second prize, Build It: Beacon Night Shift. Team CoffeAndCode (solo @prashantthakur77). Live https://6die6lduac6ipxkeg73nxsuvpu0yzkim.lambda-url.us-east-1.on.aws/ Code https://github.com/Prashant-thakur77/Beacon
3. Third prize, Best UI: CampusEvac. Team 3 BUILDS (@abhishekshiv, @afreen007, @imakii). Live https://main.d3skpx6qxc85hh.amplifyapp.com/ Code https://github.com/AfreenInnovates/campus
Runners-up ($1,000 credits each):
- Magpie (VOXTON: akkki007, kamran_03, sanskarjoshi, anushka_salvi) https://magpie.akkki.tech/ https://github.com/akkki007/magpie
- FreshTrace (Powerpuff Girls: saikoushik, tonystark69, rakshit__, jigglesh7) http://freshtrace.s3-website.ap-south-1.amazonaws.com/ https://github.com/RakshitChaturvedi/FreshTrace
- Expressive captions (Need sleep: sept1c, krish_jain, divue) https://4ofryng45bbr7en765off7otja0yuamo.lambda-url.ap-south-1.on.aws/ https://github.com/sept1st2c/Daks-caption_VoiceAgent-video-editing
- Factcade (solo Mohammed Ali Khan, @alikhan207) https://main.duvf6xc7vuvld.amplifyapp.com/ https://github.com/Alikhan207/Factcade.git
Best blogs (Logitech keyboard): Slate (green), KavachPay (Merntastic_4), Career Agent (viratpaglus), VaporTrace (Jeevesh Chaurasiya), Clusterbreak (mugiwara). https://www.wemakedevs.org/aws/first-commit/projects/blogs

## Repo facts (gh api, 2026-10-09)
- Suraksha: repo created 2026-09-20; 35 commits 2026-09-18..09-20. Next.js 15 on Amplify, Cognito, API GW HTTP, Lambda containers (ECR), CDK, Bedrock Nova 2 Lite, Transcribe, Polly, DynamoDB single table, Cedar ConsentGuard, EventBridge 1-min sweep, Step Functions escalation (waitForTaskToken), Secrets Manager, KMS, CloudWatch, CloudTrail. Wear OS (Kotlin) Galaxy Watch app: wake, vitals, fall. Hindi/Hinglish voice. Persona "Amma (72, Bengaluru)", children Rahul, Priya. "Most days, Suraksha says nothing at all." Family screens surface 112. AWS central.
- Beacon: solo; 88 commits 09-18..09-29 (tag first-commit-submission kept as judged); also re-entered at AssemblyAI hackathon on lablab.ai (separate branch). Bedrock Nova 2 Lite, Nova multimodal embeddings, Strands Agents SDK, Powertools, Step Functions remediation loop, CloudTrail->EventBridge, Transcribe streaming, Polly, Lambda function URLs, DynamoDB, SNS, S3+CloudFront, CloudWatch, IAM. Voice "approve fix one". "Sleep Contract". Local mode with moto, no AWS account. Safety model in code + IAM. Blog on Builder Center. AWS central (it is an AWS ops tool).
- CampusEvac: 52 commits 09-18..09-28. Next.js, React Three Fiber, Rapier, Zustand, AppSync Events (realtime), DynamoDB, Polly, SES v2, CDK, Amplify. Two-player fire drill (evacuee first person 3D + warden overhead). Demo https://youtu.be/FhgTfCz0ou8
- Magpie: repo created 2026-08-30 (before event!) but commit history 12 commits 09-19..09-20. README: Next.js 16, Prisma, Postgres, Better Auth, Bun; DEPLOY.md: ECS Fargate + ALB + RDS + Secrets Manager. Reconciliation 11,258-record synthetic batch, 100% precision.
- FreshTrace: 34 commits 09-19..09-27. ESP32-S3 e-nose (SGP41, BME280), AWS IoT Core mTLS, S3 static dashboard. README badge claims "Won 2nd Prize" and "13,660+ builders" (it was a runner-up, not 2nd prize). Demo https://www.youtube.com/watch?v=2fs2fxV5wJw
- Expressive captions: 152 commits 09-17..09-25. Hinglish captions; Sarvam + AWS Transcribe (hi-IN) aligned phonetically; librosa prosody; Bedrock Converse tool loop; Rekognition; LiveKit voice agent; Terraform; S3. "BACKEND SERVICES ARE DOWN DUE TO COST ISSUE". Demo https://youtu.be/D836OKdoY2g
- Factcade: ONE commit (2026-09-20). Amplify, API GW, Lambda, Bedrock Nova Pro via Strands, DynamoDB, EventBridge. Deterministic cascade math; "The AI never computes money". Has "Honest limits" section.

## Score rubric leak (single source, Reddit, 2026-09-28)
https://www.reddit.com/r/hackathon/comments/1ws5g7l/got_2530_in_first_commit_wemakedevs_x_aws_is_that/
u/Any-Hour-974, Ship It track, "my marks came in: 25/30": AWS Usage 8/10; Idea and Impact 6/8; Execution 4/4; Demo Video 4/4; Design and Usability 3/4. Project: location-based chat, groups expire after 1 hour (AppSync, Lambda, DynamoDB, Cognito, Bedrock). Judge comment liked AWS integration, demo, expiry/privacy/moderation. Asked where marks came from: "In the website it showing" (participant dashboard, not public).
Commenter Best_Second_3348: "I got a score of 23, lost points on design, but got 7/8 on idea and impact".
=> implied weights out of 30: AWS 10 (33%), Idea 8 (27%), Execution 4, Demo 4, Design 4 (13% each). Not confirmed by organisers. Rules say "Scores are not published" but per-team marks appear visible to the team.

## Judge comment (Siddharth Dayalwal, LinkedIn, ~2026-09-24)
https://www.linkedin.com/posts/siddharthdayalwal_aws-bharatbuildstour-hackathon-activity-7508775088029257728-RDGj
"35 projects, one very full weekend of code review". "several teams paired Amazon Bedrock with Cedar policy engines to keep autonomous agents from doing anything destructive." "India-specific problems ... GST compliance for MSMEs, DBT/welfare navigation, rural agri-advisory, campus grievance systems. Less 'generic SaaS demo'". "The best entries showed their work – real Step Functions, tested Lambda functions, working deployments; not just an architecture diagram and a promise."
=> 28 judges listed, ~35 projects each => roughly one judge per project (inference).

## Counts conflict
- Recap blog: 13,667 participants, 4,270 teams, 1,180 projects.
- WeMakeDevs LinkedIn/X 2026-09-25: "16,000+ participants". https://x.com/WeMakeDevs/status/2103406969923219680 , https://www.linkedin.com/posts/wemakedevs_16000-participants-took-part-in-the-bharat-activity-7509172451524829184-G4Yq
- FreshTrace README: "13,660+ builders".
- Winners announced around 2026-09-25 (LinkedIn/X), 5 days after close.

## Organiser posts on why winners stood out
- Suraksha (LinkedIn 2026-09-27): "pairs a Galaxy Watch with an AI voice companion built on AWS to support aging parents at home. When something seems wrong, it checks in with the parent first and contacts family if help is needed. Parents control what information gets shared." Lists Bedrock, Transcribe, Polly, DynamoDB, EventBridge, Lambda, Step Functions, Amplify. Team names: Naomi Pereira, Harshendra M, Shashwath Prabhu.
- Beacon (LinkedIn 2026-10-02, mislabelled "Ship It track winner"): transcript of demo video available in post. Structure: pain (3 AM, 4 questions) -> live flow -> safety (2 IAM roles) -> AWS list -> "it is deployed" -> lessons learned.
- CampusEvac (Instagram 2026-10-05): "turned fire evacuation training into a two-player, real-time simulation and won the Best UI prize". Team: Abhishek M Shivanagoudar, Akshay R, Afreen Hossain.
- Runners-up post 2026-09-25: Magpie (Anushka Salvi, Akshay Nazare, Kamran Pathan, Sanskar Joshi); Expressive Captions (Divya Anand, Krish Jain, Shubh Gupta); FreshTrace (Rakshit Chaturvedi, Sai Koushik Reddy, Shiva Sai, Veerabhadra Yerram); Factcade (Mohammed Ali Khan).
- Blog winners: Kavyan Hembrom (The Timetable Nobody Has / Slate), Arnav Bhandari (KavachPay), Souvik Ghosh (Career Agent), Jeevesh Chaurasiya (VaporTrace), Lakshaya Sharma (Clusterbreak).
- A LinkedIn participant post (Team The Steel Troops, Kalaa Setu): submitted 2 minutes before "late-night submission deadline", "Only to realise later that the deadline had been extended."
- Fast-track: recap says 10 students got it; names NOT public. Reddit user asked, no answer.

## Suraksha extra
docs/AWS-ARCHITECTURE.md: "cdk synth produces 63 CloudFormation resources across 17 AWS services". Also Textract, Comprehend Medical, Aurora Serverless v2, S3, SNS, Amazon Connect outbound calls, SQS DLQ, AWS Backup, X-Ray. Commit log: 3 authors, ~33 commits on Sept 18 split by area (backend, ally, wear os, web, infra), last 2 commits Sept 20. README links docs/suraksha-build-story.md which 404s (dangling link) - did not hurt.

## Deadline
- WeMakeDevs X post 2026-09-20 07:48 UTC (13:18 IST): "Submission CLOSES at 8 PM IST, submit FAST". https://x.com/WeMakeDevs/status/2101579112007811147 . Same text on Instagram https://www.instagram.com/p/DdgGgBLAp9x/
- Deadline hour was announced on the last day itself. A participant (Steel Troops) said it was later extended. Suraksha's last commit timestamp 16:00Z = 21:30 IST Sept 20.
- Submission is on wemakedevs.org own form (/aws/first-commit/submit), not Devfolio/Devpost. Env has /aws/env/submit (sign-in needed).

## Organiser tips for judges (Instagram 2026-09-20) https://www.instagram.com/p/DdgKLXSAsar/
"Write detailed answers. Explain the idea, the problem it solves and what the project actually does. If you are in a team, mention who did what." "Record a demo, 3 minutes max. A screen recording or a phone video is fine. Record it before you start the form since uploads take time" "If you have a live demo, make sure we can open it without signing up." "Be clear about AWS. Which services you used, how you used them, and what feedback you have."

## Field analysis (my parse of embedded JSON at /aws/first-commit/projects/all, 1,180 entries)
- Track tags: 592 both ship+build, 286 ship only, 297 build only, 5 none.
- 807 had a live link; 475 linked a blog; 1,051 had YouTube video.
- Team size: 463 solo, 244 two, 168 three, 305 four.
- Live hosts: none 373, amplifyapp 317, vercel 132, s3-website 51, cloudfront 30, render 23, execute-api 19, lambda-url 17, other amazonaws 19, github.io 16, netlify 11...
- Title keyword buckets (rough, overlapping): agent/AI/assistant 294; devtools/ops 103; legal/civic/gov 82; health 73; finance 73; education/campus 72; disaster/emergency/safety 59; climate/env/waste/energy ~27 strict; commerce 37; transport 35; accessibility/language 34; jobs 27; agri 12.
- "AI-Powered" in title: 62. "agent" in title: 70.
- README tech mentions (1,144 READMEs): DynamoDB 50%, Lambda 50%, Bedrock 46%, S3 45%, API Gateway 43%, Amplify 28%, SAM 26% (regex may overcount), Claude/Anthropic 26%, CloudWatch 23%, Cognito 21%, EventBridge 18%, Gemini 15.5%, Strands 15%, Hindi 14.5%, Nova 13%, Step Functions 12%, Cedar 12%, OpenAI 11%, EC2 10%, Groq 8%, Textract 8%, OpenSearch 8%, WhatsApp 8%, CDK 8%, Polly 5.5%, LocalStack 5%, Transcribe 5%, SageMaker 3%, hardware (ESP32/WearOS/IoT) 2.7%, AgentCore 2.7%, PartyRock 1%, Finch 1.5%, Firecracker 0.9%.
- Winners vs field: Step Functions in 2/7 READMEs (Suraksha, Beacon) vs 12% field; Transcribe in 3/7 vs 5%; Polly 3/7 vs 5.5%; hardware 2/7 vs 2.7%; Hindi/Hinglish 3/7 vs 14.5%; Strands 3/7 vs 15%.
- None of the 7 winners linked a blog in their submission (blogs [] for all 7), though 475 projects did.
- Live URLs: 6/7 winners on AWS hostnames (Amplify x3, Lambda URL x2, S3 website x1); Magpie custom domain resolves to 34.196.227.204 (AWS us-east-1 range, ECS behind ALB per DEPLOY.md).
- Liveness 2026-10-09: Beacon 200, CampusEvac 200, Magpie 200, FreshTrace 200, Factcade 200, Suraksha 401, Expressive captions 403 ("backend services are down due to cost issue").

## Env-related First Commit entries (non-winners; ~27 of 1,180 by strict keyword)
FloodSense (Leaf Ninjas, Patna flood routing, Hindi reports, 497 flooded segments, "0 vs 33 flooded roads crossed") https://github.com/Aayush2883/floodsense ; FloodSense (Yug Purush Balyan, lovable) ; FloodRoute (HeisenBergs, Bedrock + NASA satellite, blog) https://github.com/ameercoder22/Flood_Route ; ResQNet flood coordination ; VayuDrishti cyclone detection ; Vayu AI urban air quality (demo data, Docker, no AWS in README) ; NER Landslide Guard ; LandslideGuard AI ; HYRA climate hazard ; Kabad Saathi (kabadiwala scrap pickup, Next.js+Supabase) ; Waste2Value ; Chokho AI waste ; TrashTag ; Sustainify ; SmartPantry, UseItUp, food waste x2 ; SmartCharge EV grid-aware ; EnerFabric DER ; Tripwire electricity theft (Strands + Cedar, privacy-preserving pattern sharing) ; SolarLens solar quote checker ; polar station energy.
None of these placed.

## GitHub search (gh search repos, created 2026-09-15..25)
"bharat builds" / "first commit" / "wemakedevs aws" return ~100+ repos. Themes: civic complaints (meraward, civicproof, Nagar Sahayak), scam detection (chowkidar, Doosri Raay, VeriFYI, IsItLegit), welfare/scheme finders (adhikar, SevaSetu, JanSetu, SchemeSaathi), kirana/MSME ledgers (kiranaledger, jhola with Cedar spending rules, gst-recon-agent, DiligenceReady), AWS ops agents (leash "fix your AWS at 3 AM but can never destroy anything", whydenied, NoMeshOps, OpsPilot, aws-deployment-agent, DeployMate, NapkinCloud), health (medbridge, Vouchmark insurance rejections, BillWise), legal docs (cleardoc, lapse-138), disaster (aashroy flood shelters, ARES, CrisisRelay, pukaar), education (padhai-exam-saathi, kavach), food redistribution (Bharat-Builds-redistribution-service).

## Data file
Full parsed list of 1,180 First Commit projects (title, team, members, tracks, video, code, live, blogs): /Users/sher/project/hacker/research/raw/firstcommit_projects.json (parsed from embedded JSON in https://www.wemakedevs.org/aws/first-commit/projects/all on 2026-10-09).

## Extra checks
- FloodSense (Leaf Ninjas) README names Bedrock, IoT Core, SNS, S3, DynamoDB, AWS Location Service. Did not place.
- Tripwire README: Cedar, Strands, Amazon Verified Permissions, EC2. Did not place.
- Kabad Saathi README: zero mentions of AWS/Amazon (Next.js + Supabase + Vercel). Did not place.
- Instagram reel title seen in search: '60 students get fast-tracked to interviews' (6 events x 10).

## Verification
Fact-check done 2026-10-09 ~18:40 IST. I re-opened each source below. Verdicts: confirmed / partly / refuted / unverifiable.

1. Winners, teams, prizes, repos - CONFIRMED.
   - https://www.wemakedevs.org/aws/first-commit/projects lists: First prize / Ship It Rs 2,00,000 + $3,000 (Suraksha, StarBugs); Second / Build It Rs 1,50,000 + $2,000 (Beacon Night Shift, CoffeAndCode); Third / Best UI Rs 1,00,000 + $1,000 (CampusEvac, 3 BUILDS); four runners-up at $1,000 credits each (Magpie/VOXTON, FreshTrace/Powerpuff Girls, Expressive captions/Need sleep, Factcade/Mohammed Ali Khan).
   - Full names match the recap blog (2026-10-07) and the WeMakeDevs X post (2026-09-25 08:51Z) and LinkedIn runners-up post (2026-09-25).
   - First Commit page: "one submission is considered for all three". Recap: "every submission was in the running for all three prizes".

2. Rubric weights 10/8/4/4/4 - PARTLY.
   - Reddit post exists as quoted (u/Any-Hour-974, 2026-09-28): Ship It, 25/30 = AWS Usage 8/10, Idea 6/8, Execution 4/4, Demo 4/4, Design 3/4; "In the website it showing". Second commenter: 23, 7/8 on idea.
   - Caveat: the maxima are read off one self-report. The First Commit page says "Cloud usage counts only in Ship It, where architecture and cost decisions are part of the work. Best UI is judged on design and usability." So the split may differ by prize. Rules: "Scores are not published". Env Hacks judges "each track on its own". Treat 10/8/4/4/4 as a hint, not a fact.

3. Scale - CONFIRMED.
   - Recap: "13,667 participants signed up, 4,270 teams formed ... 1,180 projects"; "1,400+ builders" at Polaris.
   - X 2026-09-25 and LinkedIn 2026-09-25: "16,000+ participants". X 2026-09-20: "1,400 people showed up".
   - Live /projects/all HTML (curl today) contains "1180 projects".

4. Deadline 8 PM IST Sunday, announced "that morning", later extended - PARTLY.
   - X https://x.com/WeMakeDevs/status/2101579112007811147 posted 07:48 UTC = 13:18 IST Sun Sept 20: "Submission CLOSES at 8 PM IST". Same on Instagram DdgGgBLAp9x (07:58 UTC). That is early afternoon, not morning. Earlier email/Discord notices cannot be ruled out.
   - Another organiser post at 11:59 UTC = 17:29 IST Sept 20 (X 2101642412372136325) said only "Submissions close TODAY".
   - First Commit schedule page still says "The hours are being finalised".
   - Extension: only one participant (Team The Steel Troops) says "the late-night submission deadline ... had been extended". That post shows in the "More relevant posts" sidebar of the cited WeMakeDevs LinkedIn page; it is not WeMakeDevs' own text. No organiser post about an extension found.
   - New evidence: winning repos hold work after 8 PM IST. Beacon tag first-commit-submission ("exactly as judged", tag made 2026-09-29) includes commits up to 2026-09-20T18:14Z = 23:44 IST. Suraksha last commit 16:00Z = 21:30 IST; repo pushed_at 20:09Z = 01:39 IST Sept 21. So either the window ran late or judges read repos after the form closed. Do not plan on an extension.

5. Organiser submission tips - CONFIRMED. Instagram DdgKLXSAsar (2026-09-20 08:30 UTC) text as quoted. Also: "put it on YouTube as unlisted or public". A commenter asked "Would providing demo credentials work" - no visible answer.

6. Judge quote and panel - CONFIRMED (inference part unverifiable).
   - Siddharth Dayalwal LinkedIn (2026-09-24): "35 projects, one very full weekend of code review"; "several teams paired Amazon Bedrock with Cedar policy engines"; "GST compliance for MSMEs, DBT/welfare navigation, rural agri-advisory, campus grievance systems"; "The best entries showed their work - real Step Functions, tested Lambda functions, working deployments; not just an architecture diagram and a promise."
   - He is on the judges page (Senior Developer Community Specialist, Storyblok). Judges page lists 28 people; 2 at Amazon (Hannah Kwon SDE, Manisha Choudhary SA).
   - "About one judge per project" is inference. 28 x 35 = 980 < 1,180, so either some judges did more or not all got full review. Unverifiable.

7. Repo hygiene - CONFIRMED, with additions.
   - Factcade: 1 commit, 2026-09-20T13:57Z (19:27 IST), repo created 2026-09-19.
   - Magpie: created 2026-08-30T10:19Z; 12 commits dated 2026-09-19 to 2026-09-20; one branch (main); pushed_at 2026-09-22 (a push after close).
   - Added: Suraksha repo created 2026-09-20 11:54Z but its 35 commits date from 2026-09-18 (history pushed in late). Beacon repo created 2026-09-20 05:56Z, 87 commits from 2026-09-18. Repo creation date did not matter; commit dates inside the event window did.
   - FreshTrace README badge says "Won 2nd Prize" but the official page lists it as a runner-up. README itself also says "Runner-Up" and "$1,000". Confirmed.

8. No winner linked a blog; 475 projects did; blog winners Slate, KavachPay, Career Agent, VaporTrace, Clusterbreak - CONFIRMED. I re-parsed the live /projects/all HTML: 475 entries with non-empty blogs, 705 empty; Suraksha, Beacon, Factcade blogs:[] . Blogs page lists the 5 winners; LinkedIn blog-winner post gives author names.

9. "Three of seven used Transcribe and Polly" - PARTLY. README counts today: Transcribe in Suraksha, Beacon, Expressive Captions (3/7); Polly in Suraksha, Beacon, CampusEvac (3/7). Only 2/7 use both; 4/7 use at least one. Field % (5%) is the researcher's own scan; not re-run.

10. All 7 winners live on AWS; Suraksha 63 resources / 17 services - CONFIRMED.
   - Winner live URLs in page JSON: Amplify x3 (Suraksha, CampusEvac, Factcade), Lambda URL x2 (Beacon, Expressive Captions), S3 website x1 (FreshTrace), magpie.akkki.tech -> 34.196.227.204 (dig today; did not check block owner).
   - Today: Beacon 200, Factcade 200, Suraksha 401.
   - Suraksha docs/AWS-ARCHITECTURE.md line 8: "63 CloudFormation resources across 17 AWS services".
   - Rs 20 lakh for Env Hacks: in recap ("There is a ₹20 lakh prize pool") and LinkedIn Suraksha post 2026-09-27 ("compete for ₹20 lakh in prizes"). Confirmed.
   - Fast-track names: recap gives none; rules say at most ten, "Ten is a ceiling, not a promise". Confirmed not public on pages checked.
