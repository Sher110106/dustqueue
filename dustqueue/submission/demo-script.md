# DustQueue demo script — 2:58 target

**0:00–0:20 — Problem**  
“Dust Portal-style signals exist, but a ward dust-cell coordinator still needs to choose the next inspection. DustQueue turns those signals into an accountable queue.” Show the Replay fixture label.

**0:20–1:00 — Rank**  
Open the top record. Point to the explainable reasons: stale audit, CCTV offline, missing sprinkling or stockpile evidence, repeat issue and sensitive receptor.

**1:00–1:35 — Assign and verify**  
Choose an inspector, assign the visit, add a factual note and upload a small JPEG/PNG/PDF. Show the upload-confirmed receipt. Attempt “Mark fixed” before evidence if you want to demonstrate the guardrail.

**1:35–1:55 — Close**  
Mark fixed. Show the queue count, status, evidence trail and timestamp change.

**1:55–2:25 — AWS**  
Show the architecture strip and one CloudWatch log: API Gateway → Lambda → DynamoDB; S3 stores private evidence; CloudFront serves the frontend.

**2:25–2:58 — Honesty**  
“These are replay fixtures shaped by published Dust Portal requirements. The score is a demo heuristic, not a regulatory threshold or pollution proof. A production system would connect authenticated agency data and calibrated thresholds.”
