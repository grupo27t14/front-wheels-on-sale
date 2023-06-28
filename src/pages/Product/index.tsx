import { Avatar, StyledContainer } from "../../styles/global";
import { StyledButton } from "../../styles/button";
import {
  PageContainer,
  SectionsContainer,
  CarInfoContainer,
  Tag,
  GalleryGrid,
  CommentsList,
  ModalImg,
  PageStyled,
} from "./style";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCar } from "../../hooks/useCar";
import { iCarRes } from "../../contexts/CarContext/props";
import { Modal } from "../../components/Modal";
import { useUsers } from "../../hooks/useUser";
import { tcommentResponse, tnewComment } from "./schemas";
import { api } from "../../services/api";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import UpdateComment from "../../components/Comment/UpdateComment";
import DeleteComment from "../../components/Comment/DeleteComment";
import Comment from "../../components/Comment/CreateComment";

const Products = () => {
  const { id } = useParams();
  const { getCar } = useCar();
  const { user } = useUsers();
  const [singleCar, setSingleCar] = useState<iCarRes | undefined>();
  const [isOpen, setIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const [comment, setComment] = useState<tcommentResponse>(
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
      setComment(data.reverse());
    };

    getCurCar();
  }, []);

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

  const modalDeleteComment = (data: tnewComment) => {
    setOneComment(data);
    setIsModalDeleteOpen(!isModalDeleteOpen);
  };

  const modalEditComment = (data: tnewComment) => {
    setOneComment(data);
    setIsModalEditOpen(!isModalEditOpen);
  };

  const newDate = (date: string) => {
    const dataAtual = new Date();
    const dataInformada = new Date(date);

    const milissegundosPorDia = 1000 * 24 * 60 * 60;

    const diferencaEmDias = Math.floor(
      (dataAtual.getTime() - dataInformada.getTime()) / milissegundosPorDia
    );

    const mesesPassados = Math.floor(diferencaEmDias / 30);

    if (diferencaEmDias < 30) {
      if (diferencaEmDias === 0) {
        return "hoje";
      }
      return "há " + diferencaEmDias + " dias";
    }

    return "há " + mesesPassados + " mês";
  };

  return (
    <PageStyled>
      {isModalDeleteOpen && (
        <Modal toggleModal={handleDeleteOpenModal}>
          <DeleteComment
            oneComment={oneComment}
            isModalDeleteOpen={isModalDeleteOpen}
            setIsModalDeleteOpen={setIsModalDeleteOpen}
            comment={comment}
            setComment={setComment}
          />
        </Modal>
      )}

      {isModalEditOpen && (
        <Modal toggleModal={handleEditOpenModal}>
          <UpdateComment
            oneComment={oneComment}
            isModalEditOpen={isModalEditOpen}
            setIsModalEditOpen={setIsModalEditOpen}
            setComment={setComment}
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
                <StyledButton buttonstyle="brand1" buttonsize="fit">
                  Compar
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
              <ul>
                {comment.map((el) => (
                  <CommentsList key={el.id}>
                    <div>
                      <div>
                        <Avatar className="avatar" $bg={el.user.avatar_bg}>
                          {nameSub(el.user.name)}
                        </Avatar>
                        <p className="commentUsername">{el.user.name}</p>
                        <span className="commentTime">•</span>
                        <p className="commentTime">
                          {newDate(`${el.create_date}`)}
                        </p>
                      </div>

                      {user && el.user.id === user.id && (
                        <div>
                          <StyledButton
                            buttonstyle="comment_delete_btn"
                            buttonsize="default"
                            onClick={() => modalDeleteComment(el)}
                          >
                            <FaTrashAlt />
                          </StyledButton>

                          <StyledButton
                            buttonstyle="comment_edit_btn"
                            buttonsize="default"
                            onClick={() => modalEditComment(el)}
                          >
                            <FaRegEdit />
                          </StyledButton>
                        </div>
                      )}
                    </div>
                    <p className="">{el.description}</p>
                  </CommentsList>
                ))}
              </ul>
            </SectionsContainer>

            <SectionsContainer>
              <Comment comment={comment} setComment={setComment} />
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
