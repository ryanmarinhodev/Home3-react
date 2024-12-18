import Imagem1 from "../../assets/fotosprojetos/automacao.svg";
import Imagem2 from "../../assets/fotosprojetos/cameras.svg";
import Imagem3 from "../../assets/fotosprojetos/homecinema.svg";
import Imagem4 from "../../assets/fotosprojetos/rede.svg";
import { ContainerProject } from "./projetoStyle";

const Projetos = () => {
  return (
    <ContainerProject>
      <img src={Imagem1} alt="Imagem app1" />
      <img src={Imagem2} alt="Imagem app2" />
      <img src={Imagem3} alt="Imagem app3" />
      <img src={Imagem4} alt="Imagem app4" />
    </ContainerProject>
  );
};

export default Projetos;
