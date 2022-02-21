import styled from 'styled-components';

export const HomeButton = styled.button.attrs({
    type: 'button',
})`
    max-width: ${({ maxWidth }) => maxWidth};
    width: ${({ width }) => width || '100%'};
    height: 50px;

    color: white;
    font-weight: bold;
    text-align: center;

    background-color: ${({ theme }) => theme.color.blue};

    cursor: pointer;
`;
