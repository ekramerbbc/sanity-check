# Sanity Check

This repo was created as a proof of concept to test Sanity Studio as a CMS for Blue Bottle preparation guides.

## Install dependencies
`yarn`

## Run Sanity Studio locally
`yarn start`

## Deploy CMS
`sanity deploy`

Our Sanity Studio instance lives at [https://bluebottlecoffee.sanity.studio/](https://bluebottlecoffee.sanity.studio/)

## Deploy GraphQL
`sanity graphql deploy`

Our Sanity GraphQL API lives at [https://eo9501mu.api.sanity.io/v1/graphql/production/default](https://eo9501mu.api.sanity.io/v1/graphql/production/default)

A cached CDN version lives at [https://eo9501mu.apicdn.sanity.io/v1/graphql/production/default](https://eo9501mu.apicdn.sanity.io/v1/graphql/production/default). **NOTE**: The cache is invalidated when changes are published **in production**, not in localhost, even though local edits are pushed to prod on `deploy`

Deploying with the `--playground` flag sets up an interactive GraphQL UI at those endpoints. `--no-playground` disables it. https://www.sanity.io/docs/graphql#the-playground-e77f47b5bc78

## For more information
See https://www.sanity.io/docs/sanity-studio
