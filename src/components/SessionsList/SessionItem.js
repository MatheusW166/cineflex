import {
  SessionItemLi,
  SessionShowtimesList,
  SessionShowtimeItem,
} from "./styled";
import { Link } from "react-router-dom";
import { ROUTE_SEATS } from "../../pages/Seats";

export default function SessionItem({ id, date, weekday, showtimes }) {
  return (
    <SessionItemLi>
      <p>
        {weekday} - {date}
      </p>
      <SessionShowtimesList>
        {showtimes.map((showtime) => (
          <SessionShowtimeItem key={showtime.id}>
            <Link to={`${ROUTE_SEATS}/${id}`}>{showtime.name}</Link>
          </SessionShowtimeItem>
        ))}
      </SessionShowtimesList>
    </SessionItemLi>
  );
}
