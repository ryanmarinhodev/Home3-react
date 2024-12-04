import styled from "styled-components";

export const ContainerImageApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  margin-top: 120px;

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ClassH1 = styled.div`
  max-width: 30%;

  @media (max-width: 900px) {
    max-width: 90%;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #b79d57;
  margin-bottom: 20px;

  @media (max-width: 900px) {
    font-size: 1.8rem;
    text-align: center;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #fff;
  max-width: 600px;
  text-align: justify;

  @media (max-width: 900px) {
    font-size: 1rem;
    max-width: 100%;
    text-align: center;
  }
`;

export const ImageAparelho = styled.img`
  width: 500px;
  height: auto;

  @media (max-width: 900px) {
    width: 80%;
    max-width: 400px;
    margin-top: 30px;
  }
`;
