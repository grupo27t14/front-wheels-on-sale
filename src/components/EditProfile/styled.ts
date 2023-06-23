import styled from "styled-components";
import { theme } from "../../styles/theme";

export const FormControl = styled.section`
  width: 100%;
  background-color: pink;

  & > form {
    width: 100%;
    margin: 0;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const HStack = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  ${theme.typography.button_big_text}

  & > button {
    padding: 0;
  }
`;
