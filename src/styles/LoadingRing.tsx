import styled from "styled-components";

export const LoadingRing = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  :after {
    content: " ";
    display: block;
    width: 18px;
    height: 18px;
    margin: 1px;
    border-radius: 50%;
    border: 2px solid var(--main-1);
    border-color: var(--main-1) transparent var(--main-1) transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export function Load() {
  return <LoadingRing />;
}
