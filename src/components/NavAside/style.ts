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
    /* overflow-y: auto; */

    @media (max-width: 768px) {
      width: 100%;
    }

    h2 {
      ${theme.typography.Heading4_600};

      color: ${theme.colors.grey1};
      margin-bottom: 20px;
      width: 100%;
    }

    ul {
      margin-bottom: 20px;
      overflow-y: hidden;

      &.overflow {
        height: 100%;
        overflow-y: none;
      }

      li {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        button {
          background: none;
          border: none;
          padding: 0;
          ${theme.typography.Heading6_500};
          text-decoration: none;
          color: ${theme.colors.grey3};
          padding: 0 2rem;
        }
      }
    }

    .showextras {
      height: auto;
      border: none;
      background: none;
      margin-bottom: 30px;
      padding: 0 2rem;
      color: ${theme.colors.brand1};
      font-weight: 600;

      :hover {
        text-decoration: underline;
      }
    }
  }
  .buttonClearSearch {
    margin: 22px auto 32px auto;
    border-radius: 3%;
    width: 279px;
  }
`;

