import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const EXPERIENCE = [
  {
    title: "Parceria com o Governo de Sergipe — Reurb",
    summary:
      "Plataforma de Regularização Fundiária Urbana desenvolvida em parceria com a SergipeTec para o Governo de Sergipe.",
    year_start: 2024,
  },
  {
    title: "Consultoria sênior para clientes nos EUA e na Europa",
    summary:
      "Engenharia de software e liderança técnica para times distribuídos em produtos SaaS e plataformas de dados.",
    year_start: 2015,
  },
  {
    title: "Fundação da Thiesse Software",
    summary:
      "Reposicionamento da atuação do fundador Davi Thiesse em uma empresa focada em engenharia sênior e setor público.",
    year_start: 2024,
  },
];

export default defineTool({
  name: "list_experience",
  title: "Histórico e projetos",
  description:
    "Lista o histórico e os principais projetos da Thiesse Software, incluindo a parceria com o Governo de Sergipe.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(EXPERIENCE, null, 2) }],
    structuredContent: { experience: EXPERIENCE },
  }),
});
