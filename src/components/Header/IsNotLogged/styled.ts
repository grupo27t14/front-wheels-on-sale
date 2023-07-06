import styled from "styled-components";
 

export const UnorderedList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
  list-style: none;
  align-items: center;
  justify-content: space-between;
  padding-left: 44px;
  border-left: 2px solid ${(props) => props.theme.pallete.greyScale.grey6};
  background-color: ${(props) => props.theme.pallete.greyScale.grey10};

  @media (max-width: 768px) {
    width: 250px;
    height: 202px;
    flex-direction: column;
    position: absolute;
    top: 65px;
    right: 10px;
    z-index: 100;
    border-left: none;
    padding: 32px 12px;
    

    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 375px) {
    width: 100%;
    right: 0;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }

  & > a {
    cursor: pointer;
    width: 113px;
    height: 48px;
    display: flex;
    align-items: center;
    text-decoration: none;
    justify-content: center;
    border-radius: 4px;
    border: 2px solid transparent;
    transition: all 0.3s;

    &.header__signUp--login {
      color: ${(props) => props.theme.pallete.greyScale.grey2};
      ${(props) => props.theme.typography.body1_600};
    }

    &.header__signUp--register {
      color: ${(props) => props.theme.pallete.greyScale.grey0};
      ${(props) => props.theme.typography.button_big_text};
      border-color: ${(props) => props.theme.pallete.greyScale.grey6};
    }

    &:hover {
      color: ${(props) => props.theme.pallete.greyScale.whiteFixed};
      background-color: ${(props) => props.theme.pallete.randomColors.random4};
      border-color: ${(props) => props.theme.pallete.randomColors.random4};
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;
