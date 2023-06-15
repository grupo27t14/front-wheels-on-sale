import { useCallback, useEffect, useState } from "react";
import { useCar } from "../../hooks/useCar";
import { api } from "../../services/api";
import { iPaginationCars } from "../../contexts/CarContext/props";
import { useSearchParams } from "react-router-dom";

type tKeys = {
  brand: string[];
  model: string[];
  color: string[];
  year: string[];
};

export const TestAside = () => {
  const { cars, setCars } = useCar();
  const [allCars, setAllCars] = useState<iPaginationCars>();
  const [strFilter, setStrFilter] = useState<string>("car?");
  const [keys, setKeys] = useState<tKeys>();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilter = async (key: string, value: string) => {
    const query = `${key}=${value}&`;

    const newStrFilter =
      strFilter.split(query).length < 2
        ? strFilter + query
        : strFilter.replace(query, "");

    const { data } = await api.get<iPaginationCars>(newStrFilter);

    setStrFilter(newStrFilter);
    setCars(data);
    setSearchParams(newStrFilter.split("car?")[1]);
  };

  const getFilteredCars = useCallback(
    async (url: string) => {
      const { data } = await api.get<iPaginationCars>(url);
      setCars(data);
    },
    [setCars]
  );

  useEffect(() => {
    let ass = "";
    for (const [k, v] of searchParams.entries()) {
      ass += `${k}=${v}&`;
    }
    setStrFilter("car?" + ass);
    if (ass !== "") {
      getFilteredCars("car?" + ass);
    }
  }, [searchParams, getFilteredCars]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get<iPaginationCars>(strFilter);
      setCars(data);
    })();
  }, [strFilter, setCars]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get<iPaginationCars>(
        `${strFilter}limit=${cars?.totalCount}`
      );
      setAllCars(data);
    })();
  }, [strFilter, cars?.totalCount]);

  useEffect(() => {
    const thisKeys = {
      brand: [] as string[],
      model: [] as string[],
      color: [] as string[],
      year: [] as string[],
    };

    allCars?.results.map((car) => {
      thisKeys.brand.push(car.brand);
      thisKeys.model.push(car.model);
      thisKeys.color.push(car.color);
      thisKeys.year.push(car.year);
    });
    setKeys(thisKeys);
  }, [allCars]);

  const objects = [];
  if (keys) {
    for (const [key, value] of Object.entries(keys)) {
      objects.push(
        <div>
          <h2>{key}</h2>
          <ul>
            {[...new Set(value)].map((val) => (
              <button onClick={async () => await handleFilter(key, val)}>
                {val}
              </button>
            ))}
          </ul>
        </div>
      );
    }
  }

  return (
    <>
      {objects}
      <ul>
        {cars?.results.map((car) => (
          <li>
            brand: {car.brand + " | "}
            color: {car.color + " | "}
            model: {car.model + " | "}
            year: {car.year + " | "}
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
};
