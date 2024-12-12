import {
  Container,
  Title,
  Line,
  Paragraph,
  ImageDisplayed,
  FilosofiaSection,
  PhilosophyText,
  Divider,
  DescriptionText,
  ContainerValue,
  Blocos,
  ValoresSpan,
  TextParag,
} from "./sobreSyle";
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
        <ImageDisplayed src={ImageHome} alt="Equipe da empresa" />
      </Container>

      <FilosofiaSection>
        <PhilosophyText>FILOSOFIA</PhilosophyText>
        <Divider />
        <DescriptionText>
          Nossa prioridade é realizar seu sonho.
        </DescriptionText>
      </FilosofiaSection>

      <ContainerValue>
        <Blocos>
          <ValoresSpan>Nossa Missão</ValoresSpan>
          <TextParag>
            Trazer conforto, praticidade e segurança para ambientes familiares e
            corporativos com soluções contemporâneas em tecnologia.
          </TextParag>
        </Blocos>
        <Blocos>
          <ValoresSpan>Nossa Visão</ValoresSpan>
          <TextParag>
            Ser referência no mercado corporativo, sendo reconhecida com uma
            empresa de inovação e eficiência tecnológica.
          </TextParag>
        </Blocos>
        <Blocos>
          <ValoresSpan>Nossos Valores</ValoresSpan>
          <TextParag>
            Paixão pelo trabalho, respeito total as pessoas e excelência em tudo
            que fazemos e espírito inovador.
          </TextParag>
        </Blocos>
      </ContainerValue>
    </>
  );
};

export default Sobre;
