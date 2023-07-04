import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Header = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${theme.colors.grey10};
  border-bottom: 2px solid ${theme.colors.grey6};

  & .header {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
`;

export const Box = styled.div``;

export const Img = styled.img`
  max-width: 100%;
  width: 180px;
`;

export const Nav = styled.nav`
  width: 313px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  background-color: ${theme.colors.grey10};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  border: 0.1rem solid transparent;
  background-color: transparent;
  cursor: pointer;

  & > svg {
    font-size: 21px;
  }

  &:hover {
    background-color: ${theme.colors.random4};
    & > svg {
      color: ${theme.colors.whiteFixed};
    }
  }
`;
