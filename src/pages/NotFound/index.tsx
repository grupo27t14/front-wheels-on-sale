import { Link } from "react-router-dom";

const  ErrorPage = () => {
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, this route does not exists.</p>
      <p>
        Return to <Link to={"/"}>Home</Link>
      </p>
    </div>
  );
}

export default ErrorPage