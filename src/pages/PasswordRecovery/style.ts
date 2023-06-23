import styled from "styled-components";
import { theme } from "../../styles/theme";

export const PasswordStyled = styled.main`
  width: 100vw;
  height: 80vh;
  color: ${theme.colors.grey1};
  display: flex;
  justify-content: center;
  align-items: center;

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

    > p {
      ${theme.typography.body2_500};
      color: ${theme.colors.grey2};

      > a {
        color: ${theme.colors.brand1};
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
