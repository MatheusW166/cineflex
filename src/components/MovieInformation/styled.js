import styled from "styled-components";

const MovieInformationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 10px;
  background: ${({ theme }) => theme.overBgVariant};
  border-top: 1px solid ${({ theme }) => theme.overBgBorder};
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;

  .movie-card {
    width: 64px;
  }

  p {
    font-weight: 400;
    font-size: ${({ theme }) => theme.xl};
    line-height: 30px;
  }
`;

export { MovieInformationContainer };
