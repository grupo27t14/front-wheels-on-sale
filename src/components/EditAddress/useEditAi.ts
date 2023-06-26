import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  tRegisterReq,
  editSchemaRequest,
  iCep,
} from "../../pages/Register/schemas";
import { apicep } from "../../services/api";
import { useUsers } from "../../hooks/useUser";

export const useEditAi = () => {
  const { user } = useUsers();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<tRegisterReq>({
    resolver: zodResolver(editSchemaRequest),
  });

  const zipCode = watch("addressInformation.cep");

  const handleSetData = useCallback(
    (data: iCep) => {
      setValue("addressInformation.city", data.localidade);
      setValue("addressInformation.state", data.uf);
      setValue("addressInformation.street", data.logradouro);
    },
    [setValue]
  );

  const handleReqAddress = useCallback(
    async (zipCode: string) => {
      if (zipCode?.length > 7) {
        const { data } = await apicep.get(`ws/${zipCode}/json/`);
        handleSetData(data);
      }
    },
    [handleSetData]
  );

  useEffect(() => {
    setValue("addressInformation.cep", zipCode);

    if (String(zipCode).length > 7) {
      handleReqAddress(zipCode);
    }
  }, [handleReqAddress, zipCode, setValue]);

  useEffect(() => {
    if (user) setValue("addressInformation.cep", user.addressInformation.cep);
  }, [setValue, user]);

  return { register, handleSubmit, errors };
};
