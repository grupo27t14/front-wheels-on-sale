import { z } from "zod";

export const commentSchema = z.object({
  description: z.string().nonempty("O comentário é obrigatório"),
});

const commentSchemaResponse = z.object({
  id: z.string(),
  description: z.string(),
  create_date: z.string().or(z.instanceof(Date)),
  car: z.object({
    id: z.string(),
    brand: z.string(),
    model: z.string(),
    year: z.string(),
    fuel: z.string(),
    km: z.number(),
    color: z.string(),
    fipe: z.string(),
    price: z.number(),
    description: z.string(),
    is_published: z.boolean(),
    created_at: z.date(),
    is_promo: z.boolean(),
  }),
  user: z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    is_admin: z.boolean(),
    is_seller: z.boolean(),
    created_at: z.date(),
    avatar_bg: z.string(),
  }),
});

const commentsSchemaResponse = z.array(commentSchemaResponse);

export type tcomment = z.infer<typeof commentSchema>;
export type tnewComment = z.infer<typeof commentSchemaResponse>;
export type tcommentResponse = z.infer<typeof commentsSchemaResponse>;
