import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Main = styled.main`
  width: 100vw;
  min-height: calc(100vh - 80px - 140px);
  height: 100%;
  background: linear-gradient(
    180deg,
    ${theme.colors.brand1} 277px,
    ${theme.colors.grey8} 277px,
    ${theme.colors.grey8} 100%
  );

  .main {
    height: 100%;
    padding-top: 7.5rem;
  }
`;

export const ProfileContainer = styled.section`
  background-color: ${theme.colors.grey10};

  max-width: 1240px;
  max-height: 406px;
  width: 100%;
  height: 100%;
  margin: 0rem auto;

  border-radius: 0.4rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 4.4rem 7rem 4.1rem 4.1rem;

  .heading6 {
    ${theme.typography.Heading6_600};
  }

  .heading7 {
    ${theme.typography.Heading7_500};
  }

  p {
    ${theme.typography.body1_400};
    color: ${theme.colors.grey2};
  }

  .profileName {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }

  .sellerTag {
    padding: 0.4rem 0.8rem;
    color: ${theme.colors.brand1};
    background-color: ${theme.colors.brand4};
    ${theme.typography.body2_500}
  }
`;

export const ProductsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6.5rem;

  padding-top: 7.4rem;

  .heading5 {
    ${theme.typography.Heading5_600};
  }

  .productsGrid {
    max-width: 1392px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(312px, 1fr));
    gap: 1.2rem;
    margin: 0 auto;

    @media (max-width: 768px) {
      display: flex;
      overflow-x: auto;
    }
  }

  .productsGrid__item {
    margin-bottom: 6.3rem;

    @media (max-width: 768px) {
      margin-bottom: unset;
    }
  }
`;
