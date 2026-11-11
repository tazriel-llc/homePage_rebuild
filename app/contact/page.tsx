import type { Metadata } from "next";
import RevealBlock from "@/components/motion/reveal-block";
import RevealText from "@/components/motion/reveal-text";
import ContactForm from "@/components/contact/contact-form";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact — Tazriel",
  description:
    "Direct consultation with Tazriel's executive operators. Tell us what isn't working.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main id="main" className="min-h-screen bg-ink text-paper">
      <div className="mx-auto max-w-frame px-gutter pb-section pt-44">
        {/* Split grid: Left = Context & Direct Contacts, Right = Form */}
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5">
            <RevealBlock>
              <div className="flex items-center gap-3">
                <span className="text-micro font-medium uppercase tracking-[0.2em] text-accent">
                  Direct Channel
                </span>
                <span className="size-1 rounded-full bg-accent" />
                <span className="text-micro font-medium uppercase tracking-widest text-muted">
                  Executive Access
                </span>
              </div>
            </RevealBlock>

            <RevealText as="h1" className="mt-4 text-display-l">
              Tell us what isn&rsquo;t working.
            </RevealText>

            <RevealBlock delay={0.2}>
              <p className="mt-8 text-body-l text-muted">
                One conversation, no sales presentation. We evaluate whether your
                disciplines align with our operational model before entering any
                formal engagement.
              </p>
            </RevealBlock>

            <RevealBlock delay={0.4} className="mt-14 space-y-10 border-t border-line pt-10">
              <div>
                <p className="font-mono text-micro uppercase tracking-wider text-accent">
                  Global Headquarters
                </p>
                <p className="mt-2 text-base text-paper">
                  {company.name} Inc.
                </p>
                <p className="text-sm text-muted">
                  {company.locality}, {company.region}, {company.country}
                </p>
              </div>

              <div>
                <p className="font-mono text-micro uppercase tracking-wider text-accent">
                  Operational Nodes
                </p>
                <p className="mt-2 text-sm text-paper">
                  Addis Ababa (Primary Delivery Hub)
                </p>
                <p className="text-sm text-muted">
                  Skopje, North Macedonia (EMEA Delivery Hub)
                </p>
              </div>

              <div>
                <p className="font-mono text-micro uppercase tracking-wider text-accent">
                  Inquiry Response Standard
                </p>
                <p className="mt-2 text-sm text-muted">
                  Every submission is reviewed directly by leadership. We respond
                  within one business day.
                </p>
              </div>
            </RevealBlock>
          </div>

          {/* Right Column (7 cols) */}
          <div className="lg:col-span-7">
            <RevealBlock delay={0.2}>
              <ContactForm />
            </RevealBlock>
          </div>
        </div>
      </div>
    </main>
  );
}
