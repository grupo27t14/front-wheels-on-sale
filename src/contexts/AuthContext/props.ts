import { ReactNode } from "react";
import { tLogin } from "../../pages/Login/schemas";

export interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthContextValues {
  signIn: (data: tLogin) => void;
  signOut: () => void;
  loading: boolean;
  reqLoading: boolean;
  refreshUser: () => Promise<void>;
}

export interface iUser {
  id: string
  name: string
  email: string
  is_admin: boolean
  is_seller: boolean
  personalInformation: {
    id: string
    cpf: string
    phone: string
    birth_date: string
    description: string
  }
  addressInformation: {
    id: string
    cep: string
    state: string
    city: string
    street: string
    number: string
    complement: string
  }
}