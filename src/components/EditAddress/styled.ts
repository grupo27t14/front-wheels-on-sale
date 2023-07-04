import styled from "styled-components";
 

export const HStack = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end !important;
  gap: 1rem;

  ${(props) => props.theme.typography.button_big_text}

  & > button {
    width: unset;
  }
`;
