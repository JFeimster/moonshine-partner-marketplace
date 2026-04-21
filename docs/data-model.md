# Data Model

## FundingCategory
- `slug: string`
- `title: string`
- `summary: string`
- `maxAmount: number`
- `idealFor: string`

## Vertical
- `slug: string`
- `title: string`
- `description: string`
- `featuredFundingSlug: string`

## Tool
- `slug: string`
- `title: string`
- `summary: string`
- `ctaLabel: string`

## Partner
- `slug: string`
- `name: string`
- `partnerId: string`
- `defaultUtmSource: string`
- `defaultUtmMedium: string`
- `defaultUtmCampaign: string`
- `assetId: string`
- `description: string`

## TrackingParams
- `utm_source?: string`
- `utm_medium?: string`
- `utm_campaign?: string`
- `partner_id?: string`
- `ref?: string`
- `asset_id?: string`