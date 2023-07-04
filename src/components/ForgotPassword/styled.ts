import styled from "styled-components";

export const FormControl = styled.section`
  width: 100%;

  > form {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const HStack = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  ${(props) => props.theme.typography.button_big_text};

  & > button {
    padding: 0;
  }
`;
