import styled from 'styled-components';

export const DescriptionP = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.mediumtext};
    text-align: center;
    color: ${({ color }) => color};

    .mobile {
        display: none;
    }

    @media ${({ theme }) => theme.device.tablet} {
        line-height: 2rem;

        .mobile {
            display: initial;
        }
    }
`;
