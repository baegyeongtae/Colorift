import styled from 'styled-components';

export const BigTextP = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.bigtext};
    font-weight: bold;
    color: ${({ color }) => color};

    .mobile {
        display: none;

        @media ${({ theme }) => theme.device.tablet} {
            display: initial;
        }
    }
`;
