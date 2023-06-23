import { useMedia } from "use-media";
import { Avatar } from "../../../styles/global";
import { Link, UnorderedList, ListItem, Flex, Text } from "./styled";
import { useUsers } from "../../../hooks/useUser";
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Modal } from "../../Modal";
import EditProfile from "../../EditProfile";

export interface IProps {
  open: boolean;
  setOpen: any;
  onClick: () => void;
}

const IsLogged = ({ open, setOpen, onClick }: IProps): JSX.Element => {
  const { user } = useUsers();
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isWide = useMedia({ minWidth: "768px" });

  const browse = (page: string) => {
    if (page == "perfil") {
      setIsModalOpen(!isModalOpen);
      setOpen(!open);
    } else if (page == "endereco") {
      console.log("endereco");
    } else if (page == "anuncio") {
      navigate(`/profile/${user?.id}`);
    } else if (page == "sair") {
      signOut();
      setOpen(!open);
    }
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const tag = event.target as HTMLTextAreaElement;
      if (tag.nodeName !== "A" && open) {
        setOpen(!open);
      }
    };

    window.addEventListener("mousedown", handleClick);
  }, []);

  const nomeESobrenome = user?.name
    .split(" ")
    .map((letter, index) => {
      if (index === 0 || index === user.name.split(" ").length - 1) {
        return letter[0].toUpperCase();
      }
    })
    .join("");

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && (
        <Modal toggleModal={handleOpenModal}>
          <EditProfile
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </Modal>
      )}

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
