import styled from "styled-components";

export const AnimatedStyle = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  .logo {
    position: absolute;
    width: 60px;
    height: 60px;
    background: url(aboutus.png);
    background-size: cover;
    border-radius: 50%;
    /* filter: brightness(1.5) contrast(1.5); */
  }

  .text {
    position: absolute;
    width: 100%;
    height: 100%;
    animation: rotateText 10s linear infinite;
    color: white;
  }

  @keyframes rotateText {
    0% {
      transform: rotate(-360deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  .text span {
    position: absolute;
    left: 50%;
    font-size: 1rem;
    transform-origin: 0 40px;
  }
`;

