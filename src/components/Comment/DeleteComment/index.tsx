import { StyledButton } from "../../../styles/button";
import { tcommentResponse, tnewComment } from "../../../pages/Product/schemas";
import { Box, HStack, SubTitle, Title, Text, VStack } from "./style";
import { api } from "../../../services/api";

interface IDeleteComment {
  oneComment: tnewComment;
  isModalDeleteOpen: boolean;
  setIsModalDeleteOpen: (isModalDeleteOpen: boolean) => void;
  comment: tcommentResponse;
  setComment: (data: tcommentResponse) => void;
}

const DeleteComment = ({
  oneComment,
  isModalDeleteOpen,
  setIsModalDeleteOpen,
  comment,
  setComment,
}: IDeleteComment): JSX.Element => {
  const commentDelete = async (id: string) => {
    try {
      await api.delete(`comments/${id}`);
      const filt = comment.filter((el) => el.id !== id);
      setComment(filt);
      setIsModalDeleteOpen(!isModalDeleteOpen);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <VStack>
      <Title>Excluir Comentário</Title>
      <Box>
        <SubTitle>Tem certeza que deseja remover este Comentário?</SubTitle>
        <Text>
          Essa ação não pode ser desfeita. Isso excluirá permanentemente o seu
          Comentário.
        </Text>
      </Box>

      <HStack>
        <StyledButton
          buttonstyle="negative"
          buttonsize="fit"
          onClick={() => setIsModalDeleteOpen(!isModalDeleteOpen)}
        >
          Cancelar
        </StyledButton>
        <StyledButton
          buttonstyle="alert"
          buttonsize="fit"
          onClick={() => commentDelete(oneComment.id)}
        >
          Sim, excluir anúncio
        </StyledButton>
      </HStack>
    </VStack>
  );
};

export default DeleteComment;
