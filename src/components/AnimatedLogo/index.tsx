import { useEffect } from "react";
import { AnimatedStyle } from "./styled";

const AnimatedLogo = () => {
  useEffect(() => {
    const text = document.querySelector(".text p") as HTMLElement;
    if (text) {
      const letters = text.innerText.split("");
      const totalLetters = letters.length;
      const radius = 25; // raio do círculo reduzido pela metade
      const angleStep = (2 * Math.PI) / totalLetters; // ângulo de rotação para cada letra

      const spans = letters.map((char, i) => {
        const angle = i * angleStep; // ângulo para essa letra específica
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return `<span style="transform: translate(${x}px, ${y}px) rotate(${angle}rad)">${char}</span>`;
      });

      text.innerHTML = spans.join("");
    }
  }, []);

  return (
    <AnimatedStyle className="circle">
      <div className="logo"></div>
      <div className="text">
        <p>DESCUBRA - MAIS - SOBRE - NÓS -</p>
      </div>
    </AnimatedStyle>
  );
};

export default AnimatedLogo;



