import styled from "styled-components";

// Variáveis de estilo (se você preferir usar variáveis para cores e tamanhos)
const colors = {
  black: "#000000",
  darkGray: "#1b1e23",
  white: "#ffffff",
};

const breakpoints = {
  large: "950px",
  medium: "768px",
  small: "315px",
};

export const Container = styled.div`
  background-color: ${colors.black};
  width: auto;
  height: auto;
`;

export const ImageHome = styled.img`
  width: 750px;
  height: auto;
  display: block;
  margin: 10px auto 0;

  @media (max-width: ${breakpoints.large}) {
    width: 600px;
  }

  @media (max-width: ${breakpoints.medium}) {
    width: 300px;
  }

  @media (max-width: ${breakpoints.small}) {
    width: 250px;
  }
`;

export const ContainerText = styled.div`
  background-color: ${colors.darkGray};
  width: 700px;
  height: 70px;
  border-radius: 9px;
  display: flex;
  margin: 0 auto;
  padding: 0 20px;
  align-items: center;

  @media (max-width: ${breakpoints.large}) {
    width: 550px;
  }

  @media (max-width: ${breakpoints.medium}) {
    width: 300px;
    height: 90px;
  }

  @media (max-width: ${breakpoints.small}) {
    width: 220px;
  }
`;

export const Text = styled.p`
  font-size: 19px;
  color: ${colors.white};
  text-align: center;
  margin: 0;
  width: 100%;

  @media (max-width: ${breakpoints.large}) {
    font-size: 17px;
  }

  @media (max-width: ${breakpoints.medium}) {
    font-size: 13px;
  }

  @media (max-width: ${breakpoints.small}) {
    font-size: 11px;
  }
`;
