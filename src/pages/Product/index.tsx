import { Avatar, StyledContainer } from "../../styles/global";
import { StyledButton } from "../../styles/button";
import {
  PageContainer,
  SectionsContainer,
  CarInfoContainer,
  Tag,
  GalleryGrid,
  ModalImg,
  PageStyled,
  UnorderedList,
} from "./styled";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCar } from "../../hooks/useCar";
import { iCarRes } from "../../contexts/CarContext/props";
import { Modal } from "../../components/Modal";
import { api } from "../../services/api";
import { tcommentResponse, tnewComment } from "./schemas";
import UpdateComment from "../../components/Comment/UpdateComment";
import DeleteComment from "../../components/Comment/DeleteComment";
import CreateComment from "../../components/Comment/CreateComment";
import CardComment from "../../components/Comment/CardComment";

const Products = () => {
  const { id } = useParams();
  const { getCar } = useCar();
  const [singleCar, setSingleCar] = useState<iCarRes | undefined>();
  const [isOpen, setIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const [comments, setComments] = useState<tcommentResponse>(
    [] as tcommentResponse
  );
  const [oneComment, setOneComment] = useState<tnewComment>({} as tnewComment);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

  useEffect(() => {
    const getCurCar = async () => {
      const car: iCarRes | undefined = await getCar(id);
      setSingleCar(car);

      const { data } = await api.get<tcommentResponse>(`comments/${id}`);
      setComments(data.reverse());
    };

    getCurCar();
  }, [getCar, id]);

  const nameSub = (nameSurname: string) => {
    return nameSurname
      .split(" ")
      .map((letter: string, index: number) => {
        if (index === 0 || index === nameSurname.split(" ").length - 1) {
          return letter[0].toUpperCase();
        }
      })
      .join("");
  };

  const openModal = (img: string) => {
    setIsOpen(true);
    setModalImg(img);
  };

  const handleDeleteOpenModal = () => {
    setIsModalDeleteOpen(!isModalDeleteOpen);
  };

  const handleEditOpenModal = () => {
    setIsModalEditOpen(!isModalEditOpen);
  };

  const handleClickWhatsapp = () => {
    const userData = {
      whatsappNumber: singleCar?.user?.personalInformation?.phone,
    };

    if (userData.whatsappNumber) {
      const whatsappLink = `https://api.whatsapp.com/send?phone=+55${userData.whatsappNumber}&text=Ol%C3%A1%20me%20interessei%20pelo%20seu%20ve%C3%ADculo%20e%20gostaria%20de%20compr%C3%A1-lo`;

      window.open(whatsappLink, "_blank");
    }
  };

  return (
    <PageStyled>
      {isModalDeleteOpen && (
        <Modal toggleModal={handleDeleteOpenModal}>
          <DeleteComment
            oneComment={oneComment}
            isModalDeleteOpen={isModalDeleteOpen}
            setIsModalDeleteOpen={setIsModalDeleteOpen}
            comments={comments}
            setComments={setComments}
          />
        </Modal>
      )}

      {isModalEditOpen && (
        <Modal toggleModal={handleEditOpenModal}>
          <UpdateComment
            oneComment={oneComment}
            isModalEditOpen={isModalEditOpen}
            setIsModalEditOpen={setIsModalEditOpen}
            setComments={setComments}
          />
        </Modal>
      )}

      <StyledContainer className="container">
        <PageContainer>
          <div>
            <SectionsContainer className="container__img">
              <img src={singleCar?.images[0].url} />
            </SectionsContainer>
            <SectionsContainer>
              <CarInfoContainer>
                <h6 className="heading6">
                  {singleCar?.brand} - {singleCar?.model}
                </h6>
                <div className="carInfos">
                  <div>
                    <Tag>{singleCar?.year}</Tag>
                    <Tag>{singleCar?.km}km</Tag>
                  </div>
                  <h6 className="heading7">
                    {Number(singleCar?.price).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </h6>
                </div>
                <StyledButton
                  buttonstyle="brand1"
                  buttonsize="fit"
                  onClick={handleClickWhatsapp}
                >
                  Comprar
                </StyledButton>
              </CarInfoContainer>
            </SectionsContainer>
            <SectionsContainer>
              <h6 className="heading6">Descrição</h6>
              <p>{singleCar?.description}</p>
            </SectionsContainer>
          </div>
          <aside className="containerSticky">
            <SectionsContainer>
              <div>
                <h6 className="heading6">Fotos</h6>
                <GalleryGrid>
                  {singleCar?.images.map((img) => (
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
              <Avatar
                className="avatarProfileBig"
                $bg={singleCar?.user.avatar_bg}
              >
                {singleCar && `${nameSub(singleCar.user?.name)}`}
              </Avatar>
              <div className="sellerInfos">
                <h6 className="heading6">{singleCar?.user.name}</h6>
                <p>{singleCar?.user.personalInformation?.description}</p>
                <Link to={`/profile/${singleCar?.user.id}`}>
                  Ver todos anúncios
                </Link>
              </div>
            </SectionsContainer>
          </aside>
          <div>
            <SectionsContainer>
              <h6 className="heading6">Comentários</h6>
              <UnorderedList>
                {comments.map((comment) => (
                  <CardComment
                    key={comment.id}
                    comment={comment}
                    setOneComment={setOneComment}
                    isModalEditOpen={isModalEditOpen}
                    setIsModalEditOpen={setIsModalEditOpen}
                    isModalDeleteOpen={isModalDeleteOpen}
                    setIsModalDeleteOpen={setIsModalDeleteOpen}
                  />
                ))}
              </UnorderedList>
            </SectionsContainer>

            <SectionsContainer>
              <CreateComment comments={comments} setComments={setComments} />
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
