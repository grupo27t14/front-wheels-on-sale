import { Link } from "react-router-dom";
import { ContainerNotFound, DivImage, DivText } from "./styled";
import pneu from "../../assets/pneu.png";

const ErrorPage = () => {
  return (
    <ContainerNotFound>
      <DivImage>
        <h1>4</h1>
        <img src={pneu} alt="pneu emoji" />
        <h1>4</h1>
      </DivImage>
      <DivText>
        <h1>Oops!</h1>
        <p>Sorry, this route does not exists :(</p>
        <p>
          Return to <Link to={"/"}>Home</Link>
        </p>
      </DivText>
    </ContainerNotFound>
  );
};

export default ErrorPage;
