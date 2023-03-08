import { useEffect, useState } from "react";
import moviesApiAdapter from "../services/moviesApiAdapter";

function useMoviesApi() {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    moviesApiAdapter
      .getMovies()
      .then(setMovies)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { movies, loading, error };
}

function useMovieSessionsApi(movieId) {
  const [sessions, setSessions] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    moviesApiAdapter
      .getMovieSessions(movieId)
      .then(setSessions)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [movieId]);

  return { sessions, loading, error };
}

function useMovieSessionSeatsApi(sessionId) {
  const [seats, setSeats] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    moviesApiAdapter
      .getSessionSeats(sessionId)
      .then(setSeats)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [sessionId]);

  return { seats, loading, error };
}

function useMovieReserveSeatsApi(reservation) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const apiCall = () => {
    moviesApiAdapter
      .reserveSeats(reservation)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  };

  return { data, loading, error, apiCall };
}

export {
  useMoviesApi,
  useMovieSessionsApi,
  useMovieSessionSeatsApi,
  useMovieReserveSeatsApi,
};
