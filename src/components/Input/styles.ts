import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledInput = styled.fieldset`
  all: unset;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  margin: 20px 0;
  label {
    ${theme.typography.input_label}
    color: ${theme.colors.grey1};
  }
  input {
    width: 100%;
    padding: 12px 16px;
    gap: 10px;

    border: 1.5px solid ${theme.colors.grey7};
    border-radius: 4px;
    box-shadow: none;

    :focus {
      border: 1.5px solid ${theme.colors.brand2};
    }
    
    ::placeholder {
      ${theme.typography.input_placeholder}
      color: ${theme.colors.grey3};
    }
  }

  input.err {
    border: 1.5px solid ${theme.colors.alert1};
  }
`;
