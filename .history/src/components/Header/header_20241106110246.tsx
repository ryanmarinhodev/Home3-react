// Header.tsx
import React from "react";
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

const Header: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <HeaderStyle>
        <NavBar />
        <Logo src={LogoHome3} alt="Logo home3" />
        <User />
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
        <LoginButton>
          <IconLogin>Login</IconLogin>
        </LoginButton>
      </HeaderStyle>
    </>
  );
};

export default Header;
