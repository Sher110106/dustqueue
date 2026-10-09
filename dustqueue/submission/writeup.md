# DustQueue — Environmental Hacks submission draft

**Team:** Quad  
**Track:** Air  
**Members:** Sher Partap Singh, Punnag Chowdhury, Akshat Mishra, Mohak Agarwala

## Problem

Construction sites already produce dust-control signals, but a field coordinator still has to decide which site deserves the next inspection. Generic AQI dashboards describe pollution without producing an accountable visit or proof that the issue was closed.

## Solution

DustQueue ranks five replayed construction-site records with a transparent demo heuristic built from audit freshness, PM reading freshness, CCTV status, dust-control checks, nearby sensitive receptors and repeat unresolved issues. The coordinator assigns an inspector, records a factual visit note, uploads evidence, and closes or escalates the case.

The records are fictional replay fixtures shaped by published Dust Portal 2.0 requirements. They are labelled as replay data in the interface; DustQueue does not claim a live DPCC feed or autonomous enforcement.

## AWS usage

- API Gateway HTTP API: browser API entry point.
- Lambda: deterministic scoring, session-isolated CRUD, status transitions and evidence verification.
- DynamoDB: per-session site state, assignments, status and trail.
- S3: private evidence objects with SSE-S3 and presigned upload.
- CloudFront + private S3 origin: frontend delivery.
- CloudWatch: Lambda request and error logs.

The local fixture adapter keeps the demo runnable without credentials. In API mode, each browser tab sends an opaque demo-session header so judge sessions do not share writes. The score is code, not a model decision.

## Execution and limitations

Closure requires an assigned inspector, a factual note and confirmed evidence. Uploads are checked for filename, type, size, S3 metadata and file signature. The score is a prioritisation heuristic, not a regulatory threshold, causal source-attribution model or legal finding. Production deployment would require authenticated agency data, calibrated thresholds, role-based access and retention governance.

## AI tools disclosure

AI coding assistance was used to draft and refine the React UI, deterministic scoring module, tests, SAM template, Lambda handler and documentation. The team reviewed the scope, source claims, data disclaimer, security boundaries, interaction path and validation results.

## Team contributions

- Sher Partap Singh: product strategy, environmental research, final scope and submission narrative.
- Punnag Chowdhury: AWS architecture, SAM infrastructure, Lambda/API, DynamoDB/S3 and deployment.
- Akshat Mishra: frontend design, React queue UI, responsive interaction and accessibility.
- Mohak Agarwala: deterministic scoring, fixture data, workflow validation, tests and demo QA.
