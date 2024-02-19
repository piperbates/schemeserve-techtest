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
        margin-bottom: 28px;
    }

    p {
        margin-bottom: 12px;
    }
`;

export default GlobalStyle;
