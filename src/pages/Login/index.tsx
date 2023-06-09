import { LoginStyled } from "./styles";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { StyledButton } from "../../styles/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, tLogin } from "./schemas";
import { ErrorMessage } from "../../components/Form/styles";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tLogin>({
    resolver: zodResolver(loginSchema),
  });

  const { signIn } = useAuth()

  return (
    <LoginStyled>
      <Form title="Login" onSubmit={handleSubmit(signIn)}>
        <Input
          id="email"
          label="Email"
          placeholder="Digitar email"
          type="email"
          className={errors.email ? "err" : ""}
          {...register("email")}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
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
        <a href="#" className="forgot">
          Esqueci minha senha
        </a>
        <StyledButton buttonstyle="brand1" type="submit">
          Entrar
        </StyledButton>
        <span>Ainda não tem conta</span>
        <Link to="/register" className="toRegister">
          Cadastrar
        </Link>
      </Form>
    </LoginStyled>
  );
};
