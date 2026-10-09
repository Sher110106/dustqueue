# DustQueue AWS deployment preflight

Checked with profile `envhacks` and selected Region `ap-south-1` on 2026-10-09. No deployment or resource mutation was performed.

- Caller identity: project `437605541426` (the configured principal is the project root identity).
- Account plan: `FREE`, status `NOT_STARTED`, remaining credits `$100`, expiration `2027-04-09`.
- Region configuration: `ap-south-1`.
- SAM CLI: installed locally with Homebrew, version `1.167.0`.
- `sam validate --template-file deploy/frontend.yaml --lint`: passed.
- `bash -n deploy/deploy.sh`: passed.

The following read-only service calls are currently blocked because the project has not opted in or subscribed to these services:

- CloudFormation list stacks: `OptInRequired`.
- Lambda account settings: `SubscriptionRequiredException`.
- DynamoDB limits: `SubscriptionRequiredException`.
- S3 list buckets: `NotSignedUp`.
- CloudFront list distributions: `OptInRequired`.
- API Gateway v2 list APIs: throttled by the AWS account OAuth token endpoint (`429`); retry only after service activation.

Deployment therefore requires activating the needed AWS services/advanced capabilities in AWS Settings first. The scripts are prepared but intentionally were not run.

## Signup state found during follow-up

On 2026-10-09, opening the Lambda activity from the signed-in AWS console redirected to:

`https://signup.aws.amazon.com/billing/signup/incomplete`

This indicates the new AWS signup flow still needs its account/billing verification completed. The owner must complete that browser step; the agent must not enter payment details or accept billing terms. AWS's official guidance says the new signup experience may request payment information for verification, and advanced features require upgrading to Paid first. Advanced-feature activation is irreversible and removes spend-limit controls, so it is not part of the automated deployment path.
