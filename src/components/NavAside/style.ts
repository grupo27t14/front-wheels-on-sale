import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledNav = styled.aside`
  width: 100%;

  .asideButtonMobile {
    /* border: 1px solid green; */

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
    /* border: 1px solid green; */
    overflow-y: auto;

    @media (max-width: 768px) {
      width: 100%;
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

    .inputDiv {
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
    margin: 22px auto 32px auto;
    border-radius: 3%;
    width: 279px;
  }
`;
