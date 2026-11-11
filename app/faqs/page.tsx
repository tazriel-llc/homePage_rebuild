import type { Metadata } from "next";
import Link from "next/link";
import RevealBlock from "@/components/motion/reveal-block";
import RevealText from "@/components/motion/reveal-text";
import Accordion, { type FaqItem } from "@/components/ui/accordion";
import Magnetic from "@/components/motion/magnetic";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Tazriel",
  description:
    "Clear answers on our engagement model, talent approval, security, and two-continent operations.",
  alternates: { canonical: "/faqs" },
};

const engagementFaqs: FaqItem[] = [
  {
    question: "How does Tazriel differ from conventional BPO agencies?",
    answer:
      "Conventional agencies sell commoditized headcount behind shared queues. Tazriel embeds named, senior specialists directly inside your existing rituals, codebases, and ticketing systems. You interview and approve every operator, and they work exclusively on your systems.",
  },
  {
    question: "What does the onboarding timeline look like?",
    answer:
      "Engagements begin with a diagnostic scoping of your workflow and tooling. Specialist matching takes 5 to 10 business days. Once you interview and approve the candidates, embedding into your systems takes 48 hours.",
  },
  {
    question: "How do you handle specialist turnover or vacations?",
    answer:
      "Every embedded specialist is backed by a shadow lead within the same delivery hub who is briefed on your repository, documentation, and procedures. If an operator is out, coverage continues without knowledge loss.",
  },
];

const operationsFaqs: FaqItem[] = [
  {
    question: "How does the two-continent follow-the-sun model work?",
    answer:
      "Governance, contract stewardship, and US operating hours oversight run from our Springfield, Illinois headquarters. Delivery hubs in Addis Ababa (EAT) and Skopje (CET) cover European and North American working hours, allowing handoffs that maintain continuous operational momentum.",
  },
  {
    question: "What platforms and enterprise systems do you support?",
    answer:
      "Our teams operate deeply inside Cvent, Mendix, Microsoft 365, Power Platform, HubSpot Service Hub, Jira, GitHub/GitLab, and enterprise cloud infrastructure (AWS/Azure). We do not work on platforms where our bench lacks production experience.",
  },
  {
    question: "What security and compliance frameworks govern client data?",
    answer:
      "Specialists work exclusively through client-managed MDM, VPNs, or identity providers (such as Okta or Azure AD) using principle-of-least-privilege access. No client data is stored locally on external endpoints.",
  },
];

export default function FaqsPage() {
  const allFaqs = [...engagementFaqs, ...operationsFaqs];

  // FAQPage Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-line bg-ink px-gutter pb-28 pt-48 text-paper">
          <div className="relative mx-auto max-w-frame">
            <RevealBlock>
              <div className="mb-6 flex items-center gap-3">
                <span className="text-micro font-medium uppercase tracking-[0.2em] text-accent">
                  Inquiries & Transparency
                </span>
                <span className="size-1 rounded-full bg-accent" />
                <span className="text-micro font-medium uppercase tracking-widest text-muted">
                  Operational Reference
                </span>
              </div>
            </RevealBlock>

            <RevealText as="h1" className="max-w-[16ch] text-display-l">
              Answers before you start a conversation.
            </RevealText>

            <RevealBlock delay={0.3}>
              <p className="measure mt-8 text-body-l text-muted">
                No opaque agreements or vague SLAs. Here is exactly how our teams
                integrate, communicate, and maintain sovereign accountability.
              </p>
            </RevealBlock>
          </div>
        </section>

        {/* FAQs Accordions on Paper */}
        <section
          data-field="paper"
          className="bg-paper px-gutter py-section text-ink"
        >
          <div className="mx-auto max-w-frame">
            <div className="grid gap-16 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="sticky top-32">
                  <span className="font-mono text-micro uppercase tracking-widest text-accent">
                    Category Index
                  </span>
                  <h2 className="mt-3 text-display-m font-normal">
                    Everything clarified.
                  </h2>
                  <p className="mt-4 text-sm text-muted-paper">
                    Can&rsquo;t find your specific operational scenario? Our
                    leadership answers directly.
                  </p>
                  <div className="mt-8">
                    <Magnetic>
                      <Link
                        href="/contact"
                        className="inline-block bg-ink px-7 py-3 text-sm font-medium text-paper transition-colors duration-300 hover:bg-ink-raised"
                      >
                        Ask a question
                      </Link>
                    </Magnetic>
                  </div>
                </div>
              </div>

              <div className="space-y-16 lg:col-span-8">
                <RevealBlock>
                  <Accordion
                    category="01 // Engagement Model & Approvals"
                    items={engagementFaqs}
                  />
                </RevealBlock>

                <RevealBlock delay={0.2}>
                  <Accordion
                    category="02 // Operations, Timezones & Security"
                    items={operationsFaqs}
                  />
                </RevealBlock>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
