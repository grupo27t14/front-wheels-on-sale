import { z } from "zod";

export const announceSchema = z.object({
    brand: z.string(),
    model: z.string(),
    year: z.string(),
    fuel: z.string(),
    km: z.string(),
    color: z.string(),
    fipe: z.string(),
    price: z.string(),
    description: z.string(),
    image: z.string().optional(),
})


export type announceData = z.infer<typeof announceSchema>