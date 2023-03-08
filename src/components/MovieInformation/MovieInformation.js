import { MovieInformationContainer } from "./styled";
import MovieCard from "../MovieCard";

export default function MovieInformation({ id, title, posterURL }) {
  return (
    <MovieInformationContainer>
      <MovieCard {...{ id, title, posterURL }} />
      <p>{title}</p>
    </MovieInformationContainer>
  );
}
