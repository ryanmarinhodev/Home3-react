import styled from "styled-components";

export const ContainerProject = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin: 20px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 600px) {
    margin: 10px;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
