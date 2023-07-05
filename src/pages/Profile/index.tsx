import { useParams } from "react-router-dom";
import { StyledButton } from "../../styles/button";
import { Avatar, StyledContainer } from "../../styles/global";
import { Main, ProductsContainer, ProfileContainer } from "./styled";
import { useUsers } from "../../hooks/useUser";
import { useEffect, useState } from "react";
import { iPaginationCars } from "../../contexts/CarContext/props";
import Card from "../../components/Card";
import { Modal } from "../../components/Modal";
import { NewAnnounce } from "../../components/NewAnnounce";
import ConfirmDeletion from "../../components/Modal/ConfirmDeletion";
import { light } from "../../styles/theme";
import { api } from "../../services/api";
import { PaginationButtons } from "../../components/PaginationButtons";

export const Profile = () => {
  const { id } = useParams();
  const { user, getUserCars } = useUsers();
  const [cars, setCars] = useState<iPaginationCars | null>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePagination = async (page: string) => {
    const url = page === "next" ? cars?.next : cars?.previous;

    if (url) {
      const splitedUrl = url.split("/");
      splitedUrl.shift();
      const req = splitedUrl.join("/");
      const { data } = await api.get<iPaginationCars>(req);
      window.scrollTo({ top: 100, behavior: "smooth" });
      setCars(data);
    }
  };

  useEffect(() => {
    (async () => {
      if (id) {
        const cars = await getUserCars(id);
        setCars(cars);
      }
    })();
  }, [id, getUserCars]);

  const name =
    user?.is_seller && user.id === id ? user.name : cars?.results[0].user?.name;

  let nomeESobrenome = "";

  if (name) {
    nomeESobrenome = name
      .split(" ")
      .map((letter, index) => {
        if (index === 0 || index === name.split(" ").length - 1) {
          return letter[0].toUpperCase();
        }
      })
      .join("");
  }

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [modalSuccessfullyRegistered, setIsModalSuccessfullyRegistered] =
    useState(false);

  const handleSuccessfullyRegisteredOpenModal = () => {
    setIsModalSuccessfullyRegistered(!modalSuccessfullyRegistered);
  };

  return (
    <Main>
      {modalSuccessfullyRegistered && (
        <Modal toggleModal={handleSuccessfullyRegisteredOpenModal}>
          <ConfirmDeletion
            title="Sucesso!"
            subtitulo="Seu anúncio foi criado com sucesso!"
            text="Agora você poderá ver seus negócios crescendo em grande escala"
            visible="sim"
            color={`${light.pallete.feedback.sucess1}`}
            handleOpenModal={handleSuccessfullyRegisteredOpenModal}
          />
        </Modal>
      )}

      <StyledContainer className="main container">
        <ProfileContainer>
          <Avatar
            className="avatarProfileBig"
            $bg={
              user?.is_seller && user.id === id
                ? user.avatar_bg
                : cars?.results[0].user.avatar_bg
            }
          >
            {nomeESobrenome}
          </Avatar>
          <div className="profileName">
            <h6 className="heading6">
              {user?.is_seller && user.id === id
                ? user.name
                : cars?.results[0].user.name}
            </h6>
            <span className="sellerTag">Anunciante</span>
          </div>
          <p>
            {user?.is_seller && user.id === id
              ? user.personalInformation.description
              : cars?.results[0].user.personalInformation?.description}
          </p>

          {user?.is_seller && user.id === id && (
            <StyledButton
              buttonstyle="outline_brand"
              buttonsize="fit"
              onClick={handleOpenModal}
            >
              Criar Anúncio
            </StyledButton>
          )}
        </ProfileContainer>
        <ProductsContainer>
          <h5 className="heading5">Anúncios</h5>

          <ul className="productsGrid">
            {cars?.results.map((car) => (
              <li className="productsGrid__item" key={car.id}>
                <Card car={car} setCars={setCars} />
              </li>
            ))}
          </ul>
        </ProductsContainer>
        <PaginationButtons handlePagination={handlePagination} cars={cars!} />
      </StyledContainer>

      {isModalOpen && (
        <Modal toggleModal={handleOpenModal}>
          <NewAnnounce
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
            setCars={setCars}
            modalSuccessfullyRegistered={modalSuccessfullyRegistered}
            setIsModalSuccessfullyRegistered={setIsModalSuccessfullyRegistered}
          />
        </Modal>
      )}
    </Main>
  );
};
