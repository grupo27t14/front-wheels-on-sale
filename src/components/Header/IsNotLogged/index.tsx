import React from "react";
import { UnorderedList, ListItem } from "./styled";
import { useMedia } from "use-media";
import { Link } from "react-router-dom";

export interface Iprops {
  open: boolean;
}

const IsNotLogged = ({ open }: Iprops): JSX.Element => {
  const isWide = useMedia({ maxWidth: "768px" });
  const navbarIsNotLogged = [
    { title: "Fazer Login", class: "header__signUp--login", link: "/login" },
    {
      title: "Cadastrar",
      class: "header__signUp--register",
      link: "/register",
    },
  ];

  return (
    <React.Fragment>
      {isWide ? (
        open && (
          <UnorderedList className="header__navbar--isNotLogged">
            {navbarIsNotLogged.map((elem, index) => (
              <ListItem key={index}>
                <Link className={elem.class} to={elem.link}>
                  {elem.title}
                </Link>
              </ListItem>
            ))}
          </UnorderedList>
        )
      ) : (
        <UnorderedList className="header__navbar--isNotLogged">
          {navbarIsNotLogged.map((elem, index) => (
            <ListItem key={index}>
              <Link className={elem.class} to={elem.link}>
                {elem.title}
              </Link>
            </ListItem>
          ))}
        </UnorderedList>
      )}
    </React.Fragment>
  );
};

export default IsNotLogged;
