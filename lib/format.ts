/** French grouping and decimal comma in both locales (Western digits, CLAUDE.md §6). */
const NNBSP = String.fromCharCode(0x202f);
const nf = new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 3 });

export function formatNumber(value: number): string {
  // Narrow no-break space keeps "9 850" on one line.
  return nf.format(value).replace(/\s/g, NNBSP);
}

export function formatKwc(value: number): string {
  return formatNumber(value);
}

export function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k: string) => String(values[k] ?? ""));
}
