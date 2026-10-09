# Environmental Hacks 2026 — intelligence report

Checked 9 October 2026 (IST). This report closes the research phase. It does not choose the project idea or start implementation; the next gate is a 15-idea matrix and team approval.

## The clock and the rules

**Submission deadline:** Sunday 11 October 2026 at **8:00 PM IST**. The clearest public source is the organiser's 6 October logistics post, which says online submissions stay open until 8 PM Sunday ([WeMakeDevs](https://www.wemakedevs.org/blogs/what-is-happening-in-delhi-on-10-october)). The public event API currently reports `end_date=2026-10-11T14:30:00Z`, which is the same time, and `submissions_open_at=2026-10-11T02:30:00Z` (8 AM IST). Treat the form as a 12-hour Sunday window. The human-readable [schedule page](https://www.wemakedevs.org/aws/env/schedule) still says the hours are being finalised, so poll the API and form on Sunday morning and do not plan around an extension.

The clock started Thursday 8 October at 8 AM IST. The [rules](https://www.wemakedevs.org/aws/rules) require a new project after the clock starts; a repository history that does not match the event dates can disqualify the team. The deliverable is a public repository, a public or unlisted YouTube demo of **under three minutes**, and a short writeup covering the problem, build, and AWS usage. AI coding tools must be listed. AWS must be used and shown in the video. One team may have 1–4 people; each person must register and have an AWS Builder Center profile with student verification. The competition is online; the DTU day on 10 October is optional and does not change judging.

**Prize wording:** the event page lists three track winners at ₹2,00,000 cash + $2,000 AWS credits each, four runners-up at $1,000 AWS credits each, five AirPods 5 for the best Builder Center blogs, and tour swag. Organiser blogs, social posts and current event metadata call this a **₹20 lakh prize pool** ([event page](https://www.wemakedevs.org/aws/env), [organiser post](https://x.com/WeMakeDevs/status/2106633080136183829)). The line items total ₹6 lakh cash, $10,000 credits, gadgets and swag; ₹20 lakh is a rounded “worth” figure, not ₹20 lakh cash.

The public [event API](https://wemakedevs-server.onrender.com/hackathons/env) reported **8,586 registrations** in the latest verification on 9 October, with no projects or winners published yet. The tour total was 22,566. Do not infer a fixed number of submissions from registrations.

The fast-track interview count is inconsistent: the rules and overview say **at most 10 students**, while an organiser LinkedIn post says “top 5 students.” Treat ten as the published ceiling, not a promise.

## What judges are likely to reward

The official criteria are Idea and Impact, Built on AWS, Design and usability, Execution, and Demo video. The organiser's own guidance is unusually direct: a map or dashboard that only reports a problem is weak; the project should answer what a named person should do differently. The strongest precedent is First Commit, where winners showed a working deployment, a named user, a clear action, real AWS services with a job each, and honest limits. The same pattern appears in environmental winners elsewhere: a safe time window, a water allocation decision, a verified municipal job, or a measured farm intervention.

The reliable demo shape is: 20 seconds for the person and problem, about 90 seconds for one end-to-end action, 30 seconds for the AWS architecture, then one failure case and the honest next step. Record before filling the form. A live URL with no account wall is a strong advantage, but the video remains the source of truth for judges.

## Live landscape and crowding

The public scan found roughly 55 repositories that look like Environmental Hacks entries by 9 October. Counts are approximate because teams do not consistently label repositories, but the clusters are clear:

| Track | Already crowded | Open space seen in the scan |
| --- | --- | --- |
| Air | School AQI/assembly alerts; rider clean-hours and exposure routing; FIRMS stubble maps/forecasts; generic AQI dashboards; IoT sensor apps | Construction-dust inspection triage; monitor-data trust and gap evidence; evening stubble verification using geostationary imagery; brick-kiln siting checks; inter-school sports scheduling under CAQM guidance |
| Heat and Water | Crowd flood maps; flood-safe routing; depth-from-photo; shaded routes; tanker booking; apartment water ledgers; groundwater dashboards | Drought need/equity ranking rather than nearest-tanker logistics; heat-surge stock planning for district health officers; field compliance for outdoor-work heat SOPs; basement/underpass closure decisions; proof of response for named waterlogging hotspots |
| Waste and Energy | Rooftop solar payback; bin-photo segregation; general waste advice; generic carbon/green-credit apps | Informal-recycler/kabadiwala workflow; landfill-fire or waste-burning response; cold-storage energy failures; ward garbage-truck priority; public transport/EV decision support |

The six starter ideas in the organiser's September blog are now the most visible clusters. Avoid reproducing them without a narrow user, a different decision, and a measurable proof step.

## Track evidence and opportunity notes

### Air

The most technically distinctive opening is late-afternoon crop-fire detection. A 2026 Remote Sensing paper reports that burning in north-west India shifted from roughly 1–2 PM to 4–5 PM, while polar-orbiting MODIS/VIIRS passes miss part of that shift. The NOAA GK2A feed is public on S3, produces a full-disk object every ten minutes, and exposes an SNS topic. A small AWS pipeline could flag a Punjab/Haryana tile, show the source image, and route a patrol decision. It is high novelty but risky in a two-day build: the sensor is about 4 km at this view angle, clouds and smoke create false negatives, and the public Zenodo labels cover 12–18 IST only.

Construction dust is a lower-risk operational problem. Delhi's DPCC Dust Portal requires projects over 500 sq m to submit periodic compliance data, PM sensors and live CCTV; the missing decision is which site an enforcement team should inspect today. A prototype can use a small fixture dataset, explain freshness, and make the triage rule deterministic.

Do not build another AQI map, generic forecast notebook, school alert, rider route or stubble heatmap. A competing “ground truth” monitor-quality project is already public, so a data-trust idea needs a materially different user and proof.

### Heat and Water

The live policy story is drought, not a generic summer heat map. The 2026 monsoon was reported at 87% of long-period average; Karnataka and Maharashtra have declared large drought areas and tanker demand is rising. Delhi's planned smart tanker system optimises nearest-tanker logistics, GPS and proof of delivery. The open problem is need and equity: who should receive water first, using population, livestock, distance to a source, days since last delivery and a transparent audit trail.

This space is already crowded with tanker booking, flood routing, apartment ledgers and waterlogging maps. A sharper alternative is a district health or labour officer's decision: which facilities need heatstroke beds/ambulances next, or which work sites must move hours under the Maharashtra heat SOP. These have a named duty holder and a deadline, but they need careful claims and a small, explicit fixture dataset for the demo.

### Waste and Energy

Rooftop solar payback, bin-photo classification and general segregation guidance are already saturated in the public scan. The strongest gaps are the people and operations those demos usually omit: informal recyclers, municipal collection routing, landfill/waste-burning response, and cold-chain or community energy failures. A viable project must show an actual handoff (for example, a verified pickup/repair job), not only classify an image.

## AWS and compute feasibility

The project account is the new AWS **Free plan** in `ap-south-1`, with $100 remaining and an expiry of 9 April 2027. The account's free-plan status is live from the CLI. AWS's public page says new Free-plan accounts get up to $200 over six months, have access to only a selected set of services, and are not eligible for promotional credits ([AWS Free Tier](https://aws.amazon.com/free/)). This makes the organiser's extra $25 code uncertain: the event page offers it, but the account may need a Paid-plan upgrade to redeem promotional credits. Ask the organisers before changing the plan.

Bedrock model metadata in Mumbai includes Nova Micro/Lite/Pro, gpt-oss 20B/120B and several Qwen models. A Nova Micro call succeeded during setup, but a later smoke test hit the account's daily token throttle. The Free-plan service matrix also says geographic/global cross-Region inference is unsupported, and the Nova Micro model card does not mark Mumbai as In-Region. Treat Nova as optional until the APAC inference profile is explicitly permitted. A safer first smoke test is an in-region model such as Mistral 7B. In every case, cache one or two outputs, keep a deterministic fallback, and never make the live video depend on a fresh model call. The regional-availability page explains the routing modes ([regional availability](https://docs.aws.amazon.com/bedrock/latest/userguide/models-region-compatibility.html); [Free-plan service matrix](https://docs.aws.amazon.com/accounts/latest/reference/supported-services-sign-up-new.html)).

The safest AWS shape is a small deployed service in Mumbai: S3/CloudFront or Amplify for the front end, API Gateway + Lambda for one action, DynamoDB for a small state table, EventBridge/SQS/SNS only when they have a visible job, and Strands Agents SDK or Cedar when they are genuinely part of the flow. Use SAM CLI and a real AWS deployment for rule confidence; treat PartyRock or LocalStack alone as weaker proof. Keep policy and scoring in code; let the model explain or translate the result. This matches both the event's Build It/Ship It rules and the patterns in First Commit winners.

The shared RTX A6000 is usable again: the latest check shows 109 GB free on root and about 15.9 GiB free VRAM (32.7 GiB in use). Do not assume the whole GPU is available. Use it for an offline batch or a small local model, then write compact GeoJSON/Parquet/JSON to S3. NVIDIA hosted endpoints are for development/testing and may collect inputs; do not send personal photos, voice or citizen records there. CorrDiff is deprecated; self-hosted FourCastNet requires a large image and data cache, so it is a poor weekend dependency.

## Evidence-backed project principles

1. Pick one named user, one city/ward or district, and one decision.
2. Turn data into an action with a visible status, owner and timestamp.
3. Make the core decision deterministic and show the evidence behind it.
4. Use AWS as the system that receives, stores, schedules or proves the action; name each service's job in the video.
5. Deploy early and record the video before the Sunday form opens.
6. Include a limitations section and state when data is simulated, stale, replayed or missing.
7. Keep one fallback path so a Bedrock, API or external endpoint outage does not break the demo.

## Next gate

Do not choose from the shortlist by intuition. Build a 15-idea matrix with the team and score each idea on: user urgency, distinctiveness after the crowd scan, data access by Saturday, end-to-end demoability, AWS centrality, validation risk, and fit to the remaining hours. Carry no more than three ideas into architecture, then ask for approval before implementation.

## Source notes

The detailed raw evidence, probes, competitor names and verification corrections are in [`research/raw/`](./raw/). The most important primary sources are the [event page](https://www.wemakedevs.org/aws/env), [rules](https://www.wemakedevs.org/aws/rules), [schedule](https://www.wemakedevs.org/aws/env/schedule), [deadline post](https://www.wemakedevs.org/blogs/what-is-happening-in-delhi-on-10-october), [AWS Free Tier](https://aws.amazon.com/free/), and [Bedrock regional availability](https://docs.aws.amazon.com/bedrock/latest/userguide/models-region-compatibility.html).
