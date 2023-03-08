import { MoviesListContainer } from "./styled";
import MovieCard from "../MovieCard";

export default function MoviesList({ movies }) {
  return (
    <MoviesListContainer>
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </MoviesListContainer>
  );
}
