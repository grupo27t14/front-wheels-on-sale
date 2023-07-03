import styled from "styled-components";
import { theme } from "../../styles/theme";
import car from "/Photo_car.png";

export const Main = styled.main`
  width: 100%;
  min-height: calc(100vh - 80px - 140px);

  display: flex;
  flex-direction: column;

  & .main {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;

  &.main__linear--gradient {
    width: 100%;
    height: 100%;
    flex-direction: column;
    padding-top: 150px;
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
    height: 100%;
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
      order: 2;
      padding-top: unset;
      margin-right: unset;
    }
  }

  &.pageButton {
    height: 30px;
    margin: 26px 0px 50px 0px;
    justify-content: center;
    gap: 40px;

    > button {
      all: unset;
      color: ${theme.colors.random4};
      ${theme.typography.Heading6_600};
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 4px;
      cursor: pointer;
      :hover {
        color: ${theme.colors.random5};
        transition: 0.3s;
      }
    }

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

export const UnorderedList = styled.ul`
  display: flex;
  padding-top: 50px;

  &.rightSide {
    height: 100%;
    width: 100%;
    max-width: 1032px;
    flex-wrap: wrap;
    gap: 48px;

    @media (max-width: 1402px) {
      gap: 12px;
      justify-content: space-between;
    }

    @media (max-width: 1023px) {
      justify-content: center;
    }

    @media (max-width: 768px) {
      max-width: 100%;
      flex-wrap: unset;
      overflow-x: auto;
      justify-content: unset;
      padding-bottom: 20px;
      order: 1;
    }
  }
`;

export const ListItem = styled.li``;

export const Text = styled.p`
  color: ${theme.colors.random4};
  ${theme.typography.Heading6_600};
`;

export const pagButton = styled.button``;

export const Title = styled.h1`
  text-align: center;
  color: ${theme.colors.whiteFixed};
  ${theme.typography.Heading2_600}

  & .main__title {
    display: flexbox;
    ${theme.typography.Heading3_500}
  }
`;
