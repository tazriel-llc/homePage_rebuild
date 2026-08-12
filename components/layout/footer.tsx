import Link from "next/link";
import { company, legal, liveServices, nav, social } from "@/content/site";

/** Server component — a footer has nothing to animate. §4.4 */
export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink text-paper">
      <div className="mx-auto max-w-frame px-gutter pb-40 pt-24 sm:pb-56">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <FooterColumn title="Services">
            {liveServices.map((s) => (
              <FooterLink key={s.slug} href={`/${s.slug}`}>
                {s.name}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Company">
            {nav.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterColumn>

          <FooterColumn title="Legal">
            {legal.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Connect">
            {social.map((item) => (
              <FooterLink key={item.href} href={item.href} external>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-line pt-8 text-sm text-muted sm:flex-row">
          <p>
            {company.locality}, {company.region} — operations across two
            continents.
          </p>
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
        </div>
      </div>

      {/* Oversized wordmark bleeding off the bottom edge. §6 */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-[0.28em] left-0 w-full select-none px-gutter font-display text-[22vw] leading-none text-paper/[0.06]"
      >
        Tazriel
      </span>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="mb-6 font-sans text-micro font-medium uppercase text-accent">
        {title}
      </h2>
      <ul className="flex flex-col gap-3">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const className =
    "link-wipe inline-block text-sm text-muted transition-colors duration-300 hover:text-paper";
  return (
    <li>
      {external ? (
        <a
          href={href}
          className={className}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : (
        <Link href={href} className={className}>
          {children}
        </Link>
      )}
    </li>
  );
}
