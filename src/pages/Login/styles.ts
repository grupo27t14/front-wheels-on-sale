import styled from "styled-components";
import { theme } from "../../styles/theme";

export const LoginStyled = styled.main`
  width: 100vw;
  min-height: calc(100vh - 140px - 80px);
  color: ${theme.colors.grey1};
  display: flex;
  justify-content: center;

  /* Estilizações apenas para login */
  form {
    > {
      .toRegister {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
        background: transparent;
        width: 100%;
        height: 50px;
        margin: 20px 0;
        border: 1.5px solid ${theme.colors.grey4};
        border-radius: 4px;
        color: ${theme.colors.grey0};
        text-decoration: none;
        cursor: pointer;
        transition: 0.4s;
        &:hover {
          background: transparent;
          border: 1px solid ${theme.colors.grey2};
          color: ${theme.colors.grey0};
        }
      }
      span {
        ${theme.typography.body2_400}
        color: ${theme.colors.grey2};
        display: block;
        text-align: center;
        width: 100%;
        margin: 8px 0;
      }
    }
  }
`;
