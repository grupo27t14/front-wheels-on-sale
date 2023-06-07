import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Footer = styled.footer`
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  background-color: ${theme.colors.grey0};

  & .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .footer__Button {
  }

  @media (max-width: 768px) {
    height: 310px;

    & .footer {
      flex-direction: column;
      gap: 60px;
    }
  }
`;

export const Box = styled.div``;

export const Img = styled.img`
  color: ${theme.colors.whiteFixed};
`;

export const Text = styled.p`
  ${theme.typography.body2_400}
  color: ${theme.colors.grey3};
`;

export const Link = styled.a`
  width: 53px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  color: ${theme.colors.whiteFixed};
  background-color: ${theme.colors.grey1};
`;
