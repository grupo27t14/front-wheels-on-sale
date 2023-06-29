import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const CommentsList = styled.li`
  div {
    margin-bottom: 1.2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;

    .commentUsername {
      ${theme.typography.body2_500};
      color: ${theme.colors.grey1};
    }

    .commentTime {
      ${theme.typography.body2_500};
      color: ${theme.colors.grey3};
    }

    div + div {
      svg {
        font-size: 20px;
      }
    }
  }
`;
