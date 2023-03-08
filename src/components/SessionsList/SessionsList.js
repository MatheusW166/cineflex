import { SessionsListUl } from "./styled";
import SessionItem from "./SessionItem";

export default function SessionsList({ sessions }) {
  return (
    <SessionsListUl>
      {sessions.map((session) => (
        <SessionItem key={session.id} {...session} />
      ))}
    </SessionsListUl>
  );
}
