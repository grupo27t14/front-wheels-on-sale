import { StyledButton } from "../../styles/button";
import { Avatar } from "../../styles/global";
import { theme } from "../../styles/theme";
import { Section, Box, Img, Title, Text, Flex, VStack } from "./styled";
import { BsCurrencyDollar } from "react-icons/bs";

const Card = () => {
  return (
    <Section>
      <Box className="card__img">
        <Box className="card__published--Active">Ativo</Box>
        {/* <Box className="card__published--Inactive">Inativo</Box> */}

        <BsCurrencyDollar />
        <Img
          src="https://cqcs.com.br/wp-content/uploads/2014/09/carros-importados-5-400x208.jpg"
          alt=""
        />
      </Box>
      <Box className="card__info">
        <Title>Maserati - Ghibli</Title>
        <Text className="card__info--text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem...
        </Text>
        <Flex className="card__info--advertiser">
          <Avatar className="avatar" $bg={`${theme.colors.random8}`}>
            SL
          </Avatar>
          <Text className="card__info--name">Samuel Leão</Text>
        </Flex>

        <VStack>
          <Flex className="card__info--tags">
            <Box className="card__info--subTag">0 KM</Box>
            <Box className="card__info--subTag">2019</Box>
          </Flex>
          <Text className="card__info--price">R$ 00.000,00</Text>
        </VStack>

        <VStack className="card__btn">
          <StyledButton buttonstyle="medium">Editar</StyledButton>
          <StyledButton buttonstyle="medium">Ver detalhes</StyledButton>
        </VStack>
      </Box>
    </Section>
  );
};

export default Card;
