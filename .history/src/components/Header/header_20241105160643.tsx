// Header.tsx
import React from "react";
import { GlobalStyle, Navbar, Logo, NavItems, Icon } from "./header_style";

import LogoHome3 from "../../assets/imagens/LogoHOME3.png";

const Header: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar>
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
      </Navbar>
    </>
  );
};

export default Header;
