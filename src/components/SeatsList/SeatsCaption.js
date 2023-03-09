import { SeatsCaptionUl, Seat } from "./styled";

export default function SeatsCaption() {
  return (
    <SeatsCaptionUl>
      <li>
        <Seat isSelected />
        <p>Selecionado</p>
      </li>
      <li>
        <Seat isAvailable />
        <p>Disponível</p>
      </li>
      <li>
        <Seat />
        <p>Indisponível</p>
      </li>
    </SeatsCaptionUl>
  );
}
