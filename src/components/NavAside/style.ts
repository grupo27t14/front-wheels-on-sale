import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledNav = styled.aside`
  position: absolute;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;

  .MainNavDiv {
    height: 95%;
    width: 100%;

    .asideButtonMobile {
      display: flex;
      border: 1px solid green;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      padding: 5px 10px;
      display: none;
      
      @media (max-width: 767px) {
        /* Mostrar apenas em dispositivos com largura máxima de 767px */
        display: flex;
        border: 1px solid green;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 5px 10px;
      }
    }

    .NavDiv {
      width: 375px;
      height: 90%;
      overflow-y: auto;
      padding: 1rem;
      margin-bottom: 20px;

      h2 {
        font-size: ${theme.typography.Heading4_600.size};
        font-weight: ${theme.typography.Heading4_600.weight};
        line-height: ${theme.typography.Heading4_600.height};
        color: ${theme.colors.grey1};
        margin-bottom: 20px;
      }

      ul {
        border: 1px solid blue;
        margin-bottom: 20px;

        li {
          a {
            text-decoration: none;
            font-size: ${theme.typography.Heading6_500.size};
            font-weight: ${theme.typography.Heading6_500.weight};
            line-height: ${theme.typography.Heading6_500.height};
            color: ${theme.colors.grey3};
            padding: 0 2rem;
          }
        }
      }

      @media (max-width: 767px) {
        /* width: 100%;
        min-width: auto; */
      }
    }

    .buttonClearSearch {
      margin: 0 auto;
    }

    .asideButton {
      display: flex;
      padding: 32px 0;
      justify-content: center;
    }

    .InputDiv {
      display: flex;
      gap: 20px;
      margin-bottom: 20px;
      height: 37px;
      border: 1px solid red;
      justify-content: center;

      input {
        border: 1px solid ${theme.colors.grey5};
        background-color: ${theme.colors.grey5};
        color: ${theme.colors.grey3};
        text-align: center;
        width: 142px;
      }
      input::placeholder {
        color: ${theme.colors.grey3};
        font-size:  ${theme.typography.Heading7_600.size};
        font-weight:  ${theme.typography.Heading7_600.weight};
        line-height:  ${theme.typography.Heading7_600.height};
      }
    }
  }
`;

