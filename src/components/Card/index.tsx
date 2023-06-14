import { Link } from "react-router-dom";
import { iCarRes } from "../../contexts/CarContext/props";
import { useUsers } from "../../hooks/useUser";
import { Avatar } from "../../styles/global";
import { Section, Box, Img, Title, Text, Flex, VStack } from "./styled";
import { BsCurrencyDollar } from "react-icons/bs";

interface ICarProps {
  car: iCarRes;
}

const Card = ({ car }: ICarProps) => {
  const { user } = useUsers();

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
        {/* <Box className="card__published--Active">Ativo</Box>
        <Box className="card__published--Inactive">Inativo</Box> */}

        {car.is_promo && <BsCurrencyDollar />}
        <Link to={`/product/${car.id}`}>
          <Img src={car.images[0]?.url} alt={car.brand} />
        </Link>
      </Box>
      <Box className="card__info">
        <Title>{car.brand}</Title>
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
          <Text className="card__info--price">R$ {car.price}</Text>
        </VStack>

        {/* <VStack className="card__btn">
          <StyledButton buttonstyle="medium">Editar</StyledButton>
          <StyledButton buttonstyle="medium">Ver detalhes</StyledButton>
        </VStack> */}
      </Box>
    </Section>
  );
};

export default Card;
