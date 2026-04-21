export type Partner = {
  slug: string;
  name: string;
  partnerId: string;
  defaultUtmSource: string;
  defaultUtmMedium: string;
  defaultUtmCampaign: string;
  assetId: string;
  description: string;
};

export const partners: Partner[] = [
  {
    slug: "affiliate-network",
    name: "Affiliate Network",
    partnerId: "partner_1001",
    defaultUtmSource: "affiliate-network",
    defaultUtmMedium: "partner",
    defaultUtmCampaign: "marketplace-launch",
    assetId: "asset_affiliate_lp",
    description: "Performance referral network focused on SMB operators and owner-led companies.",
  },
  {
    slug: "agency-channel",
    name: "Agency Channel",
    partnerId: "partner_1002",
    defaultUtmSource: "agency-channel",
    defaultUtmMedium: "partner",
    defaultUtmCampaign: "vertical-expansion",
    assetId: "asset_agency_lp",
    description: "Growth agencies and consultants introducing qualified operators to funding paths.",
  },
  {
    slug: "platform-integrations",
    name: "Platform Integrations",
    partnerId: "partner_1003",
    defaultUtmSource: "platform-integrations",
    defaultUtmMedium: "partner",
    defaultUtmCampaign: "embedded-finance",
    assetId: "asset_platform_lp",
    description: "Embedded distribution via SaaS and workflow platforms serving high-intent businesses.",
  },
];