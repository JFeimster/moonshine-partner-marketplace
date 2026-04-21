export type FundingCategory = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  bestFitBorrower: string;
  maxAmount: number;
  minMonthlyRevenue: number;
  timeToFunding: string;
  termRange: string;
  pricingRange: string;
  approvalSignals: string[];
  recommendedVerticalSlugs: string[];
  bestFor: string[];
  notIdealFor: string[];
  featured: boolean;
};

export const fundingCategories: FundingCategory[] = [
  {
    slug: "working-capital",
    title: "Working Capital",
    tagline: "Flexible capital for day-to-day growth pressure",
    summary: "Bridge operating gaps and accelerate inventory, hiring, and expansion initiatives without freezing cash reserves.",
    bestFitBorrower: "Operators with stable deposits who need speed and flexibility for near-term growth cycles.",
    maxAmount: 500000,
    minMonthlyRevenue: 25000,
    timeToFunding: "As fast as 24-72 hours",
    termRange: "6-18 months",
    pricingRange: "Factor-based pricing with transparent payoff schedule",
    approvalSignals: ["Stable monthly deposits", "Healthy gross margins", "Business operating 12+ months"],
    recommendedVerticalSlugs: ["logistics", "hospitality"],
    bestFor: ["Inventory cycles", "Seasonal payroll", "Location expansion"],
    notIdealFor: ["Pre-revenue startups", "Long horizon capex-only projects", "Businesses with irregular banking history"],
    featured: true,
  },
  {
    slug: "equipment-financing",
    title: "Equipment Financing",
    tagline: "Acquire critical assets while preserving liquidity",
    summary: "Fund equipment upgrades, vehicles, and production assets with structured terms aligned to business cash flow.",
    bestFitBorrower: "Businesses making tangible equipment purchases tied directly to output and revenue capacity.",
    maxAmount: 750000,
    minMonthlyRevenue: 40000,
    timeToFunding: "2-5 business days",
    termRange: "12-60 months",
    pricingRange: "Structured monthly repayment",
    approvalSignals: ["Equipment quote or invoice", "Verified cash flow", "Business entity in good standing"],
    recommendedVerticalSlugs: ["healthcare", "home-services"],
    bestFor: ["Fleet additions", "Medical and dental devices", "Manufacturing equipment"],
    notIdealFor: ["Working capital-only needs", "Unverified equipment vendors", "Short-term cash bridge requests"],
    featured: true,
  },
  {
    slug: "invoice-factoring",
    title: "Invoice Factoring",
    tagline: "Convert receivables into immediate operating cash",
    summary: "Unlock cash tied up in unpaid invoices to maintain continuity across payroll, procurement, and servicing.",
    bestFitBorrower: "B2B operators with strong invoice volume and creditworthy customers on delayed payment terms.",
    maxAmount: 1000000,
    minMonthlyRevenue: 50000,
    timeToFunding: "Same week after review",
    termRange: "Rolling facilities",
    pricingRange: "Rate varies by debtor quality and invoice age",
    approvalSignals: ["Commercial invoices", "B2B payment history", "Receivables aging report"],
    recommendedVerticalSlugs: ["logistics", "saas"],
    bestFor: ["B2B services", "Net-30/60 invoice terms", "Rapid growth with long AR cycles"],
    notIdealFor: ["Low invoice volume businesses", "Consumer-only revenue models", "Very short operating history"],
    featured: true,
  },
  {
    slug: "startup-growth-line",
    title: "Startup Growth Line",
    tagline: "Growth runway for early-stage operators",
    summary: "Support go-to-market expansion, product delivery, and hiring plans with milestone-aware funding access.",
    bestFitBorrower: "Early-stage teams with growing revenue and a clear milestone plan for capital deployment.",
    maxAmount: 300000,
    minMonthlyRevenue: 10000,
    timeToFunding: "3-7 business days",
    termRange: "6-24 months",
    pricingRange: "Risk-adjusted, milestone-aware terms",
    approvalSignals: ["Consistent growth trend", "Operator commitment", "Defined use of capital"],
    recommendedVerticalSlugs: ["saas", "home-services"],
    bestFor: ["SaaS and tech-enabled services", "Emerging operator-led brands", "Teams approaching seed milestones"],
    notIdealFor: ["Concept-stage projects", "Undefined use-of-funds plans", "Teams without operating traction"],
    featured: false,
  },
  {
    slug: "merchant-cash-advance",
    title: "Merchant Cash Advance",
    tagline: "Revenue-linked funding with flexible repayment cadence",
    summary: "Access upfront capital repaid as a percentage of future sales for businesses with strong daily processing volume.",
    bestFitBorrower: "Card-heavy operators with consistent transaction velocity and short-cycle growth needs.",
    maxAmount: 400000,
    minMonthlyRevenue: 35000,
    timeToFunding: "24-48 hours",
    termRange: "3-12 months",
    pricingRange: "Revenue-share based remittance",
    approvalSignals: ["Card processing history", "Consistent sales volume", "Operating account verification"],
    recommendedVerticalSlugs: ["hospitality", "home-services"],
    bestFor: ["High card volume businesses", "Hospitality and retail", "Short-cycle growth opportunities"],
    notIdealFor: ["Low card processing businesses", "Long-term fixed asset purchases", "Volatile or declining sales trends"],
    featured: false,
  },
];
