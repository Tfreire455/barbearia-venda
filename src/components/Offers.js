import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const OffersContainer = styled.section`
  background: #222;
  padding: 60px 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }

  @media (max-width: 480px) {
    padding: 30px 10px;
  }
`;

const Title = styled.h2`
  font-size: 36px;
  color: #ff6347;
  margin-bottom: 40px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const OffersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 0 auto;
  max-width: 1000px;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const OfferCard = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const OfferTitle = styled.h3`
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 8px;
  }
`;

const OfferDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 10px;
  }
`;

const OfferPrice = styled.div`
  font-size: 20px;
  color: #ff6347;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

const OfferButton = styled.button`
  padding: 10px 20px;
  background: #ff6347;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #ff4500;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

function Offers() {
  const packages = [
    {
      title: "corte_basico",
      description: "corte_basico_descricao",
      price: "R$ 50,00",
    },
    {
      title: "barba_e_cabelo",
      description: "barba_e_cabelo_descricao",
      price: "R$ 80,00",
    },
    {
      title: "corte_premium",
      description: "corte_premium_descricao",
      price: "R$ 120,00",
    },
    {
      title: "pacote_luxo",
      description: "pacote_luxo_descricao",
      price: "R$ 200,00",
    },
  ];

  const { t } = useTranslation();
  return (
    <OffersContainer id="offers">
      <Title>{t("offers_title")}</Title>
      <OffersGrid>
        {packages.map((offer, index) => (
          <OfferCard key={index}>
            <OfferTitle>{t(offer.title)}</OfferTitle>
            <OfferDescription>{t(offer.description)}</OfferDescription>
            <OfferPrice>{offer.price}</OfferPrice>
            <OfferButton>{t("offer_button")}</OfferButton>
          </OfferCard>
        ))}
      </OffersGrid>
    </OffersContainer>
  );
}

export default Offers;