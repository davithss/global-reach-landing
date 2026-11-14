import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { initializeAnalytics, readAnalyticsConsent, saveAnalyticsConsent, trackPageView, trackLinkClick } from "@/lib/analytics";

export default function AnalyticsTracking() {
  const { pathname } = useLocation();
  const [consent, setConsent] = useState(readAnalyticsConsent);
  const [language, setLanguage] = useState(document.documentElement.lang);
  const measurementId = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY;
  useEffect(() => {
    const observer = new MutationObserver(() => setLanguage(document.documentElement.lang));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (consent !== "accepted") return;
    // Helmet settles the page title before its visit is reported.
    const timer = window.setTimeout(() => {
      if (initializeAnalytics(measurementId)) trackPageView(pathname);
    }, 100);
    return () => window.clearTimeout(timer);
  }, [consent, measurementId, pathname]);
  useEffect(() => {
    if (consent !== "accepted") return;
    const handleClick = (event: MouseEvent) => {
      if (event.type === "auxclick" && event.button !== 1) return;
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (!initializeAnalytics(measurementId)) return;
      trackLinkClick(anchor.href, pathname);
    };
    // Capture before SPA navigation or opening WhatsApp; never prevent navigation.
    document.addEventListener("click", handleClick, true);
    document.addEventListener("auxclick", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("auxclick", handleClick, true);
    };
  }, [consent, measurementId, pathname]);
  if (!measurementId || consent) return null;
  const english = language.startsWith("en");
  const choose = (value: "accepted" | "rejected") => { saveAnalyticsConsent(value); setConsent(value); };
  return <aside aria-label={english ? "Analytics privacy" : "Privacidade das visitas"} className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background px-5 py-4 shadow-card">
    <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="max-w-2xl text-sm text-muted-foreground">{english ? "May we use Google Analytics cookies to understand visits to this site? Advertising tracking remains disabled." : "Podemos usar cookies do Google Analytics para entender as visitas ao site? O rastreamento publicitário permanece desativado."} <a href="/mission-control/politica-de-privacidade" className="text-primary underline">{english ? "Privacy" : "Privacidade"}</a></p>
      <div className="flex shrink-0 gap-3"><Button variant="outline" onClick={() => choose("rejected")}>{english ? "Decline" : "Recusar"}</Button><Button onClick={() => choose("accepted")}>{english ? "Accept" : "Aceitar"}</Button></div>
    </div>
  </aside>;
}