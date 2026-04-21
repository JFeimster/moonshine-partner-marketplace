export const ROUTES = {
  home: "/",
  apply: "/apply",
  funding: "/funding",
  verticals: "/verticals",
  tools: "/tools",
  about: "/about",
  contact: "/contact",
  api: {
    lead: "/api/lead",
    track: "/api/track",
    webhook: "/api/webhook",
  },
} as const;

export const fundingRoute = (slug: string) => `${ROUTES.funding}/${slug}`;
export const verticalRoute = (slug: string) => `${ROUTES.verticals}/${slug}`;
export const partnerRoute = (partnerSlug: string) => `/partners/${partnerSlug}`;
export const toolRoute = (slug: string) => `${ROUTES.tools}/${slug}`;