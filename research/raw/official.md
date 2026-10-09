# Official rules and live event intel: Environmental Hacks 2026

Checked Fri 2026-10-09, about 18:15 to 19:30 IST. All URLs below were opened unless marked "snippet only".

## 1. Deadline

- Sunday 11 Oct 2026, 8:00 PM IST. Two official sources say so:
  - Luma page (WeMakeDevs is host): "8:00 PM | Wrap up. Online submissions stay open until Sunday, 11 Oct, 8:00 PM IST". https://luma.com/env
  - Aayush Sharma (COO, WeMakeDevs) blog, Oct 6: "Online submissions stay open until Sunday 11 October, 8:00 PM IST, so the room closing is not your deadline." Also: "submissions close at 8 PM on Sunday." https://www.wemakedevs.org/blogs/what-is-happening-in-delhi-on-10-october
- Matches the judge call: "Judging is online, starting Sunday at 8 PM, with scores due by Wednesday night." X post Oct 5: https://x.com/WeMakeDevs/status/2107074912817184932 ; LinkedIn: https://www.linkedin.com/posts/wemakedevs_indias-builders-are-tackling-some-of-activity-7512840624857890818-eiLb ; Instagram: https://www.instagram.com/p/DeHIzQ-ggp4/ ; judge form: https://bit.ly/wmd-judge
- The schedule page still says "The hours are being finalised" (re-checked about 18:20 IST Oct 9). https://www.wemakedevs.org/aws/env/schedule
- Rules: "Stop at the deadline on that hackathon's page." "Once the deadline ... passes, the form closes." https://www.wemakedevs.org/aws/env/rules
- Kunal's Builder Center post: "Sunday, 11 October: submissions close" (no hour). https://builder.aws.com/post/3KGj9FkeKgzYIxKTNs7AFg4EcpU_p/environmental-hacks-the-second-bharat-builds-hackathon
- No Oct 8 kickoff stream found on YouTube @WeMakeDevs. RSS feed newest items: Oct 7 (Agent Harness SF), Oct 1 ("First Commit: The First Hackathon of the Bharat Builds Tour", 98 s, no captions). Streams tab: newest stream "2 months ago". Channel id UC173J1C5W7tmxG_nUkri_iA.
- WhatsApp channel page: "Invite link is not valid" in a browser without the app. Discord needs login. Not read.

## 2. Submission form

- URL: https://www.wemakedevs.org/aws/env/submit . Needs sign-in. Fields are loaded from the server after login, so I could not list them.
- From site JS (public bundle, chunk 2rqmd3_aw0vju.js and 1ijvl-yovdji5.js):
  - Answer types: "short", "long", "link". YouTube URL parser accepts youtu.be, watch, shorts, live, embed.
  - "Fill in the details for everyone on your team. You can edit your submission until the deadline."
  - "What you save replaces what's filed, answer for answer ... you can come back and change it again until submissions close."
  - "Withdraw project ... The roster opens back up, and the team can submit again."
  - "Your team has already filed a project ... there's only one submission per team."
  - "Only registered hackers can submit."
  - The UI has "Judges' marks" and "The judge's comment" views ("There are no marks on file for this project...").
