import styled from "styled-components";

// Variáveis de estilo (se você preferir usar variáveis para cores e tamanhos)
const colors = {
  black: "#000000",
  darkGray: "#1b1e23",
  white: "#ffffff",
  blackIce: "#0d0d0d",
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
  background-color: ${colors.blackIce};
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

/* Icones da tecnologia */
export const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 5px;
  margin-top: 12px;
`;

export const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(20% - 20px);
  min-width: 100px;
  max-width: 150px;
  margin: 10px;
`;

export const IconImage = styled.img`
  width: 100%;
  max-width: 90px;
  height: auto;
`;

export const IconLabel = styled.span`
  margin-top: 8px;
  font-size: 16px;
  text-align: center;
  color: ${colors.white};
`;

/* Imagem aplicativo */
export const ContainerImageApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 40px;
`;

export const ClassH1 = styled.div`
  max-width: 50%;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #b79d57;
  margin-bottom: 20px;
  max-width: 40px;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #fff;
  max-width: 400px; /*Observar essa estilização */
`;

export const ImageAparelho = styled.img`
  width: 100px;
  height: auto;
`;
