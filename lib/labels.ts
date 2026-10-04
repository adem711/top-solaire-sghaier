import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import type { QuoteFormLabels } from "@/components/QuoteForm";
import type { SimulatorLabels } from "@/components/SavingsSimulator";
import { PHONE_INLINE } from "./whatsapp";

/** Server-side string bundles for the client islands (no NextIntlClientProvider needed). */
export async function quoteFormLabels(locale: Locale): Promise<QuoteFormLabels> {
  const t = await getTranslations({ locale, namespace: "form" });
  const w = await getTranslations({ locale, namespace: "whatsapp" });
  return {
    label: t("label"),
    name: t("name"),
    city: t("city"),
    type: t("type"),
    typeOptions: t.raw("typeOptions"),
    bill: t("bill"),
    optional: t("optional"),
    billHint: t("billHint"),
    message: t("message"),
    messagePlaceholder: t("messagePlaceholder"),
    submit: t("submit"),
    errors: t.raw("errors"),
    sent: t("sent"),
    fallback: t("fallback", { phone: PHONE_INLINE }),
    wa: { greeting: w("greeting"), form: w.raw("form"), formBill: w.raw("formBill"), formMessage: w.raw("formMessage") },
    toolDescription: t("toolDescription"),
    toolParams: t.raw("toolParams"),
  };
}

export async function simulatorLabels(locale: Locale): Promise<SimulatorLabels> {
  const t = await getTranslations({ locale, namespace: "simulator" });
  const w = await getTranslations({ locale, namespace: "whatsapp" });
  return {
    billLabel: t("billLabel"),
    unit: t("unit"),
    resultsLabel: t("resultsLabel"),
    kwc: t("kwc"),
    panels: t("panels"),
    production: t("production"),
    productionUnit: t("productionUnit"),
    savings: t("savings"),
    savingsValue: t.raw("savingsValue"),
    roofLabel: t.raw("roofLabel"),
    assumptions: t("assumptions"),
    cta: t("cta"),
    waGreeting: w("greeting"),
    waTemplate: w.raw("simulator"),
    toolDescription: t("toolDescription"),
    toolParam: t("toolParam"),
    presetsLabel: t("presetsLabel"),
    currency: t("currency"),
  };
}
