import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const CLIENTS = [
  { name: "Governo de Sergipe", region: "Brasil", sector: "Setor público", project: "Regularização Fundiária Urbana (Reurb)" },
  { name: "Clientes nos EUA", region: "América do Norte", sector: "Tecnologia", project: "Consultoria e engenharia sênior" },
  { name: "Clientes na Europa", region: "Europa", sector: "Tecnologia", project: "Consultoria e engenharia sênior" },
];

export default defineTool({
  name: "list_clients",
  title: "Listar clientes e parceiros",
  description:
    "Lista clientes e parceiros públicos da Thiesse Software, incluindo região, setor e projeto associado.",
  inputSchema: {
    region: z
      .string()
      .optional()
      .describe("Filtro opcional por região (ex.: 'Brasil', 'Europa', 'América do Norte')."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ region }) => {
    const items = region
      ? CLIENTS.filter((c) => c.region.toLowerCase().includes(region.toLowerCase()))
      : CLIENTS;
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { clients: items },
    };
  },
});
