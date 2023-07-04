
import styled from "styled-components";

export const StyledNav = styled.aside`
  width: 100%;

  .asideButtonMobile {
    width: 100%;
    display: none;
    align-items: center;
    justify-content: space-between;
    padding: 18px 0px;
    margin-bottom: 12px;

    @media (max-width: 768px) {
      display: flex;
    }
  }

  .navDiv {
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .buttonClearSearch {
    margin: 22px auto 32px auto;
    border-radius: 3%;
    width: 279px;
  }
`;

export const StyledKeySection = styled.div`
  h2 {
    ${(props) => props.theme.typography.heading4_600};

    color: ${(props) => props.theme.pallete.greyScale.grey1};
    margin-bottom: 20px;
    width: 100%;
  }

  ul {
    margin-bottom: 20px;
    max-height: 125px;
    overflow-y: hidden;
    transition: 1s;

    &.show {
      max-height: unset;
    }

    li {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      button {
        all: unset;
        ${(props) => props.theme.typography.heading6_500};
        text-decoration: none;
        color: ${(props) => props.theme.pallete.greyScale.grey3};
        padding: 0 1rem;
        cursor: pointer;
        :hover {
          color: ${(props) => props.theme.pallete.greyScale.grey1};
        }
      }
    }
  }
  > button {
    all: unset;
    margin-bottom: 30px;
    color: ${(props) => props.theme.pallete.main.brand1};
    font-weight: 600;
    cursor: pointer;

    :hover {
      text-decoration: underline;
      color: ${(props) => props.theme.pallete.main.brand2};
    }
  }
`;
