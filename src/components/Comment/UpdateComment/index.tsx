import { StyledButton } from "../../../styles/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingRing } from "../../../styles/LoadingRing";
import { theme } from "../../../styles/theme";
import {
  tcomment,
  commentSchema,
  tcommentResponse,
  tnewComment,
} from "../../../pages/Product/schemas";
import { Box, HStack, Title, VStack, Form, Textarea } from "./style";
import { useUsers } from "../../../hooks/useUser";
import { api } from "../../../services/api";

interface IUpdateComment {
  oneComment: tnewComment;
  isModalEditOpen: boolean;
  setIsModalEditOpen: (isModalEditOpen: boolean) => void;
  setComment: (data: tcommentResponse) => void;
}

const UpdateComment = ({
  oneComment,
  isModalEditOpen,
  setIsModalEditOpen,
  setComment,
}: IUpdateComment): JSX.Element => {
  const { reqLoading } = useUsers();
  const { register, handleSubmit } = useForm<tcomment>({
    resolver: zodResolver(commentSchema),
  });

  const commentUpdate = async (body: tcomment) => {
    try {
      await api.patch(`comments/${oneComment.id}`, body);

      const { data } = await api.get<tcommentResponse>(
        `comments/${oneComment.car.id}`
      );
      setComment(data.reverse());

      setIsModalEditOpen(!isModalEditOpen);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <VStack>
      <Title>Editar Comentário</Title>
      <Box>
        <Form onSubmit={handleSubmit(commentUpdate)}>
          <Textarea
            id="description"
            placeholder="Digitar comentário"
            defaultValue={oneComment.description}
            {...register("description")}
          ></Textarea>

          <HStack>
            <StyledButton
              type="button"
              buttonstyle="negative"
              buttonsize="fit"
              onClick={() => setIsModalEditOpen(!isModalEditOpen)}
            >
              Cancelar
            </StyledButton>
            <StyledButton type="submit" buttonstyle="brand1" buttonsize="fit">
              {reqLoading ? (
                <LoadingRing color={theme.colors.whiteFixed} />
              ) : (
                "Editar"
              )}
            </StyledButton>
          </HStack>
        </Form>
      </Box>
    </VStack>
  );
};

export default UpdateComment;
