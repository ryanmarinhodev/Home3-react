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
  justify-content: space-around;
  color: white;
  margin-top: 120px;
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
  text-align: justify;
`;

export const ImageAparelho = styled.img`
  width: 500px;
  height: auto;
`;

/* Footer */
export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #101010;
  margin-top: 100px;
`;

export const FooterContent = styled.div`
  background-color: var(--color-neutral-10);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 3rem 3.5rem;
`;

export const FooterContacts = styled.div`
  img {
    margin-left: 30px;
  }
`;

export const FooterSocialMedia = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
  font-size: 21px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    color: #b79d57; /* Cor dourada */
    border-radius: 50%;
    transition: all 0.4s;

    i {
      font-size: 1.25rem;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  ul {
    list-style: none;
  }

  .footer-link {
    color: #b79d57; /* Cor dourada */
    transition: all 0.4s;
    text-decoration: none;

    &:hover {
      color: #ffd700; /* Cor dourada em hover */
    }
  }
`;

export const FooterSubscribe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  p {
    color: #b79d57; /* Cor dourada para o texto */
  }
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(155, 155, 155, 0.2);
  border-radius: 4px;

  input {
    all: unset;
    padding: 0.75rem;
    width: 100%;
  }

  button {
    background-color: #b79d57;
    border: none;
    color: var(--color-neutral-40);
    padding: 0px 1.25rem;
    font-size: 1.125rem;
    height: 100%;
    border-radius: 0px 4px 4px 0px;
    cursor: pointer;
    transition: all 0.4s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Copyright = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--color-neutral-0);
  font-size: 0.9rem;
  padding: 1.5rem;
  font-weight: 100;
  color: #fff; /* Cor dourada no copyright */
`;
