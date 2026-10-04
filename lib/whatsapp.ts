// Single source for every WhatsApp link on the site (CLAUDE.md §3).
// Message templates live in messages/*.json under "whatsapp".
export const WHATSAPP_NUMBER = "21698452134";
export const PHONE_DISPLAY = "98 452 134";
export const PHONE_TEL = "tel:+21698452134";
/** Second line, calls only (WhatsApp stays on the main number). */
export const PHONE2_DISPLAY = "54 109 627";
export const PHONE2_TEL = "tel:+21654109627";
/** Phone wrapped in Unicode LTR isolates (U+2066 … U+2069) so it never reverses inside Arabic text. */
export const PHONE_INLINE = String.fromCharCode(0x2066) + PHONE_DISPLAY + String.fromCharCode(0x2069);

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message.trim())}`;
}
