import { SessionItemLi, SessionShowtimesList } from "./styled";
import { Link } from "react-router-dom";
import { ROUTE_SEATS } from "../../pages/Seats";
import { PrimaryButton } from "../../styled";

export default function SessionItem({ date, weekday, showtimes }) {
  return (
    <SessionItemLi>
      <p>
        {weekday} - {date}
      </p>
      <SessionShowtimesList>
        {showtimes.map(({ id, name }) => (
          <li key={id}>
            <PrimaryButton>
              <Link to={`${ROUTE_SEATS}/${id}`}>{name}</Link>
            </PrimaryButton>
          </li>
        ))}
      </SessionShowtimesList>
    </SessionItemLi>
  );
}
