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
  Close,
} from "./header_style";
import { Link } from "react-router-dom";

import LogoHome3 from "../../assets/imagens/LogoHOME3.png";

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
          <Close onClick={clickMenu} />
        ) : (
          <NavBar onClick={clickMenu} />
        )}
        <Logo src={LogoHome3} alt="Logo home3" />
        <User />

        <NavItems className={`navItem ${navItem ? "open" : ""}`}>
          <li>
            <Link to="/">INÍCIO</Link>
          </li>
          <li>
            <Link to="/sobre">SOBRE</Link>
          </li>
          <li>
            <Link to="/projetos">PROJETOS</Link>
          </li>
          <li>
            <Link to="/contato">CONTATO</Link>
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
