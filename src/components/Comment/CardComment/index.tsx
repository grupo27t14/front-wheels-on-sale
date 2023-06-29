import { useUsers } from "../../../hooks/useUser";
import { tnewComment } from "../../../pages/Product/schemas";
import { StyledButton } from "../../../styles/button";
import { Avatar } from "../../../styles/global";
import { CommentsList } from "./style";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

interface ICardComment {
  comment: tnewComment;
  setOneComment: (data: tnewComment) => void;
  isModalEditOpen: boolean;
  setIsModalEditOpen: (isModalEditOpen: boolean) => void;
  isModalDeleteOpen: boolean;
  setIsModalDeleteOpen: (isModalDeleteOpen: boolean) => void;
}

const CardComment = ({
  comment,
  setOneComment,
  isModalEditOpen,
  setIsModalEditOpen,
  isModalDeleteOpen,
  setIsModalDeleteOpen,
}: ICardComment) => {
  const { user } = useUsers();

  const modalDeleteComment = (data: tnewComment) => {
    setOneComment(data);
    setIsModalDeleteOpen(!isModalDeleteOpen);
  };

  const modalEditComment = (data: tnewComment) => {
    setOneComment(data);
    setIsModalEditOpen(!isModalEditOpen);
  };

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
    <CommentsList key={comment.id}>
      <div>
        <div>
          <Avatar className="avatar" $bg={comment.user.avatar_bg}>
            {nameSub(comment.user.name)}
          </Avatar>
          <p className="commentUsername">{comment.user.name}</p>
          <span className="commentTime">•</span>
          <p className="commentTime">{newDate(`${comment.create_date}`)}</p>
        </div>

        {user && comment.user.id === user.id && (
          <div>
            <StyledButton
              buttonstyle="comment_delete_btn"
              buttonsize="default"
              onClick={() => modalDeleteComment(comment)}
            >
              <FaTrashAlt />
            </StyledButton>

            <StyledButton
              buttonstyle="comment_edit_btn"
              buttonsize="default"
              onClick={() => modalEditComment(comment)}
            >
              <FaRegEdit />
            </StyledButton>
          </div>
        )}
      </div>
      <p className="">{comment.description}</p>
    </CommentsList>
  );
};

export default CardComment;
