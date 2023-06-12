import { Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { LoadUserBlock } from "./styles";

export const LoadUser = () => {
  const { loading } = useAuth();

  return loading ? <LoadUserBlock /> : <Outlet />
};
