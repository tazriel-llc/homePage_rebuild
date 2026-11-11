import type { Metadata } from "next";
import RevealBlock from "@/components/motion/reveal-block";
import RevealText from "@/components/motion/reveal-text";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Tazriel",
  description: "Privacy policy and client data handling practices of Tazriel.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main id="main" className="bg-ink text-paper">
      <div className="mx-auto max-w-frame px-gutter pb-section pt-44">
        <RevealBlock>
          <span className="font-mono text-micro uppercase tracking-widest text-accent">
            Legal & Governance
          </span>
        </RevealBlock>

        <RevealText as="h1" className="mt-4 text-display-l">
          Privacy Policy
        </RevealText>

        <RevealBlock delay={0.2} className="measure mt-12 space-y-8 text-body-l text-muted">
          <p>
            Effective Date: January 1, 2025. Last updated: 2026.
          </p>

          <section className="space-y-4">
            <h2 className="text-xl font-normal text-paper">
              1. Information We Collect
            </h2>
            <p>
              {company.name} collects information provided directly by clients
              and prospective partners, including contact details (name, business
              email address, company designation) submitted through consultation
              requests, as well as operational diagnostics shared in preparatory
              discussions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-normal text-paper">
              2. How We Handle Client Data
            </h2>
            <p>
              Tazriel operators work within client-provisioned infrastructure,
              identity providers, and Virtual Private Networks. We do not store,
              extract, or mirror proprietary client data outside authorized
              environments. Any access granted to our specialists is bound by
              strict non-disclosure agreements and enterprise confidentiality
              standards.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-normal text-paper">
              3. Data Retention and Security
            </h2>
            <p>
              We enforce role-based access control (RBAC) and
              principle-of-least-privilege across our delivery centers. Contact
              and inquiry information is retained solely to facilitate commercial
              communication and is never sold, licensed, or shared with third-party
              marketing networks.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-normal text-paper">
              4. Contact Regarding Data Privacy
            </h2>
            <p>
              For questions concerning data privacy, compliance, or enterprise
              audits, contact our governance office at legal@tazriel.com or by
              mail at {company.locality}, {company.region}, {company.country}.
            </p>
          </section>
        </RevealBlock>
      </div>
    </main>
  );
}
