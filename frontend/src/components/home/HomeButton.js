import styled from 'styled-components';

export function HomeButton({ text, maxWidth, width }) {
    return (
        <HomeStyleButton maxWidth={maxWidth} width={width}>
            {text}
        </HomeStyleButton>
    );
}

// styled-components

const HomeStyleButton = styled.button`
    max-width: ${({ maxWidth }) => maxWidth};
    width: ${({ width }) => width || '100%'};
    height: 50px;

    color: white;
    font-weight: bold;
    text-align: center;

    background-color: ${({ theme }) => theme.color.blue};

    cursor: pointer;
`;
