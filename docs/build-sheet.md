# Build Sheet

## Product Intent
- Front-end Moonshine Capital marketplace that converts funded-demand intent
- Partner distribution layer with attribution-safe landing experiences
- Vertical and tool surfaces that qualify and route users into application flow

## V1 Experience Upgrades
- Premium homepage with:
  - conversion-led hero
  - featured funding categories
  - featured verticals
  - interactive tools module
  - partner distribution + attribution visibility section
- Upgraded reusable cards and section heading system for stronger visual hierarchy
- Expanded header/footer structure for stronger conversion navigation and route discoverability

## Data and Content System
- Enriched seed content for:
  - `funding-categories`
  - `funding-products`
  - `verticals`
  - `tools`
  - `partners`
- Added realistic fields for qualification and routing context:
  - funding timelines, revenue floors, term ranges, pricing profile, ideal/not-ideal guidance
  - product-level filters like `solutionFamily`, `creditTier`, `useCase`, `parentCategorySlug`
  - vertical segment framing, operator pain points, capital use cases, KPI signals, and best-fit capital paths
  - tool outcomes, signal inputs, and funnel-stage framing
  - partner audience/distribution metadata, referral motion, and landing headline

## Marketplace Planning Updates Reflected In Repo
- Added a white-labeled 59-product product seed file at `src/content/funding-products.ts`
- Built a real vertical coverage directory at `/verticals`
- Expanded the vertical directory to include startups, solopreneurs, consultants, agencies, B2B SaaS, ecommerce brands, Amazon sellers, Walmart sellers, TikTok Shop sellers, restaurants, contractors, trucking, logistics, healthcare, franchise owners, real estate investors, creators, and more
- Expanded the tools directory to include matching, planning, estimators, checklisting, property snapshots, partner-link generation, advisor-card specs, and follow-up workflows
- Documented the distinction between top-level category pages and future product-detail routes in the docs

## Routing and Tracking
- Dynamic routes currently shipping:
  - `/funding/[slug]`
  - `/verticals`
  - `/verticals/[slug]`
  - `/partners/[partnerSlug]`
- Partner route includes a mock attribution table with source visibility:
  - `incoming` (query override)
  - `default` (partner preset)
  - `missing` (unset)
- Partner route additionally surfaces detected incoming params when present for faster QA validation

## Immediate Next Build Steps
- Add true product-detail routes powered by `funding-products`
- Add richer marketplace filters for credit tier, speed, and use case
- Add segment filters or search to the vertical directory
- Connect application intake to validated lead submission contract
- Add event taxonomy for tool interactions and partner conversion milestones
- Introduce CMS-backed content management for offers, products, and vertical templates
