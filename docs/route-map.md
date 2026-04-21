# Route Map

## Core
- `/`
- `/apply`
- `/about`
- `/contact`

## Funding
- `/funding`
- `/funding/[slug]`
  - marketplace index with featured + full catalog views
  - category-specific landing page with borrower profile, highlights, and ideal/not-ideal guidance
  - CTA block for direct apply and tool-assisted qualification
  - related links back to `/funding` and `/tools`

## Verticals
- `/verticals/[slug]`
  - vertical-specific operator narrative and pain points
  - capital use-case module
  - recommended funding categories + alternate options
  - CTA paths for apply or matching tool

## Partners
- `/partners/[partnerSlug]`
  - partner intro and referral motion context
  - tracking snapshot for `partner_id`, UTM fields, `ref`, `asset_id`
  - detected incoming-param module when query params are present
  - partner-ready CTA set for apply, funding browse, and tool launch

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
- Marketplace positioning remains front-end, attribution-visible, and provider-agnostic
