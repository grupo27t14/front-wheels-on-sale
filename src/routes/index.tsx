import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/loginPage";
import ErrorPage from "../pages/notFoundPage";
import Products from "../pages/productPage";

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