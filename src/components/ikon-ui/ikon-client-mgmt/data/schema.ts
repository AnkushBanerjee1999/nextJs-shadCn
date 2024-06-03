import { z } from "zod";

export const clientSchema = z.object({
  id: z.string(),
  clientName: z.string(),
  description: z.string(),
});

export type clientTask = z.infer<typeof clientSchema>;
