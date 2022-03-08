import styled from 'styled-components';

export const RadioTextH = styled.h2`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.mediumtext};
    }

    margin-left: 15px;

    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.mediumtext};
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;
