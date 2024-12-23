import styled from "styled-components";

import { keyframes } from "styled-components";

export const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: #000;
  color: #fff;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #b79d57;
`;

export const Line = styled.div`
  width: 60px;
  height: 1px;
  background-color: #fff;
  margin: 10px auto 20px auto;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: justify;
`;

export const ImageDisplayed = styled.img`
  width: 100%;
  max-width: 700px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

//Filosofia da empresa
export const FilosofiaSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 20px 0;
`;

export const PhilosophyText = styled.span`
  color: #b59d57;
  font-size: 25px;
  font-weight: bold;
  margin-right: 10px;

  @media (max-width: 900px) {
    font-size: 15px;
  }
`;

export const Divider = styled.div`
  width: 2px;
  border-radius: 1px;
  height: 55px;
  background-color: #b59d57;
  margin: 0 10px;

  @media (max-width: 900px) {
    height: 45px;
    width: 1px;
  }
`;

export const DescriptionText = styled.span`
  color: #808080;
  font-size: 18px;

  @media (max-width: 900px) {
    font-size: 14px;
  }
`;

//Valores
export const ContainerValue = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 10px;
  margin-top: 42px;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    gap: 35px;
  }
`;

export const Blocos = styled.div`
  align-items: center;
  width: 370px;
  height: 200px;
  border-radius: 8px;
  background-color: #191919;
  text-align: center;
  padding: 30px 0;
  box-sizing: border-box;

  @media (max-width: 900px) {
    width: 90%;
    height: auto;
  }
`;

export const ValoresSpan = styled.span`
  color: #b59d57;
  font-size: 27px;
  font-weight: bold;
`;

export const TextParag = styled.p`
  font-size: 17px;
  color: #fff;
  line-height: 23px;
  padding: 15px 15px 15px 15px;
`;
