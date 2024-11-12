// Header.tsx
import React, { useEffect, useState } from "react";
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
  const [navItem, setNavItem] = useState<boolean>(false);
  const [janela, setJanela] = useState<number>(window.innerWidth);

  const clickMenu = () => {
    setNavItem(!navItem);
  };

  useEffect(() => {
    const windowEffect = () => {
      setJanela(window.innerWidth);
    };

    window.addEventListener("resize", windowEffect);

    return () => {
      window.removeEventListener("resize", windowEffect);
    };
  }, []);

  const clickMenuMobile = () => {
    if (janela <= 980) {
      setNavItem(!navItem);
    }
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
          <li onClick={clickMenuMobile}>
            <Link to="/">INÍCIO</Link>
          </li>
          <li onClick={clickMenuMobile}>
            <Link to="/sobre">SOBRE</Link>
          </li>
          <li onClick={clickMenuMobile}>
            <Link to="/projetos">PROJETOS</Link>
          </li>
          <li onClick={clickMenuMobile}>
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
