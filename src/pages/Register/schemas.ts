import { z } from "zod";

export const registerSchema = z
  .object({
    addressInformation: z.object({
      cep: z.string().nonempty("Cep é obrigatório."),
      state: z.string().nonempty("Estado é obrigatório"),
      city: z.string().nonempty("Cidade é obrigatório"),
      street: z.string().nonempty("Rua é obrigatório."),
      number: z.string().nonempty("Número é obrigatório."),
      complement: z.string().nonempty(), //obrigatório?
    }),
    personalInformation: z.object({
      cpf: z.string().nonempty("Cpf é obrigatório."),
      phone: z.string().nonempty("Telefone é obrigatório"),
      birth_date: z.string().nonempty("Data de nascimento é obrigatório."),
      description: z.string().nonempty(), //obrigatório?
    }),
    name: z.string().nonempty("Nome é obrigatório."),
    email: z
      .string()
      .nonempty("Email é obrigatório.")
      .email("Formato de email inválido."),
    is_seller: z.string(),
    password: z.string().nonempty("Senha é obrigatória."),
    confirm: z.string().nonempty("Repita a senha."),
  })
  .refine((data) => data.password === data.confirm, {
    message: "As senhas não coincidem",
    path: ["confirm"],
  });

export const registerSchemaRequest = z.object({
  addressInformation: z.object({
    cep: z.string().nonempty("Cep é obrigatório."),
    state: z.string().nonempty("Estado é obrigatório"),
    city: z.string().nonempty("Cidade é obrigatório"),
    street: z.string().nonempty("Rua é obrigatório."),
    number: z.string().nonempty("Número é obrigatório."),
    complement: z.string().nonempty(), //obrigatório?
  }),
  personalInformation: z.object({
    cpf: z.string().nonempty("Cpf é obrigatório."),
    phone: z.string().nonempty("Telefone é obrigatório"),
    birth_date: z.string().nonempty("Data de nascimento é obrigatório."),
    description: z.string().nonempty(), //obrigatório?
  }),
  name: z.string().nonempty("Nome é obrigatório."),
  email: z
    .string()
    .nonempty("Email é obrigatório.")
    .email("Formato de email inválido."),
  is_seller: z.string().transform((data) => Boolean(Number(data))),
  password: z.string().nonempty("Senha é obrigatória."),
});

export type tRegister = z.infer<typeof registerSchema>;
export type tRegisterReq = z.infer<typeof registerSchemaRequest>;

export interface iCep {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}
