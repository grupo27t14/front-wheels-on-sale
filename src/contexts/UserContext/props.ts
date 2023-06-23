import { tRegisterReq } from "../../pages/Register/schemas";
import { iPaginationCars } from "../CarContext/props";

export interface UserProviderProps {
  children: React.ReactNode;
}

export interface UserProviderValues {
  userRegister: (data: tRegisterReq) => void;
  reqLoading: boolean;
  setReqLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  user: iUser | null;
  userEdit: (data: Partial<tRegisterReq>, userId: string) => Promise<void>;
  getUser: (userId: string) => Promise<iUser | undefined>;
  getUserCars: (userId: string) => Promise<iPaginationCars | undefined>;
  userDelete: (userId: string) => Promise<void>;
}

export interface iUser {
  id: string;
  name: string;
  email: string;
  is_admin: boolean;
  is_seller: boolean;
  avatar_bg: string;
  personalInformation: {
    id: string;
    cpf: string;
    phone: string;
    birth_date: string;
    description: string;
  };
  addressInformation: {
    id: string;
    cep: string;
    state: string;
    city: string;
    street: string;
    number: string;
    complement: string;
  };
}
