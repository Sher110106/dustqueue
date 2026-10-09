import { existsSync, readFileSync } from 'node:fs';

const required = ['dist/index.html', 'infra/template.yaml', 'infra/lambda/index.mjs'];
for (const file of required) if (!existsSync(file)) throw new Error(`Missing ${file}`);
if (!readFileSync('dist/index.html', 'utf8').includes('/assets/')) throw new Error('Vite output is missing bundled assets');
const template = readFileSync('infra/template.yaml', 'utf8');
for (const marker of ['AWS::Serverless::HttpApi', 'AWS::DynamoDB::Table', 'AWS::S3::Bucket', 'AWS::CloudFront::Distribution']) {
  if (!template.includes(marker)) throw new Error(`SAM template missing ${marker}`);
}
console.log('smoke ok: build output and AWS service markers present');
