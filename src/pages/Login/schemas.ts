import { z } from "zod"

export const loginSchema = z.object({
    email: z.string().nonempty("Email é obrigatório.").email("Formato de email inválido."),
    password: z.string().nonempty("Senha é obrigatória.")
})

export type tLogin = z.infer<typeof loginSchema>