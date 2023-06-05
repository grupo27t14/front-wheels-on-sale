import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import Header from "../components/Header";
import { GlobalStyleGray } from "../styles/global";
import ErrorPage from "../pages/notFoundPage";
import Products from "../pages/productPage";

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
        path: "/login",
        element: (
          <>
            <GlobalStyleGray />
            <Login />
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
