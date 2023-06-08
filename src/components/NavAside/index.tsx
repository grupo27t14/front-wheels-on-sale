import React, { useEffect, useState } from "react";
import { StyledNav } from "./style";
import { StyledButton } from "../../styles/button";
import { useNavigate } from "react-router-dom";

interface Filtro {
  [key: string]: string;
}

interface Card {
  id: string;
  name: string;
  brand: string;
  year: string;
  color: string;
  fuel: string;
  km: string;
  price: string;
}

interface AsideProps {
  onSearch: (filtro: Filtro) => void;
  onClick?: (() => void) | undefined;
}

const Aside: React.FC<AsideProps> = ({ onClick }): JSX.Element => {
  const [cards] = useState<Card[]>([
    {
      id: "xxxxx534xxxxxxx",
      name: "Fiat 500",
      brand: "Fiat",
      year: "2022",
      color: "Red",
      fuel: "Gasoline",
      km: "10000",
      price: "50000",
    },
    {
      id: "xxxxx9xxxxxxx",
      name: "Panda",
      brand: "Fiat",
      year: "2022",
      color: "blue",
      fuel: "Diesel",
      km: "15000",
      price: "150000",
    },
    {
      id: "xxxxxx32xxxxxx",
      name: "Uno",
      brand: "Fiat",
      year: "2023",
      color: "Red",
      fuel: "Gasoline",
      km: "210000",
      price: "53000",
    },
    {
      id: "xxxxxx7xxxxxx",
      name: "Doblô",
      brand: "Fiat",
      year: "2002",
      color: "Red",
      fuel: "Gasoline",
      km: "20000",
      price: "51000",
    },
    {
      id: "xxxx6xxxxxxxx",
      name: "Anglia",
      brand: "Ford",
      year: "2023",
      color: "Red",
      fuel: "Gasoline",
      km: "20000",
      price: "150000",
    },
    {
      id: "x1xxxxxxxxxxx",
      name: "MAVERICK",
      brand: "Ford",
      year: "2002",
      color: "Red",
      fuel: "Gasoline",
      km: "20000",
      price: "250000",
    },
    {
      id: "xxxxxxxxxx2xx",
      name: "F-150",
      brand: "Ford",
      year: "2022",
      color: "Red",
      fuel: "Etyearl",
      km: "20000",
      price: "150000",
    },
    {
      id: "xxxxxx3xxxxxx",
      name: "RANGER",
      brand: "Ford",
      year: "2022",
      color: "Red",
      fuel: "Gasoline",
      km: "20000",
      price: "250000",
    },
  ]);

  const brands = [...new Set(cards.map((card) => card.brand))];
  const colors = [...new Set(cards.map((card) => card.color))];
  const years = [...new Set(cards.map((card) => card.year))];
  const fuels = [...new Set(cards.map((card) => card.fuel))];

  const [filtro, setFiltro] = useState<Filtro>({
    brand: "",
    model: "",
    color: "",
    year: "",
    fuel: "",
    kmMin: "",
    kmMax: "",
    priceMin: "",
    priceMax: "",
  });

  const [cardsFiltrados, setCardsFiltrados] = useState<Card[]>([]);
  const navigate = useNavigate();
  
  const handleOptionSelect = (categoria: string, valor: string) => {
    setFiltro((prevFiltro) => ({
      ...prevFiltro,
      [categoria]: prevFiltro[categoria] === valor ? "" : valor,
    }));

    const updatedFiltro = {
      ...filtro,
      [categoria]: filtro[categoria] === valor ? "" : valor,
    };

    const queryParams = new URLSearchParams();

  Object.entries(updatedFiltro).forEach(([key, value]) => {
    if (value) {
      queryParams.append(key, value);
    }
  });

  const queryString = queryParams.toString();
  navigate(`?${queryString}`);

    const cardsFiltrados = cards.filter((card) => {
      const brandMatch = updatedFiltro.brand
        ? card.brand === updatedFiltro.brand
        : true;
      const modelMatch = updatedFiltro.model
        ? card.name === updatedFiltro.model
        : true;
      const colorMatch = updatedFiltro.color
        ? card.color === updatedFiltro.color
        : true;
      const yearMatch = updatedFiltro.year
        ? card.year === updatedFiltro.year
        : true;
      const fuelMatch = updatedFiltro.fuel
        ? card.fuel === updatedFiltro.fuel
        : true;
      const kmMatch =
        updatedFiltro.kmMin !== "" || updatedFiltro.kmMax !== ""
          ? parseInt(card.km) >= parseInt(updatedFiltro.kmMin || "0") &&
            parseInt(card.km) <=
              (updatedFiltro.kmMax !== ""
                ? parseInt(updatedFiltro.kmMax)
                : Infinity)
          : true;
      const priceMatch =
        updatedFiltro.priceMin !== "" || updatedFiltro.priceMax !== ""
          ? parseInt(card.price) >=
              (updatedFiltro.priceMin !== ""
                ? parseInt(updatedFiltro.priceMin)
                : 0) &&
            parseInt(card.price) <=
              (updatedFiltro.priceMax !== ""
                ? parseInt(updatedFiltro.priceMax)
                : Infinity)
          : true;

      return (
        brandMatch &&
        modelMatch &&
        colorMatch &&
        yearMatch &&
        fuelMatch &&
        kmMatch &&
        priceMatch
      );
    });

    setCardsFiltrados(cardsFiltrados);
  };

  const handleLimparFiltros = () => {
    setFiltro({
      brand: "",
      model: "",
      color: "",
      year: "",
      fuel: "",
      kmMin: "",
      kmMax: "",
      priceMin: "",
      priceMax: "",
    });

    setCardsFiltrados([]);
    navigate(""); 
  };

  const [modelsFiltrados, setmodelsFiltrados] = useState<string[]>([]);

  useEffect(() => {
    if (filtro.brand) {
      const modelsFiltrados = [
        ...new Set(
          cards
            .filter((card) => card.brand === filtro.brand)
            .map((card) => card.name)
        ),
      ];
      setmodelsFiltrados(modelsFiltrados);
    } else {
      setmodelsFiltrados([...new Set(cards.map((card) => card.name))]);
    }
  }, [filtro.brand, cards]);

  const isAllOptionsEmpty = Object.values(filtro).every(
    (value) => value === ""
  );

  useEffect(() => {
    if (isAllOptionsEmpty) {
      setCardsFiltrados([]);
    }
  }, [isAllOptionsEmpty]);

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
        <h2>Marca</h2>
        <ul>
          {brands.map((brand) => (
            <li
              key={brand}
              style={{
                display:
                  filtro.brand && filtro.brand !== brand ? "none" : "list-item",
              }}
              onClick={() => handleOptionSelect("brand", brand)}
            >
              <a href="#" onClick={(e) => e.preventDefault()}>{brand}</a>
            </li>
          ))}
        </ul>

        <h2>Modelo</h2>
        <ul>
          {modelsFiltrados.map((model) => (
            <li
              key={model}
              style={{
                display:
                  filtro.model && filtro.model !== model
                    ? "none"
                    : "list-item",
              }}
              onClick={() => handleOptionSelect("model", model)}
            >
              <a href="#" onClick={(e) => e.preventDefault()}>{model}</a>
            </li>
          ))}
        </ul>

        <h2>Cor</h2>
        <ul>
          {colors.map((color) => (
            <li
              key={color}
              style={{
                display:
                  filtro.color && filtro.color !== color ? "none" : "list-item",
              }}
              onClick={() => handleOptionSelect("color", color)}
            >
              <a href="#" onClick={(e) => e.preventDefault()}>{color}</a>
            </li>
          ))}
        </ul>

        <h2>Ano</h2>
        <ul>
          {years.map((year) => (
            <li
              key={year}
              style={{
                display:
                  filtro.year && filtro.year !== year ? "none" : "list-item",
              }}
              onClick={() => handleOptionSelect("year", year)}
            >
              <a href="#" onClick={(e) => e.preventDefault()}>{year}</a>
            </li>
          ))}
        </ul>

        <h2>Combustível</h2>
        <ul>
          {fuels.map((fuel) => (
            <li
              key={fuel}
              style={{
                display:
                  filtro.fuel && filtro.fuel !== fuel
                    ? "none"
                    : "list-item",
              }}
              onClick={() => handleOptionSelect("fuel", fuel)}
            >
              <a href="#" onClick={(e) => e.preventDefault()}>{fuel}</a>
            </li>
          ))}
        </ul>

        <h2>Km</h2>
        <div className="inputDiv">
          <input
            type="number"
            placeholder="Mínimo"
            value={filtro.kmMin === "0" ? "Mínimo" : filtro.kmMin}
            onChange={(e) => handleOptionSelect("kmMin", e.target.value)}
          />
          <input
            type="number"
            placeholder="Máximo"
            value={filtro.kmMax}
            onChange={(e) => handleOptionSelect("kmMax", e.target.value)}
          />
        </div>

        <h2>Preço</h2>
        <div className="inputDiv">
          <input
            type="number"
            placeholder="Mínimo"
            value={filtro.priceMin}
            onChange={(e) => {
              handleOptionSelect("priceMin", e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Máximo"
            value={filtro.priceMax}
            onChange={(e) => handleOptionSelect("priceMax", e.target.value)}
          />
        </div>
      </div>

      <StyledButton
        buttonstyle="brand1"
        className="buttonClearSearch"
        onClick={handleLimparFiltros}
      >
        Limpar Filtros
      </StyledButton>

      {/* {cardsFiltrados.length > 0 ? (
        cardsFiltrados.map((card) => (
          <div key={card.id}>
            <h3>{card.name}</h3>
            <p>brand: {card.brand}</p>
            <p>year: {card.year}</p>
            <p>color: {card.color}</p>
            <p>Combustível: {card.fuel}</p>
            <p>KM: {card.km}</p>
            <p>Price: {card.price}</p>
          </div>
        ))
      ) : (
        <p>Nenhum card encontrado.</p>
      )} */}
    </StyledNav>
  );
};

export { Aside };

