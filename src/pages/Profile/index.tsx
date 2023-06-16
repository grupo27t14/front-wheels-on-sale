import { useParams } from "react-router-dom";
import { StyledButton } from "../../styles/button";
import { Avatar, PageStyled } from "../../styles/global";
import { ProductsContainer, ProfileContainer } from "./style";
import { useUsers } from "../../hooks/useUser";
import { useEffect, useState } from "react";
import { iPaginationCars } from "../../contexts/CarContext/props";
import Card from "../../components/Card";
import { Modal } from "../../components/Modal";
import { NewAnnounce } from "../../components/Form/NewAnnounce";

export const Profile = () => {
  const { id } = useParams();
  const { user, getUserCars } = useUsers();
  const [cars, setCars] = useState<iPaginationCars | null>();
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    (async () => {
      if (id) {
        const cars = await getUserCars(id);
        setCars(cars);
      }
    })();
  }, []);

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
    setIsModalOpen(!isModalOpen)
  }

  return (
    <PageStyled>
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
          <StyledButton buttonstyle="outline_brand" buttonsize="fit" onClick={handleOpenModal}>
            Criar Anúncio
          </StyledButton>
        )}
      </ProfileContainer>
      <ProductsContainer>
        <h5 className="heading5">Anúncios</h5>

        <ul className="productsGrid">
          {cars?.results.map((car) => (
            <li key={car.id}>
              <Card car={car} />
            </li>
          ))}
        </ul>
      </ProductsContainer>

      {isModalOpen && (
        <Modal toggleModal={handleOpenModal}>
          <NewAnnounce setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} setCars={setCars} />
        </Modal>
      )}
    </PageStyled>
  );
};
