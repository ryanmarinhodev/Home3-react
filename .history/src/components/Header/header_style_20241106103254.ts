// HeaderStyles.ts
import styled, { createGlobalStyle } from "styled-components";
import { FaBars } from "react-icons/fa6";

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
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 100px;

  @media (max-width: 980px) {
    justify-content: space-between;
    padding: 0;
  }
`;

export const Logo = styled.img`
  height: 35px;
  margin-right: 15px;

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