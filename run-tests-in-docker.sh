#!/usr/bin/env bash
docker run -t -v $PWD:/app -w /app node:6 echo "$(aws s3 cp s3://nib-shared-artifacts/.npmrc -)" > .npmrc
docker run -t -v $PWD:/app -w /app node:6 npm install --quiet
docker run -t -v $PWD:/app -w /app node:6 npm run precommit --quiet
