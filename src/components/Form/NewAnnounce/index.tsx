import { useForm } from "react-hook-form";
import { Input } from "../../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { announceData, announceSchema } from "./schema";
import { api, fipe } from "../../../services/api";
import { CarContext } from "../../../contexts/CarContext";
import { useContext, useEffect, useState } from "react";
import { ErrorMessage } from "../styles";
import { StyledButton } from "../../../styles/button";
import { useParams } from "react-router-dom";
import { useUsers } from "../../../hooks/useUser";
import { Form } from "..";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<announceData>({
    resolver: zodResolver(announceSchema),
  });

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
    const selectedModel = models.find(
      (model) => model.name === selectedModelId
    );

    if (selectedModel) {
      setSelectedModel(selectedModel);
      setValue("fipe", selectedModel.value.toString());
      setValue("year", selectedModel.year.toString());
      setValue("fuel", getFuelType(selectedModel.fuel));
    } else {
      setSelectedModel(null);
      setValue("fipe", "");
      setValue("year", "");
      setValue("fuel", "");
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

  const uploadImage = async (carID: string, imageFile: any) => {
    try {
      const formData = new FormData();
      formData.append("image", imageFile[0]);

      const response = await api.post(`/image/${carID}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

    } catch (error) {
      console.error("Erro ao enviar a imagem:", error);
    }
  };

  const onsubmit = async (newData: announceData) => {
    const image = newData.image;
    Reflect.deleteProperty(newData, "image");

    try {
      const carData = await createCar(newData);
      await uploadImage(carData.id, image);

      if (id) {
        const cars = await getUserCars(id);
        setCars(cars);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsModalOpen(!isModalOpen);
    }
  };

  return (
    <Form
      title="Criar anúncio"
      onSubmit={handleSubmit(onsubmit)}
      margin="0"
      padding="0"
      width="100%"
    >
      <h4>Informações do veículo</h4>

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
          <option key={model.id} value={model.name}>
            {model.name}
          </option>
        ))}
      </select>

      <div>
        <Input
          id="year"
          label="Ano"
          placeholder="Qual o Ano?"
          type="text"
          {...register("year")}
          value={selectedModel ? selectedModel.year.toString() : ""}
          disabled={selectedModel}
        />
        {errors.year && <ErrorMessage>{errors.year.message}</ErrorMessage>}
        <Input
          id="fuel"
          label="Combustível"
          placeholder="Qual o tipo de combustível?"
          type="text"
          className=""
          {...register("fuel")}
          value={selectedModel ? getFuelType(selectedModel.fuel) : ""}
          disabled={selectedModel}
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
          value={selectedModel ? selectedModel.value.toString() : ""}
          disabled={selectedModel}
        />
        {errors.fipe && <ErrorMessage>{errors.fipe.message}</ErrorMessage>}

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

      <label>Descrição</label>
      <textarea
        id="description"
        placeholder="Faça uma breve descrição do veículo"
        {...register("description")}
      />

      <Input
        id="image"
        label="Imagem da capa"
        placeholder="Adicione uma imágem aqui"
        type="file"
        {...register("image")}
      />
      {errors.image && <ErrorMessage>{errors.image.message}</ErrorMessage>}

      <div className="form__buttons">
        <StyledButton buttonsize="big" buttonstyle="negative">
          Cancelar
        </StyledButton>
        <StyledButton buttonsize="form" buttonstyle="brand1" type="submit">
          Criar anúncio
        </StyledButton>
      </div>
    </Form>
  );
};

