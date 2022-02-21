import styled, { keyframes } from 'styled-components';

export const Article = styled.article`
    height: ${({ height }) => height};

    margin-top: ${({ marginTop }) => marginTop};

    background-color: ${({ color }) => color};
`;

const backgroundKeyframe = keyframes`
    0% {
        background: rgba(0, 0, 0, 0);
        backdrop-filter: blur(0);
    }
    100% {
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(1.5px);
    }
`;

export const BackgroundDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;

    width: 100vw;
    height: 100vh;

    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(1.5px);

    animation: ${backgroundKeyframe} 1s ease-in-out 1;
`;
