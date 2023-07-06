import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { iCep, registerSchema, tRegister } from "./schemas";
import { useCallback, useEffect } from "react";
import { apicep } from "../../services/api";

export const useCep = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<tRegister>({
    resolver: zodResolver(registerSchema),
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

  return { errors, handleSubmit, register };
};
