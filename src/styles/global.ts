import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { theme } from "./theme";

interface iCGS {
  bodyBackground?: string;
}

export const GlobalStyleGray = createGlobalStyle<iCGS>`
 body {
    background: ${theme.colors.grey8};
  }
`;

export const GlobalStyle = createGlobalStyle<iCGS>`
:root {
  font-family: 'Inter';
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
    background: ${(props) =>
      props.bodyBackground ? "white" : props.bodyBackground};
    color: ${theme.colors.grey1};
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-family: "Lexend" sans-serif;
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;

export const StyledContainer = styled.section`
  &.container {
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
  }

  @media (min-width: 475px) {
    &.container {
      max-width: 475px;
    }
  }

  @media (min-width: 640px) {
    &.container {
      max-width: 640px;
    }
  }

  @media (min-width: 768px) {
    &.container {
      max-width: 768px;
    }
  }

  @media (min-width: 1024px) {
    &.container {
      max-width: 1024px;
    }
  }

  @media (min-width: 1280px) {
    &.container {
      max-width: 1280px;
    }
  }

  @media (min-width: 1536px) {
    .container {
      max-width: 1536px;
    }
  }
`;

export const Avatar = styled.span<{ $bg?: string }>`
  display: flexbox;
  justify-content: center;
  align-items: center;

  &.avatar {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 100%;
    color: ${theme.colors.whiteFixed};
    background-color: ${(props) => props.$bg};
    ${theme.typography.body2_500["font-size"]};
    ${theme.typography.body2_500["font-weight"]};
  }

  &.avatarProfile {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 100%;
    color: ${theme.colors.whiteFixed};
    background-color: ${(props) => props.$bg};
    ${theme.typography.avatar};
  }

  &.avatarProfileBig {
    width: 10.4rem;
    height: 10.4rem;
    border-radius: 100%;
    color: ${theme.colors.whiteFixed};
    background-color: ${(props) => props.$bg};
    ${theme.typography.avatar_big["font-size"]};
    ${theme.typography.avatar_big["font-weight"]};
  }
`;
