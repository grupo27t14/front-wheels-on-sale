import styled, { keyframes } from "styled-components";
import { theme } from "../../../styles/theme";

export const VStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.3rem;
  width: 100%;

  .column {
    gap: 0.5rem;
  }
`;

export const HStack = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.8rem;
`;

export const Box = styled.div`
  width: 100%;
  height: 100%;
`;

export const Title = styled.h4`
  ${theme.typography.Heading7_500};
  color: ${theme.colors.grey1};
`;

export const Subtitulo = styled.h4`
  ${theme.typography.Heading7_500};
  color: ${theme.colors.grey1};
  margin-bottom: 2.5rem;
`;

export const Text = styled.p`
  ${theme.typography.body2_500};
`;

const count = keyframes`

  100% {
    width: 0%;
  } 
`;

export const Span = styled.span<{ $visible?: string; $bg?: string }>`
  width: 100%;
  height: 2px;
  display: ${(props) => (props.$visible === "sim" ? props.$visible : "none")};
  background-color: ${(props) => (props.$bg ? props.$bg : "transparent")};
  animation: ${count} 10s linear;
`;
