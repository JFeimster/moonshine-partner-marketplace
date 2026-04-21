export type Vertical = {
  slug: string;
  title: string;
  summary: string;
  operatorProfile: string;
  painPoint: string;
  marketSignal: string;
  featuredFundingSlug: string;
  recommendedToolSlug: string;
  keyKpis: string[];
};

export const verticals: Vertical[] = [
  {
    slug: "saas",
    title: "SaaS",
    summary: "Recurring revenue teams scaling pipeline velocity and retention infrastructure.",
    operatorProfile: "Founder-led SaaS businesses with established recurring revenue and pipeline momentum.",
    painPoint: "Customer acquisition ramps faster than available working runway.",
    marketSignal: "Median payback windows compress when funded GTM systems are deployed.",
    featuredFundingSlug: "startup-growth-line",
    recommendedToolSlug: "startup-planner",
    keyKpis: ["MRR growth", "CAC payback", "Net revenue retention"],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    summary: "Provider and service operators balancing compliance, staff expansion, and equipment intensity.",
    operatorProfile: "Clinic owners and service operators expanding capacity while maintaining compliance standards.",
    painPoint: "Credentialing timelines and delayed reimbursements create capital pressure.",
    marketSignal: "Operational throughput climbs with modernized equipment and staffing depth.",
    featuredFundingSlug: "equipment-financing",
    recommendedToolSlug: "revenue-estimator",
    keyKpis: ["Provider utilization", "Days in AR", "Appointment throughput"],
  },
  {
    slug: "logistics",
    title: "Logistics",
    summary: "Freight and fleet operators managing fuel volatility, payroll cadence, and route expansion.",
    operatorProfile: "Fleet-based operators with repeat contracts and working-capital-heavy dispatch cycles.",
    painPoint: "Cash conversion gaps between delivery execution and customer settlement.",
    marketSignal: "Route density and asset uptime are direct drivers of margin expansion.",
    featuredFundingSlug: "working-capital",
    recommendedToolSlug: "funding-match",
    keyKpis: ["Fleet utilization", "On-time delivery", "Gross margin per route"],
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    summary: "Multi-location operators planning around seasonal demand and labor swings.",
    operatorProfile: "Restaurant and hospitality teams balancing guest demand with staffing and inventory timing.",
    painPoint: "Peak demand periods require inventory and staff spending before revenue arrives.",
    marketSignal: "Advanced prep financing consistently improves peak-season capture rates.",
    featuredFundingSlug: "working-capital",
    recommendedToolSlug: "revenue-estimator",
    keyKpis: ["Average ticket size", "Table turn rate", "Seasonal revenue lift"],
  },
  {
    slug: "home-services",
    title: "Home Services",
    summary: "Field-service businesses funding truck fleets, technicians, and job volume spikes.",
    operatorProfile: "Service businesses with strong lead flow and scaling technician operations.",
    painPoint: "Growth in booked jobs can outpace available labor and equipment capital.",
    marketSignal: "Speed-to-dispatch and close rates improve with pre-funded capacity.",
    featuredFundingSlug: "equipment-financing",
    recommendedToolSlug: "funding-match",
    keyKpis: ["Job close rate", "Technician utilization", "Average response time"],
  },
];
