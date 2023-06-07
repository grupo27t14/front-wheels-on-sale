import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const UnorderedList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
  gap: 14px;
  border-left: 2px solid ${theme.colors.grey6};
  background-color: ${theme.colors.whiteFixed};

  @media (max-width: 768px) {
    width: 200px;
    height: 202px;
    flex-direction: column;
    position: absolute;
    top: 65px;
    right: 10px;
    z-index: 100;
    border-left: none;

    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 375px) {
    width: 100%;
    right: 0;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

export const Link = styled.a`
  cursor: pointer;
  padding: 12px 0;
  width: 113px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 2px solid transparent;

  &.header__signUp--login {
    color: ${theme.colors.grey2};
    ${theme.typography.body1_600};
    line-height: unset;
  }

  &.header__signUp--register {
    color: ${theme.colors.grey0};
    ${theme.typography.button_big_text};
    border-color: ${theme.colors.grey6};
    line-height: unset;
  }

  &:hover {
    color: ${theme.colors.whiteFixed};
    background-color: ${theme.colors.random4};
    border-color: ${theme.colors.random4};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
