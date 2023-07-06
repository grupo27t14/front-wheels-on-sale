import { useEffect, useState } from "react";
import { useCar } from "../../hooks/useCar";
import { api } from "../../services/api";
import { iPaginationCars } from "../../contexts/CarContext/props";
import { useSearchParams } from "react-router-dom";
import { StyledKeySection, StyledNav } from "./styled";
import { StyledButton } from "../../styles/button";
import React from "react";
import { InputsAside } from "./InputsAside";

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
  const [showAllList, setShowAllList] = useState<string[]>([]);

  const handleFilter = async (key: string, value: string) => {
    const query = `${key}=${value}&`;

    const newStrFilter =
      strFilter.split(query).length < 2
        ? strFilter + query
        : strFilter.replace(query, "");

    setStrFilter(newStrFilter);
    setSearchParams(newStrFilter.split("car?")[1]);
  };

  useEffect(() => {
    let queryConcat = "car?";
    for (const [k, v] of searchParams.entries()) {
      queryConcat += `${k}=${v}&`;
    }
    setStrFilter(queryConcat);
    if (queryConcat !== "car?") {
      (async () => {
        const { data } = await api.get<iPaginationCars>(queryConcat);
        setCars(data);
      })();
    }
  }, [searchParams, setCars]);

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
      if (car.is_published) {
        thisKeys.brand.push(car.brand);
        thisKeys.model.push(car.model);
        thisKeys.color.push(car.color);
        thisKeys.year.push(car.year);
      }
    });
    setKeys(thisKeys);
  }, [allCars]);

  const remove = (key: string) => {
    const newShowAllList = [...showAllList];
    newShowAllList.splice(newShowAllList.indexOf(key), 1);
    setShowAllList(newShowAllList);
  };

  const keysName: { [key: string]: string } = {
    brand: "Marca",
    model: "Modelo",
    color: "Cor",
    year: "Ano",
  };

  const objects = [];
  if (keys) {
    for (const [key, value] of Object.entries(keys)) {
      objects.push(
        <StyledKeySection key={key}>
          <h2>{keysName[key]}</h2>
          <ul className={showAllList.includes(key) ? "show" : ""}>
            {[...new Set(value)].map((val) => (
              <li key={val}>
                <button onClick={async () => await handleFilter(key, val)}>
                  {val}
                </button>
              </li>
            ))}
          </ul>
          {[...new Set(value)].length > 5 && (
            <button
              onClick={() =>
                !showAllList.includes(key)
                  ? setShowAllList([...showAllList, key])
                  : remove(key)
              }
            >
              {showAllList.includes(key) ? "Mostrar menos" : "Mostrar mais"}
            </button>
          )}
        </StyledKeySection>
      );
    }
  }

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

        <InputsAside strFilter={strFilter} setStrFilter={setStrFilter} />
      </div>

      <StyledButton
        buttonstyle="brand1"
        className="buttonClearSearch"
        onClick={() => setSearchParams("")}
      >
        Limpar Filtros
      </StyledButton>
    </StyledNav>
  );
};
