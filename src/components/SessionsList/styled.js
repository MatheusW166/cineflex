import styled from "styled-components";

const SessionsListUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 64px 24px;
  margin-top: 16px;
  margin-bottom: 118px;
`;

const SessionItemLi = styled.li`
  display: flex;
  flex-direction: column;
  gap: 22px;
  p {
    letter-spacing: 0.02em;
    line-height: 23px;
    font-size: ${({ theme }) => theme.lg};
  }
`;

const SessionShowtimesList = styled.ul`
  display: flex;
  gap: 8px;
`;

export { SessionItemLi, SessionShowtimesList, SessionsListUl };
