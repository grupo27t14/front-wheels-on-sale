import { useState } from "react";
import { ModalTeste } from "../../components/ModalTeste";
import { LoginStyled } from "./style";

export const Login = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };

  return (
    <LoginStyled>
      <p>teste</p>
      <button onClick={toggleModal}>Abrir Modal</button>
      {isModalOpen && <ModalTeste toggleModal={toggleModal} />}
    </LoginStyled>
  );
};

