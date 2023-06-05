import styled from "styled-components";
import { theme } from "../../styles/theme";

export const FormAddContact = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 20px;

  h1 {
    position: absolute;
    top: 22px;
    left: 30px;
    margin-bottom: 20px;
    font-size: ${theme.typography.Heading3_500.size};
  }

  div {
    margin: 40px auto;
  }
`;
