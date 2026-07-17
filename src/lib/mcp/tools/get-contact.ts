import { defineTool } from "@lovable.dev/mcp-js";

const CONTACT = {
  company: "Thiesse Software",
  location: "Aracaju, Sergipe — Brasil",
  website: "https://thiesse.com.br",
  linkedin: "https://linkedin.com/in/thiesse",
  note: "Para novas oportunidades e parcerias, entre em contato pelo LinkedIn ou pelo site.",
};

export default defineTool({
  name: "get_contact",
  title: "Informações de contato",
  description:
    "Retorna canais públicos de contato da Thiesse Software (site, LinkedIn e localização).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(CONTACT, null, 2) }],
    structuredContent: CONTACT,
  }),
});
