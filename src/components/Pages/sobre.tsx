import { Container, Title, Line, Paragraph, ImageDisplayed } from "./sobreSyle";
import ImageHome from "../../assets/imagens/confrahome.webp";

const Sobre = () => {
  return (
    <>
      <Container>
        <Title>EMPRESA</Title>
        <Line />
        <Paragraph>
          Com esse panorama de total desbravamento na busca de novas
          possibilidades, surge uma equipe que observa em meio à pandemia uma
          possibilidade de transformação, em momento informal preparado por
          Deus. Ela alia tecnologia a bem-estar, facilitando a linguagem para
          transformar a vida das pessoas, que juntos co-criam a HOME 3
          Tecnologia e Automação.
        </Paragraph>
        <Paragraph>
          A Home 3 nasce com um olhar plural, sem fronteiras e livre para
          projetar a inteligência nos mais diversos segmentos, com estratégias
          que buscam otimizar e facilitar o uso da tecnologia.
        </Paragraph>
        <Paragraph>
          O futuro já está presente e a tecnologia avançada está a serviço do
          homem e bem-estar da Humanidade.
        </Paragraph>
        <ImageDisplayed
          src={ImageHome} // Substitua pelo caminho da sua imagem
          alt="Equipe da empresa"
        />
      </Container>
    </>
  );
};

export default Sobre;
