import { useMedia } from "use-media";
import { Avatar } from "../../../styles/global";
import { Link, UnorderedList, ListItem, Flex, Text } from "./styled";
import { useUsers } from "../../../hooks/useUser";

export interface IProps {
  open: boolean;
  onClick: () => void;
}
const IsLogged = ({ open, onClick }: IProps): JSX.Element => {
  const { user } = useUsers();
  const isWide = useMedia({ minWidth: "768px" });

  const navbarIsLogged = [
    { title: "Editar perfil", link: "" },
    { title: "Editar endereço", link: "" },
    { title: "Pagina de anúncio", link: "" },
    { title: "Sair" },
  ];

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
          {navbarIsLogged.map((elem, index) => (
            <ListItem key={index}>
              <Link>{elem.title}</Link>
            </ListItem>
          ))}
        </UnorderedList>
      )}
    </>
  );
};

export default IsLogged;
