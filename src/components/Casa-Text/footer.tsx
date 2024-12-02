import React, { useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa"; // Importando os ícones
import {
  FooterContainer,
  FooterContent,
  FooterContacts,
  FooterSocialMedia,
  FooterList,
  FooterSubscribe,
  InputGroup,
  Copyright,
} from "./casa-style";
import Logo from "../../assets/imagens/LogoHOME3.png";

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Adicione a lógica para enviar o e-mail
    console.log("E-mail enviado:", email);
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterContacts>
          <img src={Logo} alt="Logo" style={{ width: "100px" }} />
          <FooterSocialMedia>
            <a
              href="https://www.instagram.com/home3tecnologia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/home3tecnologia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/home3-tecnologia-5bb13521b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </FooterSocialMedia>
        </FooterContacts>

        <FooterList>
          <h3>Blog</h3>
          <ul>
            <li>
              <a href="https://ravel.com.br/blog/" className="footer-link">
                Tecnologia
              </a>
            </li>
            <li>
              <a
                href="https://klipbox.com.br/?gclid=CjwKCAjw3oqoBhAjEiwA_UaLttSuMyKtsgE2c0Jy3mDqhvvBcUsCQvy5Fq8T4ZE_3zCdLTmtnSTOORoC7bgQAvD_BwE"
                className="footer-link"
              >
                Automação
              </a>
            </li>
            <li>
              <a
                href="https://klipbox.com.br/?gclid=CjwKCAjw3oqoBhAjEiwA_UaLttSuMyKtsgE2c0Jy3mDqhvvBcUsCQvy5Fq8T4ZE_3zCdLTmtnSTOORoC7bgQAvD_BwE"
                className="footer-link"
              >
                Música
              </a>
            </li>
          </ul>
        </FooterList>

        <FooterList>
          <h3>Produtos</h3>
          <ul>
            <li>
              <a href="#" className="footer-link">
                App
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Desktop
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Home
              </a>
            </li>
          </ul>
        </FooterList>

        <FooterSubscribe>
          <h3>Contato</h3>
          <p>
            Digite seu e-mail para ser notificado sobre nossas soluções de
            notícias
          </p>
          <form onSubmit={handleSubmit}>
            <InputGroup>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Digite seu e-mail"
              />
              <button type="submit">
                <FaEnvelope />
              </button>
            </InputGroup>
          </form>
        </FooterSubscribe>
      </FooterContent>

      <Copyright>&#169; 2025 Todos os direitos reservados</Copyright>
    </FooterContainer>
  );
};

export default Footer;
