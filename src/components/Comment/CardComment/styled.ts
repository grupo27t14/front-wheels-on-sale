import styled from "styled-components";

export const CommentsList = styled.li`
  div {
    margin-bottom: 1.2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;

    .commentUsername {
      ${(props) => props.theme.typography.body2_500};
      color: ${(props) => props.theme.pallete.greyScale.grey3};
    }

    .commentTime {
      ${(props) => props.theme.typography.body2_500};
      color: ${(props) => props.theme.pallete.greyScale.grey3};
    }

    div + div {
      svg {
        font-size: 20px;
      }
    }
  }
`;
