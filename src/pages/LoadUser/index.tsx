import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";
import { useUsers } from "../../hooks/useUser";

export const LoadUser = () => {
  const navigate = useNavigate();
  const { refreshUser } = useAuth();
  const { user } = useUsers();

  useEffect(() => {
    async () => {
      await refreshUser();
    };
  }, []);

  if (user) navigate("");

  return <Outlet />;
};
