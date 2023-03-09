import axios from "axios";

const BASE_URL = "https://mock-api.driven.com.br/api/v8/cineflex";

const moviesApiAdapter = {
  getMovies: async () => {
    const res = await axios.get(`${BASE_URL}/movies`);
    return res.data;
  },
  getMovieSessions: async (movieId) => {
    const res = await axios.get(`${BASE_URL}/movies/${movieId}/showtimes`);
    return res.data;
  },
  getSessionSeats: async (sessionId) => {
    const res = await axios.get(`${BASE_URL}/showtimes/${sessionId}/seats`);
    return res.data;
  },
  reserveSeats: async (reservation) => {
    const res = await axios.post(`${BASE_URL}/seats/book-many`, reservation);
    return res;
  },
};

export default moviesApiAdapter;
