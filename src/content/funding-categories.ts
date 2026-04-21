export type FundingCategory = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  maxAmount: number;
  minMonthlyRevenue: number;
  timeToFunding: string;
  termRange: string;
  bestFor: string[];
  featured: boolean;
};

export const fundingCategories: FundingCategory[] = [
  {
    slug: "working-capital",
    title: "Working Capital",
    tagline: "Flexible capital for day-to-day growth pressure",
    summary: "Bridge operating gaps and accelerate inventory, hiring, and expansion initiatives without freezing cash reserves.",
    maxAmount: 500000,
    minMonthlyRevenue: 25000,
    timeToFunding: "As fast as 24-72 hours",
    termRange: "6-18 months",
    bestFor: ["Inventory cycles", "Seasonal payroll", "Location expansion"],
    featured: true,
  },
  {
    slug: "equipment-financing",
    title: "Equipment Financing",
    tagline: "Acquire critical assets while preserving liquidity",
    summary: "Fund equipment upgrades, vehicles, and production assets with structured terms aligned to business cash flow.",
    maxAmount: 750000,
    minMonthlyRevenue: 40000,
    timeToFunding: "2-5 business days",
    termRange: "12-60 months",
    bestFor: ["Fleet additions", "Medical and dental devices", "Manufacturing equipment"],
    featured: true,
  },
  {
    slug: "invoice-factoring",
    title: "Invoice Factoring",
    tagline: "Convert receivables into immediate operating cash",
    summary: "Unlock cash tied up in unpaid invoices to maintain continuity across payroll, procurement, and servicing.",
    maxAmount: 1000000,
    minMonthlyRevenue: 50000,
    timeToFunding: "Same week after review",
    termRange: "Rolling facilities",
    bestFor: ["B2B services", "Net-30/60 invoice terms", "Rapid growth with long AR cycles"],
    featured: true,
  },
  {
    slug: "startup-growth-line",
    title: "Startup Growth Line",
    tagline: "Growth runway for early-stage operators",
    summary: "Support go-to-market expansion, product delivery, and hiring plans with milestone-aware funding access.",
    maxAmount: 300000,
    minMonthlyRevenue: 10000,
    timeToFunding: "3-7 business days",
    termRange: "6-24 months",
    bestFor: ["SaaS and tech-enabled services", "Emerging operator-led brands", "Teams approaching seed milestones"],
    featured: false,
  },
  {
    slug: "merchant-cash-advance",
    title: "Merchant Cash Advance",
    tagline: "Revenue-linked funding with flexible repayment cadence",
    summary: "Access upfront capital repaid as a percentage of future sales for businesses with strong daily processing volume.",
    maxAmount: 400000,
    minMonthlyRevenue: 35000,
    timeToFunding: "24-48 hours",
    termRange: "3-12 months",
    bestFor: ["High card volume businesses", "Hospitality and retail", "Short-cycle growth opportunities"],
    featured: false,
  },
];
