import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { registrationSchema } from "./schema.ts";

const valid = { name: "Pessoa Teste", company: "Empresa Teste", phone: "79999999999", email: "teste@example.com" };
Deno.test("Server accepts the four registration fields", () => assertEquals(registrationSchema.safeParse(valid).success, true));
for (const field of ["name", "company", "phone", "email"]) {
  Deno.test(`Server requires ${field}`, () => assertEquals(registrationSchema.safeParse({ ...valid, [field]: "" }).success, false));
}
Deno.test("Visitor cannot select the spreadsheet", () => assertEquals(registrationSchema.safeParse({ ...valid, sheetId: "other" }).success, false));
Deno.test("Server rejects phone without DDD", () => assertEquals(registrationSchema.safeParse({ ...valid, phone: "123" }).success, false));