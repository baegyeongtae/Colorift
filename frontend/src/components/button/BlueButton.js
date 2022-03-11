import styled from 'styled-components';

export const BlueButton = styled('span')`
    @media ${({ theme }) => theme.device.mobile} {
        padding: 12px 10px;
        width: 100px;
    }
    font-weight: bold;
    font-size: 0.875rem;
    background-color: ${({ theme }) => theme.color.blue};
    padding: 12px 24px;
    border-radius: 0px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: none;
    width: 150px;
    text-align: center;
`;
