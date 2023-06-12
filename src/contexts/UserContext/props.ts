import { tRegisterReq } from "../../pages/Register/schemas";
import { iUser } from "../AuthContext/props";
import { iCarRes } from "../CarContext/props";

export interface UserProviderProps {
  children: React.ReactNode;
}

export interface UserProviderValues {
  userRegister: (data: tRegisterReq) => void;
  reqLoading: boolean;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  user: iUser | null;
  userEdit: (data: Partial<tRegisterReq>, userId: string) => Promise<void>;
  getUser: (userId: string) => Promise<iUser | undefined>;
  getUserCars: (userId: string) => Promise<iCarRes[] | undefined>;
  userDelete: (userId: string) => Promise<void>;
}
