import { defineMcp } from "@lovable.dev/mcp-js";
import getCompanyInfo from "./tools/get-company-info";
import listClients from "./tools/list-clients";
import listExperience from "./tools/list-experience";
import getContact from "./tools/get-contact";

export default defineMcp({
  name: "thiesse-software-mcp",
  title: "Thiesse Software MCP",
  version: "0.1.0",
  instructions:
    "Ferramentas públicas do site institucional da Thiesse Software. Use para consultar informações sobre a empresa, clientes, projetos (incluindo a parceria com o Governo de Sergipe para Reurb) e canais de contato.",
  tools: [getCompanyInfo, listClients, listExperience, getContact],
});
