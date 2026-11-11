import type { Metadata } from "next";
import Link from "next/link";
import RevealBlock from "@/components/motion/reveal-block";
import RevealText from "@/components/motion/reveal-text";
import Magnetic from "@/components/motion/magnetic";
import GlobalFootprint from "@/components/sections/global-footprint";
import { company, liveServices, platforms } from "@/content/site";

export const metadata: Metadata = {
  title: "About — Tazriel",
  description:
    "The firm, the people, and the two-continent operating model backing Tazriel's specialist teams.",
  alternates: { canonical: "/about" },
};

const pillars = [
  {
    num: "01",
    title: "Specialists, not staff",
    desc: "We hire operators who have already executed the discipline in production. When you need Cvent event operations, Mendix engineering, or Microsoft 365 tenant governance, we place someone who has already solved the edge cases.",
  },
  {
    num: "02",
    title: "Embedded, not transactional",
    desc: "Our specialists join your Slack, your Jira boards, your git repositories, and your daily standups. They work inside your process and reporting structures rather than behind an opaque vendor ticket queue.",
  },
  {
    num: "03",
    title: "Sovereign quality control",
    desc: "You interview and approve every specialist before they join your team. If an individual isn't the exact technical or cultural match, we adjust the bench without restarting the commercial relationship.",
  },
  {
    num: "04",
    title: "Follow-the-sun reach",
    desc: "With operations headquartered in Springfield, Illinois and primary delivery from Addis Ababa and Skopje, we provide continuous operational momentum across North American and European business hours.",
  },
];

export default function AboutPage() {
  return (
    <main id="main">
      {/* 1 — Hero */}
      <section className="relative overflow-hidden border-b border-line bg-ink px-gutter pb-28 pt-48 text-paper">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-1/4 right-0 size-[50vw] rounded-full opacity-20 blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, var(--color-depth) 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-frame">
          <RevealBlock>
            <div className="mb-6 flex items-center gap-3">
              <span className="text-micro font-medium uppercase tracking-[0.2em] text-accent">
                The Firm
              </span>
              <span className="size-1 rounded-full bg-accent" />
              <span className="text-micro font-medium uppercase tracking-widest text-muted">
                Executive Overview
              </span>
            </div>
          </RevealBlock>

          <RevealText as="h1" className="max-w-[15ch] text-display-xl">
            Built for operators who have been burned by cheap outsourcing.
          </RevealText>

          <RevealBlock delay={0.3}>
            <p className="measure mt-10 text-body-l text-muted">
              Tazriel was established on a single thesis: modern high-growth
              companies do not need more undisciplined headcount — they need
              experienced operators who integrate into their systems on day one.
            </p>
          </RevealBlock>
        </div>
      </section>

      {/* 2 — Institutional Principles (InterGest-style 4-card grid) */}
      <section
        data-field="paper"
        className="bg-paper px-gutter py-section text-ink"
      >
        <div className="mx-auto max-w-frame">
          <RevealBlock>
            <p className="mb-4 text-micro font-medium uppercase tracking-widest text-accent">
              Operating Principles
            </p>
          </RevealBlock>

          <RevealText as="h2" className="max-w-[18ch] text-display-l">
            How we structure accountability.
          </RevealText>

          <RevealBlock
            stagger
            className="mt-16 grid border border-line-paper sm:grid-cols-2"
          >
            {pillars.map((p, i) => (
              <div
                key={p.num}
                className={`p-8 sm:p-12 transition-colors duration-300 hover:bg-paper-sunk ${
                  i % 2 === 0 ? "sm:border-r sm:border-line-paper" : ""
                } ${i < 2 ? "border-b border-line-paper" : ""}`}
              >
                <span className="font-mono text-micro font-medium text-accent">
                  {p.num} // PRINCIPLE
                </span>
                <h3 className="mt-4 text-display-m font-normal tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-4 text-body-l leading-relaxed text-muted-paper">
                  {p.desc}
                </p>
              </div>
            ))}
          </RevealBlock>
        </div>
      </section>

      {/* 3 — Two-Continent Delivery Model (Global Footprint) */}
      <GlobalFootprint />

      {/* 4 — Platform Mastery & Bench Depth */}
      <section className="border-t border-line bg-ink px-gutter py-section text-paper">
        <div className="mx-auto max-w-frame">
          <div className="flex flex-col justify-between gap-6 pb-16 lg:flex-row lg:items-end">
            <div>
              <RevealBlock>
                <p className="text-micro font-medium uppercase tracking-widest text-accent">
                  Platform Bench
                </p>
              </RevealBlock>
              <RevealText as="h2" className="mt-3 max-w-[18ch] text-display-l">
                Deep expertise in systems that cannot fail.
              </RevealText>
            </div>
            <RevealBlock delay={0.2} className="max-w-md">
              <p className="text-body-l text-muted">
                Our specialists hold enterprise experience across critical SaaS,
                cloud, and event infrastructure.
              </p>
            </RevealBlock>
          </div>

          <RevealBlock
            stagger
            className="grid border border-line sm:grid-cols-2 lg:grid-cols-3"
          >
            {platforms.map((p, i) => (
              <div
                key={p.name}
                className={`p-8 transition-colors duration-300 hover:bg-ink-raised ${
                  i < platforms.length - 1 ? "border-b border-line sm:border-b-0" : ""
                } ${i % 2 !== 1 ? "sm:border-r sm:border-line" : ""} ${
                  i % 3 !== 2 ? "lg:border-r lg:border-line" : ""
                }`}
              >
                <p className="font-mono text-micro text-accent">
                  0{i + 1} // PLATFORM
                </p>
                <h3 className="mt-3 text-display-m font-normal text-paper">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm text-muted">{p.role}</p>
              </div>
            ))}
          </RevealBlock>

          <RevealBlock delay={0.3} className="mt-16 text-center">
            <Magnetic>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-paper px-8 py-4 text-sm font-medium text-ink transition-colors duration-300 hover:bg-white"
              >
                <span>Initiate a consultation</span>
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </Magnetic>
          </RevealBlock>
        </div>
      </section>
    </main>
  );
}
