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
  - `verticals`
  - `tools`
  - `partners`
- Added realistic fields for qualification and routing context:
  - funding timelines, revenue floors, term ranges, pricing profile, ideal/not-ideal guidance
  - vertical pain points, capital use cases, and KPI signals
  - tool outcomes, signal inputs, and funnel-stage framing
  - partner audience/distribution metadata, referral motion, and landing headline

## Routing and Tracking
- Upgraded dynamic routes:
  - `/funding/[slug]`
  - `/verticals/[slug]`
  - `/partners/[partnerSlug]`
- Partner route now includes a mock attribution table with source visibility:
  - `incoming` (query override)
  - `default` (partner preset)
  - `missing` (unset)
- Partner route additionally surfaces detected incoming params when present for faster QA validation

## Immediate Next Build Steps
- Connect application intake to validated lead submission contract
- Add event taxonomy for tool interactions and partner conversion milestones
- Introduce CMS-backed content management for offers and vertical templates
