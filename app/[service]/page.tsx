import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import RevealText from "@/components/motion/reveal-text";
import RevealBlock from "@/components/motion/reveal-block";
import ContactCta from "@/components/sections/contact-cta";
import { liveServices, services } from "@/content/site";
import { serviceContent } from "@/content/service-content";

type Params = { params: Promise<{ service: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { service: slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const content = serviceContent[slug];
  if (!service || !content) return {};

  return {
    title: `${service.name} — Tazriel`,
    description: content.definition,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      title: `${service.name} — Tazriel`,
      description: content.definition,
      url: `/${slug}`,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: Params) {
  const { service: slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const content = serviceContent[slug];
  if (!service || !content) notFound();

  // Two neighbours from the live list, wrapping
  const pool = liveServices.filter((s) => s.slug !== slug);
  const start = Math.max(0, liveServices.findIndex((s) => s.slug === slug));
  const adjacent = [pool[start % pool.length], pool[(start + 1) % pool.length]];

  return (
    <>
      <main id="main">
        {/* 1 — Hero with InterGest Architectural Portal */}
        <section className="relative overflow-hidden border-b border-line bg-ink px-gutter pb-section pt-48 text-paper">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-1/3 right-0 size-[60vw] rounded-full opacity-20 blur-[130px]"
            style={{
              background:
                "radial-gradient(circle, var(--color-depth) 0%, transparent 65%)",
            }}
          />
          <div className="relative mx-auto max-w-frame">
            <RevealBlock>
              <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex flex-wrap items-center gap-2 text-micro font-medium uppercase text-muted">
                  <li>
                    <Link href="/" className="link-wipe">
                      Tazriel
                    </Link>
                  </li>
                  <li aria-hidden>/</li>
                  <li>
                    <Link href="/#disciplines" className="link-wipe">
                      Disciplines
                    </Link>
                  </li>
                  <li aria-hidden>/</li>
                  <li className="text-accent">{service.discipline}</li>
                </ol>
              </nav>
            </RevealBlock>

            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <RevealBlock>
                  <div className="mb-6 flex items-center gap-3">
                    <span className="font-mono text-micro font-medium uppercase tracking-[0.2em] text-accent">
                      Discipline Overview
                    </span>
                    <span className="size-1 rounded-full bg-accent" />
                    <span className="font-mono text-micro uppercase tracking-wider text-muted">
                      100% Embedded Bench
                    </span>
                  </div>
                </RevealBlock>

                <RevealText as="h1" className="max-w-[15ch] text-display-l">
                  {service.name}
                </RevealText>

                <RevealBlock delay={0.3}>
                  <p className="measure mt-8 text-body-l text-muted">
                    {content.definition}
                  </p>
                </RevealBlock>

                <RevealBlock delay={0.4} className="mt-10 flex items-center gap-6">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 bg-paper px-8 py-4 text-sm font-medium text-ink transition-colors duration-300 hover:bg-white"
                  >
                    <span>Engage this discipline</span>
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </RevealBlock>
              </div>

              {/* Right: Architectural Photographic Portal */}
              <div className="hidden lg:col-span-5 lg:block">
                <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden border border-line bg-ink-raised shadow-2xl">
                  <div className="flex items-center justify-between border-b border-line/60 px-5 py-3 font-mono text-micro text-muted">
                    <span className="text-accent">{service.discipline}</span>
                    <span>ACTIVE BENCH</span>
                  </div>
                  <div className="relative size-full overflow-hidden">
                    <img
                      src={`/media/${service.slug}-1280.webp`}
                      alt={service.name}
                      className="size-full object-cover grayscale"
                    />
                    <span className="absolute inset-0 bg-ink/75 mix-blend-color" />
                    <span className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2 — The problem, in the client's language */}
        <section
          data-field="paper"
          className="bg-paper px-gutter py-section text-ink"
        >
          <div className="mx-auto max-w-frame">
            <RevealBlock>
              <p className="mb-6 font-mono text-micro font-medium uppercase text-accent">
                The Operational Bottleneck
              </p>
            </RevealBlock>
            <RevealText as="h2" className="max-w-[18ch] text-display-m">
              {content.problem.heading}
            </RevealText>
            <RevealBlock delay={0.2}>
              <p className="measure mt-8 text-body-l text-muted-paper">
                {content.problem.body}
              </p>
            </RevealBlock>
          </div>
        </section>

        {/* 3 — What we do. Verbs and specifics. */}
        <section className="border-t border-line bg-ink px-gutter py-section text-paper">
          <div className="mx-auto max-w-frame">
            <RevealBlock>
              <div className="mb-6 flex items-center gap-3">
                <span className="font-mono text-micro font-medium uppercase tracking-[0.2em] text-accent">
                  Production Deliverables
                </span>
                <span className="size-1 rounded-full bg-accent" />
                <span className="font-mono text-micro uppercase tracking-wider text-muted">
                  Accountable Scope
                </span>
              </div>
            </RevealBlock>
            <RevealText as="h2" className="max-w-[16ch] text-display-l">
              The work, stated plainly.
            </RevealText>

            <RevealBlock stagger className="mt-16 border-t border-line">
              {content.deliverables.map((item, i) => (
                <div
                  key={item}
                  className="flex items-baseline gap-8 border-b border-line py-6 transition-colors duration-200 hover:bg-ink-raised/40"
                >
                  <span className="font-mono text-micro font-semibold text-accent">
                    0{i + 1}
                  </span>
                  <span className="text-body-l text-paper">{item}</span>
                </div>
              ))}
            </RevealBlock>
          </div>
        </section>

        {/* 4 — Platform depth, where the service is platform-bound */}
        {content.platforms && (
          <section className="border-t border-line bg-ink px-gutter py-section text-paper">
            <div className="mx-auto max-w-frame">
              <RevealBlock>
                <p className="mb-10 font-mono text-micro font-medium uppercase text-accent">
                  Certified Platforms & Tooling
                </p>
              </RevealBlock>
              <RevealBlock stagger className="grid border border-line sm:grid-cols-2">
                {content.platforms.map((platform, i) => (
                  <div
                    key={platform.name}
                    className={`p-8 transition-colors duration-300 hover:bg-ink-raised ${
                      i % 2 === 0 ? "sm:border-r sm:border-line" : ""
                    } ${i < content.platforms!.length - 1 ? "border-b border-line sm:border-b-0" : ""}`}
                  >
                    <span className="font-mono text-micro text-accent">
                      0{i + 1} // PLATFORM
                    </span>
                    <h3 className="mt-3 text-display-m font-normal text-paper">
                      {platform.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{platform.role}</p>
                  </div>
                ))}
              </RevealBlock>
            </div>
          </section>
        )}

        {/* 5 — Specification. Datasheet format */}
        {content.spec && (
          <section
            data-field="paper"
            className="border-y border-line-paper bg-paper px-gutter py-section text-ink"
          >
            <div className="mx-auto max-w-frame">
              <div className="flex flex-col justify-between gap-6 pb-12 lg:flex-row lg:items-end">
                <div>
                  <RevealBlock>
                    <span className="font-mono text-micro font-medium uppercase tracking-widest text-accent">
                      Datasheet & SLA
                    </span>
                  </RevealBlock>
                  <RevealText as="h2" className="mt-2 text-display-m font-normal">
                    Operational Specifications
                  </RevealText>
                </div>
                <p className="max-w-md text-sm text-muted-paper">
                  Formal parameters governing response windows, staffing
                  ratios, and integration boundaries.
                </p>
              </div>

              <RevealBlock
                stagger
                className="border border-line-paper bg-paper-sunk/30"
              >
                {content.spec.map((row, i) => (
                  <div
                    key={row.label}
                    className={`flex flex-col gap-2 p-6 sm:flex-row sm:items-baseline sm:gap-12 ${
                      i < content.spec!.length - 1
                        ? "border-b border-line-paper"
                        : ""
                    }`}
                  >
                    <dt className="w-64 shrink-0 font-mono text-micro font-semibold uppercase text-accent">
                      {row.label}
                    </dt>
                    <dd className="text-body-l text-ink">{row.value}</dd>
                  </div>
                ))}
              </RevealBlock>
            </div>
          </section>
        )}

        {/* 6 — Engagement model */}
        <section className="bg-ink px-gutter py-section text-paper">
          <div className="mx-auto max-w-frame">
            <RevealBlock>
              <p className="mb-6 font-mono text-micro font-medium uppercase text-accent">
                Team Matching & Integration
              </p>
            </RevealBlock>
            <RevealText as="h2" className="measure text-display-m">
              {content.engagement}
            </RevealText>
          </div>
        </section>

        {/* 7 — Adjacent services */}
        <section className="border-t border-line bg-ink px-gutter pb-section pt-16 text-paper">
          <div className="mx-auto max-w-frame">
            <RevealBlock>
              <p className="mb-10 font-mono text-micro font-medium uppercase text-accent">
                Adjacent Disciplines
              </p>
            </RevealBlock>
            <RevealBlock stagger className="grid border border-line sm:grid-cols-2">
              {adjacent.map((item, i) => (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  className={`group p-8 transition-colors duration-300 hover:bg-ink-raised ${
                    i === 0 ? "border-b border-line sm:border-b-0 sm:border-r" : ""
                  }`}
                >
                  <span className="font-mono text-micro text-accent">
                    0{i + 1} // DISCIPLINE
                  </span>
                  <h3 className="mt-3 flex items-baseline justify-between gap-4 text-display-m text-paper">
                    {item.name}
                    <span
                      aria-hidden
                      className="text-body-l text-accent transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </h3>
                  <p className="mt-3 text-sm text-muted">{item.summary}</p>
                </Link>
              ))}
            </RevealBlock>
          </div>
        </section>

        {/* 8 */}
        <ContactCta />
      </main>
    </>
  );
}
