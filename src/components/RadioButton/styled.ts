import styled from "styled-components";
 

export const RadioButtonDivStyles = styled.div`
  > {
    [type="radio"] {
      all: unset;
      position: absolute;
    }
    label {
      ${(props) => props.theme.typography.button_big_text}
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 48px;
      cursor: pointer;
      background-color: transparent;
      color: ${(props) => props.theme.pallete.greyScale.grey0};
      border: 1.5px solid ${(props) => props.theme.pallete.greyScale.grey4};
    }
    [type="radio"]:checked + label {
      background-color: ${(props) => props.theme.pallete.main.brand1};
      color: ${(props) => props.theme.pallete.greyScale.grey10};
      border: 1.5px solid ${(props) => props.theme.pallete.main.brand1};
      transition: 0.3s;
    }
  }
`;
