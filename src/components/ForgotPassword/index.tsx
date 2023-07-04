import { useForm } from "react-hook-form";
import { useUsers } from "../../hooks/useUser";
import { LoadingRing } from "../../styles/LoadingRing";
import { StyledButton } from "../../styles/button";
 
import { Form } from "../Form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, HStack } from "./styled";
import { editSchemaRequest, tRegisterReq } from "../../pages/Register/schemas";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { IProps } from "./schemas";

const ForgotPassword = ({ isModalOpen, setIsModalOpen }: IProps) => {
  const { reqLoading, setReqLoading } = useUsers();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tRegisterReq>({
    resolver: zodResolver(editSchemaRequest),
  });

  const handleRegisterSubmit = async (data: tRegisterReq) => {
    try {
      setReqLoading(true);
      await api.post(`user/resetPassword`, data);
      toast.success("Email enviado com sucesso!");
      setIsModalOpen(!isModalOpen);
    } catch (err) {
      toast.error("Email não encontrado.");
      console.error(err);
    } finally {
      setReqLoading(false);
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
        <Input
          id="email"
          label="Email"
          placeholder="Digite seu e-mail"
          type="email"
          className={errors.email ? "err" : ""}
          errorMessage={errors.email?.message}
          {...register("email")}
        />

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
            disabled={reqLoading ? true : false}
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
