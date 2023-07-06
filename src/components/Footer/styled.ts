import styled from "styled-components";
import { Link } from "react-router-dom";

export const Footer = styled.footer`
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  position: relative;
  background-color: black;

  & .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > a {
    position: absolute;
    top: -25px;
    left: 0;
    right: 0;
    margin: 0 auto;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    border: 2px solid ${(props) => props.theme.pallete.greyScale.grey10};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.pallete.greyScale.grey10};
    background-color: ${(props) => props.theme.pallete.greyScale.grey1};
  }

  @media (max-width: 768px) {
    height: 310px;

    & .footer {
      flex-direction: column;
      gap: 60px;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const Img = styled.img`
  width: 180px;
  max-width: 100%;
  color: ${(props) => props.theme.pallete.greyScale.grey10};
`;

export const Text = styled.p`
  ${(props) => props.theme.typography.body2_400};
  color: ${(props) => props.theme.pallete.greyScale.grey3};
`;

export const ELink = styled(Link)`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  color: ${(props) => props.theme.pallete.greyScale.grey10};
  background-color: ${(props) => props.theme.pallete.greyScale.grey1};
`;
