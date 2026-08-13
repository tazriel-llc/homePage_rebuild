/**
 * Single source of truth for site-wide content. §8
 *
 * Copy here follows the §3.2 rules: no price signals, no "affordable",
 * no "24/7" outside a service-page specification block, no exclamation marks.
 */

export const company = {
  name: "Tazriel",
  tagline: "Specialists who work the way you already do.",
  description:
    "Tazriel places senior operators inside your process — across seven disciplines, on two continents.",
  url: "https://tazriel.com",
  locality: "Springfield",
  region: "IL",
  country: "US",
  founded: "2025", // §13.6 — unverified, carried over from the current site
} as const;

export type Service = {
  slug: string;
  name: string;
  /** Nav and index one-liner. Concrete deliverable, never a benefit adjective. */
  summary: string;
  /** Two or three words for the pinned index. */
  discipline: string;
  /** Excluded from navigation. Route stays live, as on the current site. */
  dormant?: boolean;
};

export const services: Service[] = [
  {
    slug: "software-development",
    name: "Software Development",
    summary: "Engineering teams that ship into your codebase and your process.",
    discipline: "Engineering",
  },
  {
    slug: "data-annotation-and-ai-training",
    name: "Data Annotation & AI Training",
    summary:
      "Labelled datasets and model-training pipelines held to a measured accuracy standard.",
    discipline: "Machine learning",
  },
  {
    slug: "microsoft-365-administration",
    name: "Microsoft 365 Administration",
    summary:
      "Tenant administration, security posture, and Power Platform automation.",
    discipline: "Platform operations",
  },
  {
    slug: "meetings-and-events",
    name: "Meetings & Events",
    summary:
      "Cvent-certified event operations, from registration build through on-site delivery.",
    discipline: "Event operations",
  },
  {
    slug: "it-helpdesk",
    name: "IT Helpdesk",
    summary: "Tiered technical support staffed by engineers, not scripts.",
    discipline: "Support",
  },
  {
    slug: "saas-product-support",
    name: "SaaS Product Support",
    summary:
      "Support teams that learn your platform deeply enough to resolve rather than deflect.",
    discipline: "Product support",
  },
  {
    slug: "marketing-and-digital-services",
    name: "Marketing & Digital Services",
    summary:
      "Campaign operations, demand generation, and the reporting that proves it worked.",
    discipline: "Growth",
  },

  // Built and reachable, excluded from navigation — unchanged from the current site. §6
  {
    slug: "sales-development-representatives",
    name: "Sales Development Representatives",
    summary: "Outbound pipeline development run by trained sellers.",
    discipline: "Revenue",
    dormant: true,
  },
  {
    slug: "virtual-assistance",
    name: "Virtual Assistance",
    summary: "Executive and administrative support embedded in your operation.",
    discipline: "Operations",
    dormant: true,
  },
];

export const liveServices = services.filter((s) => !s.dormant);

/**
 * The layers of the stack, ordered outermost (what the business touches) to
 * innermost (what it runs on). That order is what the exploded view walks
 * through, so it is deliberate rather than alphabetical.
 *
 * `note` is the one-line reason Tazriel is in that layer at all.
 * `image` points at /public/media — reused photography, not a partner logo, so
 * nothing here implies a certification Tazriel has not evidenced. PRD §13.3.
 */
export const platforms = [
  {
    name: "Cvent",
    role: "Event management",
    note: "Registration logic built and path-tested before it opens.",
    image: "meetings-and-events",
  },
  {
    name: "HubSpot Service Hub",
    role: "Support operations",
    note: "Queues, routing, and the reporting your roadmap depends on.",
    image: "saas-product-support",
  },
  {
    name: "Mendix",
    role: "Low-code application development",
    note: "Applications shipped inside your governance, not around it.",
    image: "software-development",
  },
  {
    name: "Power Platform",
    role: "Process automation",
    note: "The manual steps between systems, removed.",
    image: "marketing-and-digital-services",
  },
  {
    name: "Microsoft 365",
    role: "Tenant and security administration",
    note: "Identity, conditional access, and licence drift held in check.",
    image: "microsoft-365-administration",
  },
  {
    name: "Cisco Meraki",
    role: "Network operations",
    note: "The layer everything above it quietly assumes is working.",
    image: "it-helpdesk",
  },
] as const;

export const nav = [
  { label: "About", href: "/about" },
  { label: "FAQs", href: "/faqs" },
] as const;

export const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/tazriel" },
  { label: "X", href: "https://x.com/tazrielhq" },
  { label: "Instagram", href: "https://www.instagram.com/tazrielhq" },
  { label: "Threads", href: "https://www.threads.net/@tazrielhq" },
  { label: "TikTok", href: "https://www.tiktok.com/@tazrielhq" },
  { label: "Pinterest", href: "https://www.pinterest.com/tazrielhq" },
  { label: "Crunchbase", href: "https://www.crunchbase.com/organization/tazriel" },
] as const;

export const legal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
] as const;
