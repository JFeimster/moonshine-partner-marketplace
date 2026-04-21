# Partner Routing + Attribution Spec

## Goal

Partners share front-end assets.
Moonshine Capital controls:
- attribution
- lead capture
- routing
- follow-up
- backend fulfillment

## Tracking Model

Every link should support:
- `partner_id`
- `campaign_id`
- `asset_id`
- `vertical`
- `product_intent`
- `page_type`
- `utm_source`
- `utm_medium`
- `utm_campaign`

Example:
`/funding/startup?partner_id=darwin01&asset_id=startup-page-01&vertical=agency&product_intent=startup`

## Capture Requirements

Store:
- contact info
- tracking params
- referring page
- selected product family
- qualification answers
- timestamp
- partner attribution
- application status
- internal route tag

## Example Routing Rules

### Rule A
If:
- startup_flag = true
- revenue = 0
- credit >= 680

Then:
- route_tag = startup-credit-leverage
- sequence = startup-sequence-a
- application_path = startup-capital

### Rule B
If:
- revenue >= 15000
- time_in_business >= 6 months
- credit < 600
- urgency = high

Then:
- route_tag = fast-revenue-advance
- sequence = emergency-capital-sequence
- application_path = working-capital

### Rule C
If:
- marketplace_seller = true

Then:
- route_tag = ecommerce-capital
- followup = seller-cashflow-report
- application_path = ecommerce-path

## Protection Rules

- never expose backend providers publicly
- never use provider names in slugs
- never send affiliates to raw backend pages first
- use Moonshine-controlled pages as the first click destination

## What Good Looks Like

Partners think they are sharing a funding offer.
In reality, they are feeding a tracked operating system.
Moonshine Capital owns the rails.
