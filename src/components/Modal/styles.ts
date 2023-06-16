import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  .closeButton {
    position: absolute;
    top: 22px;
    right: 30px;
    padding: 5px;
  }

  > div {
    background: ${theme.colors.whiteFixed};
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

    padding: 20px;
    width: 80%;
    max-width: 500px;

    color: ${theme.colors.grey1};

    position: absolute;
    top: 8rem;
    margin: 0 auto;
  }
`;

