import { useState } from "react";
import { ModalTeste } from "../../components/ModalTeste";
import { LoginStyled } from "./style";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { StyledButton } from "../../styles/button";

export const Login2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <LoginStyled>
      {/* Header */}
      <Form title="Login">
        <Input
          id="email"
          label="Email"
          placeholder="Digitar email"
          type="email"
        />
        <Input
          id="passowrd"
          label="Senha"
          placeholder="Digitar senha"
          type="password"
        />
        <a href="#">Esqueci minha senha</a>
        <StyledButton buttonstyle="brand1">Entrar</StyledButton>
        <span>Ainda não tem conta</span>
        <StyledButton buttonstyle="input_button">Cadastrar</StyledButton>
      </Form>
    </LoginStyled>
  );
};
