import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/error-page";
import Products from "../pages/products-page";
import { Login } from "../pages/loginPage";

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
    path: "/products/:id",
    element: <Products />,
  },
]);