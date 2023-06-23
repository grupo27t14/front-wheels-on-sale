import { useForm } from "react-hook-form";
import { useUsers } from "../../hooks/useUser";
import { LoadingRing } from "../../styles/LoadingRing";
import { StyledButton } from "../../styles/button";
import { theme } from "../../styles/theme";
import { Form } from "../Form";
import { ErrorMessage } from "../Form/styles";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, HStack } from "./styled";
import { editSchemaRequest, tRegisterReq } from "../../pages/Register/schemas";
import { api } from "../../services/api";
import { toast } from "react-toastify";

interface IProps {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

const ForgotPassword = ({ isModalOpen, setIsModalOpen }: IProps) => {
  const { reqLoading } = useUsers();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tRegisterReq>({
    resolver: zodResolver(editSchemaRequest),
  });

  const handleRegisterSubmit = async (data: tRegisterReq) => {
    try {
      await api.post(`user/resetPassword`, data);
      toast.success("Email enviado com sucesso!");
      setIsModalOpen(!isModalOpen);
    } catch (err) {
      toast.error("Email não encontrado.");
      console.error(err);
    }
  };

  const cancelForgotPassword = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <FormControl>
      <Form
        title="Esqueceu sua senha?"
        onSubmit={handleSubmit(handleRegisterSubmit)}
      >
        <h4>
          Preencha o campo com seu e-mail e receba as instruções necessárias
          para redefinir a sua senha.
        </h4>

        {errors.name && <ErrorMessage>{errors.name?.message}</ErrorMessage>}
        <Input
          id="email"
          label="Email"
          placeholder="Digite seu e-mail"
          type="email"
          className={errors.email ? "err" : ""}
          {...register("email")}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <HStack>
          <StyledButton
            buttonstyle="negative"
            type="button"
            onClick={cancelForgotPassword}
          >
            Cancelar
          </StyledButton>

          <StyledButton
            buttonstyle="brand1"
            type="submit"
            disabled={reqLoading}
          >
            {reqLoading ? (
              <LoadingRing color={theme.colors.whiteFixed} />
            ) : (
              "Redefinir Senha"
            )}
          </StyledButton>
        </HStack>
      </Form>
    </FormControl>
  );
};

export default ForgotPassword;
