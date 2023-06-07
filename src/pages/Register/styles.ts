import styled from "styled-components";
import { theme } from "../../styles/theme";

export const RegisterStyled = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${theme.colors.grey8};
  color: ${theme.colors.grey1};
  display: flex;
  justify-content: center;

  h4 {
    ${theme.typography.body2_500}
    color: ${theme.colors.blackFixed};
    margin: 10px 0;
  }

  /* Estilizações do form apenas para registro */
  form {
    button {
      ${theme.typography.button_big_text}
    }

    .radio {
      [type="radio"] {
        all: unset;
        position: absolute;
      }
      label {
        ${theme.typography.button_big_text}
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 48px;
        cursor: pointer;
        background-color: transparent;
        color: ${theme.colors.grey0};
        border: 1.5px solid ${theme.colors.grey4};
      }
      [type="radio"]:checked + label {
        background-color: ${theme.colors.brand1};
        color: ${theme.colors.whiteFixed};
        border: 1.5px solid ${theme.colors.brand1};
        transition: 0.3s;
      }
    }

    > {
      label {
        ${theme.typography.input_label}
        color: ${theme.colors.grey1};
        margin: 12px 0;
      }

      textarea {
        all: unset;
        resize: none;
        box-sizing: border-box;
        height: 80px;
        width: 100%;
        padding: 12px 16px;
        gap: 10px;
        margin-top: 0.75rem;
        word-wrap: break-word;

        border: 1.5px solid ${theme.colors.grey7};
        border-radius: 4px;
        box-shadow: none;

        ::placeholder {
          ${theme.typography.input_placeholder}
          color: ${theme.colors.grey3};
          padding-top: 12px;
        }
      }
    }
  }
`;
