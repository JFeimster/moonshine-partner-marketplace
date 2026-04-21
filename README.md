# moonshine-partner-marketplace

Moonshine Capital front-end marketplace, partner lead engine, and routing platform built with Next.js App Router, TypeScript, and Tailwind CSS.

## What this scaffold includes
- Shared marketplace layout with reusable header/footer
- Funding index and dynamic funding category pages
- Dynamic vertical landing pages
- Dynamic partner landing pages with tracking parameter handling
- Tool hub plus three tool pages:
  - funding match
  - startup planner
  - revenue estimator
- API placeholders:
  - `/api/lead`
  - `/api/track`
  - `/api/webhook`

## Project structure
- `src/app`: routes and API handlers
- `src/components`: reusable UI components
- `src/content`: seed content for marketplace entities
- `src/lib`: shared config, routes, tracking, utils
- `docs`: scaffold documentation (`build-sheet`, `route-map`, `data-model`)

## Tracking fields supported
`utm_source`, `utm_medium`, `utm_campaign`, `partner_id`, `ref`, `asset_id`

## Run locally
```bash
npm install
npm run dev
```

## Validate
```bash
npm run lint
npm run build
```