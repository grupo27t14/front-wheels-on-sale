import { Link, useLocation, useParams } from "react-router-dom";
import { iCarRes } from "../../contexts/CarContext/props";
import { useUsers } from "../../hooks/useUser";
import { Avatar } from "../../styles/global";
import { Section, Box, Img, Title, Text, Flex, VStack } from "./styled";
import { BsCurrencyDollar } from "react-icons/bs";
import { StyledButton } from "../../styles/button";

interface ICarProps {
  car: iCarRes;
}

const Card = ({ car }: ICarProps) => {
  const { pathname } = useLocation();
  const { user } = useUsers();
  const { id } = useParams();

  const path = pathname.substring(1, 8);

  const nomeESobrenome = car.user?.name
    .split(" ")
    .map((letter: string, index: number) => {
      if (index === 0 || index === car.user?.name.split(" ").length - 1) {
        return letter[0].toUpperCase();
      }
    })
    .join("");

  return (
    <Section>
      <Box className="card__img">
        {user && user?.is_seller && path === "profile" && (
          <Box>
            {user?.id === id && car.is_published ? (
              <Box className="card__published--Active">Ativo</Box>
            ) : (
              <Box className="card__published--Inactive">Inativo</Box>
            )}
          </Box>
        )}

        {car.is_promo && <BsCurrencyDollar />}
        <Link
          to={user && user?.id === id ? "" : `/product/${car.id}`}
          style={
            user && user?.id === id
              ? { cursor: "unset" }
              : { cursor: "pointer" }
          }
        >
          <Img src={car.images[0]?.url} alt={car.brand} />
        </Link>
      </Box>
      <Box className="card__info">
        <Title>
          {car.brand} - {car.model}
        </Title>
        <Text className="card__info--text">{car.description}</Text>
        <Flex className="card__info--advertiser">
          <Avatar className="avatar" $bg={car.user?.avatar_bg}>
            {nomeESobrenome}
          </Avatar>
          <Text className="card__info--name">{car.user?.name}</Text>
        </Flex>

        <VStack>
          <Flex className="card__info--tags">
            <Box className="card__info--subTag">{car.km} KM</Box>
            <Box className="card__info--subTag">{car.year}</Box>
          </Flex>
          <Text className="card__info--price">
            {car.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </Text>
        </VStack>

        {user && user?.is_seller && user?.id === id && (
          <VStack className="card__btn">
            <StyledButton buttonstyle="medium">Editar</StyledButton>
            <StyledButton buttonstyle="medium">
              <Link to={`/product/${car.id}`}>Ver detalhes</Link>
            </StyledButton>
          </VStack>
        )}
      </Box>
    </Section>
  );
};

export default Card;
