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