import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Section = styled.div`
  max-width: 312px;
  min-width: 312px;
  max-height: 420px;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 320px) {
    max-width: 302px;
    min-width: 302px;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;

  &.card__info--advertiser {
    gap: 0.8rem;
  }
  &.card__info--tags {
    gap: 0.8rem;
  }
`;

export const VStack = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.card__btn {
    justify-content: unset;
    gap: 16px;

    & > button {
      border-radius: 4px;
      border: 2px solid ${theme.colors.grey0};
    }
  }
`;

export const Box = styled.div`
  &.card__img {
    height: 15.2rem;
    position: relative;

    & > svg {
      width: 1.6rem;
      height: 2.7rem;
      position: absolute;
      top: -1.9rem;
      right: 0.4rem;

      color: ${theme.colors.whiteFixed};
      background-color: ${theme.colors.random7};
      border-radius: 0.2rem;
      border: 0.2rem solid ${theme.colors.currencyDollar};
      z-index: 10;
    }

    & .card__published--Active,
    & .card__published--Inactive {
      padding: 0px 8px;
      color: ${theme.colors.whiteFixed};
      ${theme.typography.body2_500}
      border-radius: 4px;
      position: absolute;
      top: 8px;
      left: 8px;
    }

    & .card__published--Active {
      background-color: ${theme.colors.brand1};
    }

    & .card__published--Inactive {
      background-color: ${theme.colors.grey4};
    }
  }

  &.card__info {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  &.card__info--subTag {
    padding: 0.4rem 0.8rem;
    border-radius: 0.4rem;
    color: ${theme.colors.brand1};
    background-color: ${theme.colors.brand4};
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.grey7};
  object-fit: cover;
`;

export const Title = styled.h3`
  color: ${theme.colors.grey1};
  font-family: "Lexend";
  ${theme.typography.Heading7_600};
`;

export const Text = styled.p`
  &.card__info--text {
    color: ${theme.colors.grey2};
    ${theme.typography.body2_400};

    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }

  &.card__info--name {
    color: ${theme.colors.grey1};
    font-size: ${theme.typography.body2_500};
  }

  &.card__info--price {
    color: ${theme.colors.grey1};
    ${theme.typography.Heading7_500};
  }
`;
