import React, { useEffect, useState } from "react";
import { StyledNav } from "./style";
import { StyledButton } from "../../styles/button";

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

const Aside: React.FC<AsideProps> = ({ onSearch, onClick }): JSX.Element => {
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
      fuel: "Etanol",
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

  const marcas = [...new Set(cards.map((card) => card.brand))];
  const cores = [...new Set(cards.map((card) => card.color))];
  const anos = [...new Set(cards.map((card) => card.year))];
  const combustiveis = [...new Set(cards.map((card) => card.fuel))];

  const [filtro, setFiltro] = useState<Filtro>({
    marca: "",
    modelo: "",
    cor: "",
    ano: "",
    combustivel: "",
    kmMin: "",
    kmMax: "",
    priceMin: "",
    priceMax: "",
  });

  const [cardsFiltrados, setCardsFiltrados] = useState<Card[]>([]);

  const handleOptionSelect = (categoria: string, valor: string) => {
    setFiltro((prevFiltro) => ({
      ...prevFiltro,
      [categoria]: prevFiltro[categoria] === valor ? "" : valor,
    }));

    const updatedFiltro = {
      ...filtro,
      [categoria]: filtro[categoria] === valor ? "" : valor,
    };

    const cardsFiltrados = cards.filter((card) => {
      const marcaMatch = updatedFiltro.marca
        ? card.brand === updatedFiltro.marca
        : true;
      const modeloMatch = updatedFiltro.modelo
        ? card.name === updatedFiltro.modelo
        : true;
      const corMatch = updatedFiltro.cor
        ? card.color === updatedFiltro.cor
        : true;
      const anoMatch = updatedFiltro.ano
        ? card.year === updatedFiltro.ano
        : true;
      const combustivelMatch = updatedFiltro.combustivel
        ? card.fuel === updatedFiltro.combustivel
        : true;
      const kmMatch =
        updatedFiltro.kmMin !== "" && updatedFiltro.kmMax !== ""
          ? parseInt(card.km) >= parseInt(updatedFiltro.kmMin) &&
            parseInt(card.km) <= parseInt(updatedFiltro.kmMax)
          : true;
      const priceMatch =
        updatedFiltro.priceMin !== "" && updatedFiltro.priceMax !== ""
          ? parseInt(card.price) >= parseInt(updatedFiltro.priceMin) &&
            parseInt(card.price) <= parseInt(updatedFiltro.priceMax)
          : true;

      return (
        marcaMatch &&
        modeloMatch &&
        corMatch &&
        anoMatch &&
        combustivelMatch &&
        kmMatch &&
        priceMatch
      );
    });

    setCardsFiltrados(cardsFiltrados);
  };

  const handleCategoriaClick = (categoria: string) => {
    setFiltro((prevFiltro) => ({
      ...prevFiltro,
      [categoria]: "",
    }));

    if (categoria === "marca") {
      setModelosFiltrados([...new Set(cards.map((card) => card.name))]);
    }
  };

  const handleSearch = () => {
    onSearch(filtro);
  };

  const handleLimparFiltros = () => {
    setFiltro({
      marca: "",
      modelo: "",
      cor: "",
      ano: "",
      combustivel: "",
      kmMin: "",
      kmMax: "",
      priceMin: "",
      priceMax: "",
    });

    setCardsFiltrados([]);
  };

  const [modelosFiltrados, setModelosFiltrados] = useState<string[]>([]);

  useEffect(() => {
    if (filtro.marca) {
      const modelosFiltrados = [
        ...new Set(
          cards
            .filter((card) => card.brand === filtro.marca)
            .map((card) => card.name)
        ),
      ];
      setModelosFiltrados(modelosFiltrados);
    } else {
      setModelosFiltrados([...new Set(cards.map((card) => card.name))]);
    }
  }, [filtro.marca, cards]);

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
        <h2>MARCA</h2>
        <ul>
          {marcas.map((marca) => (
            <li
              key={marca}
              style={{
                display:
                  filtro.marca && filtro.marca !== marca ? "none" : "list-item",
              }}
              onClick={() => handleOptionSelect("marca", marca)}
            >
              <a href="#">{marca}</a>
            </li>
          ))}
        </ul>

        <h2>MODELO</h2>
        <ul>
          {modelosFiltrados.map((modelo) => (
            <li
              key={modelo}
              style={{
                display:
                  filtro.modelo && filtro.modelo !== modelo
                    ? "none"
                    : "list-item",
              }}
              onClick={() => handleOptionSelect("modelo", modelo)}
            >
              <a href="#">{modelo}</a>
            </li>
          ))}
        </ul>

        <h2>CORES</h2>
        <ul>
          {cores.map((cor) => (
            <li
              key={cor}
              style={{
                display:
                  filtro.cor && filtro.cor !== cor ? "none" : "list-item",
              }}
              onClick={() => handleOptionSelect("cor", cor)}
            >
              <a href="#">{cor}</a>
            </li>
          ))}
        </ul>

        <h2>ANOS</h2>
        <ul>
          {anos.map((ano) => (
            <li
              key={ano}
              style={{
                display:
                  filtro.ano && filtro.ano !== ano ? "none" : "list-item",
              }}
              onClick={() => handleOptionSelect("ano", ano)}
            >
              <a href="#">{ano}</a>
            </li>
          ))}
        </ul>

        <h2>COMBUSTÍVEIS</h2>
        <ul>
          {combustiveis.map((combustivel) => (
            <li
              key={combustivel}
              style={{
                display:
                  filtro.combustivel && filtro.combustivel !== combustivel
                    ? "none"
                    : "list-item",
              }}
              onClick={() => handleOptionSelect("combustivel", combustivel)}
            >
              <a href="#">{combustivel}</a>
            </li>
          ))}
        </ul>

        <h2>KM</h2>
        <div className="inputDiv">
          <input
            type="number"
            placeholder="Mínimo"
            value={filtro.kmMin}
            onChange={(e) => setFiltro({ ...filtro, kmMin: e.target.value })}
          />
          <input
            type="number"
            placeholder="Máximo"
            value={filtro.kmMax}
            onChange={(e) => setFiltro({ ...filtro, kmMax: e.target.value })}
          />
        </div>

        <h2>PRICE</h2>
        <div className="inputDiv">
          <input
            type="number"
            placeholder="Mínimo"
            value={filtro.priceMin}
            onChange={(e) => setFiltro({ ...filtro, priceMin: e.target.value })}
          />
          <input
            type="number"
            placeholder="Máximo"
            value={filtro.priceMax}
            onChange={(e) => setFiltro({ ...filtro, priceMax: e.target.value })}
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
  <p>Marca: {card.brand}</p>
  <p>Ano: {card.year}</p>
  <p>Cor: {card.color}</p>
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
