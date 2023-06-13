import { useEffect, useState } from "react";
import Card from "../../components/Card";
import { Aside } from "../../components/NavAside";
import { StyledContainer } from "../../styles/global";
import {
  Box,
  Flex,
  Main,
  Title,
  Text,
  HStack,
  UnorderedList,
  ListItem,
} from "./styles";
import { FaAngleRight } from "react-icons/fa";
import useMedia from "use-media";
import { StyledButton } from "../../styles/button";
import { useCar } from "../../hooks/useCar";

const Home = () => {
  const [open, setOpen] = useState(false);
  const isWide = useMedia({ maxWidth: "768px" });

  const { cars } = useCar();

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
          <UnorderedList className="rightSide">
            {cars?.results.map(
              (car) =>
                car.is_published && (
                  <ListItem key={car.id}>
                    <Card car={car} />
                  </ListItem>
                )
            )}
          </UnorderedList>
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
