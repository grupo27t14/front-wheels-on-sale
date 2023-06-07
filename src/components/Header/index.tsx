import { useMedia } from "use-media";
import { useEffect, useState } from "react";
import { StyledContainer } from "../../styles/global";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Box, Header as HeaderContainer, Img, Nav, Button } from "./styled";

import IsNotLogged from "./IsNotLogged";
import IstLogged from "./IsLogged";
import { Outlet } from "react-router";

const Header = () => {
  const [open, setOpen] = useState(false);
  const isWide = useMedia({ maxWidth: "768px" });

  const [user, setUser] = useState(false);

  useEffect(() => {
    if (isWide && !user) {
      setOpen(false);
    }
  }, [isWide]);

  return (
    <>
      <HeaderContainer>
        <StyledContainer className="header container">
          <Box>
            <Img src="./logo.png" alt="Logo Motors shop" />
          </Box>
          <Nav>
            {!user ? (
              <IsNotLogged open={open} />
            ) : (
              <IstLogged open={open} onClick={() => setOpen(!open)} />
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
    </>
  );
};

export default Header;
