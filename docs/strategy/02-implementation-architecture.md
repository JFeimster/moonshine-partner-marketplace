# Implementation Architecture — Moonshine Capital as Front-End Marketplace + Routing Engine

## Best Model

Moonshine Capital should be:
- the brand layer
- the marketplace layer
- the intake layer
- the tracking layer
- the routing engine
- the automation backbone

Not a public lender directory.

## Stack Recommendation

### Best long-term: Wix Headless + Vercel/Next.js
Use:
- **Wix** for auth, members, some CMS/content ops, forms if needed
- **Vercel + Next.js** for dynamic landing pages, tools, widgets, partner pages, SEO assets
- **n8n** for webhooks, routing, CRM sync, notifications
- **HubSpot / Airtable / Sheets** for lead and partner ops

This gives speed plus serious front-end control.

### When Wix-only makes sense
Use Wix-only if:
- you need speed over sophistication
- pages are simple
- tools are limited
- partner portal is lightweight

### When Vercel-first makes sense
Use Vercel-first if:
- you want serious engineering-as-marketing
- you want tools, widgets, calculators, microsites
- you want fast SEO pages
- you want full control over tracking and page generation

## Routing Model

### Public layer
User lands on:
- product family page
- vertical page
- quiz
- calculator
- partner page

### Tracking layer
Capture:
- partner_id
- asset_id
- campaign_id
- vertical
- product_intent
- utm params

### Qualification layer
Collect:
- revenue
- time in business
- credit band
- business type
- urgency
- use case
- bank type
- real estate or ecommerce flag

### Decision layer
Map to:
- internal route tag
- application path
- nurture sequence
- owner assignment
- partner attribution

### Fulfillment layer
Trigger:
- CRM write
- email/SMS sequence
- rep assignment
- hidden provider workflow

## Critical Protection Rule

Always separate:
1. public product language
2. internal product map
3. backend provider map

If those get merged, you build your own bypass system.
