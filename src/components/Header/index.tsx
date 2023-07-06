import { useMedia } from "use-media";
import { useEffect, useState } from "react";
import { StyledContainer } from "../../styles/global";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Box, Header as HeaderContainer, Img, Nav, Button } from "./styled";
import logo from "../../assets/logo.svg";
import logoWhite from "../../assets/logo-white.svg";
import IsNotLogged from "./IsNotLogged";
import IsLogged from "./IsLogged";
import { Outlet } from "react-router";
import React from "react";
import Footer from "../Footer";
import { useUsers } from "../../hooks/useUser";
import { Link } from "react-router-dom";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { StyledButton } from "../../styles/button";

interface HeaderProps {
  handleTheme: () => void;
  isDark: boolean;
}

const Header = ({ handleTheme, isDark }: HeaderProps ) => {
  const { user } = useUsers();
  const [open, setOpen] = useState(false);
  const isWide = useMedia({ maxWidth: "768px" });

  useEffect(() => {
    if (isWide && !user) {
      setOpen(false);
    }
  }, [isWide, user]);

  return (
    <React.Fragment>
      <HeaderContainer id={"home"}>
        <StyledContainer className="header container">
          <Box>
            <Link to={"/"}>
            { isDark ? <Img src={logoWhite} alt="Logo Motors shop" /> : <Img src={logo} alt="Logo Motors shop" />}
            </Link>
          </Box>
          <Nav>
            {!user ? (
              <IsNotLogged open={open} />
            ) : (
              <IsLogged
                open={open}
                setOpen={setOpen}
                onClick={() => setOpen(!open)}
              />
            )}

            {isWide && (
              <Button onClick={() => setOpen(!open)}>
                {open ? <AiOutlineClose /> : <AiOutlineMenu />}
              </Button>
            )}
            <StyledButton onClick={handleTheme} buttonsize="icon" buttonstyle="light">
              { isDark ? <BsSunFill/> : <BsMoonFill/> }

            </StyledButton>
          </Nav>
        </StyledContainer>
      </HeaderContainer>
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default Header;
