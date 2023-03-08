import { Link } from "react-router-dom";
import { ROUTE_SESSIONS } from "../../pages/Sessions";
import { MovieCardContainer, MovieImage } from "./styled";

export default function MovieCard({ id, title, posterURL }) {
  return (
    <MovieCardContainer className="movie-card">
      <Link to={`${ROUTE_SESSIONS}/${id}`}>
        <MovieImage src={posterURL} alt={title} />
      </Link>
    </MovieCardContainer>
  );
}
