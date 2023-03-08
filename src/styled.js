import styled from "styled-components";

const headerHeight = "67px";

const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: ${headerHeight};
  display: grid;
  place-content: center;
  background: ${({ theme }) => theme.overBg};
  h1 {
    font-size: ${({ theme }) => theme.xxl};
    color: ${({ theme }) => theme.accent};
    font-weight: 400;
  }
`;

const AppContainer = styled.div`
  margin-top: ${headerHeight};
  padding: 0 24px 24px 24px;
`;

const PageTitle = styled.h2`
  font-size: ${({ theme }) => theme.xl};
  font-weight: 400;
  text-align: center;
  line-height: 28px;
  letter-spacing: 0.04em;
  margin: 56px 0;
`;

const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

export { Header, AppContainer, PageTitle, PageContainer };
