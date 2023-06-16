import { useForm } from "react-hook-form";
import { Input } from "../../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { announceData, announceSchema } from "./schema";
import { api, fipe } from "../../../services/api";
import { CarContext } from "../../../contexts/CarContext";
import { useContext, useEffect, useState } from "react";
import { ErrorMessage } from "../styles";
import { StyledForm } from "./styles";
import { StyledButton } from "../../../styles/button";
import { useParams } from "react-router-dom";
import { useUsers } from "../../../hooks/useUser";

interface modalProps {
  setIsModalOpen: any;
  isModalOpen: boolean;
  setCars: any;
}

export const NewAnnounce = ({
  setIsModalOpen,
  isModalOpen,
  setCars,
}: modalProps): JSX.Element => {
  const { createCar } = useContext(CarContext);
  const [brands, setBrands] = useState<string[]>([]);
  const [models, setModels] = useState<any[]>([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState<any>(null);

  const { getUserCars } = useUsers();

  const { id } = useParams();

  // VEICLES
  useEffect(() => {
    fipe
      .get("/cars")
      .then((response) => {
        const { data } = response;
        const brands = Object.keys(data);
        setBrands(brands);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onBrandChange = async (event: any) => {
    const selectedBrand = event.target.value;

    setSelectedBrand(selectedBrand);
    try {
      const response = await fipe.get(`/cars?brand=${selectedBrand}`);
      const models = response.data;

      setModels(models);
    } catch (error) {
      console.log(error);
    }
  };

  const onModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedModelId = event.target.value;
    const selectedModel = models.find((model) => model.id === selectedModelId);

    if (selectedModel) {
      setSelectedModel(selectedModel);
    } else {
      setSelectedModel(null);
    }
  };

  const getFuelType = (fuel: number) => {
    if (fuel === 1) {
      return "Gasolina";
    } else if (fuel === 2) {
      return "Diesel";
    } else if (fuel === 3) {
      return "Elétrico";
    }
    return "";
  };
  // END VEICLES

  // IMAGE
  const uploadImage = async (carID: string, imageFile: string | Blob) => {
    try {
      const formData = new FormData();
      formData.append("image", imageFile);

      const response = await api.post(`/image/${carID}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Imagem enviada com sucesso:", response.data);
    } catch (error) {
      console.error("Erro ao enviar a imagem:", error);
    }
  };

  const handleImageChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const file = event.target.files?.[0];
    const carID = selectedModel?.id || ""; // Usando o ID do modelo selecionado ou uma string vazia se não houver modelo selecionado

    console.log("carID", carID);

    if (file && carID) {
      uploadImage(carID, file);
    }
  };
  // END IMAGE

  // FORM
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<announceData>({
    resolver: zodResolver(announceSchema),
  });

  const onsubmit = async (data: announceData) => {
    try {
      await createCar(data);
      if (id) {
          const cars = await getUserCars(id);
        setCars(cars);
      }
      setIsModalOpen(!isModalOpen);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledForm title="Criar anúncio" onSubmit={handleSubmit(onsubmit)}>
      <h2>Criar Anúncio</h2>

      <h3>Informações do veículo</h3>

      <label>Marca</label>
      <select
        {...register("brand")}
        value={selectedBrand}
        onChange={onBrandChange}
      >
        <option value="">Selecione uma marca</option>
        {brands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>

      <label>Modelo</label>
      <select {...register("model")} onChange={onModelChange}>
        <option value="">Selecione um modelo</option>
        {models.map((model) => (
          <option key={model.id} value={model.id}>
            {model.name}
          </option>
        ))}
      </select>

      <div className="form__about-car">
        <div>
          <Input
            id="year"
            label="Ano"
            placeholder="Qual o Ano?"
            type="text"
            {...register("year")}
            disabled={selectedModel}
            value={selectedModel ? selectedModel.year : ""}
          />
          {errors.year && <ErrorMessage>{errors.year.message}</ErrorMessage>}
        </div>
        <div>
          <Input
            id="fuel"
            label="Combustível"
            placeholder="Qual o tipo de combustível?"
            type="text"
            className=""
            {...register("fuel")}
            disabled={selectedModel}
            value={selectedModel ? getFuelType(selectedModel.fuel) : ""}
          />
          {errors.fuel && <ErrorMessage>{errors.fuel.message}</ErrorMessage>}
        </div>

        <div>
          <Input
            id="km"
            label="Quilometragem"
            placeholder="Qual a Quilometragem?"
            type="text"
            className=""
            {...register("km")}
          />
          {errors.km && <ErrorMessage>{errors.km.message}</ErrorMessage>}
        </div>

        <div>
          <Input
            id="color"
            label="Cor"
            placeholder="Qual a Cor?"
            type="text"
            className=""
            {...register("color")}
          />
          {errors.color && <ErrorMessage>{errors.color.message}</ErrorMessage>}
        </div>

        <div>
          <Input
            id="fipe"
            label="Preço tabela FIPE"
            placeholder="Qual o valor Fipe?"
            type="text"
            className=""
            {...register("fipe")}
            disabled={selectedModel}
            value={selectedModel ? selectedModel.value : ""}
          />
          {errors.fipe && <ErrorMessage>{errors.fipe.message}</ErrorMessage>}
        </div>

        <div>
          <Input
            id="price"
            label="Preço"
            placeholder="Deseja vender por quanto?"
            type="text"
            className=""
            {...register("price")}
          />
          {errors.price && <ErrorMessage>{errors.price.message}</ErrorMessage>}
        </div>
      </div>

      <label>Descrição</label>
      <textarea
        id="description"
        placeholder="Faça uma breve descrição do veículo"
        {...register("description")}
      />
      {errors.description && (
        <ErrorMessage>{errors.description.message}</ErrorMessage>
      )}

      <Input
        id="image"
        label="Imagem da capa"
        placeholder="Adicione uma imágem aqui"
        type="file"
        onSubmit={handleImageChange}
      />
      {errors.description && (
        <ErrorMessage>{errors.description.message}</ErrorMessage>
      )}

      <div className="form__buttons">
        <StyledButton buttonsize="big" buttonstyle="negative">
          Cancelar
        </StyledButton>
        <StyledButton buttonsize="form" buttonstyle="brand1" type="submit">
          Criar anúncio
        </StyledButton>
      </div>
    </StyledForm>
  );
};
