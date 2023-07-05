import { StyledContainer } from "../../styles/global";
import { Footer as FooterContainer, Box, Img, Text, ELink } from "./styled";
import logo from "../../assets/logo-white.svg";
import { FaAngleUp } from "react-icons/fa";
import AnimatedLogo from "../AnimatedLogo";

const Footer = () => {
  return (
    <FooterContainer>
      <StyledContainer className="footer container">
        <Box>
          <Img src={logo} alt="Logo Motors shop" />
        </Box>
        <Box>
          <Text>© 2022 - Todos os direitos reservados.</Text>
        </Box>
        <Box className="animatedLogo">
          <ELink to="aboutus">
            <AnimatedLogo />
          </ELink>
        </Box>
      </StyledContainer>
      <a href={"#"}>
        <FaAngleUp />
      </a>
    </FooterContainer>
  );
};

export default Footer;
