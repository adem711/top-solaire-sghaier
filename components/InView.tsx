"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type Tag = "div" | "ol" | "ul" | "dl" | "section" | "figure";

/**
 * Marks its element with data-inview="true" the first time it scrolls into view. All motion lives in CSS
 * (app/globals.css, "Scroll entrances"), keyed off that attribute and a per-child --i index for staggering.
 *
 * Content is never hidden by the server: it is set to data-inview="false" (the hidden start state) only when
 * the script finds it still off screen, so no-JS visitors, crawlers and agents always get visible content,
 * and anything already on screen at load is never flashed out and back in.
 */
export function InView({
  as: Component = "div",
  className,
  style,
  children,
  threshold = 0.2,
}: {
  as?: Tag;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  threshold?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let first = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.inview = "true";
          io.disconnect();
        } else if (first) {
          el.dataset.inview = "false";
        }
        first = false;
      },
      // The huge top margin makes anything already scrolled past count as seen, so a fast flick or an
      // anchor jump that skips a block between two frames can never leave it hidden.
      { threshold, rootMargin: "100000px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <Component ref={ref as never} className={className} style={style}>
      {children}
    </Component>
  );
}
