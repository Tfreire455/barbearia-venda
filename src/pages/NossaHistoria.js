import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import images1 from "../assets/images/images1.jpg";
import images2 from "../assets/images/images2.jpg";
import images3 from "../assets/images/images3.jpg";
import images4 from "../assets/images/images4.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #111;
  min-height: 100vh;
  position: relative;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 1200px;
  margin: 20px auto;
  padding-left: 20px;

  &:before {
    content: "";
    position: absolute;
    left: 15px;
    top: 0;
    bottom: 0;
    width: 4px;
    background-color: #ff6347;
  }
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 80px;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`;

const TimelineDot = styled.div`
  width: 12px;
  height: 12px;
  background-color: #ff6347;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: -27px;
`;

const TimelineContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  width: 60%;

  h3 {
    font-size: 22px;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 16px;
    color: #555;
    margin: 0;
  }
`;

const ImageWrapper = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    width: 100%;
    max-width: 350px;
    height: auto;
    border-radius: 12px;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Header = styled.h1`
  color: #ff6347;
  margin-bottom: 40px;
`;

function NossaHistoria() {
  const timelineData = [
    {
      year: "2020",
      text: "Fundamos nossa barbearia com a missão de oferecer cortes de alta qualidade.",
      image: images1,
    },
    {
      year: "2021",
      text: "Expandimos nossos serviços para incluir pacotes completos de cuidados masculinos.",
      image: images2,
    },
    {
      year: "2023",
      text: "Inauguramos nossa segunda unidade e fortalecemos nossa presença na comunidade.",
      image: images3,
    },
    {
      year: "2025",
      text: "Lançamos uma linha exclusiva de produtos premium para cuidados pessoais.",
      image: images4,
    },
  ];

  return (
    <Container>
      <Header>Nossa História</Header>
      <Timeline>
        {timelineData.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineDot />
            <TimelineContent>
              <h3>{item.year}</h3>
              <p>{item.text}</p>
            </TimelineContent>
            <ImageWrapper
              initial={{
                x: index % 2 === 0 ? 150 : -150,
                opacity: 0,
                scale: 0.9,
                rotate: -5,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <img src={item.image} alt={`História ${index + 1}`} />
            </ImageWrapper>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  );
}

export default NossaHistoria;
