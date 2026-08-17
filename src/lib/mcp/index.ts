import { defineMcp, auth } from "@lovable.dev/mcp-js";
import getCompanyInfo from "./tools/get-company-info";
import listClients from "./tools/list-clients";
import listExperience from "./tools/list-experience";
import getContact from "./tools/get-contact";

const SUPABASE_URL = "https://qnfucgafrdhhfwaaqgpo.supabase.co";

export default defineMcp({
  name: "thiesse-software-mcp",
  title: "Thiesse Software MCP",
  version: "0.1.0",
  instructions:
    "Ferramentas públicas do site institucional da Thiesse Software. Use para consultar informações sobre a empresa, clientes, projetos (incluindo a parceria com o Governo de Sergipe para Reurb) e canais de contato.",
  auth: auth.oauth.issuer({
    issuer: `${SUPABASE_URL}/auth/v1`,
    jwksUri: `${SUPABASE_URL}/auth/v1/.well-known/jwks.json`,
    acceptedAudiences: ["authenticated"],
    resourceName: "Thiesse Software MCP",
  }),
  tools: [getCompanyInfo, listClients, listExperience, getContact],
});

