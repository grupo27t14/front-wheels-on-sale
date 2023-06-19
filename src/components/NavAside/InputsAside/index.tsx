import { z } from "zod";
import { StyledInputsAside } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useCar } from "../../../hooks/useCar";
import { api } from "../../../services/api";
import { iPaginationCars } from "../../../contexts/CarContext/props";

interface iInputsAsideProps {
  setStrFilter: (value: React.SetStateAction<string>) => void;
  strFilter: string;
}

export const InputsAside = ({ setStrFilter, strFilter }: iInputsAsideProps) => {
  const [showButton, setShowButton] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const { setCars } = useCar();

  const filterSchema = z.object({
    km_min: z.string(),
    km_max: z.string(),
    price_min: z.string(),
    price_max: z.string(),
  });

  type tIAside = z.infer<typeof filterSchema>;

  const { register, handleSubmit, watch, setValue } = useForm<tIAside>({
    resolver: zodResolver(filterSchema),
  });

  useEffect(() => {
    const km = searchParams.get("km");
    if (km) {
      const [min, max] = km.split("_");
      setValue("km_min", min);
      setValue("km_max", max);
    }
    const price = searchParams.get("price");
    if (price) {
      const [min, max] = price.split("_");
      setValue("price_min", min);
      setValue("price_max", max);
    }
  }, [searchParams, setValue]);

  const onSub = async (inputData: tIAside) => {
    let query = "";
    if (Boolean(inputData.km_max) || Boolean(inputData.km_min)) {
      query += `km=${inputData.km_min}_${inputData.km_max}&`;
    }
    if (Boolean(inputData.price_max) || Boolean(inputData.price_min)) {
      query += `price=${inputData.price_min}_${inputData.price_max}&`;
    }

    let newStrFilter = strFilter + query;

    const splitedKm = strFilter.split("km=");
    const splitedPrice = strFilter.split("price=");

    if (splitedKm.length > 1 && splitedPrice.length > 1) {
      newStrFilter = strFilter + query;
    }

    if (splitedKm.length > 1) {
      newStrFilter = splitedKm[0] + query;
    }

    if (splitedPrice.length > 1) {
      newStrFilter = splitedPrice[0] + query;
    }
    newStrFilter = newStrFilter.slice(0, -1);
    console.log(newStrFilter);
    const { data } = await api.get<iPaginationCars>(newStrFilter);

    setStrFilter(newStrFilter);
    setCars(data);
    setSearchParams(newStrFilter.split("car?")[1]);
  };

  const km_min = watch("km_min");
  const km_max = watch("km_max");
  const price_min = watch("price_min");
  const price_max = watch("price_max");

  useEffect(() => {
    if (km_max || km_min || price_max || price_min) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [km_min, km_max, price_max, price_min]);

  return (
    <StyledInputsAside onSubmit={handleSubmit(onSub)}>
      <h2>Km</h2>
      <div>
        <input type="number" placeholder="Mínimo" {...register("km_min")} />
        <input type="number" placeholder="Máximo" {...register("km_max")} />
      </div>
      <h2>Preço</h2>
      <div>
        <input type="number" placeholder="Mínimo" {...register("price_min")} />
        <input type="number" placeholder="Máximo" {...register("price_max")} />
      </div>
      <button type="submit" className={showButton ? "flex" : "none"}>
        Filtrar
      </button>
    </StyledInputsAside>
  );
};
