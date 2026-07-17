import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const COMPANY = {
  name: "Thiesse Software",
  tagline:
    "Engenharia de software sênior para clientes nos EUA, na Europa e no setor público brasileiro.",
  headquarters: "Aracaju, Sergipe — Brasil",
  website: "https://thiesse.com.br",
  founders: ["Davi Thiesse"],
  focus_areas: [
    "Modernização de plataformas legadas",
    "Engenharia de software para o setor público",
    "Consultoria sênior para times globais",
    "Regularização Fundiária Urbana (Reurb) — Governo de Sergipe",
  ],
  languages: ["pt-BR", "en", "es"],
};

export default defineTool({
  name: "get_company_info",
  title: "Informações da Thiesse Software",
  description:
    "Retorna informações institucionais sobre a Thiesse Software: nome, sede, áreas de atuação, fundadores e site.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(COMPANY, null, 2) }],
    structuredContent: COMPANY,
  }),
});
