import React from "react";
import { Link, UnorderedList, ListItem } from "./styled";
import { useMedia } from "use-media";

export interface Iprops {
  open: boolean;
}

const IsNotLogged = ({ open }: Iprops): JSX.Element => {
  const isWide = useMedia({ maxWidth: "768px" });
  const navbarIsNotLogged = [
    { title: "Fazer Login", class: "header__signUp--login" },
    { title: "Cadastrar", class: "header__signUp--register" },
  ];

  return (
    <React.Fragment>
      {isWide ? (
        open && (
          <UnorderedList className="header__navbar--isNotLogged">
            {navbarIsNotLogged.map((elem, index) => (
              <ListItem key={index}>
                <Link className={elem.class}>{elem.title}</Link>
              </ListItem>
            ))}
          </UnorderedList>
        )
      ) : (
        <UnorderedList className="header__navbar--isNotLogged">
          {navbarIsNotLogged.map((elem, index) => (
            <ListItem key={index}>
              <Link className={elem.class}>{elem.title}</Link>
            </ListItem>
          ))}
        </UnorderedList>
      )}
    </React.Fragment>
  );
};

export default IsNotLogged;
