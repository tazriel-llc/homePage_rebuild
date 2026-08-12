/**
 * Long-form content for every service page, keyed by slug.
 *
 * Deviates from PRD §8's one-file-per-service for a lazier reason that holds up:
 * nine ~35-line modules are harder to keep consistent in tone than one file you
 * can read top to bottom. Split it if a CMS ever lands.
 *
 * §3.2: "24/7" appears ONLY in a `spec` block on this page type. Nowhere else
 * on the site. No price signals anywhere.
 *
 * Figures in `spec` are carried over from claims the current tazriel.com already
 * publishes (accuracy target, coverage). They are Tazriel's own numbers, not
 * invented here — but they should be confirmed before launch. PRD §13.
 */

export type ServiceContent = {
  definition: string;
  problem: { heading: string; body: string };
  deliverables: string[];
  platforms?: { name: string; role: string }[];
  /** Rendered as a datasheet. Omitted entirely when empty. */
  spec?: { label: string; value: string }[];
  engagement: string;
};

export const serviceContent: Record<string, ServiceContent> = {
  "software-development": {
    definition:
      "Engineering teams that ship into your codebase, your review process, and your release cadence.",
    problem: {
      heading: "Hiring moves slower than your roadmap.",
      body: "Requisitions take months to fill. Contractors arrive without context and leave with it. The work that mattered two quarters ago is still queued, and the team you have is maintaining what it already built.",
    },
    deliverables: [
      "Feature development inside your existing stack",
      "Legacy modernisation and incremental refactoring",
      "API design, integration, and third-party platform work",
      "QA automation and meaningful test coverage",
      "Code review, technical documentation, and handover",
      "Release engineering and deployment support",
    ],
    platforms: [
      { name: "Mendix", role: "Low-code application development" },
      { name: "Power Platform", role: "Process automation" },
    ],
    spec: [
      { label: "Code ownership", value: "Yours, from the first commit" },
      { label: "Working model", value: "Your repository, your branch policy, your review gates" },
      { label: "Coverage", value: "Aligned to your working hours, extended on request" },
    ],
    engagement:
      "You interview and approve every engineer before they join. They work in your repository under your branch policy, attend your standups, and are accountable to your definition of done.",
  },

  "data-annotation-and-ai-training": {
    definition:
      "Labelled datasets and model-training pipelines held to a measured accuracy standard.",
    problem: {
      heading: "Your model is only as good as the data behind it.",
      body: "Annotation is treated as commodity work until a mislabelled class costs you a release. Quality is asserted rather than measured, guidelines drift between annotators, and nobody can tell you the agreement rate.",
    },
    deliverables: [
      "Image, video, text, and audio annotation",
      "Bounding boxes, semantic segmentation, and keypoint labelling",
      "Named entity, intent, and sentiment labelling",
      "Multi-pass QA with inter-annotator agreement scoring",
      "Taxonomy design and annotation guideline development",
      "Model evaluation and structured error analysis",
    ],
    spec: [
      { label: "Accuracy target", value: "99.9%" },
      { label: "Quality assurance", value: "Multi-pass review with inter-annotator agreement scoring" },
      { label: "Coverage", value: "24/7 across two continents" },
    ],
    engagement:
      "We start by writing the annotation guideline with you, then calibrate a pilot batch until agreement holds. Throughput scales only after the quality bar is proven, never before.",
  },

  "microsoft-365-administration": {
    definition:
      "Tenant administration, security posture, and Power Platform automation.",
    problem: {
      heading: "The tenant grew faster than anyone documented it.",
      body: "Licences are over-provisioned, conditional access has exceptions nobody remembers granting, and the one administrator who understood the estate has moved on.",
    },
    deliverables: [
      "Tenant configuration and licence rationalisation",
      "Identity, conditional access, and MFA policy",
      "Exchange, SharePoint, and Teams administration",
      "Power Automate flows and Power Apps development",
      "Compliance, retention, and data loss prevention policy",
      "Migration and multi-tenant consolidation",
    ],
    platforms: [
      { name: "Microsoft 365", role: "Tenant and security administration" },
      { name: "Power Platform", role: "Process automation" },
    ],
    spec: [
      { label: "Access model", value: "Least privilege, reviewed quarterly" },
      { label: "Change control", value: "Documented, reversible, approved by you" },
      { label: "Coverage", value: "Business hours, extended to 24/7 on request" },
    ],
    engagement:
      "An estate audit comes first — licences, policy, and configuration drift — delivered as a written finding before any change is proposed.",
  },

  "meetings-and-events": {
    definition:
      "Cvent-certified event operations, from registration build through on-site delivery.",
    problem: {
      heading: "The platform is capable. The configuration is the hard part.",
      body: "Registration paths multiply, session capacity rules conflict, and the reporting you need after the event depends on decisions made before it was built.",
    },
    deliverables: [
      "Cvent registration site build, logic, and testing",
      "Attendee communication and email campaign management",
      "Session, speaker, and agenda administration",
      "Badge production, check-in, and on-site logistics",
      "Housing and travel coordination",
      "Post-event reporting and attendee analytics",
    ],
    platforms: [{ name: "Cvent", role: "Event management" }],
    spec: [
      { label: "Build review", value: "Full path testing before registration opens" },
      { label: "Peak coverage", value: "24/7 through registration launch and event week" },
    ],
    engagement:
      "Specialists who have built the configuration before, working in your Cvent instance, with a tested registration path signed off before anything goes live.",
  },

  "it-helpdesk": {
    definition: "Tiered technical support staffed by engineers, not scripts.",
    problem: {
      heading: "Tier 1 exists to close tickets, not to solve them.",
      body: "Most outsourced helpdesks are optimised for handle time. Issues get escalated, reopened, and escalated again, and your internal engineers end up doing the work anyway.",
    },
    deliverables: [
      "Tier 1 through Tier 3 ticket resolution",
      "Endpoint provisioning and device lifecycle management",
      "Network monitoring and incident response",
      "Access, identity, and permission administration",
      "Runbook and knowledge-base development",
      "Escalation management and root-cause reporting",
    ],
    platforms: [
      { name: "Cisco Meraki", role: "Network operations" },
      { name: "Microsoft 365", role: "Identity and endpoint administration" },
    ],
    spec: [
      { label: "Coverage", value: "24/7, follow-the-sun across two continents" },
      { label: "Tiers", value: "1 through 3, resolved at the lowest capable tier" },
      { label: "Reporting", value: "Resolution rate, reopen rate, and root cause" },
    ],
    engagement:
      "We measure first-contact resolution and reopen rate rather than handle time, because those are the numbers that tell you whether the ticket was actually fixed.",
  },

  "saas-product-support": {
    definition:
      "Support teams that learn your platform deeply enough to resolve rather than deflect.",
    problem: {
      heading: "Your support queue is your product feedback loop.",
      body: "Outsourced support that never learns the product turns every non-trivial ticket into an engineering interrupt, and quietly destroys the signal your roadmap depends on.",
    },
    deliverables: [
      "Tiered customer support across email, chat, and voice",
      "Technical troubleshooting and bug triage",
      "Customer onboarding and product training",
      "Knowledge base and help-centre authoring",
      "Engineering escalation with full reproduction steps",
      "Support metrics and voice-of-customer reporting",
    ],
    platforms: [
      { name: "HubSpot Service Hub", role: "Support operations" },
    ],
    spec: [
      { label: "Coverage", value: "24/7" },
      { label: "Channels", value: "Email, chat, and voice" },
      { label: "Escalation", value: "Reproduction steps attached, never a forwarded ticket" },
    ],
    engagement:
      "Agents run your product against a real environment during onboarding and are not put in front of customers until they can resolve the common cases unaided.",
  },

  "marketing-and-digital-services": {
    definition:
      "Campaign operations, demand generation, and the reporting that proves it worked.",
    problem: {
      heading: "Campaigns ship. Attribution does not.",
      body: "Execution capacity is the visible constraint, but the expensive one is not knowing which spend produced pipeline — so next quarter's budget is argued rather than decided.",
    },
    deliverables: [
      "Campaign build and marketing automation",
      "SEO strategy and content production",
      "Paid search and paid social management",
      "Lifecycle and nurture programme development",
      "Analytics, attribution, and reporting",
      "Creative production and landing page development",
    ],
    spec: [
      { label: "Reporting cadence", value: "Weekly performance, monthly attribution" },
      { label: "Ownership", value: "Your accounts, your data, your ad spend" },
    ],
    engagement:
      "Work runs in your accounts and your analytics, so everything produced stays yours when the engagement ends.",
  },

  "sales-development-representatives": {
    definition: "Outbound pipeline development run by trained sellers.",
    problem: {
      heading: "Pipeline is the constraint, and prospecting is the first thing dropped.",
      body: "Closers stop prospecting the moment they have a live deal, and the pipeline gap shows up a quarter later when it is too late to fix.",
    },
    deliverables: [
      "Prospect research and list building",
      "Outbound sequencing across email, phone, and social",
      "Inbound lead qualification and routing",
      "CRM hygiene and pipeline reporting",
      "Meeting scheduling and structured handoff to your closers",
    ],
    spec: [
      { label: "Ownership", value: "Your CRM, your domain reputation, your messaging" },
      { label: "Reporting", value: "Activity, conversion, and meeting-held rate" },
    ],
    engagement:
      "Representatives are trained on your product and your objection handling before the first outbound touch, and work under your messaging rather than a generic script.",
  },

  "virtual-assistance": {
    definition:
      "Executive and administrative support embedded in your operation.",
    problem: {
      heading: "Senior time is spent on work that does not need seniority.",
      body: "Scheduling, expenses, and document preparation quietly consume the hours your leadership was hired to spend elsewhere.",
    },
    deliverables: [
      "Calendar and inbox management",
      "Travel booking and expense coordination",
      "Document preparation and data entry",
      "Vendor and supplier liaison",
      "Meeting notes and follow-up tracking",
    ],
    spec: [
      { label: "Coverage", value: "Aligned to your time zone" },
      { label: "Confidentiality", value: "Signed before access is granted" },
    ],
    engagement:
      "Assistants are matched to working style rather than task list, and stay with the same principal so context compounds instead of resetting.",
  },
};
