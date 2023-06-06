import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ProductPageStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, ${theme.colors.brand1} 31.25%, ${theme.colors.grey8} 31.26%, ${theme.colors.grey8} 100%);
  color: ${theme.colors.grey1};
  margin: 0;
  padding: 1.2rem;
`;


export const PageContainer = styled.div`
  padding-top: 40px;
  width: 123rem;
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 4.6rem;

  @media (min-width: 950px) {
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 4.6rem;
    grid-row-gap: 0px;
  }
`

export const SectionsContainer = styled.div`
  background-color: ${theme.colors.grey10};
  border-radius: .4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;

  img {
    max-width: 100%;
  }

  h6 {
    align-self: baseline;
    font-size: ${theme.typography.Heading6_600.size};
    font-weight: ${theme.typography.Heading6_600.weight};
    line-height: ${theme.typography.Heading6_600.height};
  }

  div {
    width: fit-content;
  }
`

export const GalleryGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;

  .imgContainer {
    width: 9rem;
    height: 9rem;
    background-color: ${theme.colors.grey7};
    padding: 10px;
    margin-top: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      max-width: 100%;
    }
  }
`