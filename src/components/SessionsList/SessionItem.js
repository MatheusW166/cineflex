import { SessionItemLi, SessionShowtimesList } from "./styled";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";
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
              <Link to={`${ROUTES.seats}/${id}`}>{name}</Link>
            </PrimaryButton>
          </li>
        ))}
      </SessionShowtimesList>
    </SessionItemLi>
  );
}
