import { z } from "zod";

export const announceSchema = z.object({
  brand: z.string().nonempty().min(2),
  model: z.string().nonempty().min(2),
  spec: z.string().default(""),
  year: z.string().nonempty(),
  fuel: z.string().nonempty(),
  km: z.string().transform((value) => Number(value)),
  color: z.string().nonempty(),
  fipe: z.string().nonempty(),
  price: z.string().transform((value) => Number(value)),
  description: z.string(),
  image: z.unknown(),
});

export type announceData = z.infer<typeof announceSchema>;
