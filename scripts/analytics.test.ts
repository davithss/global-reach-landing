import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { initializeAnalytics, readAnalyticsConsent, saveAnalyticsConsent } from "../src/lib/analytics";

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