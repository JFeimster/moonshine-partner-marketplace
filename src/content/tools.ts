export type Tool = {
  slug: string;
  title: string;
  summary: string;
  ctaLabel: string;
};

export const tools: Tool[] = [
  {
    slug: "funding-match",
    title: "Funding Match",
    summary: "Route applicants to the right capital product in under 3 minutes.",
    ctaLabel: "Start match",
  },
  {
    slug: "startup-planner",
    title: "Startup Planner",
    summary: "Model runway and milestone funding needs for early-stage growth.",
    ctaLabel: "Open planner",
  },
  {
    slug: "revenue-estimator",
    title: "Revenue Estimator",
    summary: "Estimate eligibility and expected ranges from monthly revenue signals.",
    ctaLabel: "Estimate now",
  },
];