type Params = Record<string, string | number | boolean | undefined>;

type TrackingWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
};

const ATTRIBUTION_KEY = "sw-attribution";
const ATTRIBUTION_FIELDS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
] as const;

export type Attribution = Partial<Record<(typeof ATTRIBUTION_FIELDS)[number], string>> & {
  landing_page?: string;
  referrer?: string;
};

export function track(event: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  const w = window as TrackingWindow;
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({ event, ...params });
  w.gtag?.("event", event, params);
  if (w.fbq) {
    if (event === "form_submit") w.fbq("track", "Lead", params);
    else if (event === "click_whatsapp") w.fbq("track", "Contact", params);
    else w.fbq("trackCustom", event, params);
  }
}

/** Campaign params survive in-page navigation for the session; a new campaign click replaces them. */
export function captureAttribution() {
  try {
    const params = new URLSearchParams(window.location.search);
    const fresh: Attribution = {};
    for (const key of ATTRIBUTION_FIELDS) {
      const value = params.get(key);
      if (value) fresh[key] = value.slice(0, 200);
    }
    const hasCampaign = Object.keys(fresh).length > 0;
    if (!hasCampaign && readAttribution().landing_page) return;
    fresh.landing_page = window.location.pathname + window.location.search;
    fresh.referrer = document.referrer.slice(0, 300);
    sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(fresh));
  } catch {
    // storage blocked: attribution is best-effort
  }
}

export function readAttribution(): Attribution {
  try {
    return JSON.parse(sessionStorage.getItem(ATTRIBUTION_KEY) ?? "{}") as Attribution;
  } catch {
    return {};
  }
}

export function originLabel(a: Attribution = readAttribution()): string | null {
  if (a.gclid) return "Google Ads";
  if (a.fbclid) return "Meta Ads (Facebook/Instagram)";
  if (a.utm_source) {
    return [a.utm_source, a.utm_medium, a.utm_campaign].filter(Boolean).join(" / ");
  }
  return null;
}

export function withOrigin(message: string) {
  const origin = originLabel();
  return origin ? `${message}\n\nOrigem: ${origin}` : message;
}
