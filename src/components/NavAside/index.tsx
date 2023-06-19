import { useCallback, useEffect, useState } from "react";
import { useCar } from "../../hooks/useCar";
import { api } from "../../services/api";
import { iPaginationCars } from "../../contexts/CarContext/props";
import { useSearchParams } from "react-router-dom";
import { StyledNav } from "./style";
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
  // Contexto de carros, respectivamente: lista, setLista
  const { cars, setCars } = useCar();
  // Estado para manter todos os carros do banco de dados
  const [allCars, setAllCars] = useState<iPaginationCars>();
  // Estado que guarda o filtro atual
  const [strFilter, setStrFilter] = useState<string>("car?");
  // Estado que guarda as chaves do aside
  const [keys, setKeys] = useState<tKeys>();
  // Estado do proprio router dom que pega os parametros da rota
  const [searchParams, setSearchParams] = useSearchParams();

  // Função que recebe key e value, formatando elas como query, setando os
  // carros, e guardando as queries em um estado e na própria url do site
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

  // Effect que busca todas as queries da url, formata elas e chama o useCallback acima
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

  // Effect que observa a troca do strFilter e seta os carros a partir da requisição dela
  useEffect(() => {
    (async () => {
      const { data } = await api.get<iPaginationCars>(strFilter);
      setCars(data);
    })();
  }, [strFilter, setCars]);

  // Effect que pega todos os carros do banco de dados
  useEffect(() => {
    (async () => {
      const { data } = await api.get<iPaginationCars>(
        `${strFilter}limit=${cars?.totalCount}`
      );
      setAllCars(data);
    })();
  }, [strFilter, cars?.totalCount]);

  // Effect que observa o estado que guarda todos os carros do banco de dados,
  // e faz a primeira listagem dos keys do filtro, guardando essas keys em um state
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

  // Constante que guarda os componentes feitos na iteração do state keys
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

        <InputsAside setStrFilter={setStrFilter} strFilter={strFilter} />
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
