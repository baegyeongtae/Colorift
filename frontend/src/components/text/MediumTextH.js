import styled from 'styled-components';

export const MediumTextH = styled.h1`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.smalltext};
        font-weight: bold;
        text-align: center;
        align-items: center;
    }
    text-align: center;
    align-items: center;
    font-weight: bold;
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;
