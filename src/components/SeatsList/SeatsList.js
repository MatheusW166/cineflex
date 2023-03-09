import { Seat, SeatsListUl } from "./styled";

export default function SeatsList({ seats, selectedSeats, onSeatClick }) {
  return (
    <SeatsListUl>
      {seats.seats.map((seat) => (
        <li key={seat.id}>
          <Seat
            onClick={() => onSeatClick(seat)}
            isSelected={selectedSeats.includes(seat)}
            isAvailable={seat.isAvailable}>
            {seat.name}
          </Seat>
        </li>
      ))}
    </SeatsListUl>
  );
}
