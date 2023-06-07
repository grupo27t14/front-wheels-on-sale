import { useState } from "react";
import { ModalTeste } from "../../components/ModalTeste";
import { LoginStyled } from "./style";
import { Aside } from "../../components/NavAside";

export const Login = () => {
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
      
    </LoginStyled>
  );
};

