import { createContext } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { tLogin } from "../../pages/Login/schemas";
import { api } from "../../services/api";
import { AuthContextValues, AuthProviderProps } from "./props";
import { useUsers } from "../../hooks/useUser";

export const AuthContext = createContext<AuthContextValues>(
  {} as AuthContextValues
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [reqLoading, setReqLoading] = useState<boolean>(false);

  const { setUser } = useUsers();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    if (!token) return setLoading(false);

    api.defaults.headers.common.authorization = `Bearer ${token}`;
    setLoading(false);
  }, []);

  const signIn = async (data: tLogin) => {
    try {
      setReqLoading(true);
      const res = await api.post("/login", data);
      const { token } = res.data;

      api.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("@TOKEN", token);

      await refreshUser();

      toast.success("Login feito com sucesso!");
      navigate("");
    } catch (err) {
      toast.error("Não foi possível realizar o login.");
      console.error(err);
    } finally {
      setReqLoading(false);
    }
  };

  const refreshUser = async () => {
    if (api.defaults.headers.common.authorization){
      const user = await api.get("user/me");
      setUser(user.data);
    }
  };

  useEffect(() => {
    refreshUser();
  }, []);

  const signOut = () => {
    try {
      localStorage.removeItem("@TOKEN");
      toast.success("Sessão finalizada!");
      setUser(null);
      navigate("");
    } catch (err) {
      toast.error("Não foi possível finalizar a sessão.");
      console.error(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, loading, reqLoading, refreshUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
