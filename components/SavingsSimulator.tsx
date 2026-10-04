"use client";

import { useId, useState, type CSSProperties } from "react";
import { estimate, simulator } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { fill, formatNumber } from "@/lib/format";
import { WhatsAppIcon } from "./icons";

export type SimulatorLabels = {
  billLabel: string;
  unit: string;
  resultsLabel: string;
  kwc: string;
  panels: string;
  production: string;
  productionUnit: string;
  savings: string;
  savingsValue: string;
  roofLabel: string;
  assumptions: string;
  cta: string;
  waGreeting: string;
  waTemplate: string;
  toolDescription: string;
  toolParam: string;
  presetsLabel: string;
  currency: string;
};

const PRESETS = [80, 150, 300, 450];

/** WebMCP additions to SubmitEvent (Chrome declarative API). */
type AgentSubmitEvent = SubmitEvent & { agentInvoked?: boolean; respondWith?: (result: Promise<unknown>) => void };

const SLOTS = simulator.gridSlots;

export function SavingsSimulator({ labels }: { labels: SimulatorLabels }) {
  const id = useId();
  const [bill, setBill] = useState<number>(simulator.billDefault);
  const [prevPanels, setPrevPanels] = useState<number>(() => estimate(simulator.billDefault).panels);
  const result = estimate(bill);
  const grown = result.panels - prevPanels;

  const pct = ((bill - simulator.billMin) / (simulator.billMax - simulator.billMin)) * 100;
  const kwc = formatNumber(result.kwc);
  const message = `${labels.waGreeting}\n${fill(labels.waTemplate, { bill, kwc, panels: result.panels })}`;

  return (
    <div className="grid overflow-hidden rounded-lg border border-border bg-white lg:grid-cols-12">
      {/* A form so AI agents can call the estimate as a WebMCP tool; people just use the slider. */}
      <form
        toolname="estimate_solar_savings"
        tooldescription={labels.toolDescription}
        toolautosubmit=""
        onSubmit={(e) => {
          e.preventDefault();
          const native = e.nativeEvent as AgentSubmitEvent;
          const value = Number(new FormData(e.currentTarget).get("bill"));
          const r = estimate(value);
          native.respondWith?.(
            Promise.resolve({
              billDtPerMonth: value,
              kwc: r.kwc,
              panels: r.panels,
              productionKwhPerYear: r.production,
              savingsDtPerMonthUpTo: r.savings,
              whatsappUrl: buildWhatsAppUrl(`${labels.waGreeting}\n${fill(labels.waTemplate, { bill: value, kwc: formatNumber(r.kwc), panels: r.panels })}`),
            }),
          );
        }}
        className="flex min-w-0 flex-col p-6 sm:p-10 lg:col-span-5 lg:justify-center"
      >
        <label htmlFor={`${id}-bill`} className="font-semibold text-ink">
          {labels.billLabel}
        </label>
        <p className="mt-3 flex items-baseline gap-2" aria-hidden="true">
          <span className="num text-[clamp(3rem,2.4rem+3vw,4.5rem)] font-medium leading-none tracking-tight">{bill}</span>
          <span className="font-display text-lg font-semibold text-stone">{labels.unit}</span>
        </p>
        <input
          id={`${id}-bill`}
          name="bill"
          type="range"
          min={simulator.billMin}
          max={simulator.billMax}
          step={simulator.billStep}
          value={bill}
          aria-valuetext={`${bill} ${labels.unit}`}
          toolparamdescription={labels.toolParam}
          onChange={(e) => {
            setPrevPanels(result.panels);
            setBill(Number(e.target.value));
          }}
          className="range mt-5"
          style={{ "--fill": `${pct}%` } as CSSProperties}
        />
        <div className="num mt-1 flex justify-between text-xs text-stone" aria-hidden="true">
          <span>{simulator.billMin}</span>
          <span>{simulator.billMax}</span>
        </div>
        <div role="group" aria-label={labels.presetsLabel} className="mt-6 flex flex-wrap gap-2">
          {PRESETS.map((v) => (
            <button
              key={v}
              type="button"
              aria-pressed={bill === v}
              onClick={() => {
                setPrevPanels(result.panels);
                setBill(v);
              }}
              className="inline-flex min-h-12 items-center rounded-full border-[1.5px] border-sand px-4 text-sm font-semibold text-graphite transition-colors duration-150 hover:border-ink hover:text-ink aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-white"
            >
              <bdi dir="ltr" className="num">{v}</bdi>&nbsp;{labels.currency}
            </button>
          ))}
        </div>
        <p className="mt-8 border-t border-divider pt-6 text-sm leading-relaxed text-stone">{labels.assumptions}</p>
      </form>

      <div className="on-dark relative min-w-0 bg-navy-500 p-6 text-white sm:p-10 lg:col-span-7">
        <h3 className="label text-orange-300">{labels.resultsLabel}</h3>

        {/* The roof: one slot per possible panel. */}
        <div className="mt-6 rounded-md bg-navy-600/60 p-3 sm:p-4" role="img" aria-label={fill(labels.roofLabel, { panels: result.panels })}>
          <div className="grid grid-cols-10 gap-1 sm:gap-1.5" dir="ltr">
            {Array.from({ length: SLOTS }, (_, i) => {
              const on = i < result.panels;
              const delay = on && grown > 0 && i >= result.panels - grown ? (i - (result.panels - grown)) * 28 : 0;
              return (
                <span
                  key={i}
                  data-on={on || undefined}
                  className="panel-slot aspect-[1/1.6] rounded-[3px]"
                  style={{ transitionDelay: `${Math.min(delay, 420)}ms` }}
                />
              );
            })}
          </div>
        </div>

        <dl aria-live="polite" aria-atomic="true" className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6">
          <div>
            <dt className="text-sm text-navy-ink">{labels.kwc}</dt>
            <dd className="mt-1 whitespace-nowrap">
              <bdi dir="ltr">
                <span className="num text-2xl font-medium sm:text-3xl">{kwc}</span>
                <span className="text-base text-navy-ink sm:text-lg">&nbsp;kWc</span>
              </bdi>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-navy-ink">{labels.panels}</dt>
            <dd className="num mt-1 text-2xl font-medium sm:text-3xl">
              <bdi dir="ltr">{result.panels}</bdi>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-navy-ink">{labels.production}</dt>
            <dd className="mt-1">
              <bdi dir="ltr" className="num text-2xl font-medium sm:text-3xl">
                {formatNumber(result.production)}
              </bdi>
              <span className="whitespace-nowrap text-sm text-navy-ink">&nbsp;{labels.productionUnit}</span>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-navy-ink">{labels.savings}</dt>
            <dd className="mt-1 text-orange-300">
              {/* "jusqu'à {amount} DT / mois": the amount in mono like every other figure, unit kept on its line. */}
              {labels.savingsValue.split("{amount}").map((part, i) =>
                i === 0 ? (
                  <span key={i} className="text-sm">
                    {part}
                  </span>
                ) : (
                  <span key={i} className="whitespace-nowrap">
                    <bdi dir="ltr" className="num text-2xl font-medium sm:text-3xl">
                      {result.savings}
                    </bdi>
                    <span className="text-sm">{part.replace(/^ /, " ")}</span>
                  </span>
                ),
              )}
            </dd>
          </div>
        </dl>

        <a
          href={buildWhatsAppUrl(message)}
          target="_blank"
          rel="noopener noreferrer"
          data-track="whatsapp_click"
          data-context="simulator"
          className="btn btn-primary btn-lg mt-9 w-full sm:w-auto"
        >
          <WhatsAppIcon />
          {labels.cta}
        </a>
      </div>
    </div>
  );
}
