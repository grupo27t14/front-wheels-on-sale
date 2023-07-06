import { iPaginationCars } from "../../contexts/CarContext/props";

export interface modalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
  setCars: React.Dispatch<
    React.SetStateAction<iPaginationCars | null | undefined>
  >;
  modalSuccessfullyRegistered: boolean;
  setIsModalSuccessfullyRegistered: (
    modalSuccessfullyRegistered: boolean
  ) => void;
}

export interface iKenzieCars {
  id: string;
  name: string;
  brand: string;
  year: string;
  fuel: number;
  value: number;
}

export interface iKenzieBrands {
  brand: {
    name: string;
  }[];
}
