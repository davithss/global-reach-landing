import { z } from "zod";

export const talkDetails = {
  title: "Inteligência Artificial na Gestão Pública",
  startsAt: "2026-11-26T08:30:00-03:00",
  communityUrl: "https://chat.whatsapp.com/E7jIWqgBxGxLwV7cF0qKwp?mode=gi_t",
};

export const talkRegistrationSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome completo.").max(100),
  company: z.string().trim().min(2, "Informe sua empresa ou órgão.").max(150),
  phone: z.string().max(30).transform(value => value.replace(/[\s()+.-]/g, "")).pipe(z.string().regex(/^\d{10,15}$/, "Informe um celular válido com DDD.")),
  email: z.string().trim().email("Informe um email válido.").max(255),
}).strict();