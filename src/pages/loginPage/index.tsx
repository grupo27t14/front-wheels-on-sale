
import { useState } from "react";
import { LoginStyled } from "./style";
import { Aside } from "../../components/NavAside";


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

      <Aside onSearch={handleSearch} />

    </LoginStyled>
  );
};
