import { useEffect, useState } from "react";
import Card from "../../components/Card";
import { Aside } from "../../components/NavAside";
import { StyledContainer } from "../../styles/global";
import { Box, Flex, Main, Title, Text, HStack } from "./styles";
import { FaAngleRight } from "react-icons/fa";
import useMedia from "use-media";
import { StyledButton } from "../../styles/button";
import { useUsers } from "../../hooks/useUser";
import { useCar } from "../../hooks/useCar";

const Home = () => {
  const [open, setOpen] = useState(false);
  const isWide = useMedia({ maxWidth: "768px" });

  const { user } = useUsers();

  // if (user) console.log(user);

  const { cars, refreshCars } = useCar();

  useEffect(() => {
    refreshCars()
  }, []);
  
  // console.log(cars)

  useEffect(() => {
    if (!isWide) {
      setOpen(false);
    }
  }, [isWide]);

  const handleSearch = (filtro: any) => {
    // Lógica para lidar com a busca com base no filtro
  };

  return (
    <Main>
      <Box className="main__car">
        <Flex className="main__linear--gradient">
          <Title>Motors Shop</Title>
          <Text className="main__title">
            A melhor plataforma de anúncios de carros do país
          </Text>
        </Flex>
      </Box>
      <StyledContainer className="main container">
        <Flex className="leftSide">
          {isWide ? (
            open && (
              <Aside onSearch={handleSearch} onClick={() => setOpen(!open)} />
            )
          ) : (
            <Aside onSearch={handleSearch} />
          )}

          {!open && (
            <StyledButton
              buttonstyle="brand1"
              className="main__Filtros"
              onClick={() => setOpen(!open)}
            >
              Filtros
            </StyledButton>
          )}
        </Flex>
        {!open && (
          <Flex className="rightSide">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Flex>
        )}
      </StyledContainer>
      <Flex className="pageButton">
        <HStack>1 de 2</HStack>
        <HStack>
          {/* <FaAngleLeft /> */}
          <Text>Seguinte</Text>
          <FaAngleRight />
        </HStack>
      </Flex>
    </Main>
  );
};

export default Home;
