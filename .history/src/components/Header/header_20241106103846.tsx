// Header.tsx
import React from "react";
import {
  GlobalStyle,
  HeaderStyle,
  LogoLogin,
  Logo,
  NavItems,
  NavBar,
} from "./header_style";

import Login from "../../assets/imagens/LogoHOME3.png";
import LogoHome3 from "../../assets/imagens/LogoHOME3.png";

const Header: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <HeaderStyle>
        <Logo src={LogoHome3} alt="Logo home3" />
        <LogoLogin src={Login} alt="Login" />
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
