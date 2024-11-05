import React from "react";

// Define props and state types if needed here

const Header: React.FC = () => {
  const showSlides = (index: number) => {
    console.log("Slide index:", index);
    // Implementação para exibir o slide
  };

  return (
    <div>
      <nav>
        <div className="menu-icon" onClick={() => showSlides(1)}>
          <span className="fas fa-bars"></span>
        </div>
        <div className="logo">
          <img src="./imagens/LogoHOME3.png" width="120px" alt="logo" />
        </div>
        <div className="nav-items">
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
        </div>
        <div className="search-icon">
          <span className="fas fa-search"></span>
        </div>
        <div className="cancel-icon">
          <span className="fas fa-times"></span>
        </div>
        <form action="#">
          <input
            type="search"
            className="search-data"
            placeholder="Pesquisar"
            required
          />
          <button type="submit" className="fas fa-search"></button>
        </form>
      </nav>
      <div className="content">{/* Conteúdo adicional pode ir aqui */}</div>
    </div>
  );
};

export default Header;
