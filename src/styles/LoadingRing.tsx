import styled from "styled-components";
interface iLRing {
  color?: string;
}

export const LoadingRing = styled.div<iLRing>`
  display: inline-block;
  width: 20px;
  height: 20px;
  :after {
    content: " ";
    margin: 0.5px auto;
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid ${(props) => (props.color ? props.color : "currentColor")};
    border-color: ${(props) => (props.color ? props.color : "currentColor")}
      transparent ${(props) => (props.color ? props.color : "currentColor")}
      transparent;
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
