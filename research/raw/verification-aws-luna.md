# GPT-6-Luna AWS/NVIDIA verification — 2026-10-09

- The new Free-plan service matrix includes API Gateway, Bedrock, Lambda, S3, DynamoDB, EventBridge, SNS, SQS, CloudWatch, Step Functions, SageMaker, OpenSearch and Amplify.
- Free-plan geographic/global Bedrock and SageMaker cross-Region inference are unsupported. Keep the judged path in `ap-south-1`.
- Nova Micro is not marked In-Region in Mumbai; an APAC inference profile must be checked explicitly, so direct Nova Micro is not a safe dependency.
- Mistral 7B Instruct is marked in-region in Mumbai and is the safer first Bedrock smoke test.
- Strands Agents SDK and SAM CLI are the strongest event-rule proof. Cedar is useful for deterministic policy. PartyRock and LocalStack alone are weaker rule choices.
- NVIDIA hosted NIM is for testing/prototyping; do not send personal data or make it the only live dependency. FourCastNet NIM is too large for the shared 48 GB A6000 setup.
