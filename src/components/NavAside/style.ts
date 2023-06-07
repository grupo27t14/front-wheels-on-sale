import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledNav = styled.aside`

  .mainNavDiv {
    .asideButtonMobile {
      /* border: 1px solid green; */

      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      padding: 5px 10px;
      display: none;

      @media (max-width: 767px) {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 5px 10px;
      }
    }
    .navDiv {
      border: 1px solid green;

      max-height: calc(100vh - 140px - 80px);
      overflow-y: auto;
      padding: 70px 30px;

      @media (max-width: 767px) {
        width: 100%;
        max-height: calc(100vh - 140px - 80px - 30px);
      }

      h2 {
        ${theme.typography.Heading4_600};

        color: ${theme.colors.grey1};
        margin-bottom: 20px;
      }

      ul {
        /* border: 1px solid blue; */

        margin-bottom: 20px;

        li {
          a {
            ${theme.typography.Heading6_500};
            text-decoration: none;
            color: ${theme.colors.grey3};
            padding: 0 2rem;
          }
        }
      }

      .InputDiv {
        /* border: 1px solid red; */

        display: flex;
        gap: 20px;
        margin-bottom: 20px;
        height: 37px;
        justify-content: center;

        input {
          border: 1px solid ${theme.colors.grey5};
          background-color: ${theme.colors.grey5};
          color: ${theme.colors.grey3};
          text-align: center;
          width: 142px;
        }
        input::placeholder {
          ${theme.typography.Heading7_600};
          color: ${theme.colors.grey3};
        }
      }
    }
    .buttonClearSearch {
      margin: 70px auto 0;
      border-radius: 3%;
      width: 279px;
    }
  }
`;

