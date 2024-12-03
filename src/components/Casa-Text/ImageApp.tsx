import {
  ClassH1,
  ContainerImageApp,
  Description,
  ImageAparelho,
  Title,
} from "./casa-style";
import ImageAparelhos from "../../assets/imagens-icones/aparelhos.svg";

interface TypeImage {
  className: string;
}

const AppImage: React.FC<TypeImage> = ({ className }) => {
  return (
    <ContainerImageApp className={className}>
      <ClassH1>
        <Title>Aplicativo excepcionalmente intuitivo</Title>
        <Description>
          O aplicativo através do qual você pode configurar, navegar e gerenciar
          sua casa funciona em um smartphone ou tablet. Usuários podem criar
          cenas simples e rápidas usando o criador de cenas visuais na interface
          da web.
        </Description>
      </ClassH1>
      <ImageAparelho src={ImageAparelhos} alt="Imagem dos aplicativos" />
    </ContainerImageApp>
  );
};

export default AppImage;
