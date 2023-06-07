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
  padding: 4rem;
  gap: 3.2rem;
  margin-bottom: 2rem;

  img {
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
  }

  .avatarProfileBig {
    align-self: center;
  }

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

  div {
    width: fit-content;
  }

  .sellerInfos {
    margin-top: 3.2rem;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3.2rem;
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

export const CarInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 32px;

  .carInfos {
    width: 100%;
    display: flex;
    justify-content: space-between;
  
  }

  h6 {
    align-self: center;
  }
`

export const Tag = styled.span`
  text-transform: uppercase;
  ${theme.typography.body2_500};
  padding: .4rem .8rem;
  border-radius: .4rem;

  color: ${theme.colors.brand1};
  background-color: ${theme.colors.brand4};
`

export const CommentsList = styled.li`
  div {
    margin-bottom: 1.2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    .commentUsername {      
      ${theme.typography.body2_500};
      color: ${theme.colors.grey1};
    }

    .commentTime {
      ${theme.typography.body2_500};
      color: ${theme.colors.grey3};
    }
  }

`

export const CommentTextarea = styled.div`
  div {
    margin-bottom: 1.2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    .commentUsername {      
      ${theme.typography.body2_500};
      color: ${theme.colors.grey1};
    }
  }
`