- What the rules say a submission is: public repo + YouTube video under 3 min (public or unlisted, check signed-out) + short writeup (problem, build, where AWS fits). AI coding tools must be listed in the writeup. https://www.wemakedevs.org/aws/env/rules
- Blog: "Publish it on AWS Builder Center and link it in your submission." https://www.wemakedevs.org/aws/env
- Track: FAQ "Do I have to pick a track? Yes, pick the one your project fits best." https://www.wemakedevs.org/aws/env
- First Commit public project data (1180 entries, from https://www.wemakedevs.org/aws/first-commit/projects/all) has keys: title, team, members, tracks, video (youtubeId or url+host), code, live, blogs[]. So the form at least took: title, team, members, track, video link, repo link, live link, blog links.

## 3. "Rs 20 lakh"

- Not on https://www.wemakedevs.org/aws/env (prize board lists items only).
- It is on official channels:
  - Kunal Kushwaha blog Oct 7: "There is a ₹20 lakh prize pool". https://www.wemakedevs.org/blogs/first-commit-hackathon-recap-and-whats-next
  - Kunal Builder Center post: "Prizes worth ₹20 lakh". (link above)
  - Kunal LinkedIn: "₹20 lakh in prizes" https://www.linkedin.com/posts/kunal-kushwaha_hackathon-02-of-the-bharat-builds-tour-powered-activity-7509488524539244544-nx-8 ; "20 lakh in prizes" https://www.linkedin.com/posts/kunal-kushwaha_we-have-over-7000-people-registered-for-activity-7513579157843333120-N4gf
  - WeMakeDevs Instagram Sept 28: "₹20 lakh worth of prizes" https://www.instagram.com/p/Dd0yA5NgnVT/ ; Oct 7: "₹20 lakh prize pool" https://www.instagram.com/p/DeNgxiDz_k5/
- Same "₹20 lakh" was used for First Commit (tour blog, Aug 31: "₹20 lakh in prizes for First Commit") https://www.wemakedevs.org/blogs/bharat-builds-tour
- Reconcile (my arithmetic): cash 3 x ₹2,00,000 = ₹6,00,000. Credits 3 x $2,000 + 4 x $1,000 = $10,000. AirPods x 5. Swag. At roughly ₹85-90 per USD (assumed, not checked) credits are about ₹8.5-9 lakh. Total about ₹15-16 lakh plus gadgets. So ₹20 lakh is a rounded "worth" figure that counts credits and gadgets. First Commit had the same shape: ₹4.5 lakh cash + $10,000 credits + keyboards. Six stops x ₹20 lakh lines up with "₹1 crore" across the tour.
- Search snippet only (not confirmed on the page I opened): "$20K+ in prizes. $10K in AWS credits." attributed to an Instagram post.

## 4. Credits

- Env page credits box (#credits): "Use your free trial credits first ... Request ours only once they run out." "$25 In AWS credits, from us. One code, applied to your AWS account ... One form per team, filled by the team leader only, or yourself if you're participating solo." "Codes are issued to registered participants." Debit cards and RuPay work; verification charge about ₹2.
- Form: https://forms.gle/b453U3c63mfBXHVr5 (title "Request more AWS credits"). Text: "If you've exhausted your $200 in free trial credits and still need more, you can request an extra $25 ... with your team and project details." "Only one person per team needs to submit." "You'll get the codes in your email. To claim the credits you'll need a card or UPI added to your AWS account." Contact: contact@wemakedevs.org.
- AWS Free Tier FAQ: "your Free plan is ineligible for other promotional credits or incentive offers ... These limitations are removed by upgrading to a Paid plan." Also: "Your Free plan is limited from accessing a subset of AWS services". Paid plan lets you set a monthly spend limit from $20. https://aws.amazon.com/free/free-tier-faqs/
  - So the $25 code likely needs an upgrade to Paid plan. Not stated by WeMakeDevs.
- AWS Free Tier page: $100 at sign-up, up to $100 more from activities; account on Free plan closes after 6 months or when credits run out. https://aws.amazon.com/free/
- AWS FAQ mentions a "new sign-up experience in October 2026". New accounts may have "advanced features" (multiple regions, granular permissions) off by default. Check in the console.
- First Commit gave "$100 in AWS credits per participant" on registration (blog Sept 16). Env does not repeat that. https://www.wemakedevs.org/blogs/the-only-resource-you-need-for-bharat-builds
- Student verification rewards: Skill Builder 1 year ($449) on verify + photo + about; 7 badges $10 credits; 14 badges $20 credits; 21 badges $100 cert voucher. https://builder.aws.com/student-rewards (via https://bit.ly/abc-verify)

## 5. Community partners and blogs

- /aws/env/community-partners: heading only, no partners listed. https://www.wemakedevs.org/aws/env/community-partners
- Blogs tagged aws (9): https://www.wemakedevs.org/blogs?tag=aws
  1. First Commit recap (Kunal, Oct 7) https://www.wemakedevs.org/blogs/first-commit-hackathon-recap-and-whats-next
  2. What is happening in Delhi on 10 Oct (Aayush, Oct 6) https://www.wemakedevs.org/blogs/what-is-happening-in-delhi-on-10-october
  3. Announcing Environmental Hacks (Aayush, Sept 29) https://www.wemakedevs.org/blogs/announcing-environmental-hacks
  4. Live-data project on AWS serverless (Aayush, Sept 18) https://www.wemakedevs.org/blogs/how-to-build-a-live-data-project-on-the-aws-serverless-stack
  5. Real-data AI project on AWS open source stack (Aayush, Sept 18) https://www.wemakedevs.org/blogs/how-to-build-a-real-data-ai-project-on-the-aws-open-source-stack
  6. The only resource you need for Bharat Builds (Aayush, Sept 16) https://www.wemakedevs.org/blogs/the-only-resource-you-need-for-bharat-builds
  7. How to plan a cloud project (Aayush, Sept 15) https://www.wemakedevs.org/blogs/how-to-plan-a-cloud-project
  8. Stop waiting to feel ready (Sachin Sharma, Aug 31) https://www.wemakedevs.org/blogs/bharat-builds-cloud-and-ai
  9. Announcing the Bharat Builds Tour (Kunal, Aug 31) https://www.wemakedevs.org/blogs/bharat-builds-tour
- Each blog has a markdown copy at <url>/llms.txt.

Key quotes:
- Announcing Env: "Environment hackathons produce a lot of dashboards ... a map mostly tells people something they can already sense. The projects that stand out go one step past that and answer what somebody should do differently because of it." "The second half [what changes for the people] is where most projects lose points." "You do not need a new data source to do this well. You need to know who you are building for."
- Same blog, starting points: school principal morning message (PE/assembly indoors?); delivery rider cleanest two hours; tanker predictor for one housing society; monsoon commute helper from resident reports; segregation checker (photo, model, human confirms, building score over a month); rooftop solar payback by pincode with real irradiance.
- Same blog, data: CPCB AQI https://airquality.cpcb.gov.in/AQI_India/ ; OpenAQ https://docs.openaq.org/ ; NASA FIRMS https://firms.modaps.eosdis.nasa.gov/ ; IMD https://mausam.imd.gov.in/ ; India-WRIS https://indiawris.gov.in/ ; data.gov.in ; Registry of Open Data on AWS https://registry.opendata.aws/ (Sentinel-2, Landsat, NOAA GOES, NASA POWER in S3). "For a hackathon where building on AWS is part of the judging, starting from data that already lives there saves you a day."
- Same blog: "Say plainly in your demo where your numbers come from and how fresh they are. That honesty reads as competence."
- Same blog: blog "takes an hour on Sunday evening, it is the part most teams skip".
- Plan a cloud project: "Judges look at whether one thing works from beginning to end." Demo split: about 20 s user and problem, 90 s flow running, 30 s architecture, rest on one failure case and what's next. "Record the screen instead of talking over slides ... say plainly what is not built." Bad input should give a readable message, slow steps a visible state.
- Delhi blog: Strands "treats the model as a swappable provider, so the same code runs against something local or against Amazon Bedrock." Showcase 7-8 PM Sat is "a dress rehearsal" for the video.
- Live-data blog (CitationPulse): Cognito + API Gateway JWT; S3 presigned upload; Step Functions task token + SQS + worker; catch + DLQ + conditional writes; DynamoDB conditional counter as budget cap; API throttling. "find the one command that proves your claim and have it ready." "A tool that says what it cannot see is more believable".
- OSS blog (SchemeProof): Strands + Ollama llama3.2:3b local, Cedar, OpenSearch, SAM, LocalStack for S3/DynamoDB. "the model never decides eligibility". Hash the source bytes; check model output against a contract; deterministic fallback.

## 6. Builder Center blog

- Create: top nav "+" then "Create article"; fill required fields; Preview; Publish; wait for automated moderation scan. Edit/archive/delete from Manage Content. https://builder.aws.com/faq
- Rules: follow AWS Builder Terms; automated checks for broken links, profanity, title and description length. Use H1 > H2 > H3, alt text, 4.5:1 contrast, plain language, short paragraphs. Up to 5 tags, pre-defined only. Low-quality = repetitive, off-topic, no value; AWS may remove. No word limit found.
- First Commit top 5 blogs (Logitech keyboards): https://www.wemakedevs.org/aws/first-commit/projects/blogs
  - Slate, "The Timetable Nobody Has" https://builder.aws.com/content/3JbRGhy5MZZIjshWBtVBSAZOD5s/the-timetable-nobody-has (story of three pivots, real data, a bug that passed tests, Cedar policy, cost $0.00, "three things I would tell myself")
  - KavachPay https://builder.aws.com/content/3JavxFliBNoQwLKcvcf9joj8AbO/kavachpay-building-a-financial-control-plane-for-autonomous-ai-agents-on-aws
  - Career Agent https://builder.aws.com/content/3JahnCztfNFf3YQG10Gg5PpSoUA/from-apply-for-me-to-a-submission-receipt-building-career-agent-on-aws
  - VaporTrace https://builder.aws.com/content/3JZZVJmLVcQYvVrIJSopPEqOhhH/vaportrace-real-time-distributed-tracing-for-aws-event-pipelines
  - Clusterbreak https://builder.aws.com/content/3JbSrrclnBMZI4w3tpz5sy7uCvp/break-your-rig-before-you-buy-it-simulating-local-ai-clusters-then-deployingthem-on-aws
- Kunal kickoff LinkedIn Oct 8: "write a blog on your journey and share it on AWS Builder Center by Sunday. 5 lucky winners get the new AirPods 5". https://www.linkedin.com/posts/kunal-kushwaha_environmental-hacks-kicks-off-today-the-activity-7513893728399556608-Vyt1
- First Commit: 475 of 1180 projects (40%) linked a blog. 807 (68%) had a live link. 1051 (89%) had a YouTube video; the rest Drive or other.

## 7. Judges and statements

- No judges page for Env (https://www.wemakedevs.org/aws/env/judges returns 404). No weights published.
- Judges are recruited by an open Google Form (owner Kunal Kushwaha): "Judging is ONLINE, opens at 8 pm on Sunday, and you'll have until Wednesday night". Asks "How many projects would you like to judge ... It should take 5 minutes to judge 1 project." https://bit.ly/wmd-judge
- Instagram comment under Oct 7 post: "Glad to be on the online Judging Panel for this". https://www.instagram.com/p/DeNgxiDz_k5/
- Kunal LinkedIn: on 10 Oct "AWS engineers and judges there for workshops and project feedback". https://www.linkedin.com/posts/kunal-kushwaha_what-a-start-to-the-bharat-builds-tour-by-activity-7510677179098165248-nh5m
- First Commit judges: 28 people, mostly DevRel/engineers from New Relic, Adobe, Qualcomm, Appwrite, Apple, Unity, Quantiphi; 2 from Amazon (Hannah Kwon SDE, Manisha Choudhary SA). https://www.wemakedevs.org/aws/first-commit/judges
- First Commit judge Siddharth Dayalwal (LinkedIn, Sept 24): judged 35 projects. "several teams paired Amazon Bedrock with Cedar policy engines"; "India-specific problems, seriously tackled"; "The best entries showed their work – real Step Functions, tested Lambda functions, working deployments; not just an architecture diagram and a promise." https://www.linkedin.com/posts/siddharthdayalwal_aws-bharatbuildstour-hackathon-activity-7508775088029257728-RDGj
- 1180 projects / 28 judges = about 42 each. Fits 35. Suggests one judge per project in round one (my inference).
- WeMakeDevs X post on criteria, Sept 28 (same 5 points). https://x.com/WeMakeDevs/status/2104544066193207807
- Jess Gilmore (AWS) quote in tour blog: "Exposure to technology isn't the same as experience with it. Confidence comes from doing, from building something real, end to end." https://www.wemakedevs.org/blogs/bharat-builds-tour
- Kunal BC post: "What matters is that it works and that it solves something real."
- Arkodyuti Saha: no direct statement found. Listed as mentor; in Delhi Oct 10 with Lindsey Erlick and Jessica Gilmore. https://www.instagram.com/p/DeMHI30gFXM/
- Luma agenda names: Jessica Gilmore welcome 9:45; Strands workshop 11:00-12:30 by Chanpreet Singh and Shweta Chopra.
- First Commit criteria had "what you learned" instead of "design and usability" (plan-a-cloud-project blog). Env swapped it.
- Fast-track count conflict: site and rules say up to 10. Kunal's Oct 8 LinkedIn says "top 5 students this week".
- WeMakeDevs socials on Oct 8-9 highlight First Commit winners by naming AWS services (FreshTrace: IoT Core, SQS, EC2, RDS, SNS; Magpie: ECS Fargate, RDS, Secrets Manager, ALB). https://www.instagram.com/wemakedevs/reel/DeQcK_eB2Hk/ ; https://www.instagram.com/wemakedevs/reel/DeOdbYXgbQC/
- Counts: 6,377 registered (search snippet of schedule page, time unknown); 7,000+ (Oct 7); 8,000+ (Oct 8 and Oct 9 posts); tour 20,000+ (Oct 7).

## 8. First Commit winners (official)

https://www.wemakedevs.org/aws/first-commit/projects
- 1st / Ship It: Suraksha (StarBugs), agentic companion for an aging parent. Bedrock, Cedar, Lambda, DynamoDB, Polly, Transcribe, EventBridge. Repo created 2026-09-20 11:54 UTC (last day). https://github.com/harshendram/firstcommit-hack ; live https://suraksha.d2dqtm6sqego9a.amplifyapp.com/ ; video https://youtu.be/XVr34XeXvlE
- 2nd / Build It: Beacon Night Shift (solo, Prashant Thakur). Strands agent on Bedrock Nova 2 Lite, Step Functions, CloudWatch, Lambda URL. Got fast-track interview. https://github.com/Prashant-thakur77/Beacon ; video https://youtu.be/a3SxZHvIkCo
- 3rd / Best UI: CampusEvac (3 BUILDS), two-player fire drill game; CDK + Amplify. https://github.com/AfreenInnovates/campus
- Runners-up: Magpie, FreshTrace, Expressive captions, Factcade.
- Environment-ish First Commit entries (open theme then): FloodRoute (Bedrock + NASA data, blog), FloodSense x2, ResQNet, Vayu (air quality), SolarLens, SmartCharge, EnerFabric, PulseGrid, food-waste apps x4, Chokho AI, Waste2Value, TrashTag, Sustainify, HYRA, disaster apps. Only FreshTrace (food spoilage) placed.

## 9. Rules gray areas (ask contact@wemakedevs.org or Discord)

- Rules page says "Something unclear? Ask us before the clock starts ... We would much rather answer a question than disqualify a project." contact@wemakedevs.org
1. Confirm deadline hour: 8:00 PM IST Sun Oct 11? Schedule page blank.
2. Pre-trained public models and public datasets: allowed as "open-source libraries ... public APIs". Our own weights or data pipelines made before Oct 8: not clear. "If you began the project before the hackathon opened, it does not qualify, even if you rewrote it."
3. LocalStack: listed under Build It on the event page, so it counts by their list. It is not an AWS project (LocalStack GmbH). Safer to pair with Strands, Cedar, SAM or a deployed service.
4. Non-AWS LLMs: page says "you're free to bring in any other tools you like". Organiser tutorial used Ollama llama3.2:3b through Strands. Strands lists Bedrock, Anthropic, OpenAI, Google, Ollama "and more" (https://strandsagents.com/). Ask if NVIDIA hosted endpoints are fine.
5. $25 code and Free plan: AWS says Free plan cannot take promo credits. Ask if the code needs a Paid plan upgrade.
6. Video host: rules say YouTube. 76 First Commit entries used Drive or other and were still listed. Use YouTube.
7. Commits after deadline: Beacon repo was pushed Oct 4, two weeks after its deadline. Rules: judges score what was submitted. Tag a release at submit time.
8. Repo created before Oct 8: rules disqualify history that does not match dates. Make a new repo on or after Oct 8.
9. Fast-track: 5 or 10 students?
10. Blog: must it be published before 8 PM Sunday, or can the link be added later? Form is editable until close.
11. Each teammate must register and check in to Env with their own account; captain cannot add others (rules).

## Verification

Fact-check run Fri 9 Oct 2026, about 18:45 IST. I re-opened each source. Verdicts below.

### New primary source: the WeMakeDevs backend API
- The site's JS calls a public API at https://wemakedevs-server.onrender.com (found in chunk /_next/static/immutable/chunks/4043_aed2zwe3.js).
- GET https://wemakedevs-server.onrender.com/hackathons/env returned (no login):
  - start_date 2026-10-08T02:30:00Z = Thu 8 Oct, 8:00 AM IST
  - submissions_open_at 2026-10-11T02:30:00Z = Sun 11 Oct, 8:00 AM IST
  - end_date 2026-10-11T14:30:00Z = Sun 11 Oct, 8:00 PM IST
  - judging_deadline null; submission_questions null (form not yet set up); registration_count 8570; max_team_size 4
- The submit page JS shows "Submissions aren't open yet ... the submission form opens on <date>" before submissions_open_at, and "<title> wrapped on <date>, and nothing new goes in after that" after end_date.
- So the form is open for 12 hours only: Sun 8 AM to 8 PM IST. We cannot file anything before Sunday 8 AM.
- GET https://wemakedevs-server.onrender.com/hackathons/first-commit: end_date 2026-09-21T04:30:00Z = Mon 21 Sept, 10:00 AM IST, but WeMakeDevs posted "Submission CLOSES at 8 PM IST" on Sun 20 Sept (https://www.instagram.com/p/DdgGgBLAp9x/). So the backend cutoff for First Commit ran 14 hours past the public deadline (grace window or later edit; record updated 2026-10-02). Do not count on that for Env. Env's end_date matches 8 PM IST exactly.
- First Commit judging_deadline 2026-09-23T14:30:00Z = Wed 8 PM IST. Matches "until Wednesday night".
- First Commit registration_count 13667 (matches Kunal's recap). 1,180 / 13,667 = 8.6%.
- The First Commit schedule page also still says "The hours are being finalised" after the event ended. That page never got hours. Do not wait for it.

### First Commit's real submission form (from the API; best guide to Env's form)
30 questions. Types short, long, link, checkbox. Only one has a length cap.
- Team leader WeMakeDevs username (required), members 2-4 (optional)
- GitHub profile: leader required, others optional
- LinkedIn: leader REQUIRED, others optional
- Resume link (public, e.g. Drive): "This is necessary to be considered for Amazon Fast Track Interviews" (leader); optional for others
- Project title (required, max 120 chars)
- Track (checkbox: Built it / Ship it)
- GitHub repo link (required, primary): "Make sure it's public, and that it has a proper README and a commit history so judges can see how the project came together."
- Deployed link (optional)
- YouTube demo link (required): under 3 min, covering "About the project; Tech stack and architecture; How you have used AWS; Learning and growth (optional)"
- "What does your project do?" (required, long): problem and who it is for
- "How did you use AWS in your project?" (required, long): name the open source tools or services
- Blog links (optional): "You can share upto four blogs below, one from each team member. The blog prizes are individual."
- Contributions per member (leader required): "Individual roles and key deliverables"
- "Help us evaluate you: your feedback on the AWS services you used" (REQUIRED): what you did not like, name services. "Specific feedback shows us you understood the tools in detail."
- "What did you like about the AWS services you used?" (REQUIRED): name services, be specific.
- No "AI tools used" field at First Commit, but the tour rules require listing AI tools in the writeup.

### Verdicts
1. Deadline Sun 11 Oct 8:00 PM IST. CONFIRMED. Luma: "Online submissions stay open until Sunday, 11 Oct, 8:00 PM IST". Aayush blog (Oct 6) same words. API end_date 14:30Z. Correction to add: form opens only Sun 8:00 AM IST (API submissions_open_at). Schedule page re-checked: still no hours.
2. Judging: "It should take 5 minutes to judge 1 project"; "Judging is ONLINE, opens at 8 pm on Sunday, and you'll have until Wednesday night". CONFIRMED (form HTML via bit.ly/wmd-judge). Nuance: the form is a series-wide "Bharat Builds Judging Interest Form", not Env-only. First Commit judges page lists 28 names, incl. 2 Amazon staff (Hannah Kwon SDE, Manisha Choudhary SA); the rest are outside engineers, founders and devrel. Siddharth Dayalwal: "35 projects" CONFIRMED. I did not re-check /aws/env/judges.
3. Edit or withdraw until close; one per team. CONFIRMED in chunk 2rqmd3_aw0vju.js. Extra facts: "the roster locks the moment it lands: nobody joins, leaves, or gets invited while it stands. Anyone on the team can edit it until submissions close, and the leader can withdraw it." Withdraw: "the answers are gone rather than saved as a draft". "there's only one submission per team". So finish the roster before filing.
4. Form fields. PARTLY. Env questions are not set yet (API null). The researcher's guess misses: leader LinkedIn (required), resume link (needed for fast-track), per-member contributions, and two required AWS-feedback answers. See list above.
5. Organiser advice. CONFIRMED word for word in https://www.wemakedevs.org/blogs/announcing-environmental-hacks: "a map mostly tells people something they can already sense"; "The second half is where most projects lose points"; "starting from data that already lives there saves you a day"; "Say plainly in your demo where your numbers come from and how fresh they are."
6. Ollama via Strands. CONFIRMED. Tutorial prerequisites list "Ollama with llama3.2:3b"; code uses OllamaModel in a Strands Agent. Env page: "Beyond that, you're free to bring in any other tools you like." Note: this tutorial was written for First Commit (Sept 18). It also calls LocalStack "AWS engineering, released openly", which is wrong (LocalStack is a third-party company), but LocalStack is on the Env Build It list.
7. Rs 20 lakh. CONFIRMED as official messaging. Kunal recap blog (Oct 7): "There is a ₹20 lakh prize pool, and ten students from the strongest projects get a fast-track interview". Search snippets: WeMakeDevs X and Instagram, Kunal LinkedIn. Builder Center post body did not load (only its summary). The "Plan a cloud project" blog said First Commit "carries ₹20 worth in cash, credits and gadgets" (typo for lakh), which supports the reading that the figure counts credits and gadgets.
8. $25 credit and Paid plan. PARTLY. Form text CONFIRMED: "If you've exhausted your $200 ... request an extra $25 ... Only one person per team needs to submit ... you'll need a card or UPI added". The form does not say "team leader only" (Env page text not re-seen in my fetch). AWS FAQ CONFIRMED: "your Free plan is ineligible for other promotional credits ... These limitations are removed by upgrading to a Paid plan." Also: "Once your credits are exhausted, you will need to upgrade to a Paid plan to continue using your account", and an expired Free plan suspends the account. So using the $25 after the $200 almost surely means a Paid plan. Still an inference; WeMakeDevs has not said it.
9. Fast-track count. CONFIRMED conflict. Rules: "At most ten ... Ten is a ceiling, not a promise." Env page: "Top 10 students". Kunal recap blog: "ten students". Kunal LinkedIn Oct 8: "the top 5 students this week get fast-track interviews". Rules also require student status verified "before the hackathon you enter".
10. First Commit winners. CONFIRMED on /aws/first-commit/projects: Suraksha Rs 2,00,000 + $3,000; Beacon Rs 1,50,000 + $2,000; CampusEvac Rs 1,00,000 + $1,000; 4 runners-up $1,000 each. gh: Suraksha repo created 2026-09-20T11:54Z, last push 2026-09-20T20:09Z (= Mon 01:39 IST, after the public 8 PM cutoff but inside the backend end_date). Beacon created 2026-09-20T05:56Z, last push 2026-10-04. READMEs name Strands, Nova 2, Step Functions, CloudWatch, Function URL, moto (Beacon) and Bedrock, Cedar, Lambda, DynamoDB, Polly, Transcribe, EventBridge, Amplify (Suraksha). Dayalwal quotes CONFIRMED (LinkedIn, Sept 24).

### Other checks
- Registration: API says 8,570 for Env at about 18:45 IST Oct 9. First Commit platform count was 13,667, not 16,000 (16,000 is a social and Builder Center figure). At 8.6%, Env would get about 740 entries. Still a guess.
- Blog count: re-parsed firstcommit_projects.json: 1,180 projects, 475 with blogs. Same file, so not independent.
- Demo timing recipe: CONFIRMED in "How to Plan a Cloud Project" (Sept 15), written for First Commit.
- Only one First Commit title mentions air quality ("Vayu Ai-Satellite-Ground Fusion for Urban Air Quality Intelligence"). CONFIRMED in the JSON.
