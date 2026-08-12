import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Grain from "@/components/ui/grain";
import RevealText from "@/components/motion/reveal-text";
import RevealBlock from "@/components/motion/reveal-block";
import ContactCta from "@/components/sections/contact-cta";
import { liveServices, services } from "@/content/site";
import { serviceContent } from "@/content/service-content";

/**
 * One template, nine routes — every slug preserved exactly from the current
 * site so no ranking is lost. §6
 *
 * A dynamic segment at the root would otherwise swallow unknown paths, so
 * anything not in the service list falls through to notFound(). Static
 * siblings (/about, /contact, …) win over this segment in Next's resolution
 * order, so they are unaffected.
 */

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

  // Two neighbours from the live list, wrapping. Dormant services link onward
  // to live ones rather than to each other.
  const pool = liveServices.filter((s) => s.slug !== slug);
  const start = Math.max(0, liveServices.findIndex((s) => s.slug === slug));
  const adjacent = [pool[start % pool.length], pool[(start + 1) % pool.length]];

  return (
    <>
      <Grain />
      <main id="main">
        {/* 1 — Hero */}
        <section className="relative overflow-hidden px-gutter pb-section pt-48">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-1/3 right-0 h-[60vw] w-[60vw] rounded-full opacity-20 blur-[130px]"
            style={{
              background:
                "radial-gradient(circle, var(--color-depth) 0%, transparent 65%)",
            }}
          />
          <div className="relative mx-auto max-w-frame">
            <RevealBlock>
              <nav aria-label="Breadcrumb" className="mb-10">
                <ol className="flex flex-wrap items-center gap-2 text-micro font-medium uppercase text-muted">
                  <li>
                    <Link href="/" className="link-wipe">
                      Tazriel
                    </Link>
                  </li>
                  <li aria-hidden>/</li>
                  <li className="text-accent">{service.discipline}</li>
                </ol>
              </nav>
            </RevealBlock>

            <RevealText as="h1" className="max-w-[16ch] text-display-l">
              {service.name}
            </RevealText>

            <RevealBlock delay={0.3}>
              <p className="measure mt-8 text-body-l text-muted">
                {content.definition}
              </p>
            </RevealBlock>
          </div>
        </section>

        {/* 2 — The problem, in the client's language */}
        <section
          data-field="paper"
          className="bg-paper px-gutter py-section text-ink"
        >
          <div className="mx-auto max-w-frame">
            <RevealBlock>
              <p className="mb-6 text-micro font-medium uppercase text-accent">
                The problem
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
        <section className="px-gutter py-section">
          <div className="mx-auto max-w-frame">
            <RevealBlock>
              <p className="mb-6 text-micro font-medium uppercase text-accent">
                What we do
              </p>
            </RevealBlock>
            <RevealText as="h2" className="max-w-[16ch] text-display-m">
              The work, stated plainly.
            </RevealText>

            <RevealBlock stagger className="mt-16 border-t border-line">
              {content.deliverables.map((item, i) => (
                <div
                  key={item}
                  className="flex items-baseline gap-8 border-b border-line py-6"
                >
                  <span className="text-micro font-medium text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-body-l">{item}</span>
                </div>
              ))}
            </RevealBlock>
          </div>
        </section>

        {/* 4 — Platform depth, where the service is platform-bound */}
        {content.platforms && (
          <section className="px-gutter pb-section">
            <div className="mx-auto max-w-frame">
              <RevealBlock>
                <p className="mb-10 text-micro font-medium uppercase text-accent">
                  Platform depth
                </p>
              </RevealBlock>
              <RevealBlock stagger className="grid gap-px sm:grid-cols-2">
                {content.platforms.map((platform) => (
                  <div key={platform.name} className="bg-ink-raised px-8 py-10">
                    <h3 className="font-sans text-sm font-medium">
                      {platform.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{platform.role}</p>
                  </div>
                ))}
              </RevealBlock>
            </div>
          </section>
        )}

        {/* 5 — Specification. The ONLY place coverage windows appear. §3.2 */}
        {content.spec && (
          <section
            data-field="paper"
            className="bg-paper px-gutter py-section text-ink"
          >
            <div className="mx-auto max-w-frame">
              <RevealBlock>
                <p className="mb-10 text-micro font-medium uppercase text-accent">
                  Specification
                </p>
              </RevealBlock>
              <RevealBlock stagger className="border-t border-line-paper">
                {content.spec.map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-col gap-1 border-b border-line-paper py-5 sm:flex-row sm:gap-12"
                  >
                    <dt className="w-56 shrink-0 text-micro font-medium uppercase text-muted-paper">
                      {row.label}
                    </dt>
                    <dd className="text-body-l">{row.value}</dd>
                  </div>
                ))}
              </RevealBlock>
            </div>
          </section>
        )}

        {/* 6 — Engagement model */}
        <section className="px-gutter py-section">
          <div className="mx-auto max-w-frame">
            <RevealBlock>
              <p className="mb-6 text-micro font-medium uppercase text-accent">
                How it works
              </p>
            </RevealBlock>
            <RevealText as="h2" className="measure text-display-m">
              {content.engagement}
            </RevealText>
          </div>
        </section>

        {/* 7 — Adjacent services */}
        <section className="px-gutter pb-section">
          <div className="mx-auto max-w-frame">
            <RevealBlock>
              <p className="mb-10 text-micro font-medium uppercase text-accent">
                Related disciplines
              </p>
            </RevealBlock>
            <RevealBlock stagger className="grid gap-px sm:grid-cols-2">
              {adjacent.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  className="group bg-ink-raised px-8 py-10 transition-colors duration-300 hover:bg-ink-raised/70"
                >
                  <h3 className="flex items-baseline justify-between gap-4 text-display-m">
                    {item.name}
                    <span
                      aria-hidden
                      className="text-body-l text-accent opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
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
