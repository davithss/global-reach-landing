import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { registrationSchema } from "./schema.ts";

const sheetId = "1fERavEnCciAV-39LGdw4OgtMn4JuY5p5WMhJlUtnjic";
const gateway = "https://connector-gateway.lovable.dev/google_sheets/v4";
const reply = (status: number, body: object) => new Response(JSON.stringify(body), {
  status, headers: { ...corsHeaders, "Content-Type": "application/json" },
});

// Intentionally public: visitors can submit validated registrations, never read the sheet.
Deno.serve(async req => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return reply(405, { error: "Método não permitido." });
  try {
    const raw = await req.text();
    if (raw.length > 4000) return reply(413, { error: "Dados excedem o limite." });
    let input: unknown;
    try { input = JSON.parse(raw); } catch { return reply(400, { error: "Dados inválidos." }); }
    const parsed = registrationSchema.safeParse(input);
    if (!parsed.success) return reply(400, { error: "Verifique nome, empresa, celular e email." });
    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    const connectionKey = Deno.env.get("GOOGLE_SHEETS_API_KEY");
    if (!apiKey || !connectionKey) return reply(503, { error: "Inscrições temporariamente indisponíveis." });
    const { name, company, phone, email } = parsed.data;
    const response = await fetch(`${gateway}/spreadsheets/${sheetId}/values/'Inscrições'!A:E:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "X-Connection-Api-Key": connectionKey, "Content-Type": "application/json" },
      // RAW keeps user-entered text as data, never spreadsheet formulas.
      body: JSON.stringify({ values: [[new Date().toISOString(), name, company, phone, email]] }),
    });
    if (!response.ok) {
      const details = await response.text();
      console.error(`Sheets request failed [${response.status}]: ${details}`);
      return reply(response.status, { error: "Não foi possível salvar a inscrição.", status: response.status, details });
    }
    const result = await response.json();
    if (result.updates?.updatedRows !== 1) return reply(502, { error: "Não foi possível confirmar a inscrição." });
    return reply(200, { success: true });
  } catch {
    return reply(502, { error: "Não foi possível confirmar o envio. Tente novamente mais tarde." });
  }
});