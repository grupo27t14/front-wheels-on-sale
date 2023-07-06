import styled, { css } from "styled-components";

export type buttonProps = {
  buttonsize?: string;
  buttonstyle?: string;
};

export const StyledButton = styled.button<buttonProps>`
  display: flex;
  font-family: "Inter", sans-serif;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  transition: 0.4s;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${({ buttonsize }: buttonProps) => {
    switch (buttonsize) {
      case "big":
        return css`
          ${(props) => props.theme.typography.button_big_text};
          padding: 12px 28px;
          width: 146px;
          height: 48px;
        `;
      case "medium":
        return css`
          ${(props) => props.theme.typography.button_medium_text};
          padding: 12px 20px;
          width: 119px;
          height: 38px;
        `;
      case "fit":
        return css`
          ${(props) => props.theme.typography.button_big_text};
          padding: 12px 28px;
          width: fit-content;
          height: 48px;
        `;
      case "default":
        return css`
          ${(props) => props.theme.typography.button_big_text};
        `;
      case "form":
        return css`
          ${(props) => props.theme.typography.button_big_text};
          padding: 12px 28px;
          width: 193px;
          height: 48px;
        `;
        
      case "icon":
        return css`
          ${(props) => props.theme.typography.button_big_text};
          padding: 12px 20px;
          height: 48px;
        `;
      default:
        return css`
          padding: 0px 22px;
          height: 50px;
          width: 100%;
          border: none;
          border-radius: 30px;
        `;
    }
  }};

  ${({ buttonstyle }: buttonProps) => {
    switch (buttonstyle) {
      case "grey":
        return css`
          background: ${(props) => props.theme.pallete.greyScale.grey0};
          border: 1.5px solid ${(props) => props.theme.pallete.greyScale.grey0};
          color: ${(props) => props.theme.pallete.greyScale.grey10};
          &:hover {
            background-color: ${(props) => props.theme.pallete.greyScale.grey1};
            color: ${(props) => props.theme.pallete.greyScale.grey10};
          }
        `;
      case "negative":
        return css`
          background: ${(props) => props.theme.pallete.greyScale.grey6};
          color: ${(props) => props.theme.pallete.greyScale.grey2};
          border: 1.5px solid ${(props) => props.theme.pallete.greyScale.grey6};
          &:hover {
            background-color: ${(props) => props.theme.pallete.greyScale.grey5};
            border: 1px solid ${(props) => props.theme.pallete.greyScale.grey5};
            color: ${(props) => props.theme.pallete.greyScale.grey2};
          }
          &:disabled {
            background-color: ${(props) => props.theme.pallete.greyScale.grey5};
            border: 1px solid ${(props) => props.theme.pallete.greyScale.grey5};
            color: ${(props) => props.theme.pallete.greyScale.grey10};
          }
        `;
      case "comment_btn":
        return css`
          background: ${(props) => props.theme.pallete.greyScale.grey5};
          color: ${(props) => props.theme.pallete.greyScale.grey10};
          border: 1.5px solid ${(props) => props.theme.pallete.greyScale.grey6};
        `;

      case "comment_delete_btn":
        return css`
          background: transparent;
          color: ${(props) => props.theme.pallete.greyScale.grey4};
          border: none;
          &:hover {
            color: ${(props) => props.theme.pallete.feedback.alert1};
          }
        `;

      case "comment_edit_btn":
        return css`
          background: transparent;
          color: ${(props) => props.theme.pallete.greyScale.grey4};
          border: none;
          &:hover {
            color: ${(props) => props.theme.pallete.feedback.sucess1};
          }
        `;
      case "brand1":
        return css`
          background: ${(props) => props.theme.pallete.main.brand1};
          color: ${(props) => props.theme.pallete.greyScale.grey10};
          border: 1px solid ${(props) => props.theme.pallete.main.brand1};
          &:hover {
            background-color: ${(props) => props.theme.pallete.main.brand2};
            color: ${(props) => props.theme.pallete.greyScale.grey10};
            border: 1px solid ${(props) => props.theme.pallete.main.brand2};
          }
          &:disabled {
            background-color: ${(props) => props.theme.pallete.main.brand3};
            color: ${(props) => props.theme.pallete.main.brand4};
            border: 1px solid ${(props) => props.theme.pallete.main.brand3};
          }
        `;
      case "brandopacity":
        return css`
          background: ${(props) => props.theme.pallete.main.brand4};
          color: ${(props) => props.theme.pallete.main.brand1};
          border: 1px solid ${(props) => props.theme.pallete.main.brand4};
          &:hover {
            background: ${(props) => props.theme.pallete.main.brand4};
            color: ${(props) => props.theme.pallete.main.brand1};
            border: 1px solid ${(props) => props.theme.pallete.main.brand4};
          }
        `;
      case "light":
        return css`
          background: ${(props) => props.theme.pallete.greyScale.grey10};
          color: ${(props) => props.theme.pallete.greyScale.grey1};
          border: 1px solid ${(props) => props.theme.pallete.greyScale.grey10};
          &:hover {
            background: ${(props) => props.theme.pallete.greyScale.grey8};
            color: ${(props) => props.theme.pallete.greyScale.grey1};
            border: 1px solid ${(props) => props.theme.pallete.greyScale.grey8};
          }
        `;
      case "alert":
        return css`
          background: ${(props) => props.theme.pallete.feedback.alert3};
          color: ${(props) => props.theme.pallete.feedback.alert1};
          border: 1px solid ${(props) => props.theme.pallete.feedback.alert3};
          &:hover {
            background: ${(props) => props.theme.pallete.feedback.alert2};
            color: ${(props) => props.theme.pallete.feedback.alert1};
            border: 1px solid ${(props) => props.theme.pallete.feedback.alert2};
          }
        `;
      case "sucess":
        return css`
          background: ${(props) => props.theme.pallete.feedback.sucess3};
          color: ${(props) => props.theme.pallete.feedback.sucess1};
          border: 1px solid ${(props) => props.theme.pallete.feedback.sucess3};
          &:hover {
            background: ${(props) => props.theme.pallete.feedback.sucess2};
            color: ${(props) => props.theme.pallete.feedback.sucess1};
            border: 1px solid ${(props) => props.theme.pallete.feedback.sucess2};
          }
        `;
      case "input_button":
        return css`
          background: transparent;
          color: ${(props) => props.theme.pallete.greyScale.grey0};
          border: 1px solid ${(props) => props.theme.pallete.greyScale.grey0};
          &:hover {
            background: transparent;
            color: ${(props) => props.theme.pallete.greyScale.grey0};
            border: 1px solid ${(props) => props.theme.pallete.greyScale.grey0};
          }
        `;
      case "outline_brand":
        return css`
          background: transparent;
          color: ${(props) => props.theme.pallete.main.brand1};
          border: 2px solid ${(props) => props.theme.pallete.main.brand1};
          &:hover {
            background: ${(props) => props.theme.pallete.main.brand4};
          }
        `;

      case "forgot_password_btn":
        return css`
          width: unset;
          height: unset;
          padding: 0 !important;
          margin: 0 !important;

          ${(props) => props.theme.typography.body2_500};
          color: ${(props) => props.theme.pallete.greyScale.grey2};
          background: transparent;
          border: 2px solid transparent;
          align-self: flex-end;

          &:hover {
            color: ${(props) => props.theme.pallete.main.brand1};
            text-decoration: underline;
          }
        `;
      default:
        return;
    }
  }};
`;
