import styled, { css } from "styled-components";
import { theme } from "./theme";

export type buttonProps = {
  buttonsize?: string;
  buttonstyle?: string;
};

export const StyledButton = styled.button<buttonProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  transition: 0.4s;
  cursor: pointer;

  ${({ buttonsize }: buttonProps) => {
    switch (buttonsize) {
      case "big":
        return css`
          padding: 12px 28px;
          width: 146px;
          height: 48px;
          font-size: ${theme.typography.button_big_text.size};
          font-weight: ${theme.typography.button_big_text.weight};
          line-height: ${theme.typography.button_big_text.height};
        `;
      case "medium":
        return css`
          padding: 12px 20px;
          width: 119px;
          height: 38px;
          font-size: ${theme.typography.button_medium_text.size};
          font-weight: ${theme.typography.button_medium_text.weight};
          line-height: ${theme.typography.button_medium_text.height};
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
          background: ${theme.colors.grey0};
          border: 1.5px solid ${theme.colors.grey0};
          color: ${theme.colors.whiteFixed};
          &:hover {
            background-color: ${theme.colors.grey1};
            color: ${theme.colors.whiteFixed};
          }
        `;
      case "negative":
        return css`
          background: ${theme.colors.grey6};
          color: ${theme.colors.grey2};
          border: 1.5px solid ${theme.colors.grey6};
          &:hover {
            background-color: ${theme.colors.grey5};
            border: 1px solid ${theme.colors.grey5};
            color: ${theme.colors.grey2};
          }
          &:disabled {
            background-color: ${theme.colors.grey5};
            border: 1px solid ${theme.colors.grey5};
            color: ${theme.colors.whiteFixed};
          }
        `;
      case "brand1":
        return css`
          background: ${theme.colors.brand1};
          color: ${theme.colors.whiteFixed};
          border: 1px solid ${theme.colors.brand1};
          &:hover {
            background-color: ${theme.colors.brand2};
            color: ${theme.colors.whiteFixed};
            border: 1px solid ${theme.colors.brand2};
          }
          &:disabled {
            background-color: ${theme.colors.brand3};
            color: ${theme.colors.brand4};
            border: 1px solid ${theme.colors.brand3};
          }
        `;
      case "brandopacity":
        return css`
          background: ${theme.colors.brand4};
          color: ${theme.colors.brand1};
          border: 1px solid ${theme.colors.brand4};
          &:hover {
            background: ${theme.colors.brand4};
            color: ${theme.colors.brand1};
            border: 1px solid ${theme.colors.brand4};
          }
        `;
      case "light":
        return css`
          background: ${theme.colors.grey10};
          color: ${theme.colors.grey1};
          border: 1px solid ${theme.colors.grey10};
          &:hover {
            background: ${theme.colors.grey8};
            color: ${theme.colors.grey1};
            border: 1px solid ${theme.colors.grey8};
          }
        `;
      case "alert":
        return css`
          background: ${theme.colors.alert3};
          color: ${theme.colors.alert1};
          border: 1px solid ${theme.colors.alert3};
          &:hover {
            background: ${theme.colors.alert2};
            color: ${theme.colors.alert1};
            border: 1px solid ${theme.colors.alert2};
          }
        `;
      case "sucess":
        return css`
          background: ${theme.colors.sucess3};
          color: ${theme.colors.sucess1};
          border: 1px solid ${theme.colors.sucess3};
          &:hover {
            background: ${theme.colors.sucess2};
            color: ${theme.colors.sucess1};
            border: 1px solid ${theme.colors.sucess2};
          }
        `;
      default:
        return;
    }
  }};
`;
