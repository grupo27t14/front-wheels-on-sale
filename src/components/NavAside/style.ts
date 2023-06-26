import styled from "styled-components";
import { theme } from "../../styles/theme";

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
    ${theme.typography.Heading4_600};

    color: ${theme.colors.grey1};
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
        ${theme.typography.Heading6_500};
        text-decoration: none;
        color: ${theme.colors.grey3};
        padding: 0 2rem;
        cursor: pointer;
        :hover {
          color: ${theme.colors.grey1};
        }
      }
    }
  }
  > button {
    all: unset;
    margin-bottom: 30px;
    color: ${theme.colors.brand1};
    font-weight: 600;
    cursor: pointer;

    :hover {
      text-decoration: underline;
      color: ${theme.colors.brand2};
    }
  }
`;
