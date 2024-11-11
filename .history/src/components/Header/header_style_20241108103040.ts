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
    flex-direction: column;
    position: relative;
    padding: 15px;
  }

  &.open {
    flex-direction: column;
    align-items: center;
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
  gap: 25px;

  @media (max-width: 980px) {
    display: ${({ className }) => (className === "open" ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: black;
    padding: 10px 0;
  }

  li {
    list-style: none;

    a {
      color: #fff;
      font-size: 23px;
      font-weight: 500;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: #b79d57;
      }
    }
  }
`;

export const NavBar = styled(FaBars)`
  display: none;
  font-size: 28px;

  @media (max-width: 980px) {
    display: block;
    cursor: pointer;
  }
`;

export const User = styled(HiMiniUserPlus)`
  display: none;

  @media (max-width: 980px) {
    display: block;
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

  &:hover {
    background-color: #b79d57;
    color: #fff;
    border-color: #000;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 980px) {
    display: none;
  }
`;

export const IconLogin = styled(HiMiniUserPlus)`
  margin-right: 8px;
  font-size: 20px;
`;
