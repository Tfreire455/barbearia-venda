import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import barber1 from "../assets/images/barberman.png";
import barber2 from "../assets/images/barberman2.png";
import barber3 from "../assets/images/barberman3.png";

const ContainerTeam = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #111;
  height: auto;
  margin: 50px auto;
`;

const Title = styled.h2`
  font-size: 36px;
  color: #ff6347;
  margin-bottom: 40px;
  font-weight: bold;
`;

const TeamSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const BarberSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
  overflow: hidden;
  border: 8px solid #222;
  border-radius: 20px;
  margin: 10px 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 90%;
    height: 100%;
    background: #222;
    clip-path: polygon(0 0, 100% 0, 0 90%);
    z-index: 0;
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 12px;
    position: relative;
    z-index: 1;
    filter: drop-shadow(22px 2px 5px #ff6347);

    @media (min-width: 768px) {
      width: 300px;
      height: 400px;
    }
  }

  div {
    padding: 20px;
    background: #222;
    height: 100%;
    border: solid 6px #111;
    border-radius: 12px;
    z-index: 1;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    text-align: center;

    h3 {
      font-size: 1.8rem;
      margin-bottom: 15px;
      color: #ff6347;
    }

    p {
      font-size: 1rem;
      color: #fff;
      margin-bottom: 20px;
      line-height: 1.5;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        font-size: 1rem;
        color: #ccc;
        margin-bottom: 10px;
      }
    }

    .social-icons {
      width: 60px;
      height: 60px;
      border: none;
      display: flex;
      flex-direction: row;
      gap: 10px;
      justify-content: center;
      margin: 0 auto;
      margin-top: 20px;

      a {
        color: #ff6347;
        font-size: 1.5rem;
        transition: color 0.3s;

        &:hover {
          color: #fff;
        }
      }
    }
  }

  @media (min-width: 768px) {
    width: 45%;
  }

  @media (min-width: 1024px) {
    width: 30%;
  }

  &:hover {
    box-shadow: 0 10px 20px #ff634790;
  }
`;

function EquipeCabelereiros() {
  const teamData = [
    {
      name: "Carlos Silva",
      story:
        "Especialista em cortes modernos e técnicas de fade. Trabalha com paixão desde 2015.",
      courses: [
        "Curso de Cortes Avançados - 2018",
        "Workshop de Estilização Masculina - 2020",
        "Barbearia Premium - 2021",
      ],
      image: barber1,
      social: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Ricardo Souza",
      story:
        "Focado em barbas e técnicas de modelagem, com mais de 10 anos de experiência no mercado.",
      courses: [
        "Técnicas de Modelagem de Barba - 2016",
        "Especialização em Estilo Vintage - 2019",
        "Workshop de Cuidados com a Pele - 2022",
      ],
      image: barber2,
      social: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Pedro Oliveira",
      story:
        "Cabeleireiro criativo, especializado em cortes artísticos e tendências internacionais.",
      courses: [
        "Arte e Estilo em Cortes Masculinos - 2017",
        "Tendências Internacionais - 2020",
        "Masterclass de Cortes Artísticos - 2023",
      ],
      image: barber3,
      social: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
      },
    },
  ];

  return (
    <ContainerTeam>
      <Title>Equipe de Cabeleireiros</Title>
      <TeamSection>
        {teamData.map((barber, index) => (
          <BarberSection
            key={index}
            initial={{ x: index % 2 === 0 ? -200 : 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <img src={barber.image} alt={barber.name} />
            <div>
              <h3>{barber.name}</h3>
              <p>{barber.story}</p>
              <ul>
                {barber.courses.map((course, i) => (
                  <li key={i}>{course}</li>
                ))}
              </ul>
              <div className="social-icons">
                <a href={barber.social.facebook} target="_blank" rel="noreferrer">
                  <FaFacebookF />
                </a>
                <a href={barber.social.instagram} target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
                <a href={barber.social.twitter} target="_blank" rel="noreferrer">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </BarberSection>
        ))}
      </TeamSection>
    </ContainerTeam>
  );
}

export default EquipeCabelereiros;
