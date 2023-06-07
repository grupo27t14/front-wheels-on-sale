import { useMedia } from "use-media";
import { theme } from "../../../styles/theme";
import { Avatar } from "../../../styles/global";
import { Link, UnorderedList, ListItem, Flex, Text } from "./styled";

export interface IProps {
  open: boolean;
  onClick: () => void;
}
const IstLogged = ({ open, onClick }: IProps): JSX.Element => {
  const isWide = useMedia({ minWidth: "768px" });

  const navbarIsLogged = [
    { title: "Editar perfil" },
    { title: "Editar endereço" },
    { title: "Pagina de anúncio" },
    { title: "Sair" },
  ];

  return (
    <>
      {isWide && (
        <Flex role="button" onClick={onClick}>
          <Avatar className="avatar" $bg={`${theme.colors.random8}`}>
            LS
          </Avatar>
          <Text>Samuel Leão</Text>
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

export default IstLogged;
