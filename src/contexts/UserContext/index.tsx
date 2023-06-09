import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { UserProviderProps, UserProviderValues } from "./props";
import { toast } from "react-toastify";
import { tRegisterReq } from "../../pages/Register/schemas";
import { iUser } from "../AuthContext/props";

export const UserContext = createContext<UserProviderValues>(
  {} as UserProviderValues
);

export const UserContextProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState(null as iUser | null);
  const [reqLoading, setReqLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const userRegister = async (data: tRegisterReq) => {
    try {
      setReqLoading(true);
      await api
        .post("user", data)
        .then(() => {
          toast.success("Usuário cadastrado com sucesso!");
          navigate("/login");
        })
        .catch((err) => {
          if (err.response.status == 409) {
            toast.error("E-mail de usuário já esta em uso.");
          }
        });
    } catch (err) {
      toast.error("Não foi possível realizar o cadastro.");
      console.error(err);
    } finally {
      setReqLoading(false);
    }
  };
  return (
    <UserContext.Provider value={{ userRegister, reqLoading, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
