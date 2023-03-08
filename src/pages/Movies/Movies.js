import MoviesList from "../../components/MoviesList";
import { PageTitle } from "../../styled";
import { useMoviesApi } from "../../hooks/useMoviesApi";
import { MoviesContainer } from "./styled";

const ROUTE_MOVIES = "/";
export { ROUTE_MOVIES };

export default function Movies() {
  const { movies, loading, error } = useMoviesApi();

  if (error) {
    return `${error}`;
  }

  if (loading) {
    return "Loading...";
  }

  return (
    <MoviesContainer>
      <PageTitle>Selecione o filme</PageTitle>
      <MoviesList movies={movies} />
    </MoviesContainer>
  );
}
