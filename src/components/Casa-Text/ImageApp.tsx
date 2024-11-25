import { ClassH1, ContainerImageApp, Description, Title } from "./casa-style";
import ImageAparelhos from "../../assets/imagens-icones/aparelhos.svg";

const AppImage: React.FC = () => {
  return (
    <ContainerImageApp>
      <ClassH1>
        <Title>Aplicativo excepcionalmente intuitivo</Title>
        <Description>
          O aplicativo através do qual você pode configurar, navegar e gerenciar
          sua casa funciona em um smartphone ou tablet. Usuários podem criar
          cenas simples e rápidas usando o criador de cenas visuais na interface
          da web.
        </Description>
      </ClassH1>
      <img src={ImageAparelhos} alt="Imagem aparelhos" />
    </ContainerImageApp>
  );
};

export default AppImage;
