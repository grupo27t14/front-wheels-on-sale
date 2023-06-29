import styled from "styled-components";
import { theme } from "../../styles/theme";

export const HStack = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  ${theme.typography.button_big_text}

  & > button {
    padding: 0;
  }

  & > button:nth-child(1) {
    width: 60%;
  }
`;
