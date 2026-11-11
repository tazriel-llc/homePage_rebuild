import Link from "next/link";
import RevealBlock from "@/components/motion/reveal-block";
import RevealText from "@/components/motion/reveal-text";
import { platforms } from "@/content/site";

/**
 * Proof & Accreditation section. §7.1
 *
 * InterGest / Spectup style: Verified third-party accreditation + platform mastery grid.
 */
export default function Recognition() {
  return (
    <section className="border-t border-line bg-ink px-gutter py-section text-paper">
      <div className="mx-auto max-w-frame">
        <div className="flex flex-col justify-between gap-6 pb-16 lg:flex-row lg:items-end">
          <div>
            <RevealBlock>
              <div className="flex items-center gap-3">
                <span className="text-micro font-medium uppercase tracking-[0.2em] text-accent">
                  Standing & Verification
                </span>
                <span className="size-1 rounded-full bg-accent" />
                <span className="text-micro font-medium uppercase tracking-widest text-muted">
                  Third-Party Vetted
                </span>
              </div>
            </RevealBlock>

            <RevealText as="h2" className="mt-4 max-w-[20ch] text-display-l">
              Listed among vetted outsourcing partners on DesignRush.
            </RevealText>
          </div>

          <RevealBlock delay={0.2} className="max-w-md">
            <p className="text-body-l text-muted">
              Peer-evaluated technical capability, operational stability, and
              account governance. No synthetic reviews or unearned badges.
            </p>
          </RevealBlock>
        </div>

        {/* Platform Mastery Grid */}
        <RevealBlock
          stagger
          className="grid border border-line sm:grid-cols-2 lg:grid-cols-3"
        >
          {platforms.map((platform, i) => (
            <div
              key={platform.name}
              className={`group relative p-8 transition-colors duration-300 hover:bg-ink-raised ${
                i < platforms.length - 1 ? "border-b border-line sm:border-b-0" : ""
              } ${i % 2 !== 1 ? "sm:border-r sm:border-line" : ""} ${
                i % 3 !== 2 ? "lg:border-r lg:border-line" : ""
              }`}
            >
              <div className="flex items-center justify-between border-b border-line/60 pb-4">
                <span className="font-mono text-micro text-accent">
                  0{i + 1} // PLATFORM
                </span>
                <span className="text-micro uppercase text-muted">Verified</span>
              </div>

              <h3 className="mt-6 text-display-m font-normal text-paper">
                {platform.name}
              </h3>
              <p className="mt-2 text-sm text-muted">{platform.role}</p>
              <p className="mt-4 text-xs leading-relaxed text-muted/80">
                {platform.note}
              </p>
            </div>
          ))}
        </RevealBlock>

        <RevealBlock delay={0.3} className="mt-12 flex items-center justify-between">
          <Link
            href="/about"
            className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-muted transition-colors duration-300 hover:text-paper"
          >
            <span>Learn about the firm and delivery hubs</span>
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
          <span className="hidden font-mono text-micro text-muted/60 sm:inline-block">
            STRICT CONFIDENTIALITY & IP GOVERNANCE
          </span>
        </RevealBlock>
      </div>
    </section>
  );
}
