import styled from "styled-components";
import { theme } from "../../styles/theme";

export const RegisterStyled = styled.main`
  width: 100vw;
  color: ${theme.colors.grey1};
  display: flex;
  justify-content: center;

  /* Estilizações do form apenas para registro */
  form {
    button {
      ${theme.typography.button_big_text}
    }

    > {
      label {
        ${theme.typography.input_label}
        color: ${theme.colors.grey1};
        margin: 12px 0;
      }
    }
  }
`;
