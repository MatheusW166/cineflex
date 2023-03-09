import styled from "styled-components";

const SeatsListUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 26px);
  grid-gap: 18px 6px;
  place-content: center;
  width: min(332px, 100%);
  margin: 0 auto;
`;

function seatColors({ theme, isAvailable, isSelected }) {
  let backgroundColor;
  let borderColor;
  if (isSelected) {
    backgroundColor = theme.seatSelectBg;
    borderColor = theme.seatSelectBorder;
  } else if (isAvailable) {
    backgroundColor = theme.seatAvailableBg;
    borderColor = theme.seatAvailableBorder;
  } else {
    backgroundColor = theme.seatNotAvailableBg;
    borderColor = theme.seatNotAvailableBorder;
  }
  return `
    background: ${backgroundColor};
    border: 1px solid ${borderColor};
  `;
}

function seatEffects({ isAvailable }) {
  if (!isAvailable) {
    return "";
  }
  return `
    cursor: pointer;
    &:hover {
        filter: brightness(0.9);
    }
    &:active {
        filter: brightness(0.8);
    }
  `;
}

const Seat = styled.button`
  width: 26px;
  height: 26px;
  border-radius: 100%;
  display: grid;
  place-content: center;
  font-size: ${({ theme }) => theme.xs};
  letter-spacing: 0.04em;
  line-height: 13px;
  color: ${({ theme }) => theme.seatText};
  ${(props) => seatColors(props)}
  ${(props) => seatEffects(props)}
  transition: filter ease 0.3s;
`;

const SeatsCaptionUl = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
  margin: 0 auto;
  margin-top: 24px;
  font-size: ${({ theme }) => theme.sm};
  color: ${({ theme }) => theme.textSecondary};
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
`;

export { Seat, SeatsListUl, SeatsCaptionUl };
