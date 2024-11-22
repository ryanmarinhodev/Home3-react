import React from "react";
import { Container, ContainerText, ImageHome, Text } from "./casa-style";
import Image from "../../assets/imagens/imageHomeCasa.png";

const Casa: React.FC = () => {
  return (
    <Container>
      <ImageHome src={Image} alt="Foto Casa" />
      <ContainerText>
        <Text>
          Descubra um mundo onde a tecnologia trabalha a seu favor, tornando
          cada ação mais simples e eficiente.
        </Text>
      </ContainerText>
    </Container>
  );
};

export default Casa;
