#############
# Create base image

FROM node:22.15.0-alpine AS base-image

# The `CI` environment variable must be set for pnpm to run in headless mode
ENV CI=true

WORKDIR /srv/app/

RUN corepack enable


########################
# Fetch dependencies

FROM base-image AS prepare

COPY ./pnpm-lock.yaml package.json ./

RUN pnpm fetch

COPY ./ ./

RUN pnpm install --offline


########################
# Lint everything

FROM prepare AS lint

RUN pnpm run lint
