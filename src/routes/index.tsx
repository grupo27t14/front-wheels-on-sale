import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/notFoundPage";
import Products from "../pages/productPage";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/products/:id",
    element: <Products />,
  },
]);