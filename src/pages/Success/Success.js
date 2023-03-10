import { PageContainer, PageTitle, PrimaryButton } from "../../styled";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { ROUTES } from "../../routes";

const SuccessMessage = styled(PageTitle)`
  font-weight: 700;
  color: ${({ theme }) => theme.success};
`;

const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 auto;
  h3 {
    margin-bottom: 8px;
    font-size: ${({ theme }) => theme.lg};
  }
  p {
    line-height: 22px;
    letter-spacing: 0.04em;
    font-size: ${({ theme }) => theme.md};
  }
`;

const PrimaryButtonAlt = styled(PrimaryButton)`
  margin: 0 auto;
  margin-top: 64px;
`;

export default function Success() {
  const { state } = useLocation();
  const {
    seats,
    movie: { title },
    day: { date },
    reservation: { name, cpf },
    time,
  } = state;

  return (
    <PageContainer>
      <SuccessMessage>
        Pedido feito
        <br />
        com sucesso!
      </SuccessMessage>
      <OrderInfo>
        <div data-test="movie-info">
          <h3>Filme e sessão</h3>
          <p>{title}</p>
          <p>
            {date} {time}
          </p>
        </div>
        <div data-test="seats-info">
          <h3>Ingressos</h3>
          {seats.map((seat) => (
            <p key={seat.id}>Assento {seat.name}</p>
          ))}
        </div>
        <div data-test="client-info">
          <h3>Comprador</h3>
          <p>Nome: {name}</p>
          <p>CPF: {cpf}</p>
        </div>
      </OrderInfo>
      <Link data-test="go-home-btn" to={ROUTES.home}>
        <PrimaryButtonAlt>Voltar pra Home</PrimaryButtonAlt>
      </Link>
    </PageContainer>
  );
}
