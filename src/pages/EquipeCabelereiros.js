import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"; // Importando ícones
import barber1 from "../assets/images/barberman.png";
import barber2 from "../assets/images/barberman2.png";
import barber3 from "../assets/images/barberman3.png";

const ContainerTeam = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #111;
  min-height: 100vh;
  margin: 100px;
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
  `;
  
const BarberSection = styled(motion.div)`
display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
  overflow: hidden;
  border: 8px solid #222;
  border-radius: 20px;
  flex-direction: row-reverse;

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
    flex: 0 0 50%;
    width: 300px;
    height: 100vh;
    object-fit: cover;
    border-radius: 12px;
    position: relative;
    z-index: 2;
    filter: drop-shadow(22px 2px 5px #ff6347);
  }

  div {
    flex: 1;
    padding: 20px 100px;
    height: 70vh;
    border-radius: 12px;
    z-index: 1;

    h3 {
      font-size: 2rem;
      margin-bottom: 15px;
      color: #ff6347;
    }

    p {
      font-size: 1.5rem;
      color: #fff;
      margin-bottom: 20px;
      line-height: 1.5;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        font-size: 1.2rem;
        color: #ccc;
        margin-bottom: 10px;
      }
    }

    .social-icons {
    width: 60px;
    height: 60px;
      display: flex;
      gap: 10px;
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
