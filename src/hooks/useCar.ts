import { useContext } from "react";
import { CarContext } from "../contexts/CarContext";

export const useCar = () => {
  const carContext = useContext(CarContext);

  return carContext
};
