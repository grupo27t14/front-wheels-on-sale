import { useMedia } from "use-media";
import { Avatar } from "../../../styles/global";
import { Link, UnorderedList, ListItem, Flex, Text } from "./styled";
import { useUsers } from "../../../hooks/useUser";
import { theme } from "../../../styles/theme";

type ColorKey = keyof typeof theme.colors;

export interface IProps {
  open: boolean;
  onClick: () => void;
}
const IsLogged = ({ open, onClick }: IProps): JSX.Element => {
  const { user } = useUsers();
  const isWide = useMedia({ minWidth: "768px" });

  const navbarIsLogged = [
    { title: "Editar perfil" },
    { title: "Editar endereço" },
    { title: "Pagina de anúncio" },
    { title: "Sair" },
  ];

  const corAvatar =
    theme.colors[`random${Math.floor(Math.random() * 12 + 1)}` as ColorKey];

  const nomeESobrenome = user?.name.split(" ").map((letter, index) => {
    if (index === 0 || index === user.name.split(" ").length - 1) {
      return letter[0].toUpperCase();
    }
  });

  return (
    <>
      {isWide && (
        <Flex role="button" onClick={onClick}>
          <Avatar className="avatar" $bg={corAvatar}>
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
