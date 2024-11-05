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

  @media (max-width: 1245px) {
    padding: 0 50px;
  }

  @media (max-width: 1140px) {
    padding: 0;
  }
`;

export const Logo = styled.img`
  height: 35px;
  margin-right: 15px;
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

export const SearchForm = styled.form`
  display: flex;
  height: 40px;
  padding: 2px;
  background: #0d0d0d;
  min-width: 18% !important;
  border-radius: 2px;
  border: 1px solid rgba(155, 155, 155, 0.2);

  .search-data {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    color: #fff;
    font-size: 17px;
    font-weight: 500;
    background: none;
    border: none;
  }

  button {
    padding: 0 15px;
    color: #fff;
    font-size: 17px;
    background: #b79d57;
    border: none;
    border-radius: 2px;
    cursor: pointer;

    &:hover {
      background: #ffe680;
    }
  }
`;

export const Icon = styled.div`
  width: 40px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;

  &.menu-icon,
  &.cancel-icon,
  &.search-icon {
    color: #fff;
    margin: 0 50px;
    display: none;

    @media (max-width: 980px) {
      margin: 0 20px;
    }

    @media (max-width: 350px) {
      margin: 0 10px;
      font-size: 16px;
    }
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  header,
  .text {
    font-size: 30px;
    font-weight: 700;
  }

  .space {
    margin: 10px 0;
  }
`;
