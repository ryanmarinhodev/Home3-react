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
  gap: 50px;

  @media (max-width: 980px) {
    display: flex;
    justify-content: space-between;
    padding: 15px;
  }
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
  gap: 25px;

  &.largeScreen {
    @media (max-width: 980px) {
      display: none; // Esconde no modo responsivo
    }
  }

  &.modalContent {
    display: flex;
    flex-direction: column;
    gap: 10px;

    li {
      padding: 10px;
    }
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
      transition: background-color 0.3s, color 0.3s;

      &:hover {
        color: #b79d57;
      }
    }
  }
`;

// Estilo do Menu Modal
export const MenuModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8); // Fundo escuro semi-transparente
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  .modalContent {
    background: #000;
    padding: 20px;
    border-radius: 10px;
    width: 80%;
    max-width: 300px;
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
  }
`;

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: 2px solid #ffffff;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 25px;
  cursor: pointer;
  gap: 5px;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  @media (max-width: 980px) {
    display: none;
  }

  &:hover {
    background-color: #b79d57;
    color: #fff;
    border-color: #000;
  }

  &:focus {
    outline: none;
  }
`;

export const IconLogin = styled(HiMiniUserPlus)`
  margin-right: 8px;
  font-size: 20px;
`;
