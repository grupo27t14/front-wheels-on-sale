import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

interface iCGS {
  bodyBackground?: string;
}

export const GlobalStyleGray = createGlobalStyle<iCGS>`
 body {
    background: ${(props) => props.theme.pallete.greyScale.grey8 };
  }
`;

export const GlobalStyle = createGlobalStyle<iCGS>`
  :root {
    font-family: 'Inter';
    font-size: 60%;
  }

  body {
    background: ${(props) => props.theme.pallete.greyScale.grey9 };   
    padding-top: 80px;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.pallete.greyScale.grey1};
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

  input[type=number] {
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: none;
    scrollbar-color: ${(props) => props.theme.pallete.main.brand1} ${(props) => props.theme.pallete.greyScale.grey5 };
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background: ${(props) => props.theme.pallete.greyScale.grey5 };
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.pallete.main.brand1};
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.pallete.greyScale.grey5 };
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: ${(props) =>
      props.bodyBackground ? "white" : props.bodyBackground};
    color: ${(props) => props.theme.pallete.greyScale.grey1};
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
  
  ul, ol, li {
    list-style: none;
  }
`;

export const StyledContainer = styled.section`
  &.container {
    width: 100%;
    margin: 0 auto;
    padding: 0 1.6rem;
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
      max-width: 1508px;
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
    color: ${(props) => props.theme.pallete.greyScale.whiteFixed};
    background-color: ${(props) => props.$bg};
    ${(props) => props.theme.typography.avatar};
  }

  &.avatarProfile {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 100%;
    color: ${(props) => props.theme.pallete.greyScale.whiteFixed};
    background-color: ${(props) => props.$bg};
    ${(props) => props.theme.typography.avatar_profile};
  }

  &.avatarProfileBig {
    width: 10.4rem;
    height: 10.4rem;
    border-radius: 100%;
    color: ${(props) => props.theme.pallete.greyScale.whiteFixed};
    background-color: ${(props) => props.$bg};
    ${(props) => props.theme.typography.avatar_big}
  }
`;
