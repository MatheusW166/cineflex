import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import MyRoutes from "./routes";
import THEME from "./theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={THEME}>
        <MyRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
