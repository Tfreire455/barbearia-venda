// src/components/Contact.js
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const ContactContainer = styled.section`
  background: #111;
  color: #fff;
  padding: 60px 20px;
  text-align: center;
  margin: 30px auto;
  width: 80vw;
  border-radius: 15px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin: 30px 20px;
    padding: 40px 20px;
  }
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 30px;
  color: #ff6347;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;
const TitleMessage = styled.h2`
  font-size: 36px;
  margin-bottom: 30px;
  color: #ff6347;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 40px;
  font-size: 18px;

  p {
    margin: 10px 0;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const MapContainer = styled.div`
  margin: 30px auto;
  width: 90%;
  max-width: 700px;
  height: 350px;
  border: 2px solid #ff6347;
  border-radius: 10px;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const FormContainer = styled.div`
  margin: 40px auto;
  width: 90%;
  max-width: 600px;
  background: #333;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 15px;
  border: none;
  border-radius: 5px;
  width: 100%;
  font-size: 16px;
  background: #444;
  color: #fff;
  outline: none;

  &:focus {
    border: 2px solid #ff6347;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 12px;
  }
`;

const TextArea = styled.textarea`
  padding: 15px;
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 100px;
  font-size: 16px;
  background: #444;
  color: #fff;
  outline: none;

  &:focus {
    border: 2px solid #ff6347;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    height: 80px;
    padding: 12px;
  }
`;

const SubmitButton = styled.button`
  padding: 15px;
  background: #ff6347;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #ff4500;
  }

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 14px;
  }
`;

function Contact() {
  const { t } = useTranslation();
  return (
    <ContactContainer>
      <Title>{t("contact_title")}</Title>
      <ContactInfo>
        <p>{t("contact_telephone")} (XX) XXXX-XXXX</p>
        <p>{t("contact_email")} contato@barbearia.com</p>
        <p>{t("contact_address")} Rua Exemplo, 123 - Cidade</p>
      </ContactInfo>
      <FormContainer>
        <TitleMessage>{t("contact_message_title")}</TitleMessage>
        <Form>
          <Input type="text" placeholder={t("contact_message_name")} required />
          <Input type="email" placeholder={t("contact_message_email")} required />
          <TextArea placeholder={t("contact_message_message")} required></TextArea>
          <SubmitButton type="submit">{t("contact_message_button")}</SubmitButton>
        </Form>
      </FormContainer>
      <p>
        Nossa localização:
      </p>
      <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.497883150543!2d-122.40641728468184!3d37.78583497975678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c1d9e7db3%3A0xd839e4a6486f0c9b!2sSalesforce%20Tower!5e0!3m2!1sen!2sus!4v1675600038820!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          title="Mapa do Local"
        ></iframe>
      </MapContainer>
    </ContactContainer>
  );
}

export default Contact;
