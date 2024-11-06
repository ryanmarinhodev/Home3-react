// HeaderStyles.ts
import styled, { createGlobalStyle } from "styled-components";
import { FaBars } from "react-icons/fa6";
import { HiMiniUserPlus } from "react-icons/hi2";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
  }
`;

export const HeaderStyle = styled.nav`
  background: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 100px;

  @media (max-width: 980px) {
    display: flex;
    justify-content: space-between;
    padding: 15px;
  }
`;

export const LogoLogin = styled.img`
  height: 35px;
`;

export const Logo = styled.img`
  height: 35px;

  @media (max-width: 980px) {
    height: 38px;
  }
`;

export const NavItems = styled.ul`
  display: flex;
  flex: 1;
  padding-left: 40px;

  @media (max-width: 980px) {
    display: none;
  }

  li {
    list-style: none;
    padding: 0 15px;

    a {
      color: #fff;
      font-size: 23px;
      font-weight: 500;
      text-decoration: none;
      font-family: "Anton", sans-serif;

      &:hover {
        color: #b79d57;
      }
    }
  }
`;

export const NavBar = styled(FaBars)`
  display: none;

  @media (max-width: 980px) {
    display: flex;
    font-size: 28px;
    justify-content: end;
    align-items: end;
  }
`;

export const User = styled(HiMiniUserPlus)`
  display: none;

  @media (max-width: 980px) {
    display: flex;
    font-size: 28px;
    justify-content: end;
    align-items: end;
  }
`;

export const LoginButton = styled.button`
  display: flex; /* Para alinhar o ícone e o texto */
  align-items: center; /* Centraliza verticalmente o conteúdo */
  background: transparent;
  border: 2px solid #ffffff; /* Cor da borda */
  color: #ffffff; /* Cor do texto */
  font-size: 16px; /* Tamanho da fonte */
  font-weight: 600; /* Peso da fonte mais forte */
  padding: 12px 24px; /* Espaçamento interno */
  border-radius: 25px; /* Cantos arredondados */
  cursor: pointer; /* Muda o cursor ao passar o mouse */
  transition: background-color 0.3s, color 0.3s, border-color 0.3s; /* Transição suave */

  @media (max-width: 981px) {
    display: none; /* Oculta o botão em resoluções menores */
  }

  &:hover {
    background-color: #ffffff; /* Cor de fundo ao passar o mouse */
    color: #000000; /* Cor do texto ao passar o mouse */
    border-color: #b79d57; /* Altera a cor da borda ao passar o mouse */
  }

  &:focus {
    outline: none; /* Remove a borda de foco padrão */
  }
`;

// Estilização do ícone
export const IconLogin = styled(HiMiniUserPlus)`
  margin-right: 8px; /* Espaço entre o ícone e o texto */
  font-size: 20px; /* Tamanho do ícone */
`;
