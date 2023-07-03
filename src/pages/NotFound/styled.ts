import styled from "styled-components";

export const ContainerNotFound = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

export const DivImage = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-size: 200px;
    font-weight: 700;
  }
  img {
    width: 300px;
  }

  &:hover {
    cursor: default;
    h1 {
      font-size: 215px;
    }
    img {
      width: 315px;
    }
  }
`;

export const DivText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  h2 {
    font-size: 30px;
    font-weight: 700;
  }

  p {
    font-size: 25px;
    font-weight: 400;
  }
`;
