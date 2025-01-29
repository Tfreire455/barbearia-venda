import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import barberParallax from "../assets/images/barber-bg2.jpg";
import barberParallax2 from "../assets/images/barber-bg.jpg";
import barberParallax3 from "../assets/images/barber-bg3.jpg";
import Barba from "../assets/icon/barba.png";
import Cabelo from "../assets/icon/barba1.png";
import Barbear from "../assets/icon/barbear.png";
import { useTranslation } from "react-i18next";

const ServiceList = styled.div`
  display: flex;
  background: #222;
  flex-direction: column;
  justify-content: center;
  padding: 50px 20px;

  @media (max-width: 768px) {
    padding: 30px 10px;
  }

  @media (max-width: 480px) {
    padding: 20px 5px;
  }
`;

const ServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const Service = styled(motion.div)`
  color: #ddd;
  margin: 10px 60px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40vh;
  background-image: 
    linear-gradient(45deg, rgba(255, 255, 255, 0) 0%, #000 60%, #000 100%),
    url(${(props) => props.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: scroll;
  box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.75);

  @media (max-width: 768px) {
    margin: 10px 20px;
    height: 35vh;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    margin: 10px 10px;
    height: 30vh;
  }
`;

const Title = styled.h2`
  font-size: 36px;
  color: #ff6347;
  margin-bottom: 40px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 15px;
  }
`;

const TitleService = styled.h1`
  color: #fff;
  padding: 10px 50px;
  width: 60%;
  font-size: 34px;
  text-transform: uppercase;
  text-align: start;
  align-self: center;

  @media (max-width: 768px) {
    font-size: 28px;
    width: 80%;
    padding: 10px 20px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 22px;
    width: 90%;
    padding: 10px 10px;
  }
`;

const ServiceDescription = styled.p`
  text-align: center;
  width: 30%;
  align-self: center;
  color: #ddd;

  @media (max-width: 768px) {
    width: 60%;
  }

  @media (max-width: 480px) {
    width: 80%;
    font-size: 14px;
  }
`;

const DivColumn = styled.div`
  border: 1px solid #777;
  padding: 20px 10px;
  margin: 10% 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 100%;
  gap: 15px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 5% 20px;
    padding: 15px 10px;
  }

  @media (max-width: 480px) {
    margin: 5% 10px;
    padding: 10px 5px;
  }
`;

const Button = styled.button`
  background-color: #444;
  color: #fff;
  width: 10%;
  height: 20%;
  margin: auto 0px;
  margin-right: 50px;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #666;
  }

  @media (max-width: 768px) {
    width: 30%;
    margin: 10px auto;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 40%;
    font-size: 12px;
  }
`;

const Icone = styled.img`
  width: 100px;
  height: 100px;
  filter: invert(75%);

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const servicos = [
  {
    bgImage: barberParallax,
    titulo: "corte_de_cabelo",
    descricao: "descricao_corte_de_cabelo",
    icone: Cabelo,
  },
  {
    bgImage: barberParallax2,
    titulo: "barba_e_sobrancelha",
    descricao: "descricao_barba_sobrancelha",
    icone: Barba,
  },
  {
    bgImage: barberParallax3,
    titulo: "pacote_especial",
    descricao: "descricao_pacote_especial",
    icone: Barbear,
  },
];

function Services() {
  const { t } = useTranslation();

  return (
    <ServiceList id="services">
      <Title>{t("service_title")}</Title>
      <ServiceItem>
        {servicos.map((service, index) => (
          <Service
            bgImage={service.bgImage}
            key={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <TitleService>{t(service.titulo)}</TitleService>
            <DivColumn>
              <ServiceDescription>{t(service.descricao)}</ServiceDescription>
              <Icone src={service.icone} alt={t(service.titulo)} />
            </DivColumn>
            <Button>{t("saiba_mais")}</Button>
          </Service>
        ))}
      </ServiceItem>
    </ServiceList>
  );
}

export default Services;