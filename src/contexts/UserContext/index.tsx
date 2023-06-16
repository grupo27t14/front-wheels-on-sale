import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { UserProviderProps, UserProviderValues } from "./props";
import { toast } from "react-toastify";
import { editSchemaRequest, tRegisterReq } from "../../pages/Register/schemas";
import { iUser } from "./props";
import { iPaginationCars } from "../CarContext/props";
import { randomColor } from "../../utils/randomColor";

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
        .post("user", { ...data, avatar_bg: randomColor() })
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

  const getUser = async (userId: string) => {
    try {
      const { data } = await api.get<iUser>(`user/${userId}`);
      return data;
    } catch (err) {
      toast.error("Não foi possível completar a requisição.");
      console.error(err);
    }
  };

  const getUserCars = async (userId: string) => {
    try {
      const { data } = await api.get<iPaginationCars>(`user/${userId}/cars`);

      return data;
    } catch (err) {
      toast.error("Não foi possível completar a requisição.");
      console.error(err);
    }
  };

  const userEdit = async (data: Partial<tRegisterReq>, userId: string) => {
    try {
      await api
        .patch<iUser>(`user/${userId}`, editSchemaRequest.parse(data))
        .then((res) => {
          toast.success("Usuário editado com sucesso!");
          setUser(res.data);
        })
        .catch((err) => {
          if (err.response.status == 409) {
            toast.error("E-mail de usuário já esta em uso.");
          }
        });
    } catch (err) {
      toast.error("Não foi possível editar o usuário.");
      console.error(err);
    }
  };

  const userDelete = async (userId: string) => {
    try {
      await api.delete(`user/${userId}`);
      toast.success("Usuário deletado com sucesso!");
      localStorage.removeItem("@TOKEN");
      navigate("");
    } catch (err) {
      toast.error("Não foi possível deletar o usuário.");
      console.error(err);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userRegister,
        reqLoading,
        user,
        setUser,
        userEdit,
        getUser,
        getUserCars,
        userDelete,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
