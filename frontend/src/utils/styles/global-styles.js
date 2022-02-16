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

    button {
        all: unset;
    }

    ol,
    ul,
    li {
        list-style: none;
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
