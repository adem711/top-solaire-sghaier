"use client";

import { useId, useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { fill } from "@/lib/format";
import { WhatsAppIcon } from "./icons";

export type QuoteFormLabels = {
  label: string;
  name: string;
  city: string;
  type: string;
  typeOptions: Record<"residentiel" | "pompage" | "chauffe-eau" | "entreprise", string>;
  bill: string;
  optional: string;
  billHint: string;
  message: string;
  messagePlaceholder: string;
  submit: string;
  errors: { name: string; city: string; bill: string };
  sent: string;
  fallback: string;
  wa: { greeting: string; form: string; formBill: string; formMessage: string };
  toolDescription: string;
  toolParams: Record<"name" | "city" | "type" | "bill" | "message", string>;
};

type Field = "name" | "city" | "bill";

/** WebMCP additions to SubmitEvent (Chrome declarative API). */
type AgentSubmitEvent = SubmitEvent & { agentInvoked?: boolean; respondWith?: (result: Promise<unknown>) => void };

/** Native-validated form that composes a WhatsApp message (no backend, CLAUDE.md §3). */
export function QuoteForm({ labels, defaultType = "residentiel" }: { labels: QuoteFormLabels; defaultType?: string }) {
  const id = useId();
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [sent, setSent] = useState(false);

  function validate(form: HTMLFormElement) {
    const next: Partial<Record<Field, string>> = {};
    for (const f of ["name", "city", "bill"] as Field[]) {
      const el = form.elements.namedItem(f) as HTMLInputElement;
      if (!el.checkValidity()) next[f] = labels.errors[f];
    }
    return next;
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const next = validate(form);
    setErrors(next);
    const first = (["name", "city", "bill"] as Field[]).find((f) => next[f]);
    const native = e.nativeEvent as AgentSubmitEvent;
    const agent = Boolean(native.agentInvoked && native.respondWith);
    if (first) {
      if (agent) native.respondWith!(Promise.resolve({ errors: Object.values(next) }));
      (form.elements.namedItem(first) as HTMLInputElement).focus();
      setSent(false);
      return;
    }
    const data = new FormData(form);
    const typeKey = String(data.get("type")) as keyof QuoteFormLabels["typeOptions"];
    const lines = [
      labels.wa.greeting,
      fill(labels.wa.form, {
        name: String(data.get("name")).trim(),
        city: String(data.get("city")).trim(),
        type: labels.typeOptions[typeKey] ?? typeKey,
      }),
    ];
    const bill = String(data.get("bill") ?? "").trim();
    if (bill) lines.push(fill(labels.wa.formBill, { bill }));
    const msg = String(data.get("message") ?? "").trim();
    if (msg) lines.push(fill(labels.wa.formMessage, { message: msg }));

    const url = buildWhatsAppUrl(lines.join("\n"));
    if (agent) {
      // An AI agent filled the form: hand it the prefilled link rather than opening a window it can't use.
      native.respondWith!(Promise.resolve({ whatsappUrl: url, message: lines.join("\n") }));
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
    setSent(true);
  }

  function clearError(f: Field) {
    if (errors[f]) setErrors((prev) => ({ ...prev, [f]: undefined }));
  }

  const err = (f: Field) =>
    errors[f] ? (
      <p id={`${id}-${f}-error`} className="field-error">
        <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
        {errors[f]}
      </p>
    ) : null;

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      aria-label={labels.label}
      toolname="request_free_solar_study"
      tooldescription={labels.toolDescription}
      data-track-form="quote"
      className="grid gap-5 sm:grid-cols-2"
    >
      <div className="field">
        <label htmlFor={`${id}-name`} className="field-label">
          {labels.name}
        </label>
        <input
          id={`${id}-name`}
          name="name"
          type="text"
          required
          minLength={2}
          autoComplete="name"
          toolparamdescription={labels.toolParams.name}
          className="input"
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? `${id}-name-error` : undefined}
          onInput={() => clearError("name")}
        />
        {err("name")}
      </div>

      <div className="field">
        <label htmlFor={`${id}-city`} className="field-label">
          {labels.city}
        </label>
        <input
          id={`${id}-city`}
          name="city"
          type="text"
          required
          minLength={2}
          autoComplete="address-level2"
          toolparamdescription={labels.toolParams.city}
          className="input"
          aria-invalid={errors.city ? true : undefined}
          aria-describedby={errors.city ? `${id}-city-error` : undefined}
          onInput={() => clearError("city")}
        />
        {err("city")}
      </div>

      <div className="field">
        <label htmlFor={`${id}-type`} className="field-label">
          {labels.type}
        </label>
        <select id={`${id}-type`} name="type" defaultValue={defaultType} toolparamdescription={labels.toolParams.type} className="input">
          {(Object.keys(labels.typeOptions) as (keyof QuoteFormLabels["typeOptions"])[]).map((k) => (
            <option key={k} value={k}>
              {labels.typeOptions[k]}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor={`${id}-bill`} className="field-label">
          {labels.bill} <span className="font-normal text-stone">({labels.optional})</span>
        </label>
        <input
          id={`${id}-bill`}
          name="bill"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{1,5}"
          maxLength={5}
          autoComplete="off"
          toolparamdescription={labels.toolParams.bill}
          className="input num text-start"
          aria-invalid={errors.bill ? true : undefined}
          aria-describedby={`${id}-bill-hint${errors.bill ? ` ${id}-bill-error` : ""}`}
          onInput={() => clearError("bill")}
        />
        <p id={`${id}-bill-hint`} className="field-hint">
          {labels.billHint}
        </p>
        {err("bill")}
      </div>

      <div className="field sm:col-span-2">
        <label htmlFor={`${id}-message`} className="field-label">
          {labels.message} <span className="font-normal text-stone">({labels.optional})</span>
        </label>
        <textarea id={`${id}-message`} name="message" rows={3} maxLength={600} placeholder={labels.messagePlaceholder} toolparamdescription={labels.toolParams.message} className="input" />
      </div>

      <div className="sm:col-span-2">
        <button type="submit" className="btn btn-primary btn-lg w-full sm:w-auto" data-track="form_submit" data-context="quote-form">
          <WhatsAppIcon />
          {labels.submit}
        </button>
        <div aria-live="polite" className="mt-4 min-h-6">
          {sent ? (
            <p className="flex items-start gap-2 font-semibold text-success-ink">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
              <span>
                {labels.sent} <span className="block font-normal text-graphite">{labels.fallback}</span>
              </span>
            </p>
          ) : null}
        </div>
      </div>
    </form>
  );
}
