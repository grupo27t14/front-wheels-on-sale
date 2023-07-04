import { Link, useLocation, useParams } from "react-router-dom";
import { iCarRes, iPaginationCars } from "../../contexts/CarContext/props";
import { useUsers } from "../../hooks/useUser";
import { Avatar } from "../../styles/global";
import { Section, Box, Img, Title, Text, Flex, VStack } from "./styled";
import { BsCurrencyDollar } from "react-icons/bs";
import { StyledButton } from "../../styles/button";
import { useState } from "react";
import { Modal } from "../Modal";
import EditCar from "../EditCar";
import ConfirmDeletion from "../Modal/ConfirmDeletion";
import { useCar } from "../../hooks/useCar";

interface ICarProps {
  car: iCarRes;
  setCars?: React.Dispatch<
    React.SetStateAction<iPaginationCars | null | undefined>
  >;
}

const Card = ({ car, setCars }: ICarProps): JSX.Element => {
  const { id } = useParams();
  const { deleteCar } = useCar();
  const { pathname } = useLocation();
  const { user, getUserCars } = useUsers();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDeleteAnuncioOpen, setIsModalDeleteAnuncioOpen] =
    useState(false);

  const path = pathname.substring(1, 8);

  const nomeESobrenome = car.user?.name
    .split(" ")
    .map((letter: string, index: number) => {
      if (index === 0 || index === car.user?.name.split(" ").length - 1) {
        return letter[0].toUpperCase();
      }
    })
    .join("");

  const handleCarDelete = async () => {
    await deleteCar(car.id);
    if (id) {
      const cars = await getUserCars(id);
      if (setCars) {
        setCars(cars);
      }
    }
    setIsModalDeleteAnuncioOpen(!isModalDeleteAnuncioOpen);
  };

  const handleDeleteAnuncioOpenModal = () => {
    setIsModalDeleteAnuncioOpen(!isModalDeleteAnuncioOpen);
  };

  const openOrCloseModalOfDeleteAd = () => {
    setIsModalDeleteAnuncioOpen(!isModalDeleteAnuncioOpen);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Section>
      {isModalDeleteAnuncioOpen && (
        <Modal toggleModal={handleDeleteAnuncioOpenModal}>
          <ConfirmDeletion
            title="Excluir anúncio"
            subtitulo="Tem certeza que deseja remover este anúncio?"
            text="Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores."
            text_btn_1="Cancelar"
            text_btn_2="Sim, excluir anúncio"
            onClick1={handleDeleteAnuncioOpenModal}
            onClick2={handleCarDelete}
          />
        </Modal>
      )}

      <Box className="card__img">
        {user && user?.is_seller && path === "profile" && (
          <Box>
            {user?.id === id && car.is_published ? (
              <Box className="card__published--Active">Ativo</Box>
            ) : (
              <Box className="card__published--Inactive">Inativo</Box>
            )}
          </Box>
        )}

        {car.is_promo && <BsCurrencyDollar />}
        <Link
          to={user && user?.id === id ? "" : `/product/${car.id}`}
          style={
            user && user?.id === id
              ? { cursor: "unset" }
              : { cursor: "pointer" }
          }
        >
          <Img src={car.images.length > 0 ? car.images[0]?.url : "/pneu.png"} alt={car.brand} />
        </Link>
      </Box>
      <Box className="card__info">
        <Title>
          {car.brand} - {car.model}
        </Title>
        <h4>{car.spec}</h4>
        <Text className="card__info--text">{car.description}</Text>
        <Flex className="card__info--advertiser">
          <Avatar className="avatar" $bg={car.user?.avatar_bg}>
            {nomeESobrenome}
          </Avatar>
          <Text className="card__info--name">{car.user?.name}</Text>
        </Flex>

        <VStack>
          <Flex className="card__info--tags">
            <Box className="card__info--subTag">{car.km} KM</Box>
            <Box className="card__info--subTag">{car.year}</Box>
          </Flex>
          <Text className="card__info--price">
            {car.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </Text>
        </VStack>

        {user && user?.is_seller && user?.id === id && (
          <VStack className="card__btn">
            <StyledButton
              buttonstyle="outline_brand"
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              Editar
            </StyledButton>
            <StyledButton buttonstyle="outline_brand">
              <Link to={`/product/${car.id}`}>Ver detalhes</Link>
            </StyledButton>
          </VStack>
        )}
      </Box>
      {isModalOpen && (
        <Modal
          toggleModal={() => {
            setIsModalOpen(!isModalOpen);
          }}
        >
          <EditCar
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
            carId={car.id}
            setCars={setCars}
            openOrCloseModalOfDeleteAd={openOrCloseModalOfDeleteAd}
          />
        </Modal>
      )}
    </Section>
  );
};

export default Card;
