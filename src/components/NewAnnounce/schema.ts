import { z } from "zod";

export const announceSchema = z
  .object({
    brand: z.string().nonempty(),
    model: z.string().nonempty(),
    spec: z.string().default(""),
    year: z.string().nonempty("Valor obrigatório.").min(4, "Mínimo 4 números."),
    fuel: z.string().nonempty(),
    km: z.any().transform((data) => Number(data)),
    color: z.string().nonempty("Valor obrigatório."),
    fipe: z.string().nonempty(),
    price: z.any().transform((data) => Number(data)),
    description: z.string(),
    image: z.unknown(),
  })
  .refine((data) => !/\d/.test(data.color), {
    message: "Valor inválido.",
    path: ["color"],
  });

export type announceData = z.infer<typeof announceSchema>;
