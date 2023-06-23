import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { ErrorMessage } from "../../components/Form/styles";
import { tRecovery } from "./schemas";
import { Form } from "../../components/Form";
import { StyledButton } from "../../styles/button";
import { PasswordStyled } from "./style";

const PasswordRecoveryPage = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<tRecovery>();

  const onSubmit = (data: any) => {
    console.log("Email enviado para: " + data);
  };

  return (
    <PasswordStyled>
      <Form onSubmit={handleSubmit(onSubmit)} title={"Esqueceu sua senha?"}>
        <span>
          Enviaremos um e-mail com instruções de como refefinir sua senha.
        </span>
        <Input
          name="email"
          label="Email"
          type="email"
          placeholder="Digite seu email"
          id="email2"
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <StyledButton buttonstyle="brand1" type="submit">
          Enviar Email
        </StyledButton>
        <p>
          Voltar para a <Link to="/">Página Inicial</Link>
        </p>
      </Form>
    </PasswordStyled>
  );
};

export default PasswordRecoveryPage;
