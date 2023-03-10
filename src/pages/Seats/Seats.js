/* eslint-disable no-unused-vars */
import { useParams, useNavigate } from "react-router-dom";
import {
  useMovieSessionSeatsApi,
  useMovieReserveSeatsApi,
} from "../../hooks/useMoviesApi";
import { PageContainer, PageTitle } from "../../styled";
import MovieInformation from "../../components/MovieInformation";
import { useState } from "react";
import SeatsList, { SeatsCaption } from "../../components/SeatsList";
import { ROUTES } from "../../routes";
import ReserveSeatsForm from "../../components/ReserveSeatsForm";

export default function Seats() {
  const { id } = useParams();
  const navigator = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seats, loadingSeats, errorSeats] = useMovieSessionSeatsApi(id);
  const [_, loadingReserve, errorReserve, reserveSeats] =
    useMovieReserveSeatsApi();
  const [clientName, setClientName] = useState("");
  const [cpf, setCpf] = useState("");

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

  function handleSeatClick(seat) {
    if (!seat.isAvailable) {
      alert("Assento indisponível.");
      return;
    }
    if (selectedSeats.includes(seat)) {
      const newSeats = selectedSeats.filter((s) => s !== seat);
      setSelectedSeats(newSeats);
      return;
    }
    setSelectedSeats([...selectedSeats, seat]);
  }

  function validateForm(selectedSeats, name, cpf) {
    return selectedSeats.length > 0 && name.length > 0 && /[\d]+/g.test(cpf);
  }

  const { movie, name, day } = seats;

  function handleFormSubmit() {
    if (!validateForm(selectedSeats, clientName, cpf)) {
      return;
    }
    const ids = selectedSeats.map((seat) => seat.id);
    const reservation = { ids, name: clientName, cpf };
    reserveSeats(
      reservation,
      navigator(ROUTES.success, {
        state: {
          seats: selectedSeats,
          reservation,
          movie,
          day,
          time: name,
        },
      })
    );
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
      <ReserveSeatsForm
        handleFormSubmit={handleFormSubmit}
        valueName={clientName}
        valueCpf={cpf}
        onChangeName={setClientName}
        onChangeCpf={setCpf}
      />
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
