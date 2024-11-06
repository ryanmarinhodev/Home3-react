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
  MenuModal, // Novo componente modal
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
          <IoMdClose style={{ fontSize: "28px" }} onClick={clickMenu} />
        ) : (
          <NavBar onClick={clickMenu} />
        )}
        <Logo src={LogoHome3} alt="Logo home3" />
        <User />

        {/* Em telas grandes, exibe os itens diretamente */}
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

        {/* Exibe o modal com o menu em resoluções pequenas */}
        {navItem && (
          <MenuModal onClick={clickMenu}>
            <NavItems className="modalContent">
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
          </MenuModal>
        )}

        <LoginButton>
          <IconLogin />
          Login
        </LoginButton>
      </HeaderStyle>
    </>
  );
};

export default Header;
