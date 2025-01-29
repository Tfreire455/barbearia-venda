// src/pages/FAQ.js
import React, { useState } from "react";
import styled from "styled-components";

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  padding: 50px 20px;
  background-color: #f9f9f9;
  @media (max-width: 768px) {
   height: auto;
  }
`;

const FAQTitle = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const QuestionWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const QuestionHeader = styled.div`
  padding: 20px;
  background: #333;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background: #444;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Icon = styled.span`
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Answer = styled.div`
  padding: 20px;
  background: #f9f9f9;
  color: #555;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "O que é o nosso serviço?",
      answer:
        "Nosso serviço oferece cortes de cabelo e cuidados com a barba, sempre priorizando a sua satisfação.",
    },
    {
      question: "Como agendar um horário?",
      answer:
        "Você pode agendar um horário diretamente pelo nosso site, clicando na seção 'Agendar' no menu principal.",
    },
    {
      question: "Quais são os métodos de pagamento aceitos?",
      answer:
        "Aceitamos pagamentos em dinheiro, cartões de débito e crédito, bem como carteiras digitais.",
    },
    {
      question: "Preciso fazer um pré-pagamento?",
      answer:
        "Não, o pagamento é feito após o serviço, mas você pode pagar antecipadamente se preferir.",
    },
  ];

  return (
    <FAQContainer>
      <FAQTitle>FAQ - Perguntas Frequentes</FAQTitle>
      {faqItems.map((item, index) => (
        <QuestionWrapper key={index}>
          <QuestionHeader onClick={() => toggleFAQ(index)}>
            <span>{item.question}</span>
            <Icon>{openIndex === index ? "-" : "+"}</Icon>
          </QuestionHeader>
          <Answer isOpen={openIndex === index}>{item.answer}</Answer>
        </QuestionWrapper>
      ))}
    </FAQContainer>
  );
};

export default FAQ;
