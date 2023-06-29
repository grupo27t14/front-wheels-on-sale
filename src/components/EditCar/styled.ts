import styled from "styled-components";
import { theme } from "../../styles/theme";

export const HStack = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  ${theme.typography.button_big_text}

  & > button {
    padding: 0;
  }

  & > button:nth-child(1) {
    width: 60%;
  }
`;

export const EditCarImages = styled.ul`
  display: flex;
  margin: 1rem 0;
  gap: 1rem;
  overflow-y: auto;
  max-width: 100%;

  > div {
    position: relative;
    margin-bottom: 8px;
    > button {
      all: unset;
      position: absolute;
      top: 4px;
      right: 4px;
      border: 1px solid white;
      border-radius: 50%;
      background-color: black;
      color: white;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 18px;
    }
    > img {
      width: 120px;
      height: 120px;
      border-radius: 8px;
      object-fit: cover;
    }
  }
`;
