import styled from 'styled-components';

export const GrayButton = styled.button.attrs({
    type: 'button',
})`
    width: ${({ width }) => width || '100%'};
    height: 30px;

    color: white;
    text-align: center;

    font-size: ${({ theme }) => theme.fontSizes.smalltext};
    font-weight: bold;

    background-color: ${({ theme }) => theme.color.darkgray};
    border-radius: 5px;

    cursor: pointer;
`;
