# Raw notes: NVIDIA endpoints and local GPU (compute angle)

Researched Fri 2026-10-09 evening IST. Research only. Every line has the URL I opened. "Snippet" means I saw it only in a search result, not on the page.

## A. NVIDIA hosted endpoints (build.nvidia.com)

### Access terms
- Official FAQ (forum post by NVIDIA): Developer Program members get "free access to NIM API endpoints for prototyping" and may self-host NIM "for research, application development, and experimentation on up to 16 GPUs". https://forums.developer.nvidia.com/t/nvidia-nim-faq/300317
- Same FAQ: "The rate of requests will vary per model queried and may vary based on the number of concurrent users." Check limits on your account page at build.nvidia.com.
- Same FAQ: production = "any use ... other than development, testing, research or evaluation ... including activity serving real end-users". Production needs NVIDIA AI Enterprise.
- NVIDIA API Trial Terms of Service, v. September 19, 2025: https://assets.ngc.nvidia.com/products/api-catalog/legal/NVIDIA%20API%20Trial%20Terms%20of%20Service.pdf
  - s1.2: access "for limited trial purposes only and without use of the API Service or Generated Content in production".
  - s1.4: may give trial "Credits"; without a Subscription "you may only use the API Service for internal testing and evaluation purposes, not in production".
  - s3.3(iv): NVIDIA collects "User Content and Generated Content to improve NVIDIA products and services, including AI models".
  - s4.3: do not upload personal information unless the service permits it.
  - s4.12: do not use output to build products that compete with the API Service.
- Numbers seen (conflicting, none on an official page):
  - Forum users in Jul-Aug 2026 ask to raise "40 RPM" to 200 RPM and say "current: 1,000 credits, 40 RPM". https://forums.developer.nvidia.com/t/request-for-nvidia-build-api-rate-limit-increase-40-rpm-200-rpm/377433 ; https://forums.developer.nvidia.com/t/request-additional-api-credits-rate-limit-increase-for-build-nvidia-com-free-tier/379569 (user: "My initial 1,000 free credits are now exhausted", 7 Aug 2026)
  - Reply on 377433 quotes a moderator: "There is no official way to circumvent this rate limit or to receive a rate limit increase on that same tier."
  - Older forum line (snippet): "trial experience of NVIDIA NIM limited to 5000 free API credits. Upon sign-up, users are granted 1000 API credits." https://forums.developer.nvidia.com/t/nim-api-credits/305703
  - decodethefuture (updated 6 Sep 2026): forum staff said build.nvidia.com "no longer uses a credit-based system"; limits vary by model and are not published. https://decodethefuture.org/en/nvidia-nim-api-pricing-limits-guide/
  - horizonlux (checked 8 Oct 2026): "up to 40 requests per minute and 10,000 requests per day"; no card needed; base URL https://integrate.api.nvidia.com/v1 (OpenAI-compatible). https://horizonlux.com/tools/ai-models/free/nvidia-nim-free
  - Working assumption: about 40 RPM per model. Confirm on our own account page after signup.
- Model pages say: "Free APIs for development. Your API requests may be rate limited. Traffic from other users may cause throttling."

