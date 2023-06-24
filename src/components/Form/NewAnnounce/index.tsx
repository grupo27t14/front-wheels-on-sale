import { Input } from "../../Input";
import { announceData } from "./schema";
import { api } from "../../../services/api";
import { CarContext } from "../../../contexts/CarContext";
import { useContext } from "react";
import { StyledButton } from "../../../styles/button";
import { useParams } from "react-router-dom";
import { useUsers } from "../../../hooks/useUser";
import { Form } from "..";
import { useAnnounce } from "./useAnnounce";
import { modalProps } from "./props";
import { iCarRes } from "../../../contexts/CarContext/props";

export const NewAnnounce = ({
  setIsModalOpen,
  isModalOpen,
  setCars,
}: modalProps): JSX.Element => {
  const { createCar } = useContext(CarContext);

  const { getUserCars } = useUsers();

  const { id } = useParams();

  const {
    errors,
    handleSubmit,
    register,
    brands,
    models,
    setValue,
    carModel,
    carBrand,
  } = useAnnounce();

  const uploadImage = async (carID: string, imageFile: File[]) => {
    try {
      const formData = new FormData();
      formData.append("image", imageFile[0]);

      await api.post(`/image/${carID}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error("Erro ao enviar a imagem:", error);
    }
  };

  const onSubmit = async (newData: announceData) => {
    const image = newData.image as File[];
    Reflect.deleteProperty(newData, "image");
    setIsModalOpen(!isModalOpen);

    // Formatar Marca/Modelo/Spec
    newData.brand =
      newData.brand.split("")[0].toUpperCase() + newData.brand.substring(1);
    newData.spec =
      newData.model.split("")[0].toUpperCase() + newData.model.substring(1);
    newData.model =
      newData.model.split(" ")[0].split("")[0].toUpperCase() +
      newData.model.split(" ")[0].substring(1);

    try {
      const carData = (await createCar(newData)) as iCarRes;
      await uploadImage(carData.id, image);

      if (id) {
        const cars = await getUserCars(id);
        setCars(cars);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form
      title="Criar anúncio"
      onSubmit={handleSubmit(onSubmit)}
      margin="0"
      padding="0"
      width="100%"
    >
      <h4>Informações do veículo</h4>

      <label>Marca</label>
      <select
        className={errors.brand ? "err" : ""}
        {...register("brand")}
        onChange={(e) => setValue("brand", e.target.value)}
      >
        <option value="">
          {brands ? "Selecione uma marca" : "carregando..."}
        </option>
        {brands &&
          brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
      </select>
      <label>Modelo</label>
      <select
        className={errors.model ? "err" : ""}
        {...register("model", {
          disabled: carBrand ? false : true,
        })}
        onChange={(e) => setValue("model", e.target.value)}
      >
        <option value="">
          {models ? "Selecione um modelo" : "carregando..."}
        </option>
        {models &&
          models.map((model) => {
            return (
              <option key={model.id} value={model.name}>
                {model.name}
              </option>
            );
          })}
      </select>
      <div>
        <Input
          id="year"
          label="Ano"
          placeholder="Qual o Ano?"
          type="text"
          readOnly={carModel ? true : false}
          {...register("year")}
        />
        <Input
          id="fuel"
          label="Combustível"
          placeholder="Qual o tipo de combustível?"
          type="text"
          readOnly={carModel ? true : false}
          {...register("fuel")}
        />
      </div>
      <div>
        <Input
          id="km"
          label="Quilometragem"
          placeholder="Qual a Quilometragem?"
          type="number"
          className={errors.km ? "err" : ""}
          errorMessage={errors.km?.message}
          {...register("km")}
          required
        />
        <Input
          id="color"
          label="Cor"
          placeholder="Qual a Cor?"
          type="text"
          className={errors.color ? "err" : ""}
          errorMessage={errors.color?.message}
          {...register("color")}
          required
        />
      </div>
      <div>
        <Input
          id="fipe"
          label="Preço tabela FIPE"
          placeholder="Qual o valor Fipe?"
          type="text"
          readOnly={carModel ? true : false}
          {...register("fipe")}
        />
        <Input
          id="price"
          label="Preço"
          placeholder="Deseja vender por quanto?"
          type="number"
          className={errors.price ? "err" : ""}
          errorMessage={errors.price?.message}
          {...register("price")}
          required
        />
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

      <div className="flex_end">
        <StyledButton
          buttonsize="big"
          buttonstyle="negative"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          Cancelar
        </StyledButton>
        <StyledButton buttonsize="form" buttonstyle="brand1" type="submit">
          Criar anúncio
        </StyledButton>
      </div>
    </Form>
  );
};
