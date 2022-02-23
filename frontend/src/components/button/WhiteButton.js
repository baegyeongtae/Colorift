import styled from 'styled-components';

export const WhiteButton = styled('span')`
    @media ${({ theme }) => theme.device.mobile} {
        font-weight: bold;
        font-size: 0.875rem;
        background-color: ${({ theme }) => theme.color.white};
        padding: 12px 20px;
        width: 100px;
        border-style: solid;
        border-width: 2px;
        color: ${({ theme }) => theme.color.blue};
        transition: all 150ms ease;
        cursor: pointer;
    }
    font-weight: bold;
    font-size: 0.875rem;
    background-color: ${({ theme }) => theme.color.white};
    padding: 12px 20px;
    border-style: solid;
    border-width: 2px;
    color: ${({ theme }) => theme.color.blue};
    transition: all 150ms ease;
    cursor: pointer;
    width: 170px;
    text-align: center;
`;
