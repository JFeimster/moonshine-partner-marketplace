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
  - partner program CTA
- Upgraded reusable cards and section heading system for stronger visual hierarchy
- Expanded footer structure for real product navigation and positioning

## Data and Content System
- Enriched seed content for:
  - `funding-categories`
  - `verticals`
  - `tools`
  - `partners`
- Added realistic fields for qualification and routing context:
  - funding timelines, revenue floors, term ranges
  - vertical pain points and KPI signals
  - tool outcomes and completion windows
  - partner audience/distribution model metadata

## Routing and Tracking
- Upgraded dynamic routes:
  - `/funding/[slug]`
  - `/verticals/[slug]`
  - `/partners/[partnerSlug]`
- Partner route now includes a mock attribution table with source visibility:
  - `incoming` (query override)
  - `default` (partner preset)
  - `missing` (unset)

## Immediate Next Build Steps
- Connect application intake to validated lead submission contract
- Add event taxonomy for tool interactions and partner conversion milestones
- Introduce CMS-backed content management for offers and vertical templates
