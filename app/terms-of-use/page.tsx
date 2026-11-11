import type { Metadata } from "next";
import RevealBlock from "@/components/motion/reveal-block";
import RevealText from "@/components/motion/reveal-text";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Use — Tazriel",
  description: "Terms governing the use of Tazriel's website and services.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/terms-of-use" },
};

export default function TermsOfUsePage() {
  return (
    <main id="main" className="bg-ink text-paper">
      <div className="mx-auto max-w-frame px-gutter pb-section pt-44">
        <RevealBlock>
          <span className="font-mono text-micro uppercase tracking-widest text-accent">
            Legal & Governance
          </span>
        </RevealBlock>

        <RevealText as="h1" className="mt-4 text-display-l">
          Terms of Use
        </RevealText>

        <RevealBlock delay={0.2} className="measure mt-12 space-y-8 text-body-l text-muted">
          <p>
            Effective Date: January 1, 2025. Last updated: 2026.
          </p>

          <section className="space-y-4">
            <h2 className="text-xl font-normal text-paper">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing the website and digital materials of {company.name} (
              {company.url}), you agree to comply with and be bound by these Terms
              of Use. If you do not agree with these terms, you should discontinue
              use of this site immediately.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-normal text-paper">
              2. Intellectual Property
            </h2>
            <p>
              All proprietary content, brand identifiers, trademarks, typography,
              and design systems presented on this site are the property of{" "}
              {company.name} and are protected under United States and
              international copyright and trademark laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-normal text-paper">
              3. Service Engagements
            </h2>
            <p>
              Informational materials on this website do not constitute a binding
              commercial offer. All professional BPO and technology services
              provided by Tazriel are governed exclusively by formal Master
              Services Agreements (MSA) and Statements of Work (SOW) executed
              between Tazriel and authorized client representatives.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-normal text-paper">
              4. Governing Law
            </h2>
            <p>
              These Terms of Use shall be governed by and construed in accordance
              with the laws of the State of Illinois, without regard to conflict of
              law principles.
            </p>
          </section>
        </RevealBlock>
      </div>
    </main>
  );
}
