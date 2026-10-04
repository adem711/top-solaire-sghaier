"use client";

import { useEffect } from "react";
import { Analytics as VercelAnalytics, track } from "@vercel/analytics/react";

/** Vercel Web Analytics + one delegated listener for [data-track] links (CLAUDE.md §3). */
export function Analytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>("[data-track]");
      if (!el?.dataset.track) return;
      track(el.dataset.track, { context: el.dataset.context ?? "unknown", path: location.pathname });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return <VercelAnalytics />;
}