### Catalog entries checked (labels as shown on the page)
- Free Endpoint filter page (first 24, newest first): kumo-tabular, body-pose, deepseek-v4.1-flash, kumo-relational, glm-5-3, glm-5-3-flash, kimi-k3, nemotron-3.5-lightning-30b-a3b, muse-glimmer-30b, riva-translate-4b-instruct-v2, ising-calibration, nemotron-3-embed-1b, laguna-xs-2.1, diffusiongemma-26b, nemotron-3-ultra-550b-a55b, nemotron-3.5-content-safety, cosmos3-nano, cosmos3-nano-reasoner, nemotron-3-nano-omni-30b-a3b-reasoning, synthetic-video-detector, active-speaker-detection, gemma-4-31b-it, nemotron-voicechat. https://build.nvidia.com/models?filters=nimType%3Anim_type_preview
- Free image-to-text endpoints: kimi-k3, nemotron-3-nano-omni-30b-a3b-reasoning, llama-3.2-11b-vision-instruct, llama-3.2-90b-vision-instruct, google-paligemma. https://build.nvidia.com/models?filters=nimType%3Anim_type_preview%2Cusecase%3Ausecase_image_to_text
- nemotron-3-nano-omni-30b-a3b-reasoning: "understands images, video, speech, text"; call via https://integrate.api.nvidia.com/v1/chat/completions with image_url. https://build.nvidia.com/nvidia/nemotron-3-nano-omni-30b-a3b-reasoning
- cosmos3-nano-reasoner: "Downloadable" + "Free Endpoint"; VLM for physical world; accepts .mp4/.jpg/.png. https://build.nvidia.com/nvidia/cosmos3-nano-reasoner
- nemotron-3-embed-1b: Free Endpoint; only free RAG model under that filter. https://build.nvidia.com/models?filters=nimType%3Anim_type_preview%2Cusecase%3Ausecase_rag
- riva-translate-4b-instruct-v2: Free Endpoint; English + 36 languages; Hindi is the only Indian language; en->hi BLEU 24.8, hi->en 38.7; released on build 07/27/2026; NVIDIA Open Model License. https://build.nvidia.com/nvidia/riva-translate-4b-instruct-v2/modelcard
- sarvam-m (Sarvam AI, 23.6B, Mistral-Small base) on NVIDIA API docs; ~1/3 of training in 11 Indic languages; build.nvidia.com since 07/25/2025. Did not confirm it is still a free endpoint. https://docs.api.nvidia.com/nim/reference/sarvamai-sarvam-m
- Speech (NVIDIA Riva label): parakeet-tdt-0_6b, nemotron-asr-streaming, parakeet-tdt-0_6b-v2, magpie-tts-zeroshot, parakeet-1_1b-rnnt-multilingual-asr, whisper-large-v3, canary-1b-asr, conformer-ctc-asr. https://build.nvidia.com/models?label=NVIDIA+Riva
  - parakeet-1.1b-rnnt-multilingual: page label "Downloadable", but has a playground with "Free APIs for development"; 25 languages incl. Hindi (hi-IN); auto language detect; NVIDIA Community Model License. Hosted call uses Riva gRPC (docs link https://docs.nvidia.com/nim/riva/asr/latest/protos.html). https://build.nvidia.com/nvidia/parakeet-1_1b-rnnt-multilingual-asr
- Earth-2:
  - Earth-2 label page lists only FourCastNet. https://build.nvidia.com/models?label=Earth-2
  - FourCastNet page: label "Downloadable"; playground with sample events incl. "Super Cyclonic Storm Amphan, 2020/05/16, Eastern India, $13.7 billion USD"; 6-120 h lead, up to 3 ensemble members; "Free APIs for development"; governed by NVIDIA AI Foundation Models Community License. https://build.nvidia.com/nvidia/fourcastnet
  - Hosted API URL in docs: POST https://climate.api.nvidia.com/v1/nvidia/fourcastnet. https://docs.api.nvidia.com/nim/reference/nvidia-fourcastnet-infer
  - FourCastNet API model card: FCN v2 (SFNO), 73 vars, 0.25 deg 721x1440, 6 h step, "ready for commercial use", tested on A100/H100/L40S/RTX6000; NVIDIA AI Product Agreement. https://docs.api.nvidia.com/nim/reference/nvidia-fourcastnet
  - CorrDiff page: "Deprecated", "This NIM Endpoint has been deprecated". https://build.nvidia.com/nvidia/corrdiff
  - FourCastNet NIM self-host: container "~34GB (uncompressed)", model "~6GB"; output per step 299,013,248 bytes (~299 MB) .npy; input (1,1,72,721,1440) float32. Not feasible on our full disk. https://docs.nvidia.com/nim/earth-2/fourcastnet/latest/quickstart-guide.html
- Earth-2 open models (Jan 26 2026): Medium Range (Atlas, 15-day, 70+ vars), Nowcasting (StormScope, 0-6 h, trained on GOES over CONUS only), Global Data Assimilation (HealDA, "coming soon"); join FourCastNet3, CorrDiff, cBottle, DLESyM. https://huggingface.co/blog/nvidia/earth-2-open-models ; https://blogs.nvidia.com/blog/nvidia-earth-2-open-models/
  - Users named: Israel Met Service ("90% reduction in compute time at 2.5-kilometer resolution"), GCL solar PV forecasting, Southwest Power Pool wind forecasting, AXA hurricane scenarios.
- Earth2Studio: Apache-2.0; v0.19.0 released Sep 30 2026; Python >=3.11; extras incl. fcn3, atlas, stormscope, corrdiff, cbottle, aifs, graphcast, serve. https://pypi.org/project/earth2studio/ ; https://nvidia.github.io/earth2studio/main/
  - Data connectors list includes "AWS Open Data". GFS source default is AWS S3 bucket noaa-gfs-bdp-pds ("Options are [aws, ncep], by default aws"; AWS GFS needs dates after Jan 1 2021). Source: earth2studio/data/gfs.py via gh api, https://github.com/NVIDIA/earth2studio/blob/main/earth2studio/data/gfs.py
  - Cache env vars: EARTH2STUDIO_CACHE (default ~/.cache/earth2studio), EARTH2STUDIO_DATA_CACHE, EARTH2STUDIO_MODEL_CACHE. docs/userguide/about/install.md in NVIDIA/earth2studio.
- FourCastNet3: 710,867,670 params; Apache 2.0; "60-day global forecast at 0.25°, 6-hourly resolution in under 4 minutes" on one GPU; run in AMP bf16; tested A100/H100/L40S. https://huggingface.co/nvidia/fourcastnet3
  - NGC compressed size 2.65 GB (snippet). https://catalog.ngc.nvidia.com/orgs/nvidia/earth-2/models/fourcastnet3/-
  - Forum, 1 Apr 2026: "running earth2studio on my RTX A 6000 GPU, I am using FCN3 model and GFS data but get the out of memory error even though my GPU is free". No answer visible. https://forums.developer.nvidia.com/t/running-eart2studio-fcn3-and-gfs-on-rtx-a-6000/365346
  - Tutorial: plan 5-10 GB disk for weights plus GFS data; demo GPU was RTX 6000 48 GB. https://binaryverseai.com/nvidia-earth-2-local-install-earth2studio-fcn3/
  - Medium post claims "Minimum 16GB VRAM for basic forecasts" (secondary, unverified). https://cobusgreyling.medium.com/nvidia-earth-2-family-of-open-models-4d4bb50643da
- cBottle: download only; "NVIDIA Software and Model Evaluation License Agreement" (evaluation licence); 150M-330M params; generates climate states, not forecasts. https://huggingface.co/nvidia/cbottle
- cuOpt: open source Apache-2.0; GitHub 1.0k stars; LP, QP, MIP (beta), routing TSP/VRP/PDP via Python; pip wheels cuopt-server-cu12==26.10.* from pypi.nvidia.com; needs CUDA 12/13, Volta or newer, Linux. https://github.com/NVIDIA/cuopt ; licence claim also on https://www.nvidia.com/en-us/ai-data-science/products/cuopt/get-started/ (snippet). No cuOpt in the free hosted endpoint list I saw.
- Strands Agents has a community NVIDIA NIM provider: pip install strands-nvidia-nim; NvidiaNIM(api_key, model_id, params). https://strandsagents.com/docs/integrations/model-providers/nvidia-nim/ . Strands also has a generic OpenAI-compatible provider. https://strandsagents.com/docs/user-guide/sdk/model-providers/openai/

## B. Local GPU box (RTX A6000, ~18 GB free VRAM, 112 cores, 125 GB RAM, root disk full)

### Geospatial
- Prithvi-EO-2.0: 300M and 600M, with and without TL (time/location) embeddings; trained on 4.2M HLS samples. Fine-tune configs for flood (Sen1Floods11), wildfire scar (hls_burn_scars), burn intensity, landslide (Landslide4sense), crop (US multi-temporal), Sen4Map, biomass. https://github.com/NASA-IMPACT/Prithvi-EO-2.0
- Prithvi-EO-2.0-300M-TL-Sen1Floods11: ready flood model; Sen1Floods11 = 446 labelled 512x512 chips, 11 flood events, 6 continents; 6 bands (Blue, Green, Red, Narrow NIR, SWIR, SWIR2); example file "India_900498_S2Hand.tif"; inference.py included; licence apache-2.0 (HF tag, snippet). https://huggingface.co/ibm-nasa-geospatial/Prithvi-EO-2.0-300M-TL-Sen1Floods11
- TerraMind-1.0-base: any-to-any multimodal EO model (IBM, ESA, Jülich); inputs S2L2A, S2L1C, S1GRD, S1RTC, DEM, RGB; handles missing modalities; via TerraTorch. https://huggingface.co/ibm-esa-geospatial/TerraMind-1.0-base
- TerraMind-base-Flood: fine-tuned on ImpactMesh-Flood; input S2L2A [1,12,4,256,256] + S1RTC [1,2,4,256,256] + DEM; terratorch==1.2.1, pip install impactmesh. https://huggingface.co/ibm-esa-geospatial/TerraMind-base-Flood . TerraMind-base-Fire also exists. https://huggingface.co/models?other=base_model:finetune:ibm-esa-geospatial/TerraMind-1.0-base
- ImpactMesh: global multi-modal, multi-temporal flood and wildfire dataset (S1, S2, DEM); models + data Apache 2.0; "Floods and wildfires together account for nearly half of natural disasters recorded in the last decade"; burn maps "at least 5% more accurate" with before/after optical+radar. https://research.ibm.com/blog/geospatial-flood-and-wildfire-mapping
- Clay v1.5: 632M params (encoder 311M), encoder 1.25 GB on disk, code and weights Apache-2.0. https://clay-foundation.github.io/model/release-notes/specification.html
- Precomputed Clay v1.5 Sentinel-2 embeddings on AWS Open Data: CC BY 4.0; S3 us-west-2; no AWS account needed: aws s3 ls --no-sign-request s3://us-west-2.opendata.source.coop/clay/lgnd-clay-v1-5-sentinel-2-l2a/ ; SNS topic for new data. https://registry.opendata.aws/lgnd-clay-v1-5-sentinel2/
  - LGND: "15.2 billion pre-computed embeddings covering the full globe from January 2017 through April 2026"; monthly per Major TOM cell; GeoParquet 1.1, hive-partitioned by geohash/year/month; 256-dim vectors; "Huge thanks to Amazon Web Services". https://lgnd.ai/resources/sent2-archive-source-coop
- AWS ML blog: Clay on SageMaker; similarity search + change detection; embeddings indexed in Amazon OpenSearch Serverless or LanceDB; ml.g5.xlarge for embedding; decoder head 10 epochs in 17 min, 92.4% IoU. https://aws.amazon.com/blogs/machine-learning/revolutionizing-earth-observation-with-geospatial-foundation-models-on-aws/
- Sentinel-2 L2A COGs on AWS: s3://sentinel-cogs (us-west-2), Earth Search STAC API, SNS new-scene topics (arn:aws:sns:us-west-2:608149789419:cirrus-v0-publish). https://registry.opendata.aws/sentinel-2-l2a-cogs/
- NOAA GFS on AWS: s3://noaa-gfs-bdp-pds (us-east-1), 4 runs/day, SNS NewGFSObject topic. https://registry.opendata.aws/noaa-gfs-bdp-pds/

### Waste vision
- Ultralytics (YOLO11): AGPL-3.0 (gh api). Ultralytics: enterprise licence needed "if you want to use Ultralytics YOLO without open-sourcing your entire project" (snippet). https://www.ultralytics.com/license
- RF-DETR: Apache-2.0 (gh api roboflow/rf-detr); ICLR 2026; DINOv2 backbone; detection + segmentation. https://rfdetr.roboflow.com/
- SAM 2.1: Apache-2.0; tiny 38.9M, small 46M, base+ 80.8M, large 224.4M params. https://github.com/facebookresearch/sam2
- SAM 3: 848M params; "SAM License" (custom, not Apache). https://github.com/facebookresearch/sam3
- Datasets (table in https://github.com/AgaMiko/waste-datasets-review):
  - TACO: 1,500 images, 28 categories, segmentation, waste in the wild, MIT (repo pedropro/TACO is MIT per gh api).
  - TrashNet: 2,527 images, 6 classes, clean background, MIT.
  - Garbage Dataset V2: 19,762 images, 10 classes. (arXiv version GD: 12,259 images, EfficientNetV2S 95.13% acc.) https://arxiv.org/html/2602.10500v2
  - UAVVaste 772 drone images (Apache); DroneWaste 4,993 (CC BY 4.0); ZeroWaste 4,503 (CC BY-NC 4.0).
  - Indian: DWSD Dense Waste Segmentation Dataset, 784 images of streets, parks, lawns, "first waste segmentation dataset for the Indian garbage setting", Data in Brief 2025, CC BY 4.0 (snippets: https://www.sciencedirect.com/science/article/pii/S2352340925000721 bot-blocked; https://www.researchgate.net/publication/388566234_DWSD_Dense_Waste_Segmentation_Dataset).
  - SpotGarbage-GINI: 2,561 images, 1,496 with boxes (snippet from survey); repo https://github.com/spotgarbage/spotgarbage-GINI

### Forecasting
- Chronos-2 (Amazon): 120M params, encoder-only; univariate, multivariate, covariates; context 8192, horizon 1024; "over 300 time series forecasts per second on a single A10G GPU and supporting both GPU and CPU inference"; licence apache-2.0 (HF tag); 21,779,609 downloads last month. Deploy on SageMaker: AutoGluon-Cloud (endpoint ml.g5.xlarge, serverless, batch) or JumpStart model_id "pytorch-forecasting-chronos-2" (ml.g5.2xlarge). https://huggingface.co/amazon/chronos-2
- Chronos-Bolt: horizon 64, context 2048, no native covariates (same page).

### Speech and language (Indian)
- Whisper: large 1550M ~10 GB VRAM; turbo 809M ~6 GB VRAM; turbo "not trained for translation tasks". https://github.com/openai/whisper (README via gh api)
- IndicConformer-600M-Multi: MIT; 22 scheduled languages; CTC and RNNT decoding; gated (accept conditions); Hindi WER 13.2 on Vaani-Benchmark-V1.0. https://huggingface.co/ai4bharat/indic-conformer-600m-multilingual
- IndicTrans2 en-indic dist-200M; 1B variants; card says "Indic-Translate is now available ... We recommend using Indic-Translate". MIT licence per HF tag (snippet on https://huggingface.co/ai4bharat/indictrans2-indic-indic-1B/discussions). https://huggingface.co/ai4bharat/indictrans2-en-indic-dist-200M
- Indic Parler-TTS: 0.9B params, Apache 2.0, 21 languages (20 Indic + English), 69 voices, Hindi native speaker score 84.79; gated. https://huggingface.co/ai4bharat/indic-parler-tts
- IndicF5: 0.4B, 11 languages, voice cloning from reference audio; terms forbid cloning without permission; licence not stated on pages I read. https://huggingface.co/ai4bharat/IndicF5 ; https://github.com/AI4Bharat/IndicF5
- Amazon Transcribe supports hi-IN, ta-IN, te-IN, bn-IN, mr-IN, gu-IN, kn-IN, ml-IN, pa-IN, or-IN, en-IN (batch and streaming, some marked *). https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html

### Shared GPU and full disk: workarounds (do not run anything; just options)
- First look for other mounts: df -h, lsblk, findmnt (home, /data, /scratch, /mnt, NVMe). Unknown until someone checks.
- Point every cache off root: HF_HOME / HF_HUB_CACHE (default ~/.cache/huggingface; falls back to XDG_CACHE_HOME). https://huggingface.co/docs/huggingface_hub/package_reference/environment_variables . Also TORCH_HOME, XDG_CACHE_HOME, PIP_CACHE_DIR or pip --no-cache-dir, UV_CACHE_DIR, CONDA_PKGS_DIRS, TMPDIR, EARTH2STUDIO_CACHE / _DATA_CACHE / _MODEL_CACHE.
- hf_transfer is deprecated; Hub now uses hf-xet; HF_XET_HIGH_PERFORMANCE for fast downloads; shared blob store dedupes files. (same HF page)
- /dev/shm is tmpfs; default size when not set is 50% of RAM (tmpfs(5)); files live in RAM and vanish on unmount/reboot. ~62 GB cap on a 125 GB box, but it eats RAM other jobs need. https://man7.org/linux/man-pages/man5/tmpfs.5.html
- Stream instead of store: Earth2Studio reads GFS byte ranges from S3 (obstore). Mountpoint for Amazon S3 (awslabs, Apache-2.0) mounts a bucket as files; good for reading large objects; no renames/symlinks; install needs a .deb/.rpm and FUSE (likely needs root). https://github.com/awslabs/mountpoint-s3
- Avoid containers on this box: FourCastNet NIM image ~34 GB. Finch on Linux (AWS open source, nerdctl/containerd) needs sudo + RPM and stores images on root. https://aws.amazon.com/blogs/opensource/announcing-finch-on-linux-for-container-development/
- Clean only our own caches (pip cache purge, uv cache clean, conda clean -a, hf cache delete). The box is shared; do not touch other jobs' files.
- Download only needed files (allow_patterns, safetensors), load in bf16/fp16 to halve size.
- Write outputs straight to S3; keeps disk free and puts AWS in the pipeline.
- vLLM: --gpu-memory-utilization is "The fraction of GPU memory to be used"; default 0.92; per instance. On a GPU where others hold ~30 GB of 48 GB, the default will fail; set about 0.3 (~14 GB). https://docs.vllm.ai/en/latest/configuration/engine_args.html

## C. Keeping AWS central while GPU work happens elsewhere

- New AWS accounts: EC2 "Running On-Demand G and VT instances" default quota 0 vCPU (also P, Inf, DL = 0). GPU on AWS needs a quota request. https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-instance-quotas.html
- Free plan: "$100 in credits ... up to an additional USD $100"; ends after 6 months or when credits run out; "free account plans don't have access to certain AWS services that would rapidly consume the entire AWS Free Tier credit amount". https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier.html ; https://aws.amazon.com/free/free-tier-faqs/
  - Builder Center post (Sep 5 2026): $20 credit activities include launching EC2, trying Bedrock, setting a budget, creating an RDS DB, using Lambda. https://builder.aws.com/content/3Iv9tJEEumjb9aFubl1zmd53SlP/the-aws-free-tier-changed-what-every-new-account-gets-in-2026-and-the-five-things-to-set-up-on-day-one
- Lambda: memory 128-10,240 MB; timeout 900 s; container image up to 10 GB; /tmp 512-10,240 MB; sync payload 6 MB; "New AWS accounts have reduced concurrency and memory quotas". https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html
- SageMaker Serverless Inference: RAM 1-6 GB; image up to 10 GB; 5 GB disk; GPUs not supported. Available in Mumbai. https://docs.aws.amazon.com/sagemaker/latest/dg/serverless-endpoints.html
- Patterns:
  1. Batch precompute on our GPU (flood masks, forecasts, embeddings), write COGs/GeoJSON/Parquet to S3; product = Amplify/CloudFront + API Gateway + Lambda + DynamoDB; EventBridge schedules; SNS alerts.
  2. Event-driven: subscribe to the Sentinel-2 or GFS SNS "new object" topics -> SQS queue -> GPU worker polls SQS -> results to S3 -> Lambda notifies. AWS shows up as the nervous system in the demo.
  3. Train on GPU, export small model (ONNX), serve on CPU in Lambda container or SageMaker Serverless (6 GB limit).
  4. Amazon-built model as hero: Chronos-2 on SageMaker (JumpStart/AutoGluon-Cloud) or in Lambda (CPU works).
  5. Agent layer: Strands Agents (event "Build It" list) on Lambda; model via Bedrock or strands-nvidia-nim.
  6. Clay embeddings already on S3 -> OpenSearch (event "Build It" list) k-NN search; no GPU needed.
- Risk: NVIDIA trial endpoints are for testing/evaluation, may train on inputs, and forbid personal data. Do not send citizen photos or voice there; use local open models or AWS services.

## D. Hackathon projects seen (comparables only, no verified winners)
- Dev Season of Code (Devpost) gallery: "FloodNet - A unified AI platform for flood response" ("AI-powered flood resilience network ... real-time radar, and crowdsourced incident reporting"). Search snippet places "Winner" near it; page bot-blocked; placement unverified. https://dev-season-of-code.devpost.com/project-gallery ; https://devpost.com/software/floodnet-a-unified-ai-platform-for-flood-response
- Same gallery has EcoQuest (gamified carbon app) and GreenTail (carbon footprint gamification): crowded pattern.
- GitHub "PrithviNet hackathon" repos (Mar 2026): air pollution dashboards with heatmaps and alerts; event unknown. https://github.com/aneeshreddy18/Prithvinet-hackathon
- Garbage truck route optimisation is common on Devpost and GitHub (e.g. https://devpost.com/software/garbage-collection-optimization snippet; https://github.com/MuhmmadAbrar/Routecraft-A-garbage-truck-route-optimization-system).
- Stubble burning with VIIRS hotspots (GitHub, May 2026). https://github.com/deepeshyadav760/stubble_burning_detection_VIIRS_satellite

## E. Open gaps
- Exact free RPM/credits per model: check our own build.nvidia.com account page.
- Whether FourCastNet hosted API still answers (label says Downloadable).
- FCN3 VRAM on 18 GB: untested; one OOM report on an A6000.
- Fine-tune VRAM for Prithvi-300M / TerraMind-base on 18 GB: not measured; my guess is it fits with small batch and bf16.
- Mounts and sudo on the box: unknown.
- Bedrock is not in the event "Ship It" list; calling it from Lambda is probably fine since Lambda is listed, but unconfirmed.

## Verification

Fact-check run on Fri 2026-10-09, about 18:45 IST. I picked 10 claims and re-opened each source today. Verdicts: confirmed / partly / refuted / unverifiable.

### V1. GPU on AWS is closed to us before Sunday: CONFIRMED
- EC2 quota table: "Running On-Demand G and VT instances" default 0, adjustable. P, Inf, DL and Trn are also 0. The Standard family (A, C, D, H, I, M, R, T, Z) defaults to only 5 vCPU. https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-instance-quotas.html
- Free plan: $100 at signup plus up to $100 from activities. It ends at 6 months or when credits run out. "free account plans don't have access to certain AWS services that would rapidly consume the entire AWS Free Tier credit amount". https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier.html
- New point: "Free account plans are not eligible for other promotional credits and discounts." Extra credits from the organisers may therefore need an upgrade to the Paid plan. https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier-plans.html
- New point: when the Free plan expires, AWS suspends the account. https://aws.amazon.com/free/free-tier-faqs/
- Not checked: SageMaker endpoint instance quotas. They are separate from EC2 vCPU quotas.

### V2. NVIDIA trial terms (testing only, may train on inputs, no personal data): CONFIRMED, with nuance
- PDF v. September 19, 2025. s1.2: "limited trial purposes only and without use of the API Service or Generated Content in production". s1.4: "internal testing and evaluation purposes, not in production". s3.3(iv): NVIDIA collects "User Content and Generated Content to improve NVIDIA products and services, including AI models". s4.3: no personal information "Unless expressly permitted by an API Service". https://assets.ngc.nvidia.com/products/api-catalog/legal/NVIDIA%20API%20Trial%20Terms%20of%20Service.pdf
- Nuance: s2.3 says NVIDIA "will not store or use User Content or Generated Content at the end of each API Service session" (s2.4 lists exceptions), and s3.3 says it collects "without identifying specific users". s3.2 says some services "expressly permit you to provide certain personal data, such as voice input". The personal-data ban is a default, not absolute. Check each model page.
- NIM FAQ: production includes "any non-testing activity including activity serving real end-users". A demo with real users counts as production under this wording. https://forums.developer.nvidia.com/t/nvidia-nim-faq/300317

### V3. Free endpoint limit is about 40 RPM per model: PARTLY
- Forum 377433 (19 Jul 2026): a user asks to go "from 40 requests per minute (RPM) to 200 RPM". A reply quotes a moderator: the limit "is dependent on model, use-case and the amount of current overall traffic"; "There is no official way to circumvent this rate limit or to receive a rate limit increase". https://forums.developer.nvidia.com/t/request-for-nvidia-build-api-rate-limit-increase-40-rpm-200-rpm/377433
- Forum 379569 (7 Aug 2026): "My initial 1,000 free credits are now exhausted". https://forums.developer.nvidia.com/t/request-additional-api-credits-rate-limit-increase-for-build-nvidia-com-free-tier/379569
- horizonlux (last checked 8 Oct 2026): "up to 40 requests per minute and 10,000 requests per day". It gives no official source for the numbers. https://horizonlux.com/tools/ai-models/free/nvidia-nim-free
- NIM FAQ: "The rate of requests will vary per model queried and may vary based on the number of concurrent users."
- Correction: no source says 40 RPM applies per model. The forum user calls it "my ... rate limit", which reads as account-wide. The 10,000-a-day figure comes from one third-party site. Treat both numbers as unverified until we see our own account page.

### V4. Earth2Studio reads GFS from AWS by default; FCN3 facts: CONFIRMED
- gfs.py on main (read through gh api): "Options are [aws, ncep], by default aws"; GFS_BUCKET_NAME = "noaa-gfs-bdp-pds". The AWS source needs dates after 1 Jan 2021; the ncep source covers only the past 10 days. https://github.com/NVIDIA/earth2studio/blob/main/earth2studio/data/gfs.py
- Repo licence Apache-2.0. Release 0.19.0 published 2026-09-30 (GitHub API and PyPI). https://pypi.org/project/earth2studio/
- FCN3 card: 710,867,670 params; Apache 2.0; "60-day global forecast at 0.25°, 6-hourly resolution in under 4 minutes". Supports Ampere (the A6000 is Ampere). Test hardware: A100, H100, L40S. The card recommends AMP with bf16. https://huggingface.co/nvidia/fourcastnet3
- GFS registry: s3://noaa-gfs-bdp-pds in us-east-1, 4 runs a day, SNS arn:aws:sns:us-east-1:123901341784:NewGFSObject. https://registry.opendata.aws/noaa-gfs-bdp-pds/

### V5. Earth-2 options are narrower than they look: CONFIRMED, plus a licence note
- CorrDiff page: "Deprecated", "This NIM Endpoint has been deprecated". https://build.nvidia.com/nvidia/corrdiff
- FourCastNet page: labelled "Downloadable". Has the Amphan sample (2020/05/16, Eastern India). The page still shows "Free APIs for development". The API reference still lists POST https://climate.api.nvidia.com/v1/nvidia/fourcastnet. I did not test whether it answers. https://build.nvidia.com/nvidia/fourcastnet ; https://docs.api.nvidia.com/nim/reference/nvidia-fourcastnet-infer
- NIM quickstart: container "~34GB (uncompressed)", model "~6GB", each output step 299013248 bytes; the run uses --shm-size 4g. https://docs.nvidia.com/nim/earth-2/fourcastnet/latest/quickstart-guide.html
- OOM post (1 Apr 2026): the text matches; no answer is visible. https://forums.developer.nvidia.com/t/running-eart2studio-fcn3-and-gfs-on-rtx-a-6000/365346
- New point: the hosted FourCastNet uses the "NVIDIA AI Foundation Models Community License", not Apache. Only FCN3 from HF or Earth2Studio is Apache 2.0.

### V6. Clay embeddings on S3 plus OpenSearch similarity search with no GPU: PARTLY
- LGND post: 15.2 billion embeddings, "January 2017 through April 2026", CC BY 4.0. Clay v1.5 (632M params, Apache-2.0); 256-dim vectors; GeoParquet 1.1; one embedding per Major TOM cell per month; the post thanks AWS. https://lgnd.ai/resources/sent2-archive-source-coop
- Registry: arn:aws:s3:::us-west-2.opendata.source.coop/clay/lgnd-clay-v1-5-sentinel-2-l2a, "No AWS account required"; SNS topic ...lgnd-clay-v1-5-sentinel-2-l2a_new-object. https://registry.opendata.aws/lgnd-clay-v1-5-sentinel2/
- Correction: the AWS blog (29 May 2025) did not use the LGND set. It made its own Clay v1 embeddings (768-dim, RGB+NIR) on ml.g5.xlarge GPU instances through SageMaker. It then indexed them in "Amazon OpenSearch Serverless" or "LanceDB". The 17 min and 92.4% IoU (95.6% F1) figures come from a decoder head trained on frozen-encoder patch features, over an Impact Observatory land-cover set in Brazil. LGND has one 256-dim vector per chip per month, so that segmentation result does not carry over. https://aws.amazon.com/blogs/machine-learning/revolutionizing-earth-observation-with-geospatial-foundation-models-on-aws/
- Risk: OpenSearch Serverless is probably blocked on the Free plan. k21academy (8 Oct 2026, third party): Free plan accounts without a payment method get "Complete Your Account Setup" for OpenSearch Serverless. The same post says OpenSearch Serverless has no free tier, bills per OCU-hour even when idle, and that Bedrock and SageMaker show the same block. No AWS page confirms this. https://k21academy.com/aws-cloud/opensearch-service-collections-fix/
- Cheaper routes: LanceDB or FAISS in Lambda or on S3, or open-source OpenSearch run ourselves (OpenSearch is on the Build It list as an open-source tool).

### V7. Ready flood models and the radar path: PARTLY
- Prithvi Sen1Floods11 card: Apache 2.0; "446 labeled 512x512 chips ... across 11 flood events"; six bands (Blue, Green, Red, Narrow NIR, SWIR, SWIR 2). Repo has examples/India_900498_S2Hand.tif and inference.py. https://huggingface.co/ibm-nasa-geospatial/Prithvi-EO-2.0-300M-TL-Sen1Floods11
- TerraMind-base-Flood: Apache 2.0 (HF API); fine-tuned on ImpactMesh-Flood. Inputs: S2L2A [1,12,4,256,256], S1RTC [1,2,4,256,256], DEM. The technical report is "coming soon". https://huggingface.co/ibm-esa-geospatial/TerraMind-base-Flood
- Sentinel-2: s3://sentinel-cogs (us-west-2) with SNS cirrus-v0-publish is confirmed. A newer Collection 1 bucket, e84-earth-search-sentinel-data (SNS cirrus-es-prod-publish), is listed first. https://registry.opendata.aws/sentinel-2-l2a-cogs/
- Gap: Sentinel-1 RTC input for India is not a simple AWS fetch. Indigo S1 RTC covers the US (CONUS) only, and its updates are paused. https://registry.opendata.aws/sentinel-1-rtc-indigo/ OPERA RTC-S1 is on AWS but needs NASA Earthdata (ASF) credentials. https://registry.opendata.aws/nasa-operal2rtc-s1v1/ The global S1 archive in s3://sentinel-s1-l1c (eu-central-1, SNS SentinelS1L1C) is GRD, not terrain-corrected. https://registry.opendata.aws/sentinel-1/ Budget time for this before promising cloud-proof flood maps.

### V8. Chronos-2 on SageMaker: CONFIRMED, with a route note
- HF card: 120M params, encoder-only; univariate, multivariate and covariate data zero-shot; "over 300 time series forecasts per second on a single A10G GPU"; runs on GPU and CPU. Context 8192, horizon 1024. JumpStart model_id "pytorch-forecasting-chronos-2" (example uses ml.g5.2xlarge). AutoGluon-Cloud is the recommended route and "Supports real-time, serverless, and batch inference". The HF API lists apache-2.0. About 21M downloads last month. https://huggingface.co/amazon/chronos-2
- Correction: SageMaker Serverless through AutoGluon-Cloud is an official CPU route, so Lambda is not the only one. SageMaker on a Free plan account may need a payment method (third party only; see V6).

### V9. Indian-language voice and text: PARTLY
- Transcribe table lists bn-IN, gu-IN, hi-IN, kn-IN, ml-IN, mr-IN, or-IN, pa-IN, ta-IN, te-IN and en-IN: 10 Indian languages plus Indian English (11 locales). Streaming for most Indic locales is starred: not offered in some regions (Cape Town, Tokyo, Malaysia, Thailand, Ningxia). Mumbai is not on that list. https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html
- HF API: indic-conformer-600m-multilingual MIT, gated; indic-parler-tts Apache-2.0, gated; indictrans2-en-indic-dist-200M MIT, gated.
- Correction: Amazon Polly covers only Hindi (hi-IN) and Indian English (en-IN) among Indian languages. The problem note "Amazon Transcribe and Polly ... can deliver the warning in local languages" overstates this. For spoken Tamil, Bengali and other languages, use Indic Parler-TTS or send text. https://docs.aws.amazon.com/polly/latest/dg/supported-languages.html
- Not re-checked: the IndicConformer WER of 13.2 and the Riva/Parakeet language lists.

### V10. Strands Agents can call NVIDIA endpoints: CONFIRMED
- "pip install strands-nvidia-nim"; NvidiaNIM(api_key, model_id, params). "If you encounter this error using standard LiteLLM integration, switch to strands-nvidia-nim." It is a community provider. https://strandsagents.com/docs/integrations/model-providers/nvidia-nim/

### Not checked
vLLM 0.92 default; YOLO11, RF-DETR and SAM licences; Lambda limits; waste datasets; cuOpt; Whisper; Sarvam-M; the list of free vision models.

### Bottom line
The facts hold up well. The weak points are in how the pieces join: the AWS blog is not the LGND set, OpenSearch Serverless and SageMaker may be blocked on the Free plan, India radar input is hard to get, Polly covers few Indian languages, and nothing shows that 40 RPM applies per model.
