import styled from "styled-components";
import { theme } from "../../styles/theme";

export const FormControl = styled.section`
  width: 100%;

  & > form {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const Flex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const HStack = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end !important;
  gap: 1rem;

  ${theme.typography.button_big_text}

  & > button {
    width: unset;
  }
`;
