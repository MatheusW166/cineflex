import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
    }
    body {
        font-family: "Roboto", sans-serif;
        color: ${({ theme }) => theme.textPrimary};
    }
    h1 {
        color: ${({ theme }) => theme.accent};
        font-size: ${({ theme }) => theme.xl};
    }
`;

export default GlobalStyle;
