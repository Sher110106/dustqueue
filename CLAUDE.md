# DustQueue AWS workspace guidance

## Verified environment (2026-10-09)

- Use the existing CLI profile `envhacks` and Region `ap-south-1` for DustQueue resources.
- Account `437605541426` is on the Paid plan with $100 remaining credits at the last check.
- AWS Organizations reports that this account is not a member of an organization. Earlier managed-project/new-experience instructions in this file were based on an incorrect assumption and have been superseded.
- The browser uses the ordinary AWS console. Do not assume that AWS Settings, managed-project spend limits, or an Advanced Features conversion are available.
- Lambda/S3 subscription errors are still under investigation; see `dustqueue/deploy/PREFLIGHT.md` for evidence and the corrected activation diagnosis.

## Development

Read relevant installed AWS skills. Use least-privilege service roles, private evidence storage, input validation, and explicit Region/profile flags. Do not change billing plans, organization membership, or regional scope to work around an unverified hypothesis. Never request secret keys, payment details or identity documents in chat.

The user has authorized building and deploying DustQueue and keeping its public repository up to date. Do not claim a live deployment or cloud persistence until they have been tested. Local demo data must remain labelled fictional replay data. Changes to the selected product direction need discussion.
