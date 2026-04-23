# moonshine-partner-marketplace

Moonshine Capital front-end marketplace, partner lead engine, and routing platform built with Next.js App Router, TypeScript, and Tailwind CSS.

## What this scaffold includes
- Shared marketplace layout with reusable header/footer
- Funding index and dynamic funding category pages
- Dynamic vertical landing pages
- Dynamic partner landing pages with tracking parameter handling
- Tool hub plus interactive tool routes
- API placeholders:
  - `/api/lead`
  - `/api/track`
  - `/api/webhook`

## Seed content now present in repo
- `src/content/funding-categories.ts`
  - top-level marketplace browse categories
- `src/content/funding-products.ts`
  - 59-row white-labeled product seed catalog for future product-detail marketplace routes
- `src/content/verticals.ts`
  - expanded vertical directory across SaaS, ecommerce, contractors, trucking, healthcare, real estate, franchise, creators, and more
- `src/content/tools.ts`
  - expanded tool directory spanning matching, planning, estimators, checklisting, property snapshots, attribution, and follow-up utilities

## Project structure
- `src/app`: routes and API handlers
- `src/components`: reusable UI components
- `src/content`: seed content for marketplace entities
- `src/lib`: shared config, routes, tracking, utils
- `docs`: scaffold documentation (`build-sheet`, `route-map`, `data-model`)

## Tracking fields supported
`utm_source`, `utm_medium`, `utm_campaign`, `partner_id`, `ref`, `asset_id`

## Important modeling note
This repo now reflects a two-layer marketplace model:
- **Funding categories** = current narrative browse pages and top-level marketplace framing
- **Funding products** = future product-detail and richer filtering layer

That lets the repo keep today’s category-level routes while also storing the fuller product catalog discussed in the build thread.

## Recommended next build layer
- Add product-detail routes powered by `funding-products`
- Add richer filtering by credit tier, speed, and use case
- Connect the product layer to CMS or structured content management

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