import { describe, it } from "node:test";
import { strict as assert } from "node:assert";
import { estimateMonthlyHours } from "../src/lib/mission-application";

describe("Monthly time simulation", () => {
  it("uses 22 working days: 2 hours daily equals 44 monthly", () => {
    assert.equal(estimateMonthlyHours(2), 44);
  });
  it("uses 22 working days: 8 hours daily equals 176 monthly", () => {
    assert.equal(estimateMonthlyHours(8), 176);
  });
});