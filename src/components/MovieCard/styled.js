import styled from "styled-components";

const MovieCardContainer = styled.div`
  background: ${({ theme }) => theme.bg};
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 8px;
  width: min(145px, 100%);
  aspect-ratio: 145/209;
`;

const MovieImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export { MovieCardContainer, MovieImage };
