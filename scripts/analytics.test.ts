import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { initializeAnalytics, readAnalyticsConsent, saveAnalyticsConsent, classifyAnalyticsLink, trackLinkClick } from "../src/lib/analytics";

describe("Analytics privacy", () => {
  it("treats an unset preference as no consent and persists a rejection", () => {
    const values = new Map<string, string>();
    Object.defineProperty(globalThis, "localStorage", { configurable: true, value: {
      getItem: (key: string) => values.get(key) ?? null,
      setItem: (key: string, value: string) => values.set(key, value),
    } });
    assert.equal(readAnalyticsConsent(), null);
    saveAnalyticsConsent("rejected");
    assert.equal(readAnalyticsConsent(), "rejected");
  });
  it("does not load analytics in local previews", () => {
    Object.defineProperty(globalThis, "window", { configurable: true, value: { location: { hostname: "localhost" } } });
    assert.equal(initializeAnalytics("G-TEST123"), false);
  });
  it("does not initialize an invalid measurement ID", () => {
    assert.equal(initializeAnalytics("invalid"), false);
  });
});

describe("Google Analytics click events", () => {
  const origin = "https://thiesse.com.br";
  it("classifies the company WhatsApp without exposing the phone", () => {
    assert.deepEqual(classifyAnalyticsLink("https://wa.me/5579936181642", origin), { name: "whatsapp_click", target: "company_whatsapp" });
  });
  it("identifies Mission Control product links", () => {
    assert.deepEqual(classifyAnalyticsLink("/mission-control", origin), { name: "product_click", target: "mission_control" });
    assert.equal(classifyAnalyticsLink("/mission-control/politica-de-privacidade", origin), null);
  });
  it("identifies VacinApp product links", () => {
    assert.deepEqual(classifyAnalyticsLink("https://vacinapp.com", origin), { name: "product_click", target: "vacinapp_brasil" });
  });
  it("separates the community from the company WhatsApp", () => {
    assert.deepEqual(classifyAnalyticsLink("https://chat.whatsapp.com/E7jIWqgBxGxLwV7cF0qKwp?s=cl&p=i&iam=2", origin), { name: "community_click", target: "comunidade_imparaveis" });
  });
  it("ignores unrelated links and lookalike hosts", () => {
    for (const href of ["https://linkedin.com/in/thiesse", "#products", "https://vacinapp.com.evil.example", "https://other.example/mission-control"]) {
      assert.equal(classifyAnalyticsLink(href, origin), null);
    }
  });
  it("does not send clicks without accepted consent", () => {
    let sent = 0;
    Object.defineProperty(globalThis, "window", { configurable: true, value: { gtag: () => sent++ } });
    saveAnalyticsConsent("rejected");
    trackLinkClick("https://wa.me/5579936181642", "/links");
    assert.equal(sent, 0);
  });
});