import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";
import { MovieCardContainer, MovieImage } from "./styled";

export default function MovieCard({ id, title, posterURL }) {
  return (
    <MovieCardContainer className="movie-card">
      <Link to={`${ROUTES.sessions}/${id}`}>
        <MovieImage src={posterURL} alt={title} />
      </Link>
    </MovieCardContainer>
  );
}
