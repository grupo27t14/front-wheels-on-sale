import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import Header from "../components/Header";
import { GlobalStyleGray } from "../styles/global";
import ErrorPage from "../pages/NotFound";
import Products from "../pages/Product";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/any",
    element: <div>Hello world!</div>,
    errorElement: <ErrorPage />,
  },
  {
    element: <Header />,
    children: [
      {
        path: "/",
        element: (
          <>
            <GlobalStyleGray />
            <Home />
          </>
        ),
      },
      {
        path: "/register",
        element: (
          <>
            <GlobalStyleGray />
            <Register />
          </>
        ),
      },
      {
        path: "/login",
        element: (
          <>
            <GlobalStyleGray />
            <Login />
          </>
        ),
      },
      {
        path: "/product/:id",
        element: (
          <>
            <GlobalStyleGray />
            <Products />
          </>
        ),
      },
    ],
  },
]);
