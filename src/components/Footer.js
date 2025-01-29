// src/components/Footer.js
import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll"; // Importando o ScrollLink para navegação suave

const FooterContainer = styled.footer`
  background: #222;
  color: #fff;
  padding: 40px 20px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    font-size: 18px;
    color: #ff6347;
    margin-bottom: 15px;
  }

  a {
    color: #ddd;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease;

    &:hover {
      color: #ff6347;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #333;
    color: #fff;
    font-size: 18px;
    transition: background 0.3s ease, transform 0.3s ease;

    &:hover {
      background: #ff6347;
      transform: scale(1.1);
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #aaa;

  span {
    color: #ff6347;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterColumn>
          <h3>Sobre Nós</h3>
          <a href="/nossa-historia">Nossa História</a>
          <a href="/equipe">Equipe</a>
        </FooterColumn>
        <FooterColumn>
          <h3>Serviços</h3>
          <ScrollLink to="services" smooth={true} duration={500}>
            Cortes de Cabelo
          </ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500}>
            Barba
          </ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500}>
            Pacotes
          </ScrollLink>
        </FooterColumn>
        <FooterColumn>
          <h3>Suporte</h3>
          <a href="/faq">FAQ</a>
          <a href="#contact">Contato</a>
          <a href="/termos-de-uso">Termos de Uso</a>
        </FooterColumn>
        <FooterColumn>
          <h3>Redes Sociais</h3>
          <SocialIcons>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </SocialIcons>
        </FooterColumn>
      </FooterGrid>
      <FooterBottom>
        <p>
          &copy; {new Date().getFullYear()} <span>Barbearia Exemplo</span>. Todos os direitos reservados.
        </p>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;
