import styled from 'styled-components';
import { DescriptionP } from '.';

export function HomeServiceIcon({ image, title, text }) {
    return (
        <ServiceIconDiv>
            <ServiceIconImg src={`./image/${image}.svg`} />
            <ServiceIconTitleP>{title}</ServiceIconTitleP>
            <DescriptionP>{text}</DescriptionP>
        </ServiceIconDiv>
    );
}

// styled-components

const ServiceIconDiv = styled.div`
    ${({ theme }) => theme.flexStyled.flexColumn};
    align-items: center;

    width: 30%;

    @media ${({ theme }) => theme.device.laptop} {
        width: 60%;
    }
`;

const ServiceIconImg = styled.img`
    display: block;

    width: 20%;

    filter: invert(37%) sepia(15%) saturate(2388%) hue-rotate(181deg) brightness(96%) contrast(89%);
`;

const ServiceIconTitleP = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.mediumtext};
    font-weight: bold;

    margin: 20px 0;

    @media ${({ theme }) => theme.device.laptop} {
        font-size: ${({ theme }) => theme.fontSizes.bigtext};
    }
`;
