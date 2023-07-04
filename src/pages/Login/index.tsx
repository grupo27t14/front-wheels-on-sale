import { LoginStyled } from "./styled";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { StyledButton } from "../../styles/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, tLogin } from "./schemas";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { LoadingRing } from "../../styles/LoadingRing";
import { theme } from "../../styles/theme";
import { useState } from "react";
import { Modal } from "../../components/Modal";
import ForgotPassword from "../../components/ForgotPassword";

export const Login = () => {
  const { signIn, reqLoading } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tLogin>({
    resolver: zodResolver(loginSchema),
  });

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <LoginStyled>
      {isModalOpen && (
        <Modal toggleModal={handleOpenModal}>
          <ForgotPassword
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </Modal>
      )}

      <Form title="Login" onSubmit={handleSubmit(signIn)}>
        <Input
          id="email"
          label="Email"
          placeholder="Digitar email"
          type="email"
          className={errors.email ? "err" : ""}
          errorMessage={errors.email?.message}
          {...register("email")}
          required
        />
        <Input
          id="password"
          label="Senha"
          placeholder="Digitar senha"
          type="password"
          className={errors.password ? "err" : ""}
          errorMessage={errors.password?.message}
          {...register("password")}
          required
        />

        <StyledButton
          buttonstyle="forgot_password_btn"
          onClick={handleOpenModal}
          type="button"
        >
          Esqueci minha senha
        </StyledButton>

        <StyledButton
          buttonstyle="brand1"
          type="submit"
          disabled={reqLoading ? true : false}
        >
          {reqLoading ? (
            <LoadingRing color={theme.colors.whiteFixed} />
          ) : (
            "Entrar"
          )}
        </StyledButton>
        <span>Ainda não tem conta</span>
        <Link to="/register" className="toRegister">
          Cadastrar
        </Link>
      </Form>
    </LoginStyled>
  );
};
