export type Tool = {
  slug: string;
  title: string;
  summary: string;
  outcome: string;
  estimatedTime: string;
  idealFor: string;
  ctaLabel: string;
};

export const tools: Tool[] = [
  {
    slug: "funding-match",
    title: "Funding Match",
    summary: "Match operators to the most relevant Moonshine funding category using qualification signals.",
    outcome: "Outputs the top funding path with a confidence score.",
    estimatedTime: "3 minutes",
    idealFor: "Inbound traffic and partner referrals",
    ctaLabel: "Launch matcher",
  },
  {
    slug: "startup-planner",
    title: "Startup Planner",
    summary: "Model runway, burn phases, and milestone financing needs for early-stage execution.",
    outcome: "Generates a quarter-by-quarter capital plan.",
    estimatedTime: "5 minutes",
    idealFor: "Pre-seed to Series A teams",
    ctaLabel: "Plan runway",
  },
  {
    slug: "revenue-estimator",
    title: "Revenue Estimator",
    summary: "Estimate likely funding capacity based on monthly revenue, margin profile, and cash cycle.",
    outcome: "Shows projected offer range and readiness score.",
    estimatedTime: "4 minutes",
    idealFor: "Revenue-generating SMB operators",
    ctaLabel: "Run estimate",
  },
];
