import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import {
  CarProviderProps,
  CarProviderValues,
  iCarReq,
  iCarRes,
  iPaginationCars,
} from "./props";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";

export const CarContext = createContext<CarProviderValues>(
  {} as CarProviderValues
);

export const CarContextProvider = ({ children }: CarProviderProps) => {
  const [cars, setCars] = useState(null as iPaginationCars | null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.toString()) {
      refreshCars();
    }
  }, [searchParams]);

  const refreshCars = async () => {
    try {
      const { data } = await api.get<iPaginationCars>("car?is_published=true");

      setCars(data);
    } catch (err) {
      toast.error("Não foi possível completar a requisição.");
      console.error(err);
    }
  };

  const getCar = async (carId: string | undefined) => {
    try {
      const { data } = await api.get<iCarRes>(`car/${carId}`);
      return data;
    } catch (err) {
      toast.error("Não foi possível completar a requisição.");
      console.error(err);
    }
  };

  const createCar = async (newData: iCarReq) => {
    try {
      const { data } = await api.post<iCarRes | undefined>("car", newData);
      return data;
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
