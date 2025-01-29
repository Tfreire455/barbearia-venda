import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next"; // Importa a função useTranslation
import barberParallax from "../assets/images/barber-bg.jpg";

const HeroContainer = styled.section`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: 
    linear-gradient(to bottom, #000 0%, #000 20%, rgba(255, 255, 255, 0) 100%),
    url(${barberParallax});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: #fff;
  padding: 20px;
  text-align: center;
  gap: 30px;

  @media (max-width: 768px) {
    height: 80vh;
    padding: 100px 20px;
    gap: 20px;
  }

  @media (max-width: 480px) {
    height: 70vh;
    padding: 50px 20px;
    gap: 15px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const HeroButton = styled.button`
  background: #ff6347;
  color: #fff;
  padding: 10px 20px;
  border: none;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #ff4500;
  }

  @media (max-width: 768px) {
    width: 50%;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    width: 70%;
    font-size: 14px;
  }
`;

function Hero() {
  const { t } = useTranslation(); // Função que acessa as traduções

  return (
    <HeroContainer id="hero">
      <HeroTitle>{t("hero_title")}</HeroTitle> {/* Tradução do título */}
      <HeroSubtitle>{t("hero_subtitle")}</HeroSubtitle> {/* Tradução da descrição */}
      <HeroButton>{t("booking_title")}</HeroButton> {/* Tradução do botão */}
    </HeroContainer>
  );
}

export default Hero;