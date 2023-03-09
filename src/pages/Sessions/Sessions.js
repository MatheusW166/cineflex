import { useParams } from "react-router-dom";
import { PageTitle, PageContainer } from "../../styled";
import MovieInformation from "../../components/MovieInformation";
import { useMovieSessionsApi } from "../../hooks/useMoviesApi";
import SessionsList from "../../components/SessionsList";

export default function Sessions() {
  const { id } = useParams();
  const [sessions, loading, error] = useMovieSessionsApi(id);

  if (error) {
    return `${error}`;
  }

  if (loading) {
    return "Loading...";
  }

  const { title, posterURL, days } = sessions;

  return (
    <PageContainer>
      <PageTitle>Selecione o horário</PageTitle>
      <SessionsList sessions={days} />
      <MovieInformation id={id} title={title} posterURL={posterURL} />
    </PageContainer>
  );
}
