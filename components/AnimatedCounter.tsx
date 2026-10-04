"use client";

import { useEffect, useRef } from "react";

/** cubic-bezier(x1, y1, x2, y2) as a function of progress, solved with Newton's method like the CSS timing function. */
function cubicBezier(x1: number, y1: number, x2: number, y2: number) {
  const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
  const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
  const x = (t: number) => ((ax * t + bx) * t + cx) * t;
  const y = (t: number) => ((ay * t + by) * t + cy) * t;
  const dx = (t: number) => (3 * ax * t + 2 * bx) * t + cx;
  return (p: number) => {
    let t = p;
    for (let i = 0; i < 8; i++) {
      const err = x(t) - p;
      const d = dx(t);
      if (Math.abs(err) < 1e-5 || d === 0) break;
      t -= err / d;
    }
    return y(Math.min(1, Math.max(0, t)));
  };
}

const ease = cubicBezier(0.16, 1, 0.3, 1);

/**
 * Counts the first number in `value` up from 0 when it scrolls into view ("150+" → 0+ … 150+, "25 ans" → 0 ans … 25 ans).
 * The server renders the final value; an invisible copy reserves its width so counting never shifts layout,
 * and screen readers only ever hear the final value.
 */
export function AnimatedCounter({ value, duration = 1800 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const match = /^(\D*?)(\d+)([\s\S]*)$/.exec(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const [, prefix, digits, suffix] = match;
    const target = Number(digits);
    let frame = 0;
    let first = true;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect();
          // Also runs when the figure is already on screen at load: the server value shows for the
          // instant before hydration, then the count plays from 0.
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            el.textContent = `${prefix}${Math.round(ease(p) * target)}${suffix}`;
            if (p < 1) frame = requestAnimationFrame(tick);
          };
          frame = requestAnimationFrame(tick);
        } else if (first) {
          el.textContent = `${prefix}0${suffix}`;
        }
        first = false;
      },
      // Top margin: a figure scrolled past without being seen still finishes on its final value.
      { threshold: 0.6, rootMargin: "100000px 0px 0px 0px" },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
    // value is static per render; match is derived from it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  return (
    <span className="inline-grid tabular-nums">
      <span aria-hidden="true" className="invisible [grid-area:1/1]">
        {value}
      </span>
      <span ref={ref} aria-hidden="true" className="[grid-area:1/1]">
        {value}
      </span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
