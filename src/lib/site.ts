export type NavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Moonshine Capital Marketplace",
  shortName: "Moonshine Capital",
  description:
    "Marketplace infrastructure for partner-distributed funding offers, vertical landing pages, and conversion routing.",
  nav: [
    { label: "Funding", href: "/funding" },
    { label: "Verticals", href: "/verticals" },
    { label: "Tools", href: "/tools" },
    { label: "Partners", href: "/partners/affiliate-network" },
    { label: "Apply", href: "/apply" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
  legal: {
    company: "Moonshine Capital",
    supportEmail: "partners@moonshinecapital.com",
  },
} as const;