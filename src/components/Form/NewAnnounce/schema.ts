import { z } from "zod";

export const announceSchema = z.object({
  brand: z.string().nonempty().min(2),
  model: z.string().nonempty().min(2),
  year: z.string().nonempty(),
  fuel: z.string().nonempty(),
  km: z.string().nonempty(),
  color: z.string().nonempty(),
  fipe: z.string().nonempty(),
  price: z.string().nonempty(),
  description: z.string(),
  image: z.unknown(),
});

export type announceData = z.infer<typeof announceSchema>;
