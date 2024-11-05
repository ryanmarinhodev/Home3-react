// Header.tsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Importando useNavigate
import {
  GlobalStyle,
  Navbar,
  Logo,
  NavItems,
  SearchForm,
  Icon,
  Content,
} from "./header_style";

import LogoHome3 from "../../assets/imagens/LogoHOME3.png";

const Header: React.FC = () => {
  const navigate = useNavigate(); // Inicializando o hook de navegação

  // Função para lidar com a navegação
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar>
        <Logo src={LogoHome3} alt="Logo home3" />
        <NavItems>
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
        <SearchForm>
          <input
            type="search"
            className="search-data"
            placeholder="Pesquisar"
            required
          />
          <button type="submit" className="fas fa-search"></button>
        </SearchForm>
        <Icon className="menu-icon">
          <span className="fas fa-bars"></span>
        </Icon>
        <Icon className="search-icon">
          <span className="fas fa-search"></span>
        </Icon>
        <Icon className="cancel-icon">
          <span className="fas fa-times"></span>
        </Icon>
      </Navbar>
      <Content>
        <header>Header Content</header>
        <div className="text">Some additional text</div>
      </Content>
    </>
  );
};

export default Header;
