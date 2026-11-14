import { z } from "zod";

export const missionApplicationSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome.").max(100),
  company: z.string().trim().min(2, "Informe sua empresa.").max(150),
  team_size: z.enum(["solo", "2-5", "6-15", "16-50", "51+"], { error: "Selecione o tamanho do time." }),
  bottleneck: z.string().trim().min(10, "Conte um pouco mais sobre seu principal gargalo.").max(1000),
  whatsapp: z.string().max(30).transform(value => value.replace(/\D/g, "")).pipe(z.string().regex(/^\d{10,15}$/, "Informe um WhatsApp válido com DDD.")),
  waitlist_opt_in: z.boolean(),
});

export function estimateMonthlyHours(dailyHours: number) {
  return dailyHours * 22;
}