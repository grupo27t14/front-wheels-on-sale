import { Avatar } from "../../styles/global";
import { theme } from "../../styles/theme";
import { Section, Box, Img, Title, Text, Flex, VStack } from "./styled";
import { BsCurrencyDollar } from "react-icons/bs";

const Card = () => {
  return (
    <Section>
      <Box className="cardImg">
        <BsCurrencyDollar />
        <Img
          src="https://cqcs.com.br/wp-content/uploads/2014/09/carros-importados-5-400x208.jpg"
          alt=""
        />
      </Box>
      <Box className="cardInfo">
        <Title>Maserati - Ghibli</Title>
        <Text className="cardInfo__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem...
        </Text>
        <Flex className="cardInfo__advertiser">
          <Avatar className="avatar" $bg={`${theme.colors.random8}`}>
            SL
          </Avatar>
          <Text className="cardInfo__text--Name">Samuel Leão</Text>
        </Flex>

        <VStack>
          <Flex className="cardInfo__tags">
            <Box className="cardInfo__tags--bag">0 KM</Box>
            <Box className="cardInfo__tags--bag">2019</Box>
          </Flex>
          <Text className="cardInfo__price">R$ 00.000,00</Text>
        </VStack>
      </Box>
    </Section>
  );
};

export default Card;
