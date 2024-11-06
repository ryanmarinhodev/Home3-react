// Header.tsx
import React from "react";
import {
  GlobalStyle,
  HeaderStyle,
  Logo,
  NavItems,
  NavBar,
  LogoLogin,
} from "./header_style";

import LogoHome3 from "../../assets/imagens/LogoHOME3.png";
import Login from "../../assets/imagens/LogoHOME3.png";

const Header: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <HeaderStyle>
        <LogoLogin src={Login} alt="Login" />
        <Logo src={LogoHome3} alt="Logo home3" />
        <NavItems>
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
        <NavBar />
      </HeaderStyle>
    </>
  );
};

export default Header;
