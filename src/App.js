import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ResetStyle, GlobalStyle } from "./styles";
import { Header, AppContainer } from "./styled";
import MyRoutes from "./routes";
import THEME from "./theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={THEME}>
        <ResetStyle />
        <GlobalStyle />
        <Header>
          <h1>CINEFLEX</h1>
        </Header>
        <AppContainer>
          <MyRoutes />
        </AppContainer>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
