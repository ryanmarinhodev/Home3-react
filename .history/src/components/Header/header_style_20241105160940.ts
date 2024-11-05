// HeaderStyles.ts
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    background-image: url("./imagens/black.png");
    background-position: center;
  }
`;

export const Navbar = styled.nav`
  background: black;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 100px;
`;

export const Logo = styled.img`
  height: 35px;
  margin-right: 15px;

  @media (max-width: 980px) {
    align-items: center;
    justify-content: center;
  }
`;

export const NavItems = styled.ul`
  display: flex;
  flex: 1;
  padding-left: 40px;

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

export const Icon = styled.div`
  width: 40px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  background-color: red;

  &.menu-icon,
  &.cancel-icon,
  &.search-icon {
    color: #000;
    margin: 0 50px;
    display: none;
  }
`;
