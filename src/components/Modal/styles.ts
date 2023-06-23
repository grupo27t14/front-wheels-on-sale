import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  inset: 0;

  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);

  > div {
    background: ${theme.colors.whiteFixed};
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

    padding: 20px;
    width: 100%;
    max-width: 500px;
    max-height: 90vh;

    color: ${theme.colors.grey1};

    position: relative;
    margin: 5rem auto 3rem auto;
    overflow-y: auto;

    @media (width <= 545px) {
      width: 95%;
    }
  }

  > div > button {
    all: unset;
    cursor: pointer;
    position: absolute;
    right: 16px;
    svg {
      font-size: 3rem;
      transform: scale(1);
      color: ${theme.colors.grey4};
      transition: 0.3s;
    }
    :hover svg {
      transform: scale(1.1);
      color: ${theme.colors.alert1};
    }
  }
`;
