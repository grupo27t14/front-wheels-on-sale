import styled from "styled-components";
import { theme } from "../../styles/theme";

export const RadioButtonDivStyles = styled.div`
  > {
    [type="radio"] {
      all: unset;
      position: absolute;
    }
    label {
      ${theme.typography.button_big_text}
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 48px;
      cursor: pointer;
      background-color: transparent;
      color: ${theme.colors.grey0};
      border: 1.5px solid ${theme.colors.grey4};
    }
    [type="radio"]:checked + label {
      background-color: ${theme.colors.brand1};
      color: ${theme.colors.whiteFixed};
      border: 1.5px solid ${theme.colors.brand1};
      transition: 0.3s;
    }
  }
`;
