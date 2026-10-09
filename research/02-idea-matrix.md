# Environmental Hacks 2026 — idea matrix

Drafted 9 October 2026 from the intelligence report, raw competitor scan, TinyFish checks, and live policy sources. Scores are preliminary (1 low, 5 high); the final choice remains a team approval gate.

The final decision is recorded in [`03-final-idea-decision.md`](./03-final-idea-decision.md).

Scoring dimensions: **I** impact, **D** distinctiveness after the crowd scan, **B** buildability before Sunday, **Data** access, **AWS** centrality, **Demo** clarity. Total is out of 30.

## Air

| ID | Candidate | Named user and decision | Smallest end-to-end workflow | I | D | B | Data | AWS | Demo | Total | Main risk |
|---|---|---|---|---:|---:|---:|---:|---:|---:|---:|---|
| A1 | **DustQueue** | DPCC field officer: which construction sites should be inspected next? | Load a small site register, PM/compliance signals and missing CCTV/self-audits; rank five visits; issue an evidence-backed notice. | 4 | 3 | 4 | 4 | 4 | 5 | **24** | Dust Portal 2.0 already owns alerts; the product must prove prioritisation and follow-up, not rebuild the portal. |
| A2 | **BurnScar Verify** | Punjab district officer: is a reported fire a real burned area and what should be checked? | Compare a FIRMS/GK2A event with a before/after Sentinel-2 tile, show confidence and queue a field check. | 4 | 5 | 2 | 3 | 5 | 4 | **23** | Geostationary imagery is coarse; ground labels cover only part of the day; algorithm tuning is risky. |
| A3 | **KilnShield** | SPCB inspector: which brick kilns create the highest exposure risk? | Join APAD kiln coordinates with schools/villages and wind/AQ context; produce a ranked inspection list with a reason. | 4 | 4 | 4 | 4 | 4 | 4 | **24** | Need a defensible buffer rule and a small, inspectable fixture dataset. |
| A4 | **SportsAir Planner** | District sports officer: which week and venue are safest under the CAQM advisory? | Combine historical AQ/meteorology with an event calendar; return a recommended date, venue and fallback. | 4 | 4 | 4 | 3 | 4 | 4 | **23** | Forecast uncertainty and a less obvious beneficiary require a crisp story. |
| A5 | **MonitorProof** | School or ward administrator: can this station's number be trusted today? | Score station uptime, cross-station disagreement and missing intervals; show “use / qualify / do not use” with evidence. | 4 | 2 | 5 | 4 | 4 | 5 | **24** | A public “ground-truth” competitor already exists; the user and proof must be narrower. |

## Heat and Water

| ID | Candidate | Named user and decision | Smallest end-to-end workflow | I | D | B | Data | AWS | Demo | Total | Main risk |
|---|---|---|---|---:|---:|---:|---:|---:|---:|---:|---|
| H1 | **NeedFirst** | District drought cell: which villages receive scarce water first, and why? | Rank villages using population, livestock, distance to source, days since delivery, rainfall and source risk; show an auditable allocation and override. | 5 | 4 | 4 | 3 | 4 | 5 | **25** | Live tanker data is fragmented; use a small transparent fixture and label it. |
| H2 | **ScarcityPlan** | Maharashtra collector: which vulnerable villages need preventive work before tankers? | Import a vulnerability list, rainfall/groundwater signals and planned source works; flag missing actions before the state deadlines. | 5 | 4 | 3 | 3 | 4 | 4 | **23** | Policy interpretation must be precise; it can become a dashboard without an action owner. |
| H3 | **HeatShift Ledger** | Labour/site supervisor: how should today's work hours change under the heat SOP? | Given location, alert level, crew and task, produce a compliant shift/rest plan, worker notice and signed completion log. | 4 | 3 | 5 | 4 | 4 | 5 | **25** | Heat-worker planning is crowded; focus on compliance evidence rather than a generic WBGT map. |
| H4 | **Hotspot Proof** | Delhi PWD officer: which waterlogging hotspot is at risk and has the response happened? | Combine the 448 named points with rainfall thresholds; open a checklist, timestamp evidence and close the incident only with proof. | 4 | 4 | 4 | 3 | 4 | 5 | **24** | Avoid becoming another crowd map; the product is response accountability. |
| H5 | **HeatBed Board** | District health officer: where should heatstroke beds, ambulances and supplies move next? | Forecast a four-day facility risk from weather and local thresholds; compare capacity and recommend pre-positioning. | 5 | 4 | 4 | 3 | 4 | 4 | **24** | Health claims need careful framing and a fixture rather than clinical prediction. |

## Waste and Energy

