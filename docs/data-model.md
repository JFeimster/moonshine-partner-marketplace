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

## FundingProduct
- `slug: string`
- `title: string`
- `category: "business" | "real-estate" | "personal"`
- `parentCategorySlug: string`
- `fundingType: string`
- `solutionFamily: string`
- `useCase: string`
- `summary: string`
- `minAmount: number | null`
- `maxAmount: number | null`
- `speedToFunding: string`
- `creditTier: "good" | "fair" | "subprime" | "n-a"`
- `minCredit: number | null`
- `minMonthlyRevenue: number | null`
- `timeInBusiness: string`
- `featured: boolean`

## Vertical
- `slug: string`
- `title: string`
- `segment: string`
- `summary: string`
- `operatorProfile: string`
- `painPoint: string`
- `marketSignal: string`
- `featuredFundingSlug: string`
- `recommendedToolSlug: string`
- `capitalUseCases: string[]`
- `keyKpis: string[]`
- `bestFitCapitalPaths: string[]`

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
- `source: "incoming" | "default" | "missing"`

## Marketplace Taxonomy Notes
- `FundingCategory` remains the top-level marketplace browse layer used for narrative landing pages.
- `FundingProduct` is the more granular white-labeled product layer seeded for future product-level filtering, detail routes, and routing tools.
- `Vertical` now has a real directory layer, not just thin narrative landing pages. `segment` and `bestFitCapitalPaths` are the minimum operator-facing fields that make the directory useful.
- `parentCategorySlug` connects products back to broader category pages without exposing backend providers.
- `solutionFamily`, `creditTier`, and `useCase` are the primary marketplace filter fields.
- The expanded tool directory reflects planning, routing, estimator, attribution, and follow-up utilities discussed in the build thread.

## UI Notes
- Funding detail pages read `bestFitBorrower`, `bestFor`, and `notIdealFor` to generate decision guidance.
- Vertical pages now read `segment` and `bestFitCapitalPaths` in addition to `capitalUseCases` and recommended tool/category mappings.
- Partner pages render both full tracking snapshot and incoming-only detected param display.
- The 59-row `FundingProduct` seed file is positioned as the future source for true product-level marketplace routes and richer filtering.
