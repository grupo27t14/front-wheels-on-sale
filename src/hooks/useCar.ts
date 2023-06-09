import { useContext } from "react";
import { CarContext } from "../contexts/CarContext";

export const useCar = () => {
  const userContext = useContext(CarContext);

  return userContext
};
