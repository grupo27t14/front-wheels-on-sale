import styled from "styled-components";
import { theme } from "../../styles/theme";

interface iStFormProps {
  padding?: string;
  margin?: string;
  width?: string;
}

export const StyledForm = styled.form<iStFormProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: ${(props) => (props.padding ? props.padding : "44px")}
    clamp(12px, 2.5%, 38px);
  width: ${(props) => (props.width ? props.width : "411px")};
  height: max-content;
  margin: ${(props) => (props.margin ? props.margin : "3rem")};

  background: ${theme.colors.grey10};
  border-radius: 4px;

  label {
    ${theme.typography.input_label}
    color: ${theme.colors.grey1};
  }

  h3 {
    ${theme.typography.Heading5_500}
    color: ${theme.colors.blackFixed};
    margin-bottom: 20px;
  }

  h4 {
    ${theme.typography.body2_500}
    color: ${theme.colors.blackFixed};
    margin: 10px 0;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 1rem;
  }
  .flex_end {
    justify-content: end;
  }

  button {
    border-radius: 4px;
    margin: 20px 0;
  }

  textarea {
    all: unset;
    resize: none;
    box-sizing: border-box;
    height: 80px;
    width: 100%;
    padding: 12px 16px;
    gap: 10px;
    margin-top: 0.75rem;
    word-wrap: break-word;

    border: 1.5px solid ${theme.colors.grey7};
    border-radius: 4px;
    box-shadow: none;

    ::placeholder {
      ${theme.typography.input_placeholder}
      color: ${theme.colors.grey3};
      padding-top: 12px;
    }
  }

  select {
    position: relative;
    width: 100%;
    padding: 12px 16px;
    gap: 10px;
    margin: 20px 0px;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

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
`;

export const ErrorMessage = styled.h5`
  all: unset;
  width: 100%;
  font-size: 1.4rem;
  position: absolute;
  bottom: -20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  animation: blinding 0.5s forwards;
  animation-iteration-count: 2;
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
