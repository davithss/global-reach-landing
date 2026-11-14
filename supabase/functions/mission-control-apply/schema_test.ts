import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { applicationSchema } from "./schema.ts";

const valid = { name: "Teste", company: "Empresa Teste", team_size: "2-5", bottleneck: "Organizar conteúdo e atendimento", whatsapp: "5579936181642", waitlist_opt_in: true };
Deno.test("Application requires name", () => assertEquals(applicationSchema.safeParse({ ...valid, name: "" }).success, false));
Deno.test("Application requires company", () => assertEquals(applicationSchema.safeParse({ ...valid, company: "" }).success, false));
Deno.test("Application accepts only defined team sizes", () => assertEquals(applicationSchema.safeParse({ ...valid, team_size: "anything" }).success, false));
Deno.test("Application requires a bottleneck", () => assertEquals(applicationSchema.safeParse({ ...valid, bottleneck: "" }).success, false));
Deno.test("Application requires valid WhatsApp", () => assertEquals(applicationSchema.safeParse({ ...valid, whatsapp: "123" }).success, false));
Deno.test("Application preserves waitlist choice", () => assertEquals(applicationSchema.parse({ ...valid, waitlist_opt_in: false }).waitlist_opt_in, false));
Deno.test("Application cannot set its own approval", () => assertEquals(applicationSchema.safeParse({ ...valid, status: "approved" }).success, false));