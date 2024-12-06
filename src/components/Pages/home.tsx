import Carrousel from "components/Carrousel/carrousel";
import Casa from "components/Casa-Text/casa";
import Icon from "../IconComponent/icon";
import AppImage from "../AppImage/ImageApp";
import Footer from "../Footer/footer";
import React from "react";

import ImageIcon1 from "../../assets/imagens-icones/icone-cinema.svg";
import ImageIcon2 from "../../assets/imagens-icones/icone-webcam.svg";
import ImageIcon3 from "../../assets/imagens-icones/icone-musica.svg";
import ImageIcon4 from "../../assets/imagens-icones/icone-notificacao.svg";
import ImageIcon5 from "../../assets/imagens-icones/icone-seguranca.svg";
import ImageIcon6 from "../../assets/imagens-icones/icone-temperatura.svg";

const IconData = [
  { src: ImageIcon1, label: "Cenas" },
  { src: ImageIcon2, label: "Câmeras" },
  { src: ImageIcon3, label: "Multimídia" },
  { src: ImageIcon4, label: "Notificações" },
  { src: ImageIcon5, label: "Segurança" },
  { src: ImageIcon6, label: "Clima" },
];

const Home = () => {
  return (
    <div>
      <Carrousel />
      <Casa />
      <Icon icons={IconData} className="IconReveal" />
      <AppImage className="Text-Reveal" />
      <Footer className="Foter-Reveal" />
    </div>
  );
};

export default Home;
