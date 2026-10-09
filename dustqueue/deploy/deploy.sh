#!/usr/bin/env bash
set -Eeuo pipefail

# DustQueue deployment defaults. Override stack names or paths with environment variables;
# every AWS call remains explicit about the selected profile and Region.
AWS_PROFILE="${AWS_PROFILE:-envhacks}"
AWS_REGION="${AWS_REGION:-ap-south-1}"
BACKEND_STACK_NAME="${BACKEND_STACK_NAME:-dustqueue-backend}"
BACKEND_TEMPLATE="${BACKEND_TEMPLATE:-}"
ALLOW_FRONTEND_DELETE="${ALLOW_FRONTEND_DELETE:-false}"
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEPLOY_DIR="${ROOT_DIR}/deploy"
OUT_DIR="${DEPLOY_DIR}/out"
mkdir -p "${OUT_DIR}"

aws_cmd() { aws --profile "${AWS_PROFILE}" --region "${AWS_REGION}" "$@"; }
fail() { echo "deploy: $*" >&2; exit 1; }

[[ "${AWS_PROFILE}" == "envhacks" ]] || fail "AWS_PROFILE must be envhacks (got ${AWS_PROFILE})"
[[ "${AWS_REGION}" == "ap-south-1" ]] || fail "AWS_REGION must be ap-south-1 (got ${AWS_REGION})"
command -v aws >/dev/null || fail "aws CLI is required"
command -v npm >/dev/null || fail "npm is required"

find_backend_template() {
  if [[ -n "${BACKEND_TEMPLATE}" ]]; then
    [[ -f "${BACKEND_TEMPLATE}" ]] || fail "BACKEND_TEMPLATE not found: ${BACKEND_TEMPLATE}"
    printf '%s\n' "${BACKEND_TEMPLATE}"
    return
  fi
  for candidate in "${ROOT_DIR}/infra/template.yaml" "${ROOT_DIR}/infra/template.yml" "${ROOT_DIR}/template.yaml" "${ROOT_DIR}/template.yml"; do
    if [[ -f "${candidate}" ]]; then printf '%s\n' "${candidate}"; return; fi
  done
  printf '%s\n' ""
}

stack_output() {
  local stack="$1" key="$2"
  aws_cmd cloudformation describe-stacks --stack-name "${stack}" --query 'Stacks[0].Outputs' --output json | jq -r --arg key "${key}" '.[] | select(.OutputKey == $key) | .OutputValue // empty'
}

backend_output() {
  local key="$1"
  stack_output "${BACKEND_STACK_NAME}" "${key}"
}

backend_api_url() {
  aws_cmd cloudformation describe-stacks --stack-name "${BACKEND_STACK_NAME}" --query 'Stacks[0].Outputs' --output json |
    jq -r '[.[] | select((.OutputKey | ascii_downcase) as $k | ((["apiurl","apibaseurl","httpapiurl","apiendpoint","apiurl"] | index($k)) != null)) | select(.OutputValue | startswith("http://") or startswith("https://"))][0].OutputValue // ([.[] | select((.OutputKey | ascii_downcase | contains("api")) and (.OutputValue | startswith("http://") or startswith("https://")))][0].OutputValue // "")'
}

backend_template="$(find_backend_template)"
if [[ -n "${backend_template}" ]]; then
  command -v sam >/dev/null || fail "SAM CLI is required to deploy ${backend_template}"
  echo "Building and deploying backend stack ${BACKEND_STACK_NAME} from ${backend_template}"
  sam build --template-file "${backend_template}" --build-dir "${OUT_DIR}/sam-build" --cached
  sam_args=(deploy --template-file "${OUT_DIR}/sam-build/template.yaml" --stack-name "${BACKEND_STACK_NAME}" --resolve-s3 --s3-prefix "${BACKEND_STACK_NAME}" --capabilities CAPABILITY_IAM CAPABILITY_NAMED_IAM --no-confirm-changeset --no-fail-on-empty-changeset --profile "${AWS_PROFILE}" --region "${AWS_REGION}")
  if [[ -n "${SAM_PARAMETER_OVERRIDES:-}" ]]; then
    read -r -a parameter_args <<< "${SAM_PARAMETER_OVERRIDES}"
    sam_args+=(--parameter-overrides "${parameter_args[@]}")
  fi
  sam "${sam_args[@]}"
else
  echo "No backend SAM template found; expecting ${BACKEND_STACK_NAME} to already exist."
fi

api_url=""
if aws_cmd cloudformation describe-stacks --stack-name "${BACKEND_STACK_NAME}" >/dev/null 2>&1; then
  api_url="$(backend_api_url)"
fi
[[ -n "${api_url}" ]] || echo "No API URL output found; frontend build will use an empty VITE_API_BASE_URL."

echo "Using private frontend resources from backend stack ${BACKEND_STACK_NAME}"
bucket="$(backend_output WebBucketName)"
distribution_id="$(backend_output CloudFrontDistributionId)"
frontend_url="$(backend_output CloudFrontUrl)"
[[ -n "${bucket}" && -n "${distribution_id}" ]] || fail "frontend stack outputs are missing"

VITE_API_BASE_URL="${api_url}" npm --prefix "${ROOT_DIR}" run build -- --mode production
sync_args=(s3 sync "${ROOT_DIR}/dist/" "s3://${bucket}/" --only-show-errors)
if [[ "${ALLOW_FRONTEND_DELETE}" == "true" ]]; then sync_args+=(--delete); fi
aws_cmd "${sync_args[@]}"
aws_cmd cloudfront create-invalidation --distribution-id "${distribution_id}" --paths '/*' --output json >/dev/null

cat > "${OUT_DIR}/deployment-outputs.json" <<EOF
{
  "region": "${AWS_REGION}",
  "frontendUrl": "${frontend_url}",
  "frontendBucket": "${bucket}",
  "cloudFrontDistributionId": "${distribution_id}",
  "apiUrl": "${api_url}"
}
EOF
echo "Deployment outputs recorded at ${OUT_DIR}/deployment-outputs.json"
echo "Frontend URL: ${frontend_url}"
