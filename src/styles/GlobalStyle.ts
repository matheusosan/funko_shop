import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    body, html {
        min-height: 100vh;
         
    }

    a {
        text-decoration: none;
    }

    a:link {
        color: #fff;
    }

    a:visited {
        color: #fff;
    }

    button {
        border: none;
    }
`