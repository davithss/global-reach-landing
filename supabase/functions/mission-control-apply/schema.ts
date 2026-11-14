import { z } from "npm:zod@4.4.3";

export const applicationSchema = z.object({
  name: z.string().trim().min(2).max(100),
  company: z.string().trim().min(2).max(150),
  team_size: z.enum(["solo", "2-5", "6-15", "16-50", "51+"]),
  bottleneck: z.string().trim().min(10).max(1000),
  whatsapp: z.string().regex(/^\d{10,15}$/),
  waitlist_opt_in: z.boolean(),
}).strict();