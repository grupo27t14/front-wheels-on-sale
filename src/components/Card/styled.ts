import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Section = styled.div`
  max-width: 31.2rem;
  min-width: 31.2rem;
  max-height: 42rem;
  min-height: 42rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  @media (max-width: 320px) {
    max-width: 30.2rem;
    min-width: 30.2rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;

  &.cardInfo__advertiser {
    gap: 0.8rem;
  }
  &.cardInfo__tags {
    gap: 0.8rem;
  }
`;

export const VStack = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Box = styled.div`
  &.cardImg {
    height: 15.2rem;
    position: relative;

    & > svg {
      width: 1.6rem;
      height: 2.7rem;
      position: absolute;
      top: -1.9rem;
      right: 0.4rem;

      background-color: ${theme.colors.random7};
      border-radius: 0.2rem;
      border: 0.2rem solid ${theme.colors.currencyDollar};
      z-index: 10;
    }
  }

  &.cardInfo {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  &.cardInfo__tags--bag {
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
  &.cardInfo__text {
    color: ${theme.colors.grey2};
    ${theme.typography.body2_400};

    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }

  &.cardInfo__text--Name {
    color: ${theme.colors.grey1};
    font-size: ${theme.typography.body2_500};
  }

  &.cardInfo__price {
    color: ${theme.colors.grey1};
    ${theme.typography.Heading7_500};
  }
`;
