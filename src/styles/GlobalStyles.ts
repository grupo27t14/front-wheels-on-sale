import { createGlobalStyle } from "styled-components";
import { Reset } from "./reset";
import { theme } from "./theme";

//precisamos definir uma fonte

export const GlobalStyle = createGlobalStyle`
 ${Reset};
:root {
  font-family: 'Times New Roman', Times, serif;
  font-size: 60%;
}

@media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: ${theme.colors.grey0};
    color: ${theme.colors.grey10};
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;

