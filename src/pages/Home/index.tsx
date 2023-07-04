import { useEffect, useState } from "react";
import Card from "../../components/Card";
import { Aside } from "../../components/NavAside";
import { StyledContainer } from "../../styles/global";
import {
  Box,
  Flex,
  Main,
  HStack,
  UnorderedList,
  ListItem,
  Title,
  Subtitle,
} from "./styled";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import useMedia from "use-media";
import { StyledButton } from "../../styles/button";
import { useCar } from "../../hooks/useCar";
import { api } from "../../services/api";
import { iPaginationCars } from "../../contexts/CarContext/props";

const Home = () => {
  const [open, setOpen] = useState(false);
  const isWide = useMedia({ maxWidth: "768px" });

  const handlePagination = async (url: string | null) => {
    if (url) {
      url = url.split("/")[1];
      const { data } = await api.get<iPaginationCars>(url);
      window.scrollTo({ top: 100, behavior: "smooth" });
      setCars(data);
    }
  };

  const { cars, setCars } = useCar();

  useEffect(() => {
    if (!isWide) {
      setOpen(false);
    }
  }, [isWide]);

  return (
    <Main>
      <Box className="main__car">
        <Flex className="main__linear--gradient">
          <Title>Motors Shop</Title>
          <Subtitle>
            A melhor plataforma de anúncios de carros do país
          </Subtitle>
        </Flex>
      </Box>
      <StyledContainer className="main container">
        <Flex className="leftSide">
          {isWide ? (
            open && <Aside onClick={() => setOpen(!open)} />
          ) : (
            <Aside />
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
        {cars?.previous ? (
          <button onClick={() => handlePagination(cars.previous)}>
            <FaAngleLeft /> Anterior
          </button>
        ) : (
          ""
        )}
        <HStack>
          {cars?.currentPage} de {cars?.totalPages}
        </HStack>
        {cars?.next ? (
          <button onClick={() => handlePagination(cars.next)}>
            Seguinte <FaAngleRight />
          </button>
        ) : (
          ""
        )}
      </Flex>
    </Main>
  );
};

export default Home;