import styled from "styled-components";

export const ImageHome = styled.img`
  width: 850px;
  height: auto;
  display: flex;
  margin: 0 auto;
  margin-top: 10px;

  @media (max-width: 950px) {
    width: 400px;
  }

  @media (max-width: 768px) {
    width: 300px;
  }
`;
