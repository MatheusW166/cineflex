import { MovieInformationContainer } from "./styled";
import MovieCard from "../MovieCard";

export default function MovieInformation({
  id,
  title,
  posterURL,
  weekday,
  time,
}) {
  return (
    <MovieInformationContainer>
      <MovieCard {...{ id, title, posterURL }} />
      <div>
        <p>{title}</p>
        {weekday && time && (
          <p>
            {weekday} - {time}
          </p>
        )}
      </div>
    </MovieInformationContainer>
  );
}
