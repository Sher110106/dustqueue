# AWS account activation case draft

Use this only if the service errors remain after 24 hours from account creation (`2026-10-09 12:31:25 UTC`). Do not include secret keys, payment details or identity documents.

**Account:** `437605541426`  
**Account name:** `sher110106`  
**Signup:** new AWS experience, then upgraded to Paid  
**Selected Region:** `ap-south-1`  
**Workload:** student hackathon prototype, DustQueue

## Problem

The account is `AccountState: ACTIVE`, and `aws sts get-caller-identity` succeeds. The account plan is `PAID` with $100 remaining credits. Regional service APIs still reject access:

- Lambda `GetAccountSettings`: `SubscriptionRequiredException: The AWS Access Key Id needs a subscription for the service`
- S3 `ListBuckets`: `NotSignedUp: Your account is not signed up for the S3 service`
- CloudFormation `ListStacks`: `OptInRequired: The AWS Access Key Id needs a subscription for the service`
- API Gateway v2 `GetApis`: `SubscriptionRequiredException`
- DynamoDB `ListTables`: `SubscriptionRequiredException`
- CloudFront `ListDistributions`: `OptInRequired`

The signed-in console previously redirected the Lambda activity to `https://signup.aws.amazon.com/billing/signup/incomplete`. The account was created less than 24 hours ago when this case was drafted; signup activation may still be pending.

## Request

Please confirm whether account activation or a service subscription/opt-in is incomplete for the new AWS signup experience, and enable the Free/ Paid-plan access required for Lambda, S3, DynamoDB, API Gateway, CloudFormation and CloudFront in `ap-south-1`, or tell us the exact remaining step.
