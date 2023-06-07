import styled from "styled-components";
import { theme } from "../../styles/theme";
import car from "../../../public/Photo_car.png";

export const Main = styled.main`
  width: 100%;
  min-height: calc(100vh - 80px - 140px);

  display: flex;
  flex-direction: column;

  & .main {
    width: 100%;
    display: flex;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

export const Flex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  &.main__linear--gradient {
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);

    & .main__title {
      text-align: center;
      color: ${theme.colors.whiteFixed};
      ${theme.typography.Heading2_600}
    }

    @media (max-width: 640px) {
      gap: 30px;

      & .main__title {
        display: flexbox;
        ${theme.typography.Heading5_500}
      }
    }
  }

  &.leftSide {
    flex: 1;
    margin-right: 35px;
    align-items: unset;
    padding-top: 50px;

    .main__Filtros {
      display: none;

      @media (max-width: 768px) {
        display: flex;
        cursor: pointer;
        margin: 22px auto 32px auto;
        border-radius: 3%;
        width: 279px;
      }
    }

    @media (max-width: 768px) {
      flex: unset;
      order: 2;
      padding-top: unset;
      margin-right: unset;
    }
  }

  &.rightSide {
    flex: 3;
    flex-wrap: wrap;
    padding-top: 50px;
    gap: 48px;
    align-items: unset;

    @media (max-width: 768px) {
      flex-wrap: unset;
      overflow-x: auto;
      padding-bottom: 20px;
      order: 1;
      flex: unset;
    }
  }

  &.pageButton {
    height: 30px;
    margin: 26px 0px 50px 0px;
    justify-content: center;
    gap: 40px;
    cursor: pointer;

    & svg {
      font-size: 20px;
      color: ${theme.colors.random4};
    }
  }
`;

export const HStack = styled.div`
  display: flex;
  align-items: center;
`;

export const Box = styled.div`
  width: 100%;
  height: 544px;

  &.main__car {
    background-image: url(${car});
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const Text = styled.p`
  color: ${theme.colors.random4};
  ${theme.typography.Heading6_600};
`;

export const Title = styled.h1`
  text-align: center;
  color: ${theme.colors.whiteFixed};
  ${theme.typography.Heading2_600}

  & .main__title {
    display: flexbox;
    ${theme.typography.Heading3_500}
  }
`;
