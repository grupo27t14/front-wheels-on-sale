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
