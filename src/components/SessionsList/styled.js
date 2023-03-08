import styled from "styled-components";

const SessionsListUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 64px 24px;
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

const SessionShowtimeItem = styled.li`
  a {
    letter-spacing: 0.02em;
    line-height: 21px;
    text-decoration: none;
    font-size: ${({ theme }) => theme.md};
    color: ${({ theme }) => theme.bg};
    background: ${({ theme }) => theme.accent};
    display: grid;
    place-content: center;
    border-radius: 3px;
    width: 82px;
    height: 43px;
  }
`;

export {
  SessionItemLi,
  SessionShowtimeItem,
  SessionShowtimesList,
  SessionsListUl,
};
