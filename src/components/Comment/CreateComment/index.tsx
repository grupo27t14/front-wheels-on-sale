import { Avatar } from "../../../styles/global";
import { StyledButton } from "../../../styles/button";
import { ButtonGroup, CommentArea } from "./styled";
import { useParams } from "react-router-dom";
import { useUsers } from "../../../hooks/useUser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingRing } from "../../../styles/LoadingRing";
import { api } from "../../../services/api";
import {
  commentSchema,
  tcomment,
  tcommentResponse,
} from "../../../pages/Product/schemas";

interface IComment {
  comments: tcommentResponse;
  setComments: (comment: tcommentResponse) => void;
}

const CreateComment = ({ comments, setComments }: IComment) => {
  const { id } = useParams();
  const { user, reqLoading } = useUsers();

  const { register, handleSubmit, reset } = useForm<tcomment>({
    resolver: zodResolver(commentSchema),
  });

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

  const handleComment = async (body: tcomment) => {
    try {
      const { data } = await api.post(`comments/${id}`, body);
      setComments([data, ...comments]);
      reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <CommentArea>
      {user && (
        <div>
          <Avatar className="avatar" $bg={user.avatar_bg}>
            {`${nameSub(user?.name)}`}
          </Avatar>
          <p className="commentUsername">{user.name}</p>
        </div>
      )}

      <form className="textContainer" onSubmit={handleSubmit(handleComment)}>
        <textarea
          id="description"
          rows={10}
          {...register("description")}
        ></textarea>

        {user ? (
          <StyledButton buttonstyle="brand1" buttonsize="fit">
            {reqLoading ? (
              <LoadingRing color={"#FFF"} />
            ) : (
              "Comentar"
            )}
          </StyledButton>
        ) : (
          <StyledButton
            buttonstyle="comment_btn"
            buttonsize="fit"
            type="button"
          >
            Comentar
          </StyledButton>
        )}
      </form>
      {user && (
        <ButtonGroup>
          <StyledButton buttonstyle="comment_btn" buttonsize="default">
            Gostei muito!
          </StyledButton>
          <StyledButton buttonstyle="comment_btn" buttonsize="default">
            Incrível!
          </StyledButton>
          <StyledButton buttonstyle="comment_btn" buttonsize="default">
            Recomendarei para meus amigos!!
          </StyledButton>
        </ButtonGroup>
      )}
    </CommentArea>
  );
};

export default CreateComment;
