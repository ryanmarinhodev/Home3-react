import React, { useEffect } from "react";
import { Container, ContainerText, ImageHome, Text } from "./casa-style";
import Image from "../../assets/imagens/imageHomeCasa.png";

import ScrollReveal from "scrollreveal";

const Casa: React.FC = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      duration: 2500,
      reset: true,
    });

    sr.reveal(".Container", {
      distance: "40px",
      delay: 300,
      origin: "top",
    });
    sr.reveal(".IconReveal", {
      distance: "40px",
      delay: 300,
      origin: "top",
    });
    sr.reveal(".Text-Reveal", {
      distance: "40px",
      delay: 300,
      origin: "top",
    });
    sr.reveal(".Foter-Reveal", {
      distance: "40px",
      delay: 300,
      origin: "top",
    });
  });
  return (
    <>
      <Container className="Container">
        <ImageHome src={Image} alt="Foto Casa" className="ImageHome" />
        <ContainerText>
          <Text>
            Descubra um mundo onde a tecnologia trabalha a seu favor, tornando
            cada ação mais simples e eficiente.
          </Text>
        </ContainerText>
      </Container>
    </>
  );
};

export default Casa;
