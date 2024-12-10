import styled from "styled-components";

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
