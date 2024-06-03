import { z } from 'zod';

export const probeSchema = z.object({
  id: z.string(),
  ACTIVE: z.boolean(),  // Ensure this and other properties accurately reflect your data structure
  ALIVE: z.boolean().optional(),
  LAST_HEARTBEAT: z.string().optional(),
  PROBE_ID: z.string().optional(),
  PROBE_NAME: z.string().optional(),
  USER_ID: z.string().optional(),
  USER_NAME: z.string().optional(),
});

export type ProbeData = z.infer<typeof probeSchema>;