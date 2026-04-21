# Data Model

## FundingCategory
- `slug: string`
- `title: string`
- `tagline: string`
- `summary: string`
- `maxAmount: number`
- `minMonthlyRevenue: number`
- `timeToFunding: string`
- `termRange: string`
- `bestFor: string[]`
- `featured: boolean`

## Vertical
- `slug: string`
- `title: string`
- `summary: string`
- `painPoint: string`
- `marketSignal: string`
- `featuredFundingSlug: string`
- `keyKpis: string[]`

## Tool
- `slug: string`
- `title: string`
- `summary: string`
- `outcome: string`
- `estimatedTime: string`
- `idealFor: string`
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
- `audience: string`
- `distributionModel: string`
- `primaryGoal: string`
- `highlight: string`

## TrackingParams
- `utm_source?: string`
- `utm_medium?: string`
- `utm_campaign?: string`
- `partner_id?: string`
- `ref?: string`
- `asset_id?: string`

## TrackingSnapshot
- `merged: TrackingParams`
- `rows: TrackingDisplayRow[]`

## TrackingDisplayRow
- `key: keyof TrackingParams`
- `label: string`
- `value: string`
- `source: \"incoming\" | \"default\" | \"missing\"`
