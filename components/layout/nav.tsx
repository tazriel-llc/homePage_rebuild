"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap, useGSAP, ScrollTrigger, EASE } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { liveServices, nav as navLinks } from "@/content/site";

const CLOSED = "inset(0% 0% 100% 0%)";
const OPEN = "inset(0% 0% 0% 0%)";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [onPaper, setOnPaper] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const openRef = useRef(open);
  openRef.current = open;

  const pathname = usePathname();
  const reduced = useReducedMotion();

  // Route change closes the panel — otherwise it hangs open over the new page.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  /* Hide on scroll-down, return on scroll-up. §6 */
  useGSAP(
    () => {
      const el = barRef.current;
      if (!el || reduced) return;

      let hidden = false;
      const move = (next: boolean) => {
        if (next === hidden) return;
        hidden = next;
        gsap.to(el, {
          yPercent: next ? -100 : 0,
          duration: 0.45,
          ease: EASE.transition,
          overwrite: true,
        });
      };

      const st = ScrollTrigger.create({
        start: "top -400",
        end: 99999,
        onUpdate: (self) => move(self.direction === 1 && !openRef.current),
        onLeaveBack: () => move(false),
      });
      return () => st.kill();
    },
    { dependencies: [reduced] },
  );

  /* Invert against paper sections as they pass under the bar. §5.2 */
  useGSAP(
    () => {
      const triggers = gsap.utils
        .toArray<HTMLElement>("[data-field='paper']")
        .map((section) =>
          ScrollTrigger.create({
            trigger: section,
            start: "top 36",
            end: "bottom 36",
            onToggle: (self) => setOnPaper(self.isActive),
          }),
        );
      // Sections mount after the nav; without this the triggers measure at zero height.
      ScrollTrigger.refresh();
      return () => triggers.forEach((t) => t.kill());
    },
    { dependencies: [pathname] },
  );

  /* Panel wipe. §6 */
  useGSAP(
    () => {
      const panel = panelRef.current;
      if (!panel) return;

      if (reduced) {
        gsap.set(panel, { clipPath: open ? OPEN : CLOSED });
        return;
      }

      gsap.to(panel, {
        clipPath: open ? OPEN : CLOSED,
        duration: 0.5,
        ease: EASE.transition,
        overwrite: true,
      });

      if (open) {
        gsap.fromTo(
          panel.querySelectorAll("[data-panel-item]"),
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: EASE.reveal,
            stagger: 0.035,
            delay: 0.12,
            overwrite: true,
          },
        );
      }
    },
    { dependencies: [open, reduced] },
  );

  // On paper the bar inverts; with the panel open it always sits on ink.
  const inverted = onPaper && !open;
  const fg = inverted ? "text-ink" : "text-paper";
  const muted = inverted ? "text-muted-paper" : "text-muted";

  return (
    <>
      <div
        ref={barRef}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${fg}`}
      >
        <div className="mx-auto flex max-w-frame items-center justify-between px-gutter py-5">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.24em]"
          >
            Tazriel
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-10 lg:flex"
          >
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="service-panel"
              className={`link-wipe text-sm font-medium ${open ? "" : muted} transition-colors duration-300 hover:text-current`}
            >
              Services
            </button>

            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`link-wipe relative text-sm font-medium ${muted} transition-colors duration-300 hover:text-current`}
              >
                {item.label}
                {pathname === item.href && (
                  <span
                    aria-hidden
                    className="absolute -right-3 top-1/2 size-1 -translate-y-1/2 rounded-full bg-accent"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="link-wipe hidden text-sm font-medium sm:inline-block"
            >
              Start a conversation
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="service-panel"
              className="text-sm font-medium lg:hidden"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </div>

      {/* Full-width ink panel, wiped in from the top edge. §6 */}
      <div
        id="service-panel"
        ref={panelRef}
        inert={!open}
        aria-label="Services"
        className="fixed inset-x-0 top-0 z-40 bg-ink text-paper"
        style={{ clipPath: CLOSED }}
      >
        <div className="mx-auto max-w-frame px-gutter pb-16 pt-28">
          <p
            data-panel-item
            className="mb-10 text-micro font-medium uppercase text-accent"
          >
            Seven disciplines
          </p>

          <ul className="grid gap-x-16 border-t border-line sm:grid-cols-2">
            {liveServices.map((service) => (
              <li key={service.slug} data-panel-item>
                <Link
                  href={`/${service.slug}`}
                  className="group flex flex-col gap-1 border-b border-line py-6 transition-colors duration-300 hover:bg-ink-raised"
                >
                  <span className="flex items-center justify-between text-body-l">
                    {service.name}
                    <span
                      aria-hidden
                      className="text-accent opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                    >
                      →
                    </span>
                  </span>
                  <span className="measure text-sm text-muted">
                    {service.summary}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div
            data-panel-item
            className="mt-10 flex flex-wrap gap-8 lg:hidden"
          >
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} className="link-wipe text-sm">
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="link-wipe text-sm">
              Start a conversation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
