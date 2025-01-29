// src/components/Booking.js
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const BookingContainer = styled.section`
  background: #111;
  padding: 60px 20px;
  text-align: center;
  color: #fff;
  margin: 30px auto;
  width: 80vw;
  border-radius: 15px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin: 30px 20px;
    padding: 40px 15px;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 30px;
  color: #ff6347;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

const BookingForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%;
    gap: 15px;
  }
`;

const BookingInput = styled.input`
  padding: 12px 15px;
  width: 100%;
  border: 2px solid transparent;
  border-radius: 8px;
  font-size: 16px;
  color: #0f172a;
  background: #f4f4f4;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:focus {
    border-color: #ff6347;
    outline: none;
    background: #fff;
    box-shadow: 0px 4px 12px rgba(255, 99, 71, 0.6);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 12px;
  }
`;

const BookingButton = styled.button`
  padding: 12px 30px;
  font-size: 16px;
  color: #fff;
  background: linear-gradient(90deg, #ff4500, #ff6347);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0px 4px 12px rgba(255, 99, 71, 0.4);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 8px 20px rgba(255, 99, 71, 0.6);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0px 4px 12px rgba(255, 99, 71, 0.4);
  }

  @media (max-width: 768px) {
    padding: 10px 25px;
    font-size: 14px;
  }
`;

const InfoText = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: #d1d5db;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

function Booking() {
  const { t } = useTranslation();
  return (
    <BookingContainer>
      <Title>{t("booking_title")}</Title>
      <BookingForm>
        <BookingInput type="text" placeholder={t("booking_placeholder")} />
        <BookingInput type="date" />
        <BookingInput type="time" />
        <BookingButton type="submit">{t("booking_button")}</BookingButton>
      </BookingForm>
      <InfoText>{t("booking_text_info")}</InfoText>
    </BookingContainer>
  );
}

export default Booking;
