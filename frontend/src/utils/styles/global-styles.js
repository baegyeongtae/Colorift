import { createGlobalStyle } from 'styled-components';

// 전역 css

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
        font-family: 'Mulish', sans-serif;
        font-weight: 500;
    }

    html {
        @media screen and (min-width: 391px) and (max-width: 1200px) {
            font-size: 12px;
        }

        @media screen and (max-width: 390px) {
            font-size: 10px;
        }

    }

    button {
        all: unset;
    }

    ol,
    ul,
    li

    a {
        text-decoration: none;
    }

    @font-face {
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 500;
        src: url(${process.env.PUBLIC}/font/Mulish-Medium.ttf);
    }

    @font-face {
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 700;
        src: url(${process.env.PUBLIC}/font/Mulish-Bold.ttf);
    }
`;

export default GlobalStyle;
