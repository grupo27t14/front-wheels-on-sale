import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { AboutUsMain } from "./styles";
import { BsPersonVcardFill } from "react-icons/bs";

const AboutUs = () => {
  return (
    <AboutUsMain id="aboutus">
      <h2 className="about__title">Sobre Nós</h2>
      <div className="about__text">
        <p>
          Olá, representamos o Grupo27 do módulo 6 de Junho de 2023. Somos{" "}
          <span>
            <strong>desenvolvedores júniores</strong>
          </span>
          , atualmente concluindo nossos estudos na{" "}
          <span>
            <strong>Kenzie Academy Brasil</strong>
          </span>
          , e com muita alegria nos tornarmos reconhecidos pelos nossos trabalhos como{" "}
          <span>
            <strong>Desenvolvedores Fullstack</strong>.
          </span>
        </p>
        <p>
          Recebemos o desafio de desenvolver uma aplicação completa de vendas de
          veículos automotivos. Estamos empenhados em criar uma solução
          inovadora e funcional, aplicando nossos conhecimentos e habilidades
          técnicas. Estamos ansiosos para compartilhar com você o resultado do
          nosso trabalho!
        </p>
      </div>

      <a href="https://kenzie.com.br/">
        <img className="pato" src="/pato.png" alt="" width={200} height={200} />
      </a>

      <div className="DevsMainCards">
        <div className="card">
          <h4>Estevão Alves</h4>
          <div className="userAvatar">
            <a href={`https://github.com/stevalves`} target="_blank">
              <img
                className="userImg"
                src={`https://github.com/stevalves.png`}
                alt={`https://github.com/stevalves.nameUser`}
                title={`https://github.com/stevalves.nameUser`}
                width={"70px"}
                height={"70px"}
              />
            </a>
          </div>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/stevalves/" target="_blank">
                <FaLinkedin title="LinkedIn" />
              </a>
            </li>
            <li>
              <a href="https://github.com/stevalves/" target="_blank">
                <FaGithub title="GitHub" />
              </a>
            </li>
            <li>
              <a href="mailto:ealves1710@hotmail.com" target="_blank">
                <FaMailBulk title="E-mail" />
              </a>
            </li>
            <li>
              <a
                href="https://my-portfolio-virid-sigma-80.vercel.app/"
                target="_blank"
              >
                <BsPersonVcardFill title="Portfólio" />
              </a>
            </li>
          </ul>
        </div>

        <div className="card">
          <h4>Gustavo Lima</h4>
          <div className="userAvatar">
            <a href={`https://github.com/gcaastro1`} target="_blank">
              <img
                className="userImg"
                src={`https://github.com/gcaastro1.png`}
                alt={`https://github.com/gcaastro1.nameUser`}
                title={`https://github.com/gcaastro1.nameUser`}
                width={"70px"}
                height={"70px"}
              />
            </a>
          </div>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/gucaastro1/" target="_blank">
                <FaLinkedin title="LinkedIn" />
              </a>
            </li>
            <li>
              <a href="https://github.com/gcaastro1" target="_blank">
                <FaGithub title="GitHub" />
              </a>
            </li>
            <li>
              <a href="mailto:gcaastro1@gmail.com" target="_blank">
                <FaMailBulk title="E-mail" />
              </a>
            </li>
            <li>
              <a
                href="https://my-portfolio-jade-tau.vercel.app/"
                target="_blank"
              >
                <BsPersonVcardFill title="Portfólio" />
              </a>
            </li>
          </ul>
        </div>

        <div className="card">
          <h4>Isac dos Santos</h4>
          <div className="userAvatar">
            <a href={`https://github.com/JeanderI`} target="_blank">
              <img
                className="userImg"
                src={`https://github.com/JeanderI.png`}
                alt={`https://github.com/JeanderI.nameUser`}
                title={`https://github.com/JeanderI.nameUser`}
                width={"70px"}
                height={"70px"}
              />
            </a>
          </div>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/isacsantoss/"
                target="_blank"
              >
                <FaLinkedin title="LinkedIn" />
              </a>
            </li>
            <li>
              <a href="https://github.com/JeanderI" target="_blank">
                <FaGithub title="GitHub" />
              </a>
            </li>
            <li>
              <a href="mailto:jeandersantos0310@gmail.com" target="_blank">
                <FaMailBulk title="E-mail" />
              </a>
            </li>
            <li>
              <a href="https://portfolio-jisac.vercel.app" target="_blank">
                <BsPersonVcardFill title="Portfólio" />
              </a>
            </li>
          </ul>
        </div>

        <div className="card">
          <h4>Junielson Diniz</h4>
          <div className="userAvatar">
            <a href={`https://github.com/JSDiniz`} target="_blank">
              <img
                className="userImg"
                src={`https://github.com/JSDiniz.png`}
                alt={`https://github.com/JSDiniz.nameUser`}
                title={`https://github.com/JSDiniz.nameUser`}
                width={"70px"}
                height={"70px"}
              />
            </a>
          </div>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/junielson-diniz/"
                target="_blank"
              >
                <FaLinkedin title="LinkedIn" />
              </a>
            </li>
            <li>
              <a href="https://github.com/JSDiniz" target="_blank">
                <FaGithub title="GitHub" />
              </a>
            </li>
            <li>
              <a href="mailto:juniosantos_@hotmail.com" target="_blank">
                <FaMailBulk title="E-mail" />
              </a>
            </li>
          </ul>
        </div>

        <div className="card">
          <h4>Leandro Alves</h4>
          <div className="userAvatar">
            <a href={`https://github.com/alves-leandro`} target="_blank">
              <img
                className="userImg"
                src={`https://github.com/alves-leandro.png`}
                alt={`https://github.com/alves-leandro.nameUser`}
                title={`https://github.com/alves-leandro.nameUser`}
                width={"70px"}
                height={"70px"}
              />
            </a>
          </div>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/leandro-alves85/"
                target="_blank"
              >
                <FaLinkedin title="LinkedIn" />
              </a>
            </li>
            <li>
              <a href="https://github.com/alves-leandro" target="_blank">
                <FaGithub title="GitHub" />
              </a>
            </li>
            <li>
              <a href="mailto:l.alves85@live.com" target="_blank">
                <FaMailBulk title="E-mail" />
              </a>
            </li>
            <li>
              <a href="https://leandro-portifolio.vercel.app/" target="_blank">
                <BsPersonVcardFill title="Portfólio" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </AboutUsMain>
  );
};

export default AboutUs;

