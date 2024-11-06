// Header.tsx
import React, { useState } from "react";
import {
  GlobalStyle,
  HeaderStyle,
  Logo,
  NavItems,
  NavBar,
  User,
  LoginButton,
  IconLogin,
} from "./header_style";

import LogoHome3 from "../../assets/imagens/LogoHOME3.png";
import { IoMdClose } from "react-icons/io";

interface HeaderProps {
  navItems?: boolean;
}

const Header: React.FC<HeaderProps> = () => {
  const [navItem, setNavItem] = useState(false);

  const clickMenu = () => {
    setNavItem(!navItem);
  };

  return (
    <>
      <GlobalStyle />
      <HeaderStyle>
        {navItem ? (
          <NavBar onClick={clickMenu} />
        ) : (
          <IoMdClose style={{ fontSize: "28px" }} onClick={clickMenu} />
        )}
        <Logo src={LogoHome3} alt="Logo home3" />
        <User />

        <NavItems className={!navItem ? "largeScreen" : ""}>
          <li>
            <a href="./index.html">INÍCIO</a>
          </li>
          <li>
            <a href="./sobre/sobre.html">SOBRE</a>
          </li>
          <li>
            <a href="./projetos/projeto.html">PROJETOS</a>
          </li>
          <li>
            <a href="./contato/contato.html">CONTATO</a>
          </li>
        </NavItems>

        <LoginButton>
          <IconLogin />
          Login
        </LoginButton>
      </HeaderStyle>
    </>
  );
};

export default Header;
