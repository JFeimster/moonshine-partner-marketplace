export type Partner = {
  slug: string;
  name: string;
  landingHeadline: string;
  partnerId: string;
  defaultUtmSource: string;
  defaultUtmMedium: string;
  defaultUtmCampaign: string;
  assetId: string;
  description: string;
  audience: string;
  distributionModel: string;
  primaryGoal: string;
  highlight: string;
  preferredVerticalSlugs: string[];
  recommendedFundingSlug: string;
  referralMotion: string;
};

export const partners: Partner[] = [
  {
    slug: "affiliate-network",
    name: "Affiliate Network",
    landingHeadline: "Scale partner-sourced applications with attribution clarity.",
    partnerId: "partner_1001",
    defaultUtmSource: "affiliate-network",
    defaultUtmMedium: "partner",
    defaultUtmCampaign: "marketplace-launch",
    assetId: "asset_affiliate_lp",
    description: "Performance referral network focused on owner-led SMB operators seeking practical funding paths.",
    audience: "SMB owners and operator-led companies",
    distributionModel: "Performance media and comparison placements",
    primaryGoal: "Drive high-intent applications at predictable CAC",
    highlight: "Attribution-clean traffic with scalable intent volume",
    preferredVerticalSlugs: ["logistics", "hospitality", "home-services"],
    recommendedFundingSlug: "working-capital",
    referralMotion: "Performance traffic -> funding detail page -> tracked apply flow",
  },
  {
    slug: "agency-channel",
    name: "Agency Channel",
    landingHeadline: "Convert advisory trust into high-quality funding demand.",
    partnerId: "partner_1002",
    defaultUtmSource: "agency-channel",
    defaultUtmMedium: "partner",
    defaultUtmCampaign: "vertical-expansion",
    assetId: "asset_agency_lp",
    description: "Growth agencies and advisory partners introducing qualified businesses to capital solutions.",
    audience: "Agencies, consultants, and operators in transformation",
    distributionModel: "Referral partnerships and strategic landing pages",
    primaryGoal: "Increase qualified lead conversion and partner retention",
    highlight: "Co-branded journeys for vertical-qualified demand",
    preferredVerticalSlugs: ["saas", "healthcare"],
    recommendedFundingSlug: "startup-growth-line",
    referralMotion: "Partner brief -> vertical page -> tracked qualification tool",
  },
  {
    slug: "platform-integrations",
    name: "Platform Integrations",
    landingHeadline: "Embed funding access inside moments of operator intent.",
    partnerId: "partner_1003",
    defaultUtmSource: "platform-integrations",
    defaultUtmMedium: "partner",
    defaultUtmCampaign: "embedded-finance",
    assetId: "asset_platform_lp",
    description: "Embedded distribution through workflow and SaaS products serving high-intent business audiences.",
    audience: "SaaS operators and product-led business platforms",
    distributionModel: "Embedded entrypoints and contextual in-product CTAs",
    primaryGoal: "Capture demand directly in operational workflows",
    highlight: "Friction-light funding access at moments of intent",
    preferredVerticalSlugs: ["saas", "home-services"],
    recommendedFundingSlug: "invoice-factoring",
    referralMotion: "In-product CTA -> partner landing route -> tracked apply",
  },
  {
    slug: "franchise-channel",
    name: "Franchise Channel",
    landingHeadline: "Support multi-location growth with partner-routed capital paths.",
    partnerId: "partner_1004",
    defaultUtmSource: "franchise-channel",
    defaultUtmMedium: "partner",
    defaultUtmCampaign: "multi-location-growth",
    assetId: "asset_franchise_lp",
    description: "Franchise ecosystem partners connecting multi-location operators to expansion-focused funding options.",
    audience: "Franchise owners and multi-unit operators",
    distributionModel: "Association partnerships and operator newsletters",
    primaryGoal: "Support location launches and capex cycles",
    highlight: "Funding pathways tailored for multi-location execution",
    preferredVerticalSlugs: ["hospitality", "healthcare"],
    recommendedFundingSlug: "equipment-financing",
    referralMotion: "Franchise referral -> category page -> tracked application",
  },
];
