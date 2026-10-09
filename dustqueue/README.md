# DustQueue

DustQueue is the Air-track field workflow for a DPCC-style dust-cell coordinator: choose the construction site that deserves the next visit, understand why it is ranked there, assign an inspector, and retain closure evidence.

The public demo is intentionally narrow. It uses **fictional replay records** shaped by fields in the published DPCC Dust Portal 2.0 requirements: self-audit freshness, PM2.5/PM10 readings and freshness, CCTV status, green net, sprinkling, covered stockpile, tyre wash, nearby sensitive receptors, repeat issues, owners, visits, and evidence. It does not connect to a private DPCC feed and it does not claim live telemetry.

## Run it

```bash
cd dustqueue
npm install
npm run dev
```

Open `http://localhost:5173`. The browser defaults to a credential-free local fixture adapter. Every browser tab gets a separate `sessionStorage` replay session, so a judge’s demo writes never become a shared global queue.

To use the HTTP API after a SAM deployment, point the same UI at the API output:

```bash
VITE_API_BASE_URL=https://<api-id>.execute-api.ap-south-1.amazonaws.com npm run dev
```

The API adapter sends an opaque `x-demo-session` header generated per tab. The Lambda uses it as the DynamoDB partition key and rejects missing or malformed session IDs. No login is required for the public judge path, but demo sessions remain isolated.

Validation commands:

```bash
npm test
npm run build
npm run smoke
npm run check       # test + production build + smoke check
```

## What the demo proves

1. The queue ranks six varied fictional sites with a deterministic score and shows the raw reasons: stale audit, CCTV, missing/partial controls, stale PM sample, PM readings, sensitive receptor, and repeat unresolved issue.
2. A coordinator filters by active/status/ward, selects the next site, assigns one of four inspectors, and records follow-up or escalation.
3. Closure requires the assigned inspector, a factual note of at least ten characters, and a confirmed evidence object. Local mode records a fixture receipt; API mode obtains a short-lived S3 presigned PUT URL, uploads to a private bucket, verifies `HEAD` metadata and AES256 encryption, then records the evidence in DynamoDB.
4. The top banner always identifies the current mode: replay fixture or private API session. The footer says scores are demo heuristics, not regulatory thresholds or causal proof of pollution.

The heuristic is code in `src/domain/score.ts`; it has no LLM dependency. It is a prioritisation aid for a demo, not an enforcement decision or a scientific source-attribution model.

## AWS shape

`infra/template.yaml` is a SAM template for the selected `ap-south-1` region. Deploy it from a machine with SAM CLI installed; this workspace intentionally does not deploy resources.

- **API Gateway HTTP API** exposes `GET /sites`, `PATCH /sites/{id}`, `POST /sites/{id}/evidence/presign`, and `POST /sites/{id}/evidence/confirm` with CORS for the browser.
- **Lambda (Node.js 22, arm64)** validates the session header, seeds a session’s replay records, scores the queue, applies safe assignment/status transitions, and verifies evidence uploads. It uses AWS SDK for JavaScript v3 clients.
- **DynamoDB** stores sites, assignments, status, version and evidence trail under `(sessionId, siteId)`, with on-demand billing, SSE and point-in-time recovery.
- **S3 evidence bucket** is private, encrypted with SSE-S3, blocks public access, denies insecure transport, validates content type/size/name, and expires demo evidence after 30 days.
- **Private S3 frontend bucket + CloudFront OAC** serves the built Vite app without making the bucket public. The output includes `CloudFrontUrl` and `ApiBaseUrl` for the deployment helper.
- **CloudWatch Logs** receives the Lambda request/error trail through the SAM-managed execution policy. A future production refresh can add EventBridge and SNS; neither is needed for the deterministic public demo.

The template intentionally uses least-privilege data actions: the function can query/get/put/update only the sites table and can put/head only `sessions/*` objects in the evidence bucket. Set `AllowOrigin` to the CloudFront origin for a production deployment instead of the demo default `*`.

The deployment helper is `deploy/deploy.sh`. The current AWS Free project is signed in as `envhacks` in `ap-south-1`, but CloudFormation, Lambda, DynamoDB, S3 and CloudFront currently report `SubscriptionRequired`, `OptInRequired` or `NotSignedUp` until the project activates the needed services. Read `deploy/PREFLIGHT.md` before running deployment.

## Three-minute demo script

- **0:00–0:20** — “Dust Portal-style records exist, but a field coordinator still needs to decide which site to visit today.” Point to the replay label and the `DQ-104` next-best visit.
- **0:20–1:00** — Click the top queue row. Read the reasons: stale self-audit, CCTV offline, missing sprinkling/stockpile evidence, repeat issue and nearby school. Call out that the number is a deterministic demo heuristic.
- **1:00–1:35** — Choose an inspector, assign the visit, type a factual note, and upload a small JPEG/PNG/PDF. Show the “upload confirmed” receipt. Try “Mark fixed” before evidence if you want to demonstrate the guardrail.
- **1:35–1:55** — Click Mark fixed. The queue, metrics and trail change immediately. Switch to All statuses to show the closure.
- **1:55–2:25** — Point to the AWS strip: HTTP API → Lambda scoring/CRUD → DynamoDB session state → private S3 evidence → CloudFront frontend.
- **2:25–2:55** — State the limitation: fictional replay data, human approval, no private DPCC feed, and heuristic prioritisation. The production handoff is the API output + CloudFront URL.

## Event-period originality note

DustQueue is a new event-period implementation in this repository. The fixture records, scoring module, session isolation, UI, Lambda handler, SAM template, and submission copy were built for this deliverable. The interface uses no copied DPCC data and no live third-party endpoint.

## Submission writeup draft

**Problem.** Construction-site dust controls generate compliance signals, but a ward coordinator still has to turn a stale audit, a missing control, or a repeat issue into the next concrete visit. A generic AQI dashboard does not answer that operational question or retain proof of closure.

**Build.** DustQueue is a trust-first inspection control room. Six fictional replay records are ranked by deterministic, explainable heuristics. The coordinator assigns an inspector, selects fixed/follow-up/escalate, adds a factual note, and uploads closure evidence. A fixed case cannot be closed until assignment, note and confirmed evidence exist.

**AWS usage.** API Gateway HTTP API fronts a Node.js Lambda CRUD/score handler. DynamoDB isolates every public demo session. S3 stores private evidence objects; the API presigns a short-lived encrypted PUT and verifies the object before recording it. CloudFront serves the frontend from a private S3 origin via OAC. CloudWatch receives Lambda logs. The browser remains useful without AWS credentials through a local fixture adapter.

**Limitations.** The records are replay fixtures, not a live DPCC feed. The score is a demo triage heuristic, not a regulatory threshold, causal pollution proof, or autonomous enforcement decision. A production integration would need authenticated agency data, audit governance, calibrated thresholds, retention policy, and role-based access.

**AI tools disclosure.** AI coding assistance was used to draft and refine the React UI, deterministic scoring module, tests, SAM template, Lambda handler, and documentation. Human review chose the product scope, verified the data disclaimer, inspected the interaction path, and ran the test/build/smoke checks.

## Submission files

- `submission/writeup.md` — form-ready problem, solution, AWS usage, limitations and team contributions.
- `submission/demo-script.md` — under-three-minute recording script.
- `submission/form-fields.md` — remaining links and form fields.
- `submission/team.md` — confirmed Quad roster and contribution split.
