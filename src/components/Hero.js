// src/components/Hero.js
import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next"; // Importa a função useTranslation
import barberParallax from "../assets/images/barber-bg.jpg";

const HeroContainer = styled.section`
height: 90vh;
display: flex;
flex-direction: column;
  background-image: 
    linear-gradient(to bottom, #000 0%, #000 20%, rgba(255, 255, 255, 0) 100%),
    url(${barberParallax});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: #fff;
  padding: 200px 20px;
  text-align: center;
  gap: 100px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
`;

const HeroButton = styled.button`
  background: #ff6347;
  color: #fff;
  width: 10%;
  margin: 0 auto;
  padding: 10px 20px;
  border: none;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background: #ff4500;
  }
`;

function Hero() {
    const { t } = useTranslation(); // Função que acessa as traduções

    return (
        <HeroContainer>
            <HeroTitle>{t("hero_title")}</HeroTitle> {/* Tradução do título */}
            <p>{t("hero_subtitle")}</p> {/* Tradução da descrição */}
            <HeroButton>{t("booking_title")}</HeroButton> {/* Tradução do botão */}
        </HeroContainer>
    );
}

export default Hero;
