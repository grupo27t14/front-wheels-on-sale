import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Box = styled.div`
  width: 100%;
  height: 100%;
`;

export const VStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.3rem;
  width: 100%;
`;

export const HStack = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;

export const Title = styled.h4`
  ${theme.typography.Heading7_500};
  color: ${theme.colors.grey1};
`;

export const SubTitle = styled.h4`
  ${theme.typography.Heading7_500};
  color: ${theme.colors.grey1};
  margin-bottom: 2.5rem;
`;

export const Text = styled.p`
  ${theme.typography.body2_500};
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 128px;
  max-height: 300px;
  resize: vertical;
  padding: 20px;

  ${theme.typography.Heading7_500}
  color: ${theme.colors.grey1};
  background-color: ${theme.colors.grey10};

  border-radius: 0.4rem;
  border: 0.2rem solid ${theme.colors.grey7};

  font-family: "Inter", sans-serif;

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  ::placeholder {
    color: ${theme.colors.grey3};
  }
`;
