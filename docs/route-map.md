# Route Map

## Core
- `/`
- `/apply`
- `/about`
- `/contact`

## Funding
- `/funding`
- `/funding/[slug]`
  - category-specific offer page with qualification highlights
  - CTA to application and tool-assisted matching

## Verticals
- `/verticals/[slug]`
  - market-context narrative for each vertical
  - recommended and alternate funding path modules

## Partners
- `/partners/[partnerSlug]`
  - partner-specific landing shell
  - tracking snapshot for `partner_id`, UTM fields, `ref`, `asset_id`
  - tracked application and browse links

## Tools
- `/tools`
- `/tools/funding-match`
- `/tools/startup-planner`
- `/tools/revenue-estimator`
  - utility-led qualification surfaces feeding conversion workflow

## APIs
- `/api/lead`
- `/api/track`
- `/api/webhook`

## Route Design Notes
- App Router structure is preserved and file-based
- Dynamic routes use seed content + `generateStaticParams` for coverage
- Partner route remains dynamic to support query-based attribution overrides
