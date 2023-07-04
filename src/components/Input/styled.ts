import styled from "styled-components";

export const StyledInput = styled.fieldset`
  all: unset;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  margin: 20px 0;
  position: relative;

  label {
    ${(props) => props.theme.typography.input_label};
    color: ${(props) => props.theme.pallete.greyScale.grey1};
    > i {
      color:${(props) => props.theme.pallete.feedback.alert1};
    }
  }

  input {
    width: 100%;
    padding: 12px 16px;
    gap: 10px;

    border: 1.5px solid ${(props) => props.theme.pallete.greyScale.grey7};
    border-radius: 4px;
    box-shadow: none;

    :focus {
      border: 1.5px solid ${(props) => props.theme.pallete.main.brand2};
    }

    ::placeholder {
      ${(props) => props.theme.typography.input_placeholder};
      color: ${(props) => props.theme.pallete.greyScale.grey3};
    }

    :read-only {
      opacity: 50%;
    }
  }

  input.err {
    border: 1.5px solid ${(props) => props.theme.pallete.feedback.alert1};
  }
`;
