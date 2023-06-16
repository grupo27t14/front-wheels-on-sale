import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCallback, useEffect } from "react";
import { announceData, announceSchema } from "./schema";
import { fipe } from "../../../services/api";

interface iKenzieCars {
  id: string
  name: string
  brand: string
  year: string
  fuel: number
  value: number
}

export const useAnnounce = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<announceData>({
    resolver: zodResolver(announceSchema),
  });

  const carModel = watch("model");

  const handleSetData = useCallback(
    (data: iKenzieCars[]) => {
      // setValue("brand", a);
      // setValue("addressInformation.state", data.uf);
      // setValue("addressInformation.street", data.logradouro);
    },
    [setValue]
  );

  const handleReqAddress = useCallback(
    async (carBrand: string) => {
      if (carBrand) {
        const { data } = await fipe.get(`/cars?brand=${carBrand}`);
        handleSetData(data);
      }
    },
    [handleSetData]
  );

  useEffect(() => {
    setValue("model", carModel);

    if (carModel) {
      handleReqAddress(carModel);
    }
  }, [handleReqAddress, carModel, setValue]);

  return { errors, handleSubmit, register };
};
