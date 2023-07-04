import styled from "styled-components";
 

export const PasswordStyled = styled.main`
  width: 100vw;
  height: 80vh;
  color: ${(props) => props.theme.pallete.greyScale.grey1};
  display: flex;
  justify-content: center;
  align-items: center;

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

    > p {
      ${(props) => props.theme.typography.body2_500};
      color: ${(props) => props.theme.pallete.greyScale.grey2};

      > a {
        color: ${(props) => props.theme.pallete.main.brand1};
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
