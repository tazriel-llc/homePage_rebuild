"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export type FaqItem = {
  question: string;
  answer: string;
};

type Props = {
  items: FaqItem[];
  category?: string;
};

export default function Accordion({ items, category }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="border-t border-line-paper">
      {category && (
        <p className="pb-4 pt-8 font-mono text-micro font-medium uppercase tracking-widest text-accent">
          {category}
        </p>
      )}
      {items.map((item, i) => (
        <AccordionRow
          key={item.question}
          item={item}
          isOpen={openIndex === i}
          onToggle={() => toggle(i)}
          index={i}
        />
      ))}
    </div>
  );
}

function AccordionRow({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      const content = contentRef.current;
      const icon = iconRef.current;
      if (!content || !icon) return;

      if (reduced) {
        gsap.set(content, { height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 });
        gsap.set(icon, { rotate: isOpen ? 45 : 0 });
        return;
      }

      if (isOpen) {
        gsap.to(content, {
          height: "auto",
          opacity: 1,
          duration: 0.45,
          ease: "power3.inOut",
        });
        // PRD §5.1: plus glyph rotates 45° to a cross, never 180°
        gsap.to(icon, {
          rotate: 45,
          duration: 0.35,
          ease: "power2.out",
        });
      } else {
        gsap.to(content, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power3.inOut",
        });
        gsap.to(icon, {
          rotate: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    },
    { dependencies: [isOpen, reduced] },
  );

  return (
    <div className="border-b border-line-paper py-6">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="group flex w-full items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <span className="flex items-baseline gap-4 pr-6">
          <span className="font-mono text-micro text-muted-paper">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-xl font-normal text-ink transition-colors duration-200 group-hover:text-accent sm:text-2xl">
            {item.question}
          </span>
        </span>

        {/* 45 degree rotating plus glyph */}
        <span
          ref={iconRef}
          aria-hidden
          className="flex size-7 shrink-0 items-center justify-center border border-line-paper text-ink transition-colors duration-200 group-hover:border-accent group-hover:text-accent"
        >
          <span className="text-lg leading-none font-light">+</span>
        </span>
      </button>

      <div
        ref={contentRef}
        style={{ height: 0, opacity: 0, overflow: "hidden" }}
      >
        <div className="pt-4 pl-8 sm:pl-10">
          <p className="measure text-body-l leading-relaxed text-muted-paper">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
