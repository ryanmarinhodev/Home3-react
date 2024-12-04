import React, { useEffect } from "react";
import { Container, ContainerText, ImageHome, Text } from "./casa-style";
import Image from "../../assets/imagens/imageHomeCasa.png";

import ImageIcon1 from "../../assets/imagens-icones/icone-cinema.svg";
import ImageIcon2 from "../../assets/imagens-icones/icone-webcam.svg";
import ImageIcon3 from "../../assets/imagens-icones/icone-musica.svg";
import ImageIcon4 from "../../assets/imagens-icones/icone-notificacao.svg";
import ImageIcon5 from "../../assets/imagens-icones/icone-seguranca.svg";
import ImageIcon6 from "../../assets/imagens-icones/icone-temperatura.svg";
import Icon from "./Icon";
import AppImage from "./ImageApp";
import Footer from "./footer";
import ScrollReveal from "scrollreveal";

const IconData = [
  { src: ImageIcon1, label: "Cenas" },
  { src: ImageIcon2, label: "Câmeras" },
  { src: ImageIcon3, label: "Multimídia" },
  { src: ImageIcon4, label: "Notificações" },
  { src: ImageIcon5, label: "Segurança" },
  { src: ImageIcon6, label: "Clima" },
];

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
      <Icon icons={IconData} className="IconReveal" />
      <AppImage className="Text-Reveal" />
      <Footer className="Foter-Reveal" />
    </>
  );
};

export default Casa;
