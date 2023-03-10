/* eslint-disable no-restricted-globals */
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
  const [forms, setForms] = useState({});

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

  function updateForm(id, newForm) {
    setForms({
      ...forms,
      [id]: newForm,
    });
  }

  function addForm(seat) {
    const { id } = seat;
    const newForm = {
      seat,
      name: "",
      cpf: "",
    };
    updateForm(id, newForm);
  }

  function removeForm(id) {
    const newForm = { ...forms };
    delete newForm[id];
    setForms(newForm);
  }

  function onChangeCpf(value, formId) {
    const formObj = forms[formId];
    formObj.cpf = value;
    updateForm(formId, formObj);
  }

  function onChangeName(value, formId) {
    const formObj = forms[formId];
    formObj.name = value;
    updateForm(formId, formObj);
  }

  function confirmSeatRemoval() {
    return confirm("Deseja remover o assento?");
  }

  function handleSeatClick(seat) {
    if (!seat.isAvailable) {
      alert("Assento indisponível.");
      return;
    }
    if (!selectedSeats.includes(seat)) {
      setSelectedSeats([...selectedSeats, seat]);
      addForm(seat);
      return;
    }
    if (!confirmSeatRemoval()) {
      return;
    }
    const newSeats = selectedSeats.filter((s) => s !== seat);
    setSelectedSeats(newSeats);
    removeForm(seat.id);
  }

  function validateForm() {
    const invalidForms = Object.values(forms).filter((f) => {
      return f.name.length === 0 || !/[\d]+/g.test(f.cpf);
    });
    return selectedSeats.length > 0 && invalidForms.length === 0;
  }

  function getCompradores() {
    return Object.values(forms).map((f) => {
      return { idAssento: f.seat.id, nome: f.name, cpf: f.cpf };
    });
  }

  const { movie, name, day } = seats;

  function handleFormSubmit() {
    if (!validateForm()) {
      return;
    }
    const ids = selectedSeats.map((seat) => seat.id);
    const compradores = getCompradores();
    const reservation = { ids, compradores };
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
        forms={forms}
        onChangeCpf={onChangeCpf}
        onChangeName={onChangeName}
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
