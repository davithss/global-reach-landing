import { test } from "node:test";
import assert from "node:assert/strict";
import { talkDetails, talkRegistrationSchema } from "../src/lib/talk-registration.ts";

const valid = { name: "Pessoa Teste", company: "Empresa Teste", phone: "(79) 99999-9999", email: "teste@example.com" };
test("Event starts November 26, 2026 at 08:30 Brazil time", () => assert.equal(talkDetails.startsAt, "2026-11-26T08:30:00-03:00"));
test("Community access uses the specified invitation", () => assert.equal(talkDetails.communityUrl, "https://chat.whatsapp.com/E7jIWqgBxGxLwV7cF0qKwp?mode=gi_t"));
for (const field of ["name", "company", "phone", "email"]) {
  test(`Registration requires ${field}`, () => assert.equal(talkRegistrationSchema.safeParse({ ...valid, [field]: "" }).success, false));
}
test("Phone is normalized with DDD", () => assert.equal(talkRegistrationSchema.parse(valid).phone, "79999999999"));
test("Invalid email is rejected", () => assert.equal(talkRegistrationSchema.safeParse({ ...valid, email: "not-an-email" }).success, false));
test("Unknown destination cannot be submitted", () => assert.equal(talkRegistrationSchema.safeParse({ ...valid, sheetId: "other" }).success, false));