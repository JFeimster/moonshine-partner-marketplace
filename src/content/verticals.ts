export type Vertical = {
  slug: string;
  title: string;
  description: string;
  featuredFundingSlug: string;
};

export const verticals: Vertical[] = [
  {
    slug: "saas",
    title: "SaaS",
    description: "Recurring revenue models that need capital for CAC expansion and retention systems.",
    featuredFundingSlug: "startup-growth-line",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    description: "Provider and services businesses navigating compliance, payroll, and equipment cycles.",
    featuredFundingSlug: "equipment-financing",
  },
  {
    slug: "logistics",
    title: "Logistics",
    description: "Fleet, freight, and distribution operations balancing growth with cash flow timing.",
    featuredFundingSlug: "working-capital",
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    description: "Multi-location operators optimizing staffing, build-out, and seasonal demand.",
    featuredFundingSlug: "working-capital",
  },
];