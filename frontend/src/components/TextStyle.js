import styled from 'styled-components';

// styled-components

export const BigTextP = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.bigtext};
    font-weight: bold;
`;

export const DescriptionP = styled.p`
    text-align: center;

    @media ${({ theme }) => theme.device.laptop} {
        font-size: ${({ theme }) => theme.fontSizes.mediumtext};
    }
`;
