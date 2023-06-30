import styled from "styled-components";
import { theme } from "../../styles/theme";

export const AboutUsMain = styled.main`
  width: 100%;
  min-height: calc(100vh - 80px - 140px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .about__title {
    padding: 2rem;
    ${theme.typography.Heading1_700}
    color: ${theme.colors.grey2};
  }

  .about__text {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 80%;
    text-align: start;
    text-justify: auto;
    ${theme.typography.Heading7_500}
    color: ${theme.colors.grey3};
  }

  .userAvatar {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .userImg {
    width: 90px;
    height: auto;
    border-radius: 50%;
  }

  .pato {
    animation: puffInCenter 1s ease-in-out;
  }

  .DevsMainCards {
    display: flex;
    gap: 2rem;
  }

  @keyframes puffInCenter {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .card {
    position: relative;

    width: 220px;
    height: 220px;

    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    background-color: ${theme.colors.grey8};
    border-radius: 30%;
    margin-bottom: 16px;
    box-shadow: 0 0 10px rgba(0, 0, 255, 0.3);
  }

  .card h4 {
    text-align: center;
    color: transparent;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    transform: translateY(0);
    transition: color 0.3s ease, transform 0.3s ease;
  }

  .card:hover h4 {
    color: ${theme.colors.grey1};
    transform: translateY(-100%);
    transition: color 0.3s ease, transform 0.3s ease;
  }

  .card ul {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .card ul li {
    transition: transform 0.3s ease;
  }

  .card ul li:hover {
    transform: scale(1.1);
  }

  .card ul li a {
    color: ${theme.colors.brand1};
    text-decoration: none;
    font-size: 2rem;
  }

  .card ul li a:hover {
    text-decoration: none;
  }
`;

