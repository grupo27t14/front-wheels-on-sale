import styled from "styled-components";
 

export const Header = styled.header`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.pallete.greyScale.grey10};
  border-bottom: 2px solid ${(props) => props.theme.pallete.greyScale.grey6};
  z-index: 999;

  & .header {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
`;

export const Box = styled.div``;

export const Img = styled.img`
  max-width: 100%;
  width: 160px;
`;

export const Nav = styled.nav`
  width: 313px;
  height: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: end;
  background-color: ${(props) => props.theme.pallete.greyScale.grey10};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  border: 0.1rem solid transparent;
  background-color: transparent;
  cursor: pointer;

  & > svg {
    font-size: 21px;
  }

  &:hover {
    background-color: ${(props) => props.theme.pallete.randomColors.random4};
    & > svg {
      color: ${(props) => props.theme.pallete.greyScale.grey10};
    }
  }
`;
