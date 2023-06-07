import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/error-page";
import Products from "../pages/products-page";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import Header from "../components/Header";
import { GlobalStyleGray } from "../styles/global";
import { Login2 } from "../pages/loginPage";

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
        element: <div>homepage</div>,
      },
      {
        path: "/login2",
        element: (
          <>
            <GlobalStyleGray />
            <Login2 />
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
  {
    path: "/products/:id",
    element: <Products />,
  },
]);
