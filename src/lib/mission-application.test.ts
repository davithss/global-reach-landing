import { describe, expect, it } from "bun:test";
import { estimateMonthlyHours } from "./mission-application";

describe("Monthly time simulation", () => {
  it("uses 22 working days: 2 hours daily equals 44 monthly", () => {
    expect(estimateMonthlyHours(2)).toBe(44);
  });
  it("uses 22 working days: 8 hours daily equals 176 monthly", () => {
    expect(estimateMonthlyHours(8)).toBe(176);
  });
});