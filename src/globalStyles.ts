import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }

    #root{
        margin:0 auto;
    }
    html {
        margin: 0; padding: 0;
    }

    h1 {
        margin-top: 16px;
        margin-bottom: 28px;
        font-size: 2em;
    }

    h2 {
        margin-bottom: 20px;
        font-size: 1.5em;
        font-weight: 500;
    }

    p {
        margin-bottom: 12px;
    }
`;

export default GlobalStyle;
