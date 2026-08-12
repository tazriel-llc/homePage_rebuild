"use client";

import { useSyncExternalStore } from "react";

/**
 * Gates the pinned and horizontally-scrolled sections, which only exist above
 * `lg`. Returns false during SSR so the server renders the flow layout — the
 * safe fallback that is always legible. §5.2
 */
export function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

export const useIsDesktop = () => useMediaQuery("(min-width: 1024px)");
