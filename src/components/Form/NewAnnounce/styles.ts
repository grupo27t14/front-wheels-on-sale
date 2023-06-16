import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StyledForm = styled.form`
  position: relative;
  background: ${theme.colors.whiteFixed};
  all: unset;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  margin: 50px 0 0 0;
  label {
    ${theme.typography.input_label}
    color: ${theme.colors.grey1};
  }
  select {
    width: 100%;
    padding: 12px 16px;
    gap: 10px;

    border: 1.5px solid ${theme.colors.grey7};
    border-radius: 4px;
    box-shadow: none;
    margin-bottom: 24px;

    :focus {
      border: 1.5px solid ${theme.colors.brand2};
    }

    ::placeholder {
      ${theme.typography.input_placeholder}
      color: ${theme.colors.grey3};
    }
  }

  h2 {
    position: absolute;
    top: 26px;
    ${theme.typography.Heading7_500}
  }

  h3 {
    ${theme.typography.body2_500}
    margin-bottom: 24px;
  }

  textarea {
    /* width: 434px; */
    border: 1.5px solid ${theme.colors.grey7};
    border-radius: 4px;
    height: 84px;
    padding: 12px 16px;
    ${theme.typography.body1_400}
  }

  .form__about-car {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }

  .form__buttons {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    margin-top: 42px;
  }
`;

