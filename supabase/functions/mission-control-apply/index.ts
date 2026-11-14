import { createClient } from "npm:@supabase/supabase-js@2";
import { applicationSchema } from "./schema.ts";

const headers = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type", "Access-Control-Allow-Methods": "POST, OPTIONS", "Content-Type": "application/json" };
const reply = (status: number, body: object) => new Response(JSON.stringify(body), { status, headers });

Deno.serve(async req => {
  if (req.method === "OPTIONS") return new Response(null, { headers });
  if (req.method !== "POST") return reply(405, { error: "Método não permitido." });
  try {
    const raw = await req.text();
    if (raw.length > 6000) return reply(413, { error: "Dados excedem o limite." });
    let input: unknown;
    try { input = JSON.parse(raw); } catch { return reply(400, { error: "Dados inválidos." }); }
    const parsed = applicationSchema.safeParse(input);
    if (!parsed.success) return reply(400, { error: "Verifique os dados da aplicação." });
    const url = Deno.env.get("SUPABASE_URL");
    const key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!url || !key) return reply(503, { error: "Serviço temporariamente indisponível." });
    const client = createClient(url, key);
    const { error } = await client.from("mission_control_applications").insert(parsed.data);
    if (error) return reply(500, { error: "Não foi possível registrar a aplicação." });
    return reply(200, { success: true });
  } catch { return reply(500, { error: "Não foi possível enviar. Tente novamente." }); }
});