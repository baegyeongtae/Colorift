import styled from 'styled-components';

export const WhiteButton = styled('span')`
    @media ${({ theme }) => theme.device.mobile} {
        width: 100px;
    }
    font-weight: bold;
    font-size: 0.875rem;
    padding: 12px 20px;
    border-style: solid;
    border-width: 2px;
    color: ${({ theme }) => theme.color.blue};
    transition: all 150ms ease;
    cursor: pointer;
    width: 150px;
    text-align: center;
`;
