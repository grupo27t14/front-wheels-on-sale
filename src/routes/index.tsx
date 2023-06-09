import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import Header from "../components/Header";
import ErrorPage from "../pages/NotFound";
import Products from "../pages/Product";
import Home from "../pages/Home";
import { GlobalStyleGray } from "../styles/global";

const backgroundGray = (element: JSX.Element) => {
  return (
    <>
      <GlobalStyleGray />
      {element}
    </>
  );
};

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={backgroundGray(<Login />)} />
        <Route path="/register" element={backgroundGray(<Register />)} />
        <Route path="/product/:id" element={backgroundGray(<Products />)} />
      </Route>
      <Route path="/404" element={<ErrorPage />} />
      <Route path="*" element={<Navigate to={"/404"} />} />
    </Routes>
  );
};
