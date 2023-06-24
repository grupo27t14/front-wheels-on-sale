import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StyledInputsAside = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    ${theme.typography.Heading4_600};

    color: ${theme.colors.grey1};
    margin-bottom: 20px;
    width: 100%;
  }

  .flex {
    display: flex;
  }

  .none {
    display: none;
  }

  button {
    all: unset;
    width: max-content;
    cursor: pointer;
    font-weight: 500;
    color: black;
    :hover {
      color: gray;
    }
  }

  > div {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    height: 37px;
    justify-content: center;
    width: 100%;

    input {
      margin-bottom: 20px;
      padding: 20px 0;
      border-radius: 4px;
      border: 1px solid ${theme.colors.grey5};
      background-color: ${theme.colors.grey5};
      color: ${theme.colors.blackFixed};
      text-align: center;
      width: 142px;
    }
    input::placeholder {
      ${theme.typography.Heading7_600};
      color: ${theme.colors.grey3};
    }
  }
`;
