"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type GalleryImage = { src: string; width: number; height: number; alt: string };
export type GalleryData = Record<string, { title: string; images: GalleryImage[] }>;
type Filter = "all" | "residentiel" | "pompage" | "chauffe-eau";

export type GalleryLabels = {
  filterLabel: string;
  filters: Record<Filter, string>;
  counts: Record<Filter, string>;
  close: string;
  prev: string;
  next: string;
  photoOf: string;
};

const FILTERS: Filter[] = ["all", "residentiel", "pompage", "chauffe-eau"];

/**
 * Filter chips + native <dialog> lightbox around server-rendered cards.
 * Cards stay in the HTML; filtering is a data attribute that CSS acts on.
 */
export function ProjectGallery({ data, labels, children }: { data: GalleryData; labels: GalleryLabels; children: ReactNode }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [open, setOpen] = useState<{ slug: string; index: number } | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  // Read ?type= once on load (pages are static, so the server can't).
  useEffect(() => {
    const type = new URLSearchParams(location.search).get("type") as Filter | null;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing from the URL, an external system
    if (type && FILTERS.includes(type)) setFilter(type);
  }, []);

  function choose(f: Filter) {
    setFilter(f);
    const url = new URL(location.href);
    if (f === "all") url.searchParams.delete("type");
    else url.searchParams.set("type", f);
    history.replaceState(history.state, "", url);
  }

  const show = useCallback((slug: string, index = 0) => {
    setOpen({ slug, index });
    const d = dialog.current;
    if (d && !d.open) d.showModal();
  }, []);

  function onClick(e: React.MouseEvent) {
    const el = (e.target as Element).closest<HTMLElement>("[data-gallery]");
    if (!el?.dataset.gallery) return;
    opener.current = el.matches("button") ? el : el.closest("article")?.querySelector<HTMLElement>("[data-gallery]") ?? null;
    show(el.dataset.gallery);
  }

  const current = open ? data[open.slug] : null;
  const total = current?.images.length ?? 0;
  const step = useCallback(
    (delta: number) => setOpen((o) => (o ? { ...o, index: (o.index + delta + total) % total } : o)),
    [total],
  );

  function onKeyDown(e: React.KeyboardEvent<HTMLDialogElement>) {
    const rtl = document.documentElement.dir === "rtl";
    if (e.key === "ArrowRight") step(rtl ? -1 : 1);
    if (e.key === "ArrowLeft") step(rtl ? 1 : -1);
  }

  const img = current?.images[open!.index];

  return (
    <div>
      <div role="group" aria-label={labels.filterLabel} className="flex flex-wrap items-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => choose(f)}
            className="inline-flex min-h-12 items-center gap-2 rounded-full border-[1.5px] border-sand bg-white px-4 font-semibold text-graphite transition-colors duration-150 hover:border-ink hover:text-ink aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-white"
          >
            {labels.filters[f]}
          </button>
        ))}
        <p aria-live="polite" className="ms-auto text-sm font-semibold text-stone">
          {labels.counts[filter]}
        </p>
      </div>

      <div data-filter={filter} onClick={onClick} className="project-grid mt-8">
        {children}
      </div>

      <dialog
        ref={dialog}
        aria-label={current?.title}
        onKeyDown={onKeyDown}
        onClose={() => {
          setOpen(null);
          opener.current?.focus();
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
        className="lightbox m-auto max-h-none max-w-none bg-transparent p-0 text-white backdrop:bg-transparent"
      >
        {current && img ? (
          <div className="flex h-dvh w-screen flex-col px-3 pb-4 pt-3 sm:px-6">
            <div className="flex items-center gap-4">
              <p className="font-display font-semibold">{current.title}</p>
              <p className="num ms-auto text-sm text-sand" aria-live="polite">
                {labels.photoOf.replace("{n}", String(open!.index + 1)).replace("{total}", String(total))}
              </p>
              <button
                type="button"
                autoFocus
                onClick={() => dialog.current?.close()}
                className="inline-flex size-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
                aria-label={labels.close}
              >
                <X className="size-6" aria-hidden="true" />
              </button>
            </div>
            <div className="relative mt-3 min-h-0 flex-1" onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}>
              <Image
                key={img.src}
                src={img.src}
                alt={img.alt}
                fill
                sizes="100vw"
                quality={75}
                className="object-contain"
              />
            </div>
            {total > 1 ? (
              <div className="mt-3 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  className="inline-flex size-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
                  aria-label={labels.prev}
                >
                  <ChevronLeft className="size-6 rtl:-scale-x-100" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  className="inline-flex size-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
                  aria-label={labels.next}
                >
                  <ChevronRight className="size-6 rtl:-scale-x-100" aria-hidden="true" />
                </button>
              </div>
            ) : null}
          </div>
        ) : null}
      </dialog>
    </div>
  );
}
