import { StyledContainer } from "../../styles/global";
import { Footer as FooterContainer, Box, Img, Text, Link } from "./styled";
import React from "react";
import logo from "../../assets/logo-white.svg";
import { FaAngleUp } from "react-icons/fa";

const Footer = () => {
  return (
    <React.Fragment>
      <FooterContainer>
        <StyledContainer className="footer container">
          <Box>
            <Img src={logo} alt="Logo Motors shop" />
          </Box>
          <Box>
            <Text>© 2022 - Todos os direitos reservados.</Text>
          </Box>
          <Link href={"#home"}>
            <FaAngleUp />
          </Link>
        </StyledContainer>
      </FooterContainer>
    </React.Fragment>
  );
};

export default Footer;
