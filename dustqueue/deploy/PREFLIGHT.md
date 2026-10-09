# DustQueue AWS deployment preflight

Last checked 2026-10-09 at 22:32 IST using `envhacks`, Region `ap-south-1`.

## Verified state

- Account: `437605541426`, named `sher110106`; CLI authenticates as the account root identity.
- Account created: 2026-10-09 at 12:31:25 UTC (18:01:25 IST).
- Account Management reports `AccountState: ACTIVE`.
- Free Tier API reports `accountPlanType: PAID`, `accountPlanStatus: NOT_STARTED`, $100 remaining credit, expiry date 2027-04-09. These fields do not prove every service is activated.
- `aws organizations describe-organization` returns `AWSOrganizationsNotInUseException: Your account is not a member of an organization.` This contradicts the earlier assumption that the account was a managed AWS Settings project.
- Lambda still returns `SubscriptionRequiredException`; S3 still returns `NotSignedUp`.
- Earlier checks also found CloudFormation `OptInRequired`, API Gateway `SubscriptionRequiredException`, and DynamoDB/CloudFront access blocked.
- The signed-in Lambda console previously redirected to `https://signup.aws.amazon.com/billing/signup/incomplete`.

## Corrected diagnosis

The earlier advice to activate **Advanced Features** was unsupported and should not be followed for this account. That workflow applies to the managed-project signup experience with AWS-managed Organizations. Lambda, S3, DynamoDB, API Gateway, CloudFormation and CloudFront do not inherently require that conversion for this application.

The current evidence points to unfinished signup verification or service activation that has not completed. The exact remaining verification step has not been established. An Account Management state of ACTIVE and valid STS credentials are not evidence that resource APIs are ready.

Latest retry after the Paid upgrade (2026-10-09 17:02 UTC): `AccountState: ACTIVE`, `accountPlanType: PAID`, but Lambda still returns `SubscriptionRequiredException`, S3 returns `NotSignedUp`, and CloudFormation/API Gateway remain blocked. AWS's account-activation guidance says service activation can take up to 24 hours; check the activation email and the incomplete signup page before opening support.

[AWS's official account-activation guide](https://repost.aws/knowledge-center/create-and-activate-aws-account) says activation typically takes minutes but can take up to 24 hours, and AWS sends a confirmation email. It recommends completing signup steps, checking payment/identity verification and requests for additional information, and contacting AWS Support if issues persist.

## Next steps

1. The owner should check AWS's activation email and the signed-in [signup completion page](https://signup.aws.amazon.com/billing/signup/incomplete). The agent does not need payment details or identity documents in chat.
2. If all signup steps are complete, allow activation to finish. If AWS confirms activation but these APIs remain blocked, use an Account and Billing support case with the errors above.
3. Do not perform additional plan conversions or change IAM policies to guess around these errors.
4. Recheck Lambda and S3. Once access is available, run the reviewed deployment script in Mumbai and verify the live API and evidence upload.

## Local validation

- SAM CLI 1.167.0 installed.
- `npm run check` passed (five unit tests, Vite build, artifact checks).
- `sam build` and `sam validate --lint` passed.
- `bash -n deploy/deploy.sh` passed.
- No DustQueue cloud deployment is claimed by this report.
