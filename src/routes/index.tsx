import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import Header from "../components/Header";
import { GlobalStyleGray } from "../styles/global";
import ErrorPage from "../pages/NotFoundPage";
import Products from "../pages/ProductPage";
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
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
