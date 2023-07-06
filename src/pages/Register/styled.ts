import styled from "styled-components";
 

export const RegisterStyled = styled.main`
  width: 100vw;
  color: ${(props) => props.theme.pallete.greyScale.grey1};
  display: flex;
  justify-content: center;

  /* Estilizações do form apenas para registro */
  form {
    button {
      ${(props) => props.theme.typography.button_big_text}
    }

    > {
      label {
        ${(props) => props.theme.typography.input_label}
        color: ${(props) => props.theme.pallete.greyScale.grey1};
        margin: 12px 0;
      }
    }
  }
`;
