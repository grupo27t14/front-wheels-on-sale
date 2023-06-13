import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ProfileContainer = styled.section`
  background-color: ${theme.colors.grey10};

  max-width: 1240px;
  width: 100%;
  margin: 6rem auto;

  border-radius: .4rem;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  gap: 2.4rem;

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
      padding: .4rem .8rem;
      color: ${theme.colors.brand1};
      background-color: ${theme.colors.brand4};
      ${theme.typography.body2_500}
    }

`

export const ProductsContainer = styled.section`
  max-width: 1480px;
  width: 100%;
  margin: 0 auto;

  padding-bottom: 4rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  .heading5 {
    ${theme.typography.Heading5_600};
  }

  .productsGrid {
    display: grid;   
    grid-template-columns: repeat(8, 1fr);
    grid-auto-rows: auto;
    grid-column-gap: 20px;
    grid-row-gap: 40px;
/* 
    overflow-x: auto; */
    max-width: 100%;

    .card {
      width: 300px;
      height: 350px;
      border-radius: .8rem;
      background-color: ${theme.colors.brand3};
    }

    @media (min-width: 700px) {    
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1030px) {    
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1300px) {    
      grid-template-columns: repeat(4, 1fr);
    }
  }
`