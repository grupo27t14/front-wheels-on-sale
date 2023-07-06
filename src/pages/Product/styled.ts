
import styled from "styled-components";

export const PageStyled = styled.main`
  width: 100vw;
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.pallete.main.brand1} 574px,
    ${(props) => props.theme.pallete.greyScale.grey8} 574px,
    ${(props) => props.theme.pallete.greyScale.grey8} 100%
  );
  color: ${(props) => props.theme.pallete.greyScale.grey1};
`;

export const PageContainer = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 4.6rem;

  position: relative;

  @media (min-width: 950px) {
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 4.6rem;
    grid-row-gap: 0px;

    .containerSticky {
      position: sticky;
      top: 20px;
      right: 0;
    }
  }
`;

export const SectionsContainer = styled.div`
  background-color: ${(props) => props.theme.pallete.greyScale.grey10};
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  padding: 3.5rem;
  gap: 3.2rem;
  margin-bottom: 2rem;

  &.container__img {
    height: 355px;
    padding: 0 12px;

    img {
      max-width: 441px;
      width: 100%;
      height: 252.96px;
      object-fit: cover;
      margin: auto;
    }
  }

  .avatarProfileBig {
    align-self: center;
  }

  .heading6 {
    ${(props) => props.theme.typography.heading6_600};
  }

  .heading7 {
    ${(props) => props.theme.typography.heading7_500};
  }

  p {
    ${(props) => props.theme.typography.body1_400};
    color: ${(props) => props.theme.pallete.greyScale.grey2};
  }

  .sellerInfos {
    margin-top: 3.2rem;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3.2rem;

    & > a {
      text-decoration: none;
      background-color: ${(props) => props.theme.pallete.greyScale.grey1};
      padding: 2.4rem 2.8rem;
      border-radius: 0.4rem;
      transition: 0.4s;
      color: ${(props) => props.theme.pallete.greyScale.grey10};
      ${(props) => props.theme.typography.button_big_text};
      &:hover {
        background-color: ${(props) => props.theme.pallete.greyScale.grey2};
      }
    }
  }
`;

export const GalleryGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;

  .imgContainer {
    cursor: pointer;
    width: 9rem;
    height: 9rem;
    background-color: ${(props) => props.theme.pallete.greyScale.grey7};
    padding: 10px;
    margin-top: 30px;
    border-radius: .4rem;

    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      max-width: 100%;
    }
  }
`;

export const CarInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 32px;

  .carInfos {
    width: 100%;
    display: flex;
    justify-content: space-between;

    & > div {
      display: flex;
      flex-direction: row;
      gap: 1.2rem;
    }
  }

  h6 {
    align-self: center;
  }
`;

export const UnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4.4rem;
`;

export const Tag = styled.span`
  text-transform: uppercase;
  ${(props) => props.theme.typography.body2_500};
  padding: 0.4rem 0.8rem;
  border-radius: 0.4rem;

  color: ${(props) => props.theme.pallete.main.brand1};
  background-color: ${(props) => props.theme.pallete.main.brand4};
`;

export const ModalImg = styled.img`
  padding-top: 4rem;
  width: 100%;
`;
