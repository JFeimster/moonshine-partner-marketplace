export type FundingCategory = {
  slug: string;
  title: string;
  summary: string;
  maxAmount: number;
  idealFor: string;
};

export const fundingCategories: FundingCategory[] = [
  {
    slug: "working-capital",
    title: "Working Capital",
    summary: "Fast access to operating cash for inventory, payroll, and short-cycle growth.",
    maxAmount: 500000,
    idealFor: "Established operators with recurring revenue.",
  },
  {
    slug: "equipment-financing",
    title: "Equipment Financing",
    summary: "Preserve cash while acquiring production, logistics, and business-critical equipment.",
    maxAmount: 750000,
    idealFor: "Businesses upgrading hardware and machinery.",
  },
  {
    slug: "invoice-factoring",
    title: "Invoice Factoring",
    summary: "Turn receivables into near-term liquidity and smooth out cash conversion cycles.",
    maxAmount: 1000000,
    idealFor: "Teams managing long payment terms from customers.",
  },
  {
    slug: "startup-growth-line",
    title: "Startup Growth Line",
    summary: "Flexible growth capital for early-stage teams scaling acquisition and delivery.",
    maxAmount: 300000,
    idealFor: "Seed-stage and pre-Series A startups.",
  },
];