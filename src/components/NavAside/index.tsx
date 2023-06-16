import { useCallback, useEffect, useState } from "react";
import { useCar } from "../../hooks/useCar";
import { api } from "../../services/api";
import { iPaginationCars } from "../../contexts/CarContext/props";
import { useSearchParams } from "react-router-dom";
import { StyledNav } from "./style";
import { StyledButton } from "../../styles/button";
import React from "react";

type tKeys = {
  brand: string[];
  model: string[];
  color: string[];
  year: string[];
};

interface AsideProps {
  onClick?: (() => void) | undefined;
}

export const Aside: React.FC<AsideProps> = ({ onClick }) => {
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
        <React.Fragment key={key}>
          <h2>{key}</h2>
          <ul>
            {[...new Set(value)].map((val) => (
              <li key={val}>
                <button onClick={async () => await handleFilter(key, val)}>
                  {val}
                </button>
              </li>
            ))}
          </ul>
        </React.Fragment>
      );
    }
  }

  const handleClearFilter = () => {
    console.log("limpar");
  };

  return (
    <StyledNav>
      <div className="asideButtonMobile">
        <div>
          <p>Filtro</p>
        </div>
        <div>
          <button onClick={onClick}>X</button>
        </div>
      </div>

      <div className="navDiv">
        {objects}

        {/* <h2>Km</h2>
        <div className="inputDiv">
          <input type="number" placeholder="Mínimo" value={""} />
          <input type="number" placeholder="Máximo" value={""} />
        </div>
        <h2>Preço</h2>
        <div className="inputDiv">
          <input type="number" placeholder="Mínimo" value={""} />
          <input type="number" placeholder="Máximo" value={""} />
        </div> */}
      </div>

      <StyledButton
        buttonstyle="brand1"
        className="buttonClearSearch"
        onClick={handleClearFilter}
      >
        Limpar Filtros
      </StyledButton>
    </StyledNav>
  );
};

