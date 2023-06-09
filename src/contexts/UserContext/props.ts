import { tRegisterReq } from "../../pages/Register/schemas";
import { iUser } from "../AuthContext/props";

export interface UserProviderProps {
  children: React.ReactNode;
}

export interface UserProviderValues {
  userRegister: (data: tRegisterReq) => void;
  reqLoading: boolean;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  user: iUser | null;
}
