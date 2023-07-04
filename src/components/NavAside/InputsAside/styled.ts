
import styled from "styled-components";

export const StyledInputsAside = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    ${(props) => props.theme.typography.heading4_600};

    color: ${(props) => props.theme.pallete.greyScale.grey1};
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
    justify-content: center;
    width: 100%;

    input {
      margin-bottom: 20px;
      padding: 10px 0;
      border-radius: 4px;
      border: 1px solid ${(props) => props.theme.pallete.greyScale.grey5};
      background-color: ${(props) => props.theme.pallete.greyScale.grey5};
      color: ${(props) => props.theme.pallete.greyScale.grey1};
      text-align: center;
      width: 142px;
    }
    input::placeholder {
      ${(props) => props.theme.typography.heading7_600};
      color: ${(props) => props.theme.pallete.greyScale.grey3};
    }
  }
`;
