import { z } from "zod";

export const letterFormSchema = z.object({
  name: z.string().min(2).max(50),
  weddingDate: z.string().min(2).max(50),
  message: z.string().min(2).max(500),
});
