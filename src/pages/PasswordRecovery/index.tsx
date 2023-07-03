import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { ErrorMessage } from "../../components/Form/styled";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../../components/Form";
import { StyledButton } from "../../styles/button";
import { PasswordStyled } from "./style";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { forgotPasswordSchema, tforgotPasswordReq } from "../Register/schemas";
import { useUsers } from "../../hooks/useUser";
import { LoadingRing } from "../../styles/LoadingRing";
import { theme } from "../../styles/theme";

const PasswordRecoveryPage = () => {
  const { reqLoading, setReqLoading } = useUsers();
  const navigate = useNavigate();
  const { token } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tforgotPasswordReq>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const handlePasswordRecovery = async (data: tforgotPasswordReq) => {
    try {
      setReqLoading(true);
      await api.patch(`user/resetPassword/${token}`, data);
      toast.success("Senha alterada com sucesso!");
      navigate("/login");
    } catch (err) {
      console.error(err);
    } finally {
      setReqLoading(false);
    }
  };

  return (
    <PasswordStyled>
      <Form
        onSubmit={handleSubmit(handlePasswordRecovery)}
        title={"Definir nova senha"}
      >
        <span>Digite sua nova senha abaixo.</span>

        <Input
          id="password"
          label="Senha"
          placeholder="Digitar senha"
          type="password"
          className={errors.password ? "err" : ""}
          {...register("password")}
        />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
        <Input
          id="confirm"
          label="Confirmar Senha"
          placeholder="Digitar senha"
          type="password"
          className={errors.confirm ? "err" : ""}
          {...register("confirm")}
        />
        {errors.confirm && (
          <ErrorMessage>{errors.confirm.message}</ErrorMessage>
        )}

        <StyledButton
          buttonstyle="brand1"
          type="submit"
          disabled={reqLoading ? true : false}
        >
          {reqLoading ? (
            <LoadingRing color={theme.colors.whiteFixed} />
          ) : (
            "Salvar"
          )}
        </StyledButton>

        <p>
          Voltar para a <Link to="/">Página Inicial</Link>
        </p>
      </Form>
    </PasswordStyled>
  );
};

export default PasswordRecoveryPage;
