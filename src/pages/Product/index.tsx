import { Avatar, StyledContainer } from "../../styles/global";
import { theme } from "../../styles/theme";
import { StyledButton } from "../../styles/button";
import {
  PageContainer,
  SectionsContainer,
  CarInfoContainer,
  Tag,
  GalleryGrid,
  CommentsList,
  CommentTextarea,
  ModalImg,
  PageStyled,
} from "./style";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCar } from "../../hooks/useCar";
import { iCarRes } from "../../contexts/CarContext/props";
import { Modal } from "../../components/Modal";

const Products = () => {
  const { id } = useParams();
  const { getCar } = useCar();
  const [curCar, setCurCar] = useState<iCarRes | undefined>();
  const [isOpen, setIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState("");

  const nameSub = curCar?.user.name
    .split(" ")
    .map((letter: string, index: number) => {
      if (index === 0 || index === curCar.user?.name.split(" ").length - 1) {
        return letter[0].toUpperCase();
      }
    })
    .join("");

  const openModal = (img: string) => {
    setIsOpen(true);
    setModalImg(img);
  };

  useEffect(() => {
    const getCurCar = async () => {
      const car: iCarRes | undefined = await getCar(id);
      setCurCar(car);
    };

    getCurCar();
  }, []);

  return (
    <PageStyled>
      <StyledContainer className="container">
        <PageContainer>
          <div>
            <SectionsContainer className="container__img">
              <img src={curCar?.images[0].url} />
            </SectionsContainer>
            <SectionsContainer>
              <CarInfoContainer>
                <h6 className="heading6">
                  {curCar?.brand} - {curCar?.model}{" "}
                </h6>
                <div className="carInfos">
                  <div>
                    <Tag>{curCar?.year}</Tag>
                    <Tag>{curCar?.km}km</Tag>
                  </div>
                  <h6 className="heading7">
                    {Number(curCar?.price).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </h6>
                </div>
                <StyledButton buttonstyle="brand1" buttonsize="fit">
                  Compar
                </StyledButton>
              </CarInfoContainer>
            </SectionsContainer>
            <SectionsContainer>
              <h6 className="heading6">Descrição</h6>
              <p>{curCar?.description}</p>
            </SectionsContainer>
          </div>
          <aside className="containerSticky">
            <SectionsContainer>
              <div>
                <h6 className="heading6">Fotos</h6>
                <GalleryGrid>
                  {curCar?.images.map((img) => (
                    <li
                      className="imgContainer"
                      key={img.id}
                      onClick={() => openModal(img.url)}
                    >
                      <img src={img.url} />
                    </li>
                  ))}
                </GalleryGrid>
              </div>
            </SectionsContainer>
            <SectionsContainer>
              <Avatar className="avatarProfileBig" $bg={curCar?.user.avatar_bg}>
                {nameSub}
              </Avatar>
              <div className="sellerInfos">
                <h6 className="heading6">{curCar?.user.name}</h6>
                <p>{curCar?.user.personalInformation?.description}</p>
                <Link to={`/profile/${curCar?.user.id}`}>
                  Ver todos anúncios
                </Link>
              </div>
            </SectionsContainer>
          </aside>
          <div>
            <SectionsContainer>
              <h6 className="heading6">Comentários</h6>
              <ul>
                <CommentsList>
                  <div>
                    <Avatar className="avatar" $bg={curCar?.user.avatar_bg}>
                      GL
                    </Avatar>
                    <p className="commentUsername">Gustavo Lima</p>
                    <span className="commentTime">•</span>
                    <p className="commentTime">há 3 dias</p>
                  </div>
                  <p className="">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </CommentsList>
              </ul>
              <CommentTextarea>
                <div>
                  <Avatar className="avatar" $bg={theme.colors.random1}>
                    GL
                  </Avatar>
                  <p className="commentUsername">Gustavo Lima</p>
                </div>
                <form className="textContainer">
                  <textarea name="comment" id="comment" rows={10}></textarea>
                  <StyledButton buttonstyle="brand1" buttonsize="fit">
                    Comentar
                  </StyledButton>
                </form>
              </CommentTextarea>
            </SectionsContainer>
          </div>
          {isOpen ? (
            <Modal toggleModal={() => setIsOpen(false)}>
              <ModalImg src={modalImg} alt="Imagem do carro" />
            </Modal>
          ) : null}
        </PageContainer>
      </StyledContainer>
    </PageStyled>
  );
};

export default Products;
