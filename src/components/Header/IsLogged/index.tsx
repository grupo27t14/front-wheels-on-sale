import { useMedia } from "use-media";
import { Avatar } from "../../../styles/global";
import { Link, UnorderedList, ListItem, Flex, Text } from "./styled";
import { useUsers } from "../../../hooks/useUser";
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export interface IProps {
  open: boolean;
  setOpen: any;
  onClick: () => void;
}
const IsLogged = ({ open, setOpen, onClick }: IProps): JSX.Element => {
  const { user } = useUsers();
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const isWide = useMedia({ minWidth: "768px" });

  const browse = (page: string) => {
    if (page == "perfil") {
      console.log("perfil");
    } else if (page == "endereco") {
      console.log("endereco");
    } else if (page == "anuncio") {
      navigate(`/profile/${user?.id}`);
    } else if (page == "sair") {
      signOut();
    }
    setOpen(!open);
  };

  const nomeESobrenome = user?.name
    .split(" ")
    .map((letter, index) => {
      if (index === 0 || index === user.name.split(" ").length - 1) {
        return letter[0].toUpperCase();
      }
    })
    .join("");

  return (
    <>
      {isWide && (
        <Flex role="button" onClick={onClick}>
          <Avatar className="avatarProfile" $bg={user?.avatar_bg}>
            {nomeESobrenome}
          </Avatar>
          <Text>{user?.name}</Text>
        </Flex>
      )}
      {open && (
        <UnorderedList>
          <ListItem>
            <Link onClick={() => browse("perfil")}>Editar perfil</Link>
          </ListItem>
          <ListItem>
            <Link onClick={() => browse("endereco")}>Editar endereço</Link>
          </ListItem>
          {user?.is_seller && (
            <ListItem>
              <Link onClick={() => browse("anuncio")}>Pagina de anúncio</Link>
            </ListItem>
          )}
          <ListItem>
            <Link onClick={() => browse("sair")}>Sair</Link>
          </ListItem>
        </UnorderedList>
      )}
    </>
  );
};

export default IsLogged;
