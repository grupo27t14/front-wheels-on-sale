import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 44px clamp(12px, 2.5%, 38px);
  width: 411px;
  height: max-content;
  margin: 3rem 1rem;

  background: ${theme.colors.grey10};
  border-radius: 4px;

  h3 {
    ${theme.typography.Heading5_500}
    color: ${theme.colors.blackFixed};
    margin-bottom: 20px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 1rem;
  }

  button {
    border-radius: 4px;
    margin: 20px 0;
  }
`;

export const ErrorMessage = styled.h5`
  all: unset;
  display: block;
  width: 100%;
  ${theme.typography.input_placeholder}
  font-size: 1.4rem;
  animation: blinding .5s forwards;
  animation-iteration-count: 2;
  transform: translateY(-6px) translateX(2px);
  @keyframes blinding {
    from {
      color: ${theme.colors.alert1};
    }
    50% {
      color: ${theme.colors.alert2};
    }
    to {
      color: ${theme.colors.alert1};
    }
  }
`;
