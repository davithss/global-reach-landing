type Consent = "accepted" | "rejected";
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
export const analyticsConsentKey = "tsoftwares-analytics-consent";
let initialized = false;
let lastPath: string | undefined;

type ClickEvent = { name: "whatsapp_click" | "product_click" | "community_click"; target: "company_whatsapp" | "mission_control" | "vacinapp_brasil" | "comunidade_imparaveis" };

export function classifyAnalyticsLink(href: string, origin: string): ClickEvent | null {
  let url: URL;
  try { url = new URL(href, origin); } catch { return null; }
  if (url.protocol !== "https:" && url.protocol !== "http:") return null;
  if (url.hostname === "chat.whatsapp.com" && url.pathname === "/E7jIWqgBxGxLwV7cF0qKwp") {
    return { name: "community_click", target: "comunidade_imparaveis" };
  }
  if (url.hostname === "wa.me" && url.pathname === "/5579936181642") {
    return { name: "whatsapp_click", target: "company_whatsapp" };
  }
  if (url.origin === origin && url.pathname.replace(/\/$/, "") === "/mission-control" && !url.hash) {
    return { name: "product_click", target: "mission_control" };
  }
  if (["vacinapp.com", "www.vacinapp.com"].includes(url.hostname) || (url.origin === origin && url.pathname.replace(/\/$/, "") === "/vacinapp" && !url.hash)) {
    return { name: "product_click", target: "vacinapp_brasil" };
  }
  return null;
}

export function trackLinkClick(href: string, pathname: string) {
  if (!initialized || readAnalyticsConsent() !== "accepted") return;
  const event = classifyAnalyticsLink(href, window.location.origin);
  if (!event) return;
  // Only fixed identifiers and the page path: no phone, invite token, URL or link text.
  window.gtag?.("event", event.name, {
    click_target: event.target,
    page_path: pathname,
    transport_type: "beacon",
  });
}

export function readAnalyticsConsent(): Consent | null {
  try {
    const value = localStorage.getItem(analyticsConsentKey);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch { return null; }
}

export function saveAnalyticsConsent(consent: Consent) {
  try { localStorage.setItem(analyticsConsentKey, consent); } catch { /* This visit still respects the selection. */ }
}

export function initializeAnalytics(measurementId: string | undefined): boolean {
  if (!measurementId || !/^G-[A-Z0-9]+$/i.test(measurementId)) return false;
  // Keep editor previews and local development out of production reports.
  if (!["thiesse.com.br", "www.thiesse.com.br", "thiesse-us-eu-story.lovable.app"].includes(window.location.hostname)) return false;
  if (initialized) return true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function (..._args: unknown[]) {
    // eslint-disable-next-line prefer-rest-params -- gtag.js consumes Arguments objects.
    window.dataLayer?.push(arguments);
  };
  window.gtag("consent", "default", { analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
  window.gtag("set", "developer_id.dZjgwMW", true);
  window.gtag("js", new Date());
  window.gtag("config", measurementId, { send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
  initialized = true;
  return true;
}

export function trackPageView(pathname: string) {
  if (!initialized || lastPath === pathname) return;
  lastPath = pathname;
  window.gtag?.("event", "page_view", {
    page_path: pathname,
    page_location: `${window.location.origin}${pathname}`,
    page_title: document.title,
    // Avoid forwarding campaign/query values or user input as referrer data.
    page_referrer: document.referrer ? document.referrer.split(/[?#]/)[0] : "",
  });
}