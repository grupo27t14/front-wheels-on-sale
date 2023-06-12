import { createContext, useState } from "react";
import { api } from "../../services/api";
import { CarProviderProps, CarProviderValues, iCarReq, iCarRes } from "./props";
import { toast } from "react-toastify";

export const CarContext = createContext<CarProviderValues>(
  {} as CarProviderValues
);

export const CarContextProvider = ({ children }: CarProviderProps) => {
  const [cars, setCars] = useState(null as iCarRes[] | null);

  const refreshCars = async () => {
    try {
      const { data } = await api.get<iCarRes[]>("car");
      setCars(data);
    } catch (err) {
      toast.error("Não foi possível completar a requisição.");
      console.error(err);
    }
  };

  const getCar = async (carId: string) => {
    try {
      const { data } = await api.get<iCarRes>(`car/${carId}`);
      return data;
    } catch (err) {
      toast.error("Não foi possível completar a requisição.");
      console.error(err);
    }
  };

  const createCar = async (data: iCarReq) => {
    try {
      await api.post("car", data);
      toast.success("Carro cadastrado com sucesso!");
    } catch (err) {
      toast.error("Não foi possível cadastrar o carro.");
      console.log(err);
    }
  };

  const editCar = async (data: Partial<iCarReq>, carId: string) => {
    try {
      await api.patch(`car/${carId}`, data);
      toast.success("Carro editado com sucesso!");
    } catch (err) {
      toast.error("Não foi possível editar o carro.");
      console.log(err);
    }
  };

  const deleteCar = async (carId: string) => {
    try {
      await api.delete(`car/${carId}`);
      toast.success("Carro deletado com sucesso!");
    } catch (err) {
      toast.error("Não foi possível deletar o carro.");
      console.log(err);
    }
  };

  return (
    <CarContext.Provider
      value={{
        refreshCars,
        cars,
        setCars,
        deleteCar,
        editCar,
        getCar,
        createCar,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
