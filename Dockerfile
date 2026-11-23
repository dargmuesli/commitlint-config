#############
# Create base image

FROM node:26.13.1-alpine@sha256:6bd9ab43c0ec0190ca7b2d193906cb8b7edf6e7f4afa43ddeccd6452710bffb5 AS base-image

# The `CI` environment variable must be set for pnpm to run in headless mode
ENV CI=true

WORKDIR /srv/app/

RUN npm i -g pnpm


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
