import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const CommentArea = styled.div`
  max-width: 100%;
  margin-top: 4rem;

  div {
    margin-bottom: 1.2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    .commentUsername {
      ${theme.typography.body2_500};
      color: ${theme.colors.grey1};
    }
  }

  .textContainer {
    width: 100%;
    position: relative;
  }

  textarea {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    resize: none;
    width: 100%;

    padding: 2rem;

    border-radius: 0.4rem;
    border: 0.2rem solid ${theme.colors.grey7};
    background-color: ${theme.colors.grey10};
    outline: none;
    color: ${theme.colors.grey2};
    ${theme.typography.Heading7_500}

    font-family: 'Inter', sans-serif;
  }

  button {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
  }
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

export const Box = styled.div`
  width: 100%;
  height: 100%;
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