import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const useUsers = () => {
  const userContext = useContext(UserContext);

  return userContext
};
