import { useState } from "react";
import { ModalTeste } from "../../components/ModalTeste";
import { LoginStyled } from "./style";
import { Aside } from "../../components/NavAside";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { StyledButton } from "../../styles/button";


export const Login2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSearch = (filtro: any) => {
    // Lógica para lidar com a busca com base no filtro
  };
      
  return (
    <LoginStyled>
      <p>teste</p>
      <button onClick={toggleModal}>Abrir Modal</button>
      {isModalOpen && <ModalTeste toggleModal={toggleModal} />}

      <Aside onSearch={handleSearch} />


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
