import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Flex = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  cursor: pointer;
  gap: 8px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Text = styled.p`
  ${theme.typography.body1_400}
`;

export const UnorderedList = styled.ul`
  width: 200px;
  display: flex;
  gap: 16px;
  list-style: none;
  flex-direction: column;
  padding: 9px 0px 24px 0;
  position: absolute;
  top: 65px;
  right: 10px;
  z-index: 10;
  background-color: ${theme.colors.grey10};
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

  @media (max-width: 375px) {
    width: 100%;
    right: 0;
  }
`;

export const ListItem = styled.li`
  width: 100%;
  cursor: pointer;
  padding-left: 28px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  position: relative;

  &:hover {
    color: ${theme.colors.whiteFixed};
  }

  &::before {
    content: "";
    position: absolute;
    left: 0px;
    width: 0px;
    height: 100%;
    background-color: ${theme.colors.random4};
    z-index: -1;
    transition: all 0.5s;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  &:hover::before {
    width: 100%;
  }

  @media (max-width: 375px) {
    width: 100%;
  }
`;

export const Link = styled.a`
  width: 100%;
  display: inline-block;
  ${theme.typography.body1_400}
`;
