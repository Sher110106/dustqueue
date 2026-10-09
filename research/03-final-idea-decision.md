# Final idea decision: DustQueue

Decision date: 9 October 2026. Track: **Air**.

## The idea

**DustQueue turns construction-site compliance signals into the next five inspection visits.** A DPCC field officer sees which sites are most urgent, why each site is ranked, who owns the visit, and whether the issue was actually closed.

One-sentence pitch:

> Construction sites already report dust-control data. DustQueue tells the enforcement team which site to inspect today, explains the reason, and keeps the proof that the visit happened.

## Why this is the final choice

DustQueue is the only exact overlap between the independent GPT-6.1-Sol generation pass and the GPT-6-Luna red-team pass. It also fits the organiser's judging language: a named user, a real decision, one feature that works end to end, and a visible change for people living with the problem.

It has the lowest execution risk of the finalists:

- It does not depend on a live CPCB, DPCC, IMD, satellite, Bedrock or NVIDIA endpoint.
- A small fixture dataset can model the DPCC Dust Portal 2.0 fields honestly and visibly.
- The workflow is easy to prove: five sites in, one inspection assigned, one evidence result uploaded, one case closed.
- AWS can be the working system, not decoration: S3, Lambda, API Gateway, DynamoDB, EventBridge, SNS and CloudWatch all have clear jobs.
- The product is narrower and more defensible than a generic AQI dashboard, construction-monitoring portal or autonomous violation detector.

The main alternatives were rejected for practical reasons. BWG Ready is very buildable but risks looking like a compliance form and has a less immediate environmental moment. MoundWatch is novel but depends on Carbon Mapper terms, intermittent plumes and expiring image URLs. StormDuty/HotspotOps has a strong action loop but sits in the most crowded flood space and would require replayed data.

## What we will build

### User and inputs

The user is one DPCC-style field inspector or ward dust-cell coordinator. The demo data is a clearly labelled replay fixture with five sites and these fields:

- site name, ward and approximate location
- plot size
- last self-audit timestamp
- PM2.5/PM10 reading and freshness
- CCTV status
- green-net, sprinkling, covered-stockpile and tyre-wash checks
- nearby sensitive receptor flag, such as a school
- current owner, status and last visit

We will say in the interface and video that these are replayed demo records shaped by the published Dust Portal requirements. We will not claim access to DPCC's private feed.

### Deterministic workflow

1. Load the five site records.
2. Score each site using transparent rules: stale audit, missing CCTV, high PM, missing control, nearby receptor, and repeat unresolved issue.
3. Show a queue with a reason for every score.
4. Assign the first site to an inspector.
5. Upload or enter a visit result: fixed, follow-up, or escalate.
6. Show the evidence timestamp, owner and remaining queue.

The score is code, not an LLM judgment. An optional model can rewrite the inspection brief later, but it cannot change the priority or close a case.

### AWS shape

- **S3:** static frontend, fixture snapshot and evidence objects.
- **API Gateway + Lambda:** queue, scoring and status endpoints.
- **DynamoDB:** sites, assignments and case status.
- **EventBridge:** scheduled “new inspection day” refresh.
- **SNS:** assignment/escalation notification, if the account permits it.
- **CloudWatch:** visible logs for the score and status transition.
- **SAM CLI:** reproducible local build and deploy path.

Deploy the judged path in `ap-south-1`. Keep Bedrock and NVIDIA optional; the AWS Free plan does not make cross-Region inference a safe dependency, and the Mumbai Nova path is not guaranteed in-region.

## How the winning pattern applies

The fresh TinyFish sweep found the same pattern in organiser guidance, X posts, Reddit judge discussions and Devpost judge interviews:

- Start with the problem and one user; scope down to one action.
- Make the demo do the work instead of explaining a large architecture.
- Show a working input-to-output path and a graceful failure case.
- Meet every requirement, then make the frontend polished and easy to understand.
- Remove doubts about originality by using a new repository and showing the event-built commit history.
- Use a known stack and spend time on the submission, video, README and evidence.

That matches First Commit's winners: live deployments, named users, AWS services with a stated job, deterministic safety rules, honest limitations, and demos that work without a live rescue.

## Three-minute demo

- **0:00–0:20:** “Dust Portal data exists, but an officer still needs to decide which site to visit today.”
- **0:20–1:10:** Load five sites and show the queue reorder with reasons.
- **1:10–1:50:** Assign the top visit, enter the result, upload evidence, and close or escalate it.
- **1:50–2:20:** Show the AWS path: API Gateway, Lambda, DynamoDB, S3, EventBridge and CloudWatch.
- **2:20–2:45:** Show a stale or missing-data case and the safe “needs verification” state.
- **2:45–2:58:** State the limitation: replay data, human approval, and the next production integration.

## Definition of done

- Fresh public repository with event-period commits.
- Public live URL with no login wall.
- Five replay records and a deterministic scoring function.
- Queue, assignment, evidence and closure state transitions work end to end.
- S3 evidence upload and CloudWatch log are visible in the video.
- Deployed in `ap-south-1` using the Free-plan-safe service set.
- README names the user, rules, data freshness, AWS service jobs, limitations and AI tools used.
- YouTube demo is under three minutes and shows AWS in use.

This is the final idea. The next phase is architecture and a short implementation plan; no additional idea search is needed unless a team member raises a concrete objection to the decision.
