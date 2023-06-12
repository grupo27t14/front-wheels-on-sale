import { useMedia } from "use-media";
import { useEffect, useState } from "react";
import { StyledContainer } from "../../styles/global";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Box, Header as HeaderContainer, Img, Nav, Button } from "./styled";
import logo from "../../assets/logo.svg";
import IsNotLogged from "./IsNotLogged";
import IsLogged from "./IsLogged";
import { Outlet } from "react-router";
import React from "react";
import Footer from "../Footer";
import { useUsers } from "../../hooks/useUser";

const Header = () => {
  const { user } = useUsers();
  const [open, setOpen] = useState(false);
  const isWide = useMedia({ maxWidth: "768px" });

  useEffect(() => {
    if (isWide && !user) {
      setOpen(false);
    }
  }, [isWide]);

  return (
    <React.Fragment>
      <HeaderContainer id={"home"}>
        <StyledContainer className="header container">
          <Box>
            <Img src={logo} alt="Logo Motors shop" />
          </Box>
          <Nav>
            {!user ? (
              <IsNotLogged open={open} />
            ) : (
              <IsLogged open={open} onClick={() => setOpen(!open)} />
            )}

            {isWide && (
              <Button onClick={() => setOpen(!open)}>
                {open ? <AiOutlineClose /> : <AiOutlineMenu />}
              </Button>
            )}
          </Nav>
        </StyledContainer>
      </HeaderContainer>
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default Header;
