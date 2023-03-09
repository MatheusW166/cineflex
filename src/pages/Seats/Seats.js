/* eslint-disable no-unused-vars */
import { useParams, useNavigate } from "react-router-dom";
import {
  useMovieSessionSeatsApi,
  useMovieReserveSeatsApi,
} from "../../hooks/useMoviesApi";
import {
  PageContainer,
  PageTitle,
  CustomInput,
  PrimaryButton,
  CustomForm,
} from "../../styled";
import MovieInformation from "../../components/MovieInformation";
import { useState } from "react";
import SeatsList, { SeatsCaption } from "../../components/SeatsList";

const ROUTE_SEATS = "/assentos";
export { ROUTE_SEATS };

export default function Seats() {
  const { id } = useParams();
  const navigator = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seats, loadingSeats, errorSeats] = useMovieSessionSeatsApi(id);
  const [_, loadingReserve, errorReserve, reserveSeats] =
    useMovieReserveSeatsApi();

  if (errorSeats) {
    return `${errorSeats}`;
  }

  if (loadingSeats) {
    return "Loading...";
  }

  if (errorReserve) {
    return `${errorReserve}`;
  }

  if (loadingReserve) {
    return "Reserving seats...";
  }

  const { movie, name, day } = seats;

  function handleSeatClick(seat) {
    if (!seat.isAvailable) {
      return;
    }
    if (selectedSeats.includes(seat)) {
      const newSeats = selectedSeats.filter((s) => s !== seat);
      setSelectedSeats(newSeats);
      return;
    }
    setSelectedSeats([...selectedSeats, seat]);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const clientName = form["name"].value;
    const cpf = form["cpf"].value;
    const ids = selectedSeats.map((seat) => seat.id);
    const reservation = { ids, clientName, cpf };
    reserveSeats(reservation);
    navigator("/sucesso", {
      state: {
        reservation,
        movie,
        day,
        time: name,
      },
    });
  }

  return (
    <PageContainer>
      <PageTitle>Selecione o(s) assento(s)</PageTitle>
      <SeatsList
        seats={seats}
        selectedSeats={selectedSeats}
        onSeatClick={handleSeatClick}
      />
      <SeatsCaption />

      <CustomForm onSubmit={handleFormSubmit}>
        <label>
          Nome do comprador:
          <CustomInput
            required
            placeholder="Digite seu nome..."
            name="name"
            type="text"
          />
        </label>
        <label>
          CPF do comprador:
          <CustomInput
            required
            placeholder="Digite seu CPF..."
            name="cpf"
            type="text"
          />
        </label>
        <PrimaryButton type="submit">Reservar assento(s)</PrimaryButton>
      </CustomForm>

      <MovieInformation
        id={movie.id}
        title={movie.title}
        posterURL={movie.posterURL}
        weekday={day.weekday}
        time={name}
      />
    </PageContainer>
  );
}
