import { z } from "npm:zod@4.4.3";

export const registrationSchema = z.object({
  name: z.string().trim().min(2).max(100),
  company: z.string().trim().min(2).max(150),
  phone: z.string().regex(/^\d{10,15}$/),
  email: z.string().trim().email().max(255),
}).strict();