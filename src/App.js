import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ResetStyle, GlobalStyle } from "./styles";
import { AppContainer } from "./styled";
import MyRoutes from "./routes";
import THEME from "./theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={THEME}>
        <ResetStyle />
        <GlobalStyle />
        <AppContainer>
          <MyRoutes />
        </AppContainer>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
