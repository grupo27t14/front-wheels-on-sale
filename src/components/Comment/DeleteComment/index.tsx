import { StyledButton } from "../../../styles/button";
import { tcommentResponse, tnewComment } from "../../../pages/Product/schemas";
import { Box, HStack, SubTitle, Title, Text, VStack } from "./styled";
import { api } from "../../../services/api";

interface IDeleteComment {
  oneComment: tnewComment;
  isModalDeleteOpen: boolean;
  setIsModalDeleteOpen: (isModalDeleteOpen: boolean) => void;
  comments: tcommentResponse;
  setComments: (data: tcommentResponse) => void;
}

const DeleteComment = ({
  oneComment,
  isModalDeleteOpen,
  setIsModalDeleteOpen,
  comments,
  setComments,
}: IDeleteComment): JSX.Element => {
  const commentDelete = async (id: string) => {
    try {
      await api.delete(`comments/${id}`);
      const filt = comments.filter((el) => el.id !== id);
      setComments(filt);
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
          Sim, excluir comentário
        </StyledButton>
      </HStack>
    </VStack>
  );
};

export default DeleteComment;
