# DustQueue

DustQueue is the Quad team’s Environmental Hacks 2026 submission for the Air track.

The runnable app and deployment package are in [`dustqueue/`](./dustqueue/).

```bash
cd dustqueue
npm install
npm run dev
```

DustQueue uses clearly labelled replay fixtures shaped by published construction-dust compliance requirements. It ranks inspection work, assigns an inspector, records evidence, and supports fixed/follow-up/escalated outcomes. The local demo is credential-free; the AWS path is provided through SAM in `dustqueue/infra/` and targets `ap-south-1`.

- [App README](./dustqueue/README.md)
- [Submission writeup](./dustqueue/submission/writeup.md)
- [Demo script](./dustqueue/submission/demo-script.md)
- [AWS preflight](./dustqueue/deploy/PREFLIGHT.md)
- [Research and final decision](./research/03-final-idea-decision.md)
