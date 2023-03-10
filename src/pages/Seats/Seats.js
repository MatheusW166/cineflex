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
import { ROUTES } from "../../routes";
import moviesApiAdapter from "../../services/moviesApiAdapter";

export default function Seats() {
  const { id } = useParams();
  const navigator = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seats, loadingSeats, errorSeats] = useMovieSessionSeatsApi(id);
  // const [_, loadingReserve, errorReserve, reserveSeats] =
  //   useMovieReserveSeatsApi();

  const [clientName, setClientName] = useState("");
  const [cpf, setCpf] = useState("");

  if (errorSeats) {
    return `${errorSeats}`;
  }

  if (loadingSeats) {
    return "Loading...";
  }

  // if (errorReserve) {
  //   return `${errorReserve}`;
  // }

  // if (loadingReserve) {
  //   return "Reserving seats...";
  // }

  const { movie, name, day } = seats;

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

  function validateForm(name, cpf) {
    return name.length > 0 && /[\d]+/g.test(cpf);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (!validateForm(clientName, cpf)) {
      return;
    }

    const ids = selectedSeats.map((seat) => seat.id);
    const reservation = { ids, clientName, cpf };
    moviesApiAdapter.reserveSeats(reservation).then((_) => {
      navigator(ROUTES.success, {
        state: {
          seats: selectedSeats,
          reservation,
          movie,
          day,
          time: name,
        },
      });
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
            placeholder="Digite seu nome..."
            name="name"
            type="text"
            data-test="client-name"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
        </label>
        <label>
          CPF do comprador:
          <CustomInput
            placeholder="Digite seu CPF..."
            name="cpf"
            type="text"
            data-test="client-cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </label>
        <PrimaryButton data-test="book-seat-btn" type="submit">
          Reservar assento(s)
        </PrimaryButton>
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