| ID | Candidate | Named user and decision | Smallest end-to-end workflow | I | D | B | Data | AWS | Demo | Total | Main risk |
|---|---|---|---|---:|---:|---:|---:|---:|---:|---:|---|
| W1 | **KabadiChain** | Ward coordinator and waste picker: who should receive this material, at what fair handoff? | Photograph or enter a material lot, match a verified picker/centre, record weight/price and generate a handoff receipt. | 5 | 5 | 3 | 2 | 4 | 4 | **23** | NAMASTE already handles enumeration; city-level partner data and real transactions are hard to obtain. |
| W2 | **BurnWatch** | Ward officer: which waste-burning complaint should be inspected first? | Fuse complaints, wind/PM context and repeat-location history; rank visits and record closure evidence. | 4 | 4 | 4 | 3 | 4 | 5 | **24** | Complaint data is not reliably open; use replayable fixtures and show freshness. |
| W3 | **ColdLoop** | Food bank or small cold-store operator: what failed, and which food can still be rescued? | Detect a temperature excursion, classify safe/unsafe inventory by a deterministic rule, and route a pickup/notification. | 4 | 4 | 4 | 2 | 4 | 5 | **23** | FreshTrace is a close precedent; differentiate around rescue and accountability, not shelf-life estimation. |
| W4 | **BusNudge** | City mobility officer: which route or bus intervention cuts the most exposure? | Join GTFS, route frequency and AQ/traffic context; recommend one route/service change with a before/after estimate. | 4 | 4 | 3 | 3 | 4 | 4 | **22** | Delhi real-time transit access requires approval; static data is safer for the demo. |
| W5 | **BWG Ready** | RWA/facility manager: what do the 2026 SWM rules require, and what evidence is still missing? | Enter floor area/waste/water facts; apply deterministic bulk-waste-generator rules; upload evidence; produce a dated return checklist. | 5 | 5 | 5 | 4 | 5 | 5 | **29** | Cite the rule text and require human confirmation; do not present it as legal advice. |

## Preliminary read

The strongest candidates by the first matrix score are **BWG Ready**, **NeedFirst**, **HeatShift Ledger**, and **DustQueue / KilnShield**. The independent red-team pass ranked **BWG Ready**, **Construction Dust Queue**, and **HotspotOps** as the three candidates to carry forward. They all have a named decision-maker, a bounded workflow and a short demo moment. They are candidates, not a final selection.

The most differentiated but riskiest candidate is **BurnScar Verify**. The most socially distinctive is **KabadiChain**, but it has the weakest data access. The safest builds are **BWG Ready** and **DustQueue** because they can use small, transparent fixtures and deterministic rules without a fragile model dependency.

## Live evidence that shaped the matrix

- Delhi's [Dust Portal 2.0](https://www.thehindu.com/news/cities/Delhi/delhi-govt-launches-ai-powered-portal-to-tackle-pollution-from-construction-sites/article71217831.ece) already maps sites, assesses dust parameters, finds the nearest monitor and issues colour alerts. A hackathon project should add inspection prioritisation and proof of closure.
- Maharashtra's [water-scarcity circular](https://www.hindustantimes.com/cities/mumbai-news/maharashtra-orders-early-water-scarcity-planning-makes-tankers-last-resort-101789845608365.html) asks districts to identify vulnerable villages and strengthen sources before tankers; this supports a need-ranking or plan-audit idea.
- The Government's [NAMASTE announcement](https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2134303) says the waste-picker app enumerates workers and connects them to identity, health, PPE, skilling and collectives. A new project must add an operational handoff or fair-workflow layer.
- The [PIB clean-air backgrounder](https://www.pib.gov.in/PressNoteDetails.aspx?id=159871&NoteId=159871&ModuleId=3) documents the existing CAAQMS/SAMEER/PRANA/GRAP stack and the scale of construction-dust monitoring. It supports decision and accountability layers over another public dashboard.
- The independent red-team pass explicitly rejects generic AQI, flood, tanker, bin, solar-payback, live-groundwater and autonomous-enforcement ideas; it ranks BWG Ready (29/30), Construction Dust Queue (27/30), and HotspotOps (26/30) for the next gate.
- The GPT-6.1-Sol generation pass independently ranked MoundWatch (29/30), DustQueue (28/30), StormDuty (28/30), and BWG Action Ledger (28/30). **DustQueue is the only exact overlap in both agents' top three.** MoundWatch adds novelty but has Carbon Mapper data/licensing and expiring-URL risk; StormDuty is the same operational shape as HotspotOps; BWG is the strongest low-risk compliance workflow.

## Approval gate

Before architecture or implementation, the team should choose at most three finalists and validate each with a 90-second paper demo: user, input, decision, evidence, AWS job, failure state. The final idea should be selected only after this review.
