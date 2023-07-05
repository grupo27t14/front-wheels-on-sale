import styled from "styled-components";

export const StyledPaginationButtons = styled.div`
  height: 30px;
  margin: 26px 0px 50px 0px;
  justify-content: center;
  gap: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > button {
    all: unset;
    color: ${(props) => props.theme.pallete.randomColors.random4};
    ${(props) => props.theme.typography.heading6_600};
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    :hover {
      color: ${(props) => props.theme.pallete.randomColors.random5};
      transition: 0.3s;
    }
  }

  & svg {
    font-size: 20px;
    color: ${(props) => props.theme.pallete.randomColors.random4};
  }
`;
