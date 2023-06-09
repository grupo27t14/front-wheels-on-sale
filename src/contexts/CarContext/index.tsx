import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { CarProviderProps, CarProviderValues, iCar } from "./props";
import { toast } from "react-toastify";

export const CarContext = createContext<CarProviderValues>(
  {} as CarProviderValues
);

export const CarContextProvider = ({ children }: CarProviderProps) => {
  const [cars, setCars] = useState(null as iCar[] | null);

  const refreshCars = async () => {
    try {
      const { data } = await api.get<iCar[]>("car");
      setCars(data);
    } catch (err) {
      toast.error("Não foi fazer a requisição.");
      console.error(err);
    }
  };

  return (
    <CarContext.Provider value={{ refreshCars, cars, setCars }}>
      {children}
    </CarContext.Provider>
  );
};
