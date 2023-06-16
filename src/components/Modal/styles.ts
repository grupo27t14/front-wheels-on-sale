import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  >div>button {
    all: unset;
    cursor: pointer;
    position: absolute;
    top: 16px;
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

  > div {
    background: ${theme.colors.whiteFixed};
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

    padding: 20px;
    width: 80%;
    max-width: 500px;
    height: 90vh;

    color: ${theme.colors.grey1};

    position: relative;
    /* top: 12rem; */
    margin: 3rem auto;
    overflow-y: scroll;
  }
`;
