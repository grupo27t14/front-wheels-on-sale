import React, { useEffect, useState } from "react";
import { StyledNav } from "./style";
import { StyledButton } from "../../styles/button";
import { useNavigate } from "react-router-dom";
import { useCar } from "../../hooks/useCar";
interface Filtro {
  [key: string]: string;
}
interface Card {
  id: string;
  model: string;
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
const Aside: React.FC<AsideProps> = ({ onClick }) => {
  const { cars, setCars } = useCar();
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
  const [cardsFiltrados, setCardsFiltrados] = useState<Card[] | undefined>([]);
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
    const cardsFiltrados = cars?.results.filter((card) => {
      const brandMatch = updatedFiltro.brand
        ? card.brand === updatedFiltro.brand
        : true;
      const modelMatch = updatedFiltro.model
        ? card.model === updatedFiltro.model
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
    setCardsFiltrados(cardsFiltrados!); // Atualiza os cards filtrados no estado
    // Envia os cards filtrados para a função setCars
    // setCars(cardsFiltrados);
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
  const [brandsFiltrados, setBrandsFiltrados] = useState<string[]>([...new Set(cars?.results.map((card) => card.brand))]);
  const [modelsFiltrados, setmodelsFiltrados] = useState<string[]>([...new Set(cars?.results.map((card) => card.model))]);
  const [colorsFiltrados, setColorsFiltrados] = useState<string[]>([...new Set(cars?.results.map((card) => card.color))]);
  const [yearsFiltrados, setYearsFiltrados] = useState<string[]>([...new Set(cars?.results.map((card) => card.year))]);
  const [fuelsFiltrados, setFuelsFiltrados] = useState<string[]>([...new Set(cars?.results.map((card) => card.fuel))]);
  useEffect(() => {
    const filteredBrand = [
      ...new Set(
        cars?.results
          .filter((car) => {
            return (
              (!filtro.brand || car.brand === filtro.brand) &&
              (!filtro.model || car.model === filtro.model) &&
              (!filtro.color || car.color === filtro.color) &&
              (!filtro.year || car.year === filtro.year) &&
              (!filtro.fuel || car.fuel === filtro.fuel) &&
              (!filtro.km || car.km === filtro.km) &&
              (!filtro.price || car.price === filtro.price)
            );
          })
          .map((car) => car.brand)
      ),
    ];
    setBrandsFiltrados(filteredBrand);
    const filteredModels = [
      ...new Set(
        cars?.results
          .filter((car) => {
            return (
              (!filtro.brand || car.brand === filtro.brand) &&
              (!filtro.model || car.model === filtro.model) &&
              (!filtro.color || car.color === filtro.color) &&
              (!filtro.year || car.year === filtro.year) &&
              (!filtro.fuel || car.fuel === filtro.fuel) &&
              (!filtro.km || car.km === filtro.km) &&
              (!filtro.price || car.price === filtro.price)
            );
          })
          .map((car) => car.model)
      ),
    ];
    setmodelsFiltrados(filteredModels);
    const filteredColors = [
      ...new Set(
        cars?.results
          .filter((car) => {
            return (
              (!filtro.brand || car.brand === filtro.brand) &&
              (!filtro.model || car.model === filtro.model) &&
              (!filtro.color || car.color === filtro.color) &&
              (!filtro.year || car.year === filtro.year) &&
              (!filtro.fuel || car.fuel === filtro.fuel) &&
              (!filtro.km || car.km === filtro.km) &&
              (!filtro.price || car.price === filtro.price)
            );
          })
          .map((car) => car.color)
      ),
    ];
    setColorsFiltrados(filteredColors);
    const filteredYears = [
      ...new Set(
        cars?.results
          .filter((car) => {
            return (
              (!filtro.brand || car.brand === filtro.brand) &&
              (!filtro.model || car.model === filtro.model) &&
              (!filtro.color || car.color === filtro.color) &&
              (!filtro.year || car.year === filtro.year) &&
              (!filtro.fuel || car.fuel === filtro.fuel) &&
              (!filtro.km || car.km === filtro.km) &&
              (!filtro.price || car.price === filtro.price)
            );
          })
          .map((car) => car.year)
      ),
    ];
    setYearsFiltrados(filteredYears);
    const filteredFuels = [
      ...new Set(
        cars?.results
          .filter((car) => {
            return (
              (!filtro.brand || car.brand === filtro.brand) &&
              (!filtro.model || car.model === filtro.model) &&
              (!filtro.color || car.color === filtro.color) &&
              (!filtro.year || car.year === filtro.year) &&
              (!filtro.fuel || car.fuel === filtro.fuel) &&
              (!filtro.km || car.km === filtro.km) &&
              (!filtro.price || car.price === filtro.price)
            );
          })
          .map((car) => car.fuel)
      ),
    ];
    setFuelsFiltrados(filteredFuels);
  }, [filtro.brand, filtro.model, filtro.color, filtro.year, filtro.fuel, filtro.km, filtro.price, cars]);
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
          {brandsFiltrados.map((brand) => (
            <li
              key={brand}
              style={{
                display:
                  filtro.brand && filtro.brand !== brand ? "none" : "list-item",
              }}
              onClick={() => handleOptionSelect("brand", brand)}
            >
              <button onClick={(e) => e.preventDefault()}>
                {brand}
              </button>
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
                  filtro.model && filtro.model !== model ? "none" : "list-item",
              }}
              onClick={() => handleOptionSelect("model", model)}
            >
              <button onClick={(e) => e.preventDefault()}>
                {model}
              </button>
            </li>
          ))}
        </ul>
        <h2>Cor</h2>
        <ul>
          {colorsFiltrados.map((color) => (
            <li
              key={color}
              style={{
                display:
                  filtro.color && filtro.color !== color ? "none" : "list-item",
              }}
              onClick={() => handleOptionSelect("color", color)}
            >
              <button onClick={(e) => e.preventDefault()}>
                {color}
              </button>
            </li>
          ))}
        </ul>
        <h2>Ano</h2>
        <ul>
          {yearsFiltrados.map((year) => (
            <li
              key={year}
              style={{
                display:
                  filtro.year && filtro.year !== year ? "none" : "list-item",
              }}
              onClick={() => handleOptionSelect("year", year)}
            >
              <button onClick={(e) => e.preventDefault()}>
                {year}
              </button>
            </li>
          ))}
        </ul>
        <h2>Combustível</h2>
        <ul>
          {fuelsFiltrados.map((fuel) => (
            <li
              key={fuel}
              style={{
                display:
                  filtro.fuel && filtro.fuel !== fuel ? "none" : "list-item",
              }}
              onClick={() => handleOptionSelect("fuel", fuel)}
            >
              <a href="#" onClick={(e) => e.preventDefault()}>
                {fuel}
              </a>
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
    </StyledNav>
  );
};
export { Aside };