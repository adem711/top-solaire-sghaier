"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Item = { href: string; label: string };

/** Nav list with aria-current. Rendered on the server too, so links work without JS. */
export function NavLinks({ items, variant }: { items: Item[]; variant: "bar" | "sheet" }) {
  const pathname = usePathname();

  return (
    <ul className={variant === "bar" ? "flex items-center gap-1" : "flex flex-col gap-1"}>
      {items.map((item) => {
        const current = item.href.split("/").length === 2 ? pathname === item.href : pathname.startsWith(item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={current ? "page" : undefined}
              onClick={variant === "sheet" ? () => document.getElementById("nav-sheet")?.hidePopover() : undefined}
              className={
                variant === "bar"
                  ? "relative inline-flex min-h-12 items-center px-3 text-[0.9375rem] font-semibold text-graphite transition-colors duration-150 hover:text-ink aria-[current=page]:text-ink after:absolute after:inset-x-3 after:bottom-2.5 after:h-0.5 after:origin-center after:scale-x-0 after:rounded-full after:bg-orange-500 after:transition-transform after:duration-300 after:ease-(--ease-out-expo) hover:after:scale-x-100 aria-[current=page]:after:scale-x-100"
                  : "flex min-h-14 items-center justify-between rounded-md px-4 font-display text-xl font-semibold text-ink hover:bg-linen aria-[current=page]:bg-orange-50 aria-[current=page]:text-orange-700"
              }
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

/** Swaps /fr/... ↔ /ar/... on the current page. */
export function LanguageSwitch({
  locale,
  label,
  text,
  targetLang,
  className = "",
}: {
  locale: string;
  label: string;
  text: string;
  targetLang: string;
  className?: string;
}) {
  const pathname = usePathname();
  const target = locale === "fr" ? "ar" : "fr";
  const href = pathname.replace(/^\/(fr|ar)(?=\/|$)/, `/${target}`) || `/${target}`;

  return (
    <a
      href={href}
      hrefLang={targetLang}
      lang={targetLang}
      aria-label={label}
      className={`inline-flex min-h-12 min-w-12 items-center justify-center rounded-md px-3 font-semibold text-ink transition-colors duration-150 hover:bg-white ${className}`}
    >
      {text}
    </a>
  );
}
