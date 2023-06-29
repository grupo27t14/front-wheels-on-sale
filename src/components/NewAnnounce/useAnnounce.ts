import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";
import { announceData, announceSchema } from "./schema";
import { fipe } from "../../services/api";
import { iKenzieBrands, iKenzieCars } from "./props";

export const useAnnounce = () => {
  const [brands, setBrands] = useState<string[]>();
  const [models, setModels] = useState<iKenzieCars[]>([]);

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
  const carBrand = watch("brand");

  useEffect(() => {
    (async () => {
      try {
        const { data } = await fipe.get<iKenzieBrands>("cars");
        const allBrands = [];
        for (const keys of Object.keys(data)) {
          allBrands.push(keys);
        }
        setBrands(allBrands);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const handleSetData = useCallback(
    (car: iKenzieCars) => {
      const setFuel = (type: number) => {
        return type === 1 ? "Gasolina" : type === 2 ? "Diesel" : "Elétrico";
      };

      setValue("fipe", String(car.value));
      setValue("year", car.year);
      setValue("fuel", setFuel(car.fuel));
    },
    [setValue]
  );

  const handleCarList = useCallback(
    (modelsList: iKenzieCars[], carModel: string) => {
      const car: iKenzieCars | undefined = modelsList.find(
        (value) => value.name === carModel
      );
      if (car) handleSetData(car);
    },
    [handleSetData]
  );

  useEffect(() => {
    (async () => {
      if (carBrand) {
        const { data } = await fipe.get<iKenzieCars[]>(
          `/cars?brand=${carBrand.toLowerCase()}`
        );
        setModels(data);
      }
    })();
  }, [carBrand]);

  useEffect(() => {
    setValue("model", carModel);
    setValue("brand", carBrand);

    if (carModel) {
      handleCarList(models, carModel);
    }
  }, [carModel, handleCarList, models, setValue, carBrand]);

  return {
    errors,
    handleSubmit,
    register,
    brands,
    models,
    setValue,
    carModel,
    carBrand,
  };
};
