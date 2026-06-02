// Centralized WhatsApp + phone link builder + analytics event tracking.

export const WA_NUMBER = "918754542121";
export const TEL_NUMBER = "+918754542121";
export const TEL_DISPLAY = "+91 87545 42121";
export const TEL_HREF = `tel:${TEL_NUMBER}`;

type Source = "hero" | "navbar" | "floating" | "package" | "contact" | "footer";

export function buildWaUrl(opts: {
  message: string;
  source: Source;
  campaign?: string;
  medium?: string;
}) {
  const { message, source, campaign = "booking_inquiry", medium = "cta" } = opts;
  const params = new URLSearchParams({
    text: message,
    utm_source: "neopics_website",
    utm_medium: medium,
    utm_campaign: campaign,
    utm_content: source,
  });
  return `https://wa.me/${WA_NUMBER}?${params.toString()}`;
}

type Provider = "whatsapp" | "call";

function fire(event: string, payload: Record<string, unknown>) {
  try {
    const w = window as unknown as {
      gtag?: (cmd: string, name: string, params: Record<string, unknown>) => void;
      dataLayer?: Array<Record<string, unknown>>;
      fbq?: (cmd: string, name: string, params?: Record<string, unknown>) => void;
    };
    w.gtag?.("event", event, payload);
    w.dataLayer?.push({ event, ...payload });
    w.fbq?.("trackCustom", event === "whatsapp_click" ? "WhatsAppClick" : "CallClick", payload);
  } catch {
    /* noop */
  }
}

export function trackWaClick(source: Source, extra?: Record<string, string>) {
  fire("whatsapp_click", {
    event_category: "engagement",
    event_label: source,
    cta_location: source,
    ...extra,
  });
}

export function trackCallClick(source: Source, extra?: Record<string, string>) {
  fire("call_click", {
    event_category: "engagement",
    event_label: source,
    cta_location: source,
    ...extra,
  });
}

export function trackContact(provider: Provider, source: Source, extra?: Record<string, string>) {
  if (provider === "whatsapp") trackWaClick(source, extra);
  else trackCallClick(source, extra);
}
