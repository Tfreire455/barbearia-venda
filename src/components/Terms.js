import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  width: 100%;
  min-height: 80vh; /* Usamos min-height para garantir que o conteúdo não fique cortado */
  margin: 0 auto;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
    min-height: auto; /* Ajuste para dispositivos móveis */
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: #343a40;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Reduz o tamanho da fonte em dispositivos móveis */
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #495057;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Reduz o tamanho da fonte em dispositivos móveis */
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`;

const TermsOfUse = () => {
  return (
    <Container>
      <Title>Termos de Uso</Title>
      <Paragraph>
        Bem-vindo ao nosso site de barbearia! Antes de usar nossos serviços, leia atentamente os termos de uso abaixo. Ao acessar ou usar nosso site, você concorda com os termos descritos neste documento.
      </Paragraph>
      <br />
      <br />

      <Paragraph>
        <strong>1. Serviços Oferecidos</strong>
      </Paragraph>
      <Paragraph>
        Oferecemos uma variedade de serviços de corte de cabelo, barbearia, cuidados com a pele, entre outros. Todos os serviços são prestados por profissionais qualificados.
      </Paragraph>

      <Paragraph>
        <strong>2. Agendamento</strong>
      </Paragraph>
      <Paragraph>
        O agendamento pode ser feito online através do nosso site ou diretamente na barbearia. É necessário chegar ao menos 10 minutos antes do horário agendado.
      </Paragraph>

      <Paragraph>
        <strong>3. Política de Cancelamento</strong>
      </Paragraph>
      <Paragraph>
        Se precisar cancelar ou reagendar, pedimos que faça isso com pelo menos 24 horas de antecedência. Cancelamentos fora deste prazo poderão estar sujeitos a taxas.
      </Paragraph>

      <Paragraph>
        <strong>4. Responsabilidades</strong>
      </Paragraph>
      <Paragraph>
        A barbearia não se responsabiliza por danos pessoais ou materiais ocorridos durante a utilização dos serviços, exceto quando comprovadamente causados por negligência de nossos profissionais.
      </Paragraph>

      <Paragraph>
        <strong>5. Conduta no Local</strong>
      </Paragraph>
      <Paragraph>
        Pedimos que todos os clientes se comportem de maneira respeitosa com a equipe e outros clientes. O uso de comportamentos agressivos ou perturbadores pode resultar na recusa de atendimento.
      </Paragraph>

      <Paragraph>
        <strong>6. Alterações nos Termos</strong>
      </Paragraph>
      <Paragraph>
        A barbearia reserva-se o direito de alterar os termos de uso a qualquer momento, sendo estas mudanças notificadas no site.
      </Paragraph>
    </Container>
  );
};

export default TermsOfUse;