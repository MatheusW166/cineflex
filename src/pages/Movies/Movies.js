import MoviesList from "../../components/MoviesList";
import { PageTitle, PageContainer } from "../../styled";
import { useMoviesApi } from "../../hooks/useMoviesApi";

export default function Movies() {
  const [movies, loading, error] = useMoviesApi();

  if (error) {
    return `${error}`;
  }

  if (loading) {
    return "Loading...";
  }

  return (
    <PageContainer>
      <PageTitle>Selecione o filme</PageTitle>
      <MoviesList movies={movies} />
    </PageContainer>
  );
}
