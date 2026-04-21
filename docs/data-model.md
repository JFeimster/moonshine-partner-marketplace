# Data Model

## FundingCategory
- `slug: string`
- `title: string`
- `tagline: string`
- `summary: string`
- `bestFitBorrower: string`
- `maxAmount: number`
- `minMonthlyRevenue: number`
- `timeToFunding: string`
- `termRange: string`
- `pricingRange: string`
- `approvalSignals: string[]`
- `recommendedVerticalSlugs: string[]`
- `bestFor: string[]`
- `notIdealFor: string[]`
- `featured: boolean`

## Vertical
- `slug: string`
- `title: string`
- `summary: string`
- `operatorProfile: string`
- `painPoint: string`
- `marketSignal: string`
- `featuredFundingSlug: string`
- `recommendedToolSlug: string`
- `capitalUseCases: string[]`
- `keyKpis: string[]`

## Tool
- `slug: string`
- `title: string`
- `summary: string`
- `outcome: string`
- `estimatedTime: string`
- `idealFor: string`
- `signalInputs: string[]`
- `primaryMetric: string`
- `funnelStage: string`
- `ctaLabel: string`

## Partner
- `slug: string`
- `name: string`
- `landingHeadline: string`
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
- `preferredVerticalSlugs: string[]`
- `recommendedFundingSlug: string`
- `referralMotion: string`

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

## UI Notes
- Funding detail pages read `bestFitBorrower`, `bestFor`, and `notIdealFor` to generate decision guidance
- Vertical pages read `capitalUseCases` and recommended tool/category mappings
- Partner pages render both full tracking snapshot and incoming-only detected param display
