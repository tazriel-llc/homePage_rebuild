"use client";

import { useState } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

/**
 * Where you are in the narrative. Otsuka runs the same idea as a side slider —
 * it is what makes the page feel like a document with chapters rather than an
 * endless scroll.
 *
 * Real navigation, not decoration: each mark is a button that scrolls to its
 * chapter, so it works by keyboard and carries an accessible name. Hidden
 * entirely until the first chapter is reached, and on small screens where
 * there is no room for it.
 */
export default function ChapterRail() {
  const [chapters, setChapters] = useState<number[]>([]);
  const [active, setActive] = useState(0);

  useGSAP(() => {
    const sections = gsap.utils.toArray<HTMLElement>("[data-chapter]");
    if (!sections.length) return;

    setChapters(sections.map((s) => Number(s.dataset.chapter)));

    const triggers = sections.map((section) =>
      ScrollTrigger.create({
        trigger: section,
        start: "top 50%",
        end: "bottom 50%",
        onToggle: (self) => {
          if (self.isActive) setActive(Number(section.dataset.chapter));
        },
        // Leaving the last chapter downward should clear the rail, not strand it.
        onLeave: () => setActive(0),
        onLeaveBack: () => setActive(0),
      }),
    );

    return () => triggers.forEach((t) => t.kill());
  }, []);

  if (!chapters.length) return null;

  return (
    <nav
      aria-label="Chapters"
      className={`fixed left-gutter top-1/2 z-40 hidden -translate-y-1/2 xl:block ${
        active ? "opacity-100" : "pointer-events-none opacity-0"
      } transition-opacity duration-500`}
    >
      <ul className="flex flex-col gap-4">
        {chapters.map((n) => {
          const current = n === active;
          return (
            <li key={n}>
              <button
                type="button"
                aria-current={current ? "true" : undefined}
                onClick={() =>
                  document
                    .querySelector(`[data-chapter="${n}"]`)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group flex items-center gap-3"
              >
                <span className="sr-only">Chapter {n}</span>
                <span
                  aria-hidden
                  className={`h-px transition-all duration-500 ${
                    current ? "w-8 bg-accent" : "w-4 bg-current opacity-30"
                  } group-hover:opacity-100`}
                />
                <span
                  aria-hidden
                  className={`text-micro font-medium transition-opacity duration-500 ${
                    current ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {String(n).padStart(2, "0")}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
