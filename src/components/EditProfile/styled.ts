import styled from "styled-components";
 

export const HStack = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  ${(props) => props.theme.typography.button_big_text}

  & > button {
    padding: 0;
  }
`;
