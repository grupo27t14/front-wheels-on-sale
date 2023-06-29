import { StyledButton } from "../../styles/button";
import { Form } from "../Form";
import { Input } from "../Input";
import { useAnnounce } from "../NewAnnounce/useAnnounce";
import { announceData } from "../NewAnnounce/schema";
import { useCar } from "../../hooks/useCar";
import { useEffect, useState } from "react";
import { iCarRes, iPaginationCars } from "../../contexts/CarContext/props";
import { useParams } from "react-router-dom";
import { useUsers } from "../../hooks/useUser";
import { EditCarImages, HStack } from "./styled";
import { RadioButtonDivStyles } from "../RadioButton/styles";
import { RadioButton } from "../RadioButton";
import { AiOutlineMinus, AiOutlineUndo } from "react-icons/ai";
import { api } from "../../services/api";
import { LoadingRing } from "../../styles/LoadingRing";

interface IProps {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  carId: string;
  setCars: React.Dispatch<
    React.SetStateAction<iPaginationCars | null | undefined>
  >;
}

const EditCar = ({ isModalOpen, setIsModalOpen, carId, setCars }: IProps) => {
  const { editCar, deleteCar, getCar } = useCar();
  const [car, setCar] = useState<iCarRes>();
  const { id } = useParams();
  const { getUserCars, reqLoading, setReqLoading } = useUsers();
  const [removeImages, setRemoveImages] = useState<string[]>([]);

  const { brands, carModel, errors, handleSubmit, models, register, setValue } =
    useAnnounce();

  const refreshUserCars = async () => {
    const res = await getCar(carId);
    setCar(res);
    if (id) {
      const cars = await getUserCars(id);
      setCars(cars);
    }
  };

  useEffect(() => {
    (async () => {
      const res = await getCar(carId);
      setCar(res);
      if (id) {
        const cars = await getUserCars(id);
        setCars(cars);
      }
    })();
  }, [carId, getCar, id, getUserCars, setCars]);

  useEffect(() => {
    if (car) {
      setValue("brand", car.brand);
      setValue("model", car.model);
      setValue("spec", car.spec);
      setValue("color", car.color);
      setValue("description", car.description);
      setValue("fipe", car.fipe);
      setValue("fuel", car.fuel);
      setValue("year", car.year);
      setValue("km", car.km);
      setValue("price", car.price);
    }
  }, [car, setValue]);

  const uploadImage = async (carID: string, imageFile: File) => {
    const formData = new FormData();
    formData.append("image", imageFile);

    await api.post(`/image/${carID}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  const handleCarDelete = async () => {
    await deleteCar(carId);
    await refreshUserCars();
    setIsModalOpen(!isModalOpen);
  };

  const handleDeleteImages = (imgId: string) => {
    if (!removeImages.includes(imgId)) {
      setRemoveImages([...removeImages, imgId]);
    }
    if (removeImages.includes(imgId)) {
      const array = [...removeImages];
      array.splice(array.indexOf(imgId), 1);
      setRemoveImages(array);
    }
  };

  const onSubmit = async (newData: announceData) => {
    setReqLoading(true);
    const image = newData.image as File[];
    Reflect.deleteProperty(newData, "image");

    try {
      // Formatar Marca/Modelo/Spec
      newData.brand =
        newData.brand.split("")[0].toUpperCase() + newData.brand.substring(1);
      newData.spec =
        newData.model.split("")[0].toUpperCase() + newData.model.substring(1);
      newData.model =
        newData.model.split(" ")[0].split("")[0].toUpperCase() +
        newData.model.split(" ")[0].substring(1);

      await editCar(newData, carId);

      if (car) {
        removeImages.forEach(async (imgId) => {
          await api.delete(`image/${imgId}/car/${car.id}`);
        });
        const res = Array.from(image).map(async (img) => {
          await uploadImage(car.id, img);
        });
        await Promise.all(res);
        await refreshUserCars();
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsModalOpen(!isModalOpen);
      setReqLoading(false);
    }
  };

  return (
    <Form
      title="Editar anúncio"
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
        <option value={car?.brand}>{car?.brand}</option>
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
        {...register("model")}
        onChange={(e) => setValue("model", e.target.value)}
      >
        <option value={car?.spec}>{car?.spec}</option>
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

      <h4>Publicado</h4>
      <RadioButtonDivStyles>
        <RadioButton
          id="published"
          label="Sim"
          value={1}
          defaultChecked={car?.is_published}
          {...register("is_published")}
        />
        <RadioButton
          id="not_published"
          label="Não"
          value={0}
          defaultChecked={!car?.is_published}
          {...register("is_published")}
        />
      </RadioButtonDivStyles>

      {car?.images.length ? <h4>Remover Imagens</h4> : ""}
      <EditCarImages>
        {car?.images.length
          ? car.images.map((img) => (
              <div key={img.id}>
                <button
                  type="button"
                  onClick={() => handleDeleteImages(img.id)}
                >
                  {removeImages.includes(img.id) ? (
                    <AiOutlineUndo />
                  ) : (
                    <AiOutlineMinus />
                  )}
                </button>
                <img src={img.url} alt="Imagem de carro" />
              </div>
            ))
          : ""}
      </EditCarImages>

      <Input
        id="image"
        label="Adicionar Imagens"
        placeholder="Adicione uma imágem aqui"
        type="file"
        multiple
        {...register("image")}
      />

      <HStack>
        <StyledButton
          buttonsize="big"
          buttonstyle="negative"
          onClick={handleCarDelete}
          type="button"
        >
          Excluir anúncio
        </StyledButton>
        <StyledButton buttonsize="form" buttonstyle="brand1" type="submit">
          {reqLoading ? <LoadingRing /> : "Salvar alterações"}
        </StyledButton>
      </HStack>
    </Form>
  );
};

export default EditCar;
