// src/components/Feedback.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const FeedbackContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #111;
  padding: 50px 20px;
  color: #fff;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 30px;
  color: #ff6347;
  text-transform: uppercase;
`;

const FeedbackDescription = styled.p`
font-size: 18px;
margin-bottom: 30px;
`

const CardContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 900px;
  perspective: 1500px;
`;

const Card = styled(motion.div)`
  width: 300px;
  height: 400px;
  margin: 0 10px;
  padding: 20px;
  background: #222;
  border-radius: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  transform-style: preserve-3d;
  backface-visibility: hidden;
`;

const Name = styled.h3`
  font-size: 20px;
  margin: 20px 0 10px;
  color: #fff;
`;

const FeedbackText = styled.p`
  font-size: 16px;
  color: #ddd;
  line-height: 1.5;
`;

// const Avatar = styled.img`
//   width: 80px;
//   height: 80px;
//   border-radius: 50%;
//   object-fit: cover;
//   border: 2px solid #ff6347;
// `;

const cardVariants = {
    hidden: { opacity: 0, rotateY: -90 },
    visible: (i) => ({
        opacity: 1,
        rotateY: 0,
        transition: {
            duration: 0.8,
            delay: i * 0.3,
        },
    }),
    exit: { opacity: 0, rotateY: 90 },
};

const feedbacks = [
    {
        name: "Carlos Silva",
        text: "client_text_1",
    },
    {
        name: "Ricardo Souza",
        text: "client_text_2",
    },
    {
        name: "Lucas Pereira",
        text: "client_text_3",
    },
    {
        name: "Gustavo Martins",
        text: "Muito satisfeito com o corte e o atendimento. Ambiente excelente e profissionais de qualidade.",
    },
    {
        name: "Felipe Almeida",
        text: "Corte top, ambiente ótimo e atendimento de primeira. Recomendo a todos!",
    },
];

function Feedback() {
    const { t } = useTranslation();
    return (
        <FeedbackContainer>
            <Title>{t("feedback_title")}</Title>
            <FeedbackDescription>
                {t("feedback_description")}
            </FeedbackDescription>
            <CardContainer>
                {feedbacks.map((feedback, index) => (
                    <Card
                        key={index}
                        variants={cardVariants}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <Name>{feedback.name}</Name>
                        <FeedbackText>{t(feedback.text)}</FeedbackText>
                    </Card>
                ))}
            </CardContainer>
        </FeedbackContainer>
    );
}

export default Feedback;
