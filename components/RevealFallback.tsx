"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * `.reveal` entrances run on scroll-driven CSS (animation-timeline: view()) where supported.
 * In other browsers (Firefox, older Safari) this gives the same entrance with an IntersectionObserver:
 * off-screen `.reveal` blocks get `reveal-pending` (hidden), then `is-visible` when they arrive.
 * Re-runs on client-side navigation. Renders nothing.
 */
export function RevealFallback() {
  const pathname = usePathname();

  useEffect(() => {
    if (CSS.supports("animation-timeline: view()")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target;
          el.classList.add("is-visible");
          requestAnimationFrame(() => el.classList.remove("reveal-pending"));
          io.unobserve(el);
        }
      },
      // Top margin: anything already scrolled past counts as seen (never stays hidden after a jump).
      { threshold: 0.15, rootMargin: "100000px 0px -8% 0px" },
    );

    for (const el of document.querySelectorAll(".reveal:not(.is-visible)")) {
      const top = el.getBoundingClientRect().top;
      if (top > window.innerHeight) el.classList.add("reveal-pending");
      io.observe(el);
    }
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
