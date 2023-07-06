import { z } from "zod";

export interface IProps {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

export const RecoverySchema = z.object({
  email: z
    .string()
    .nonempty("Email é obrigatório.")
    .email("Formato de email inválido."),
});

export type tRecovery = z.infer<typeof RecoverySchema>;
