import styled from 'styled-components';
import { arrowIcon } from '../../image';

export function MyPageFashion() {
    return (
        <FassionFlexDiv>
            <img src={arrowIcon} alt="왼쪽 슬라이드 화살표" className="arrow left" />
            <div />
            <div />
            <div className="mobile" />
            <div className="mobile" />
            <img src={arrowIcon} alt="왼쪽 슬라이드 화살표" className="arrow right" />
        </FassionFlexDiv>
    );
}

// styled-components

const FassionFlexDiv = styled.div`
    display: grid;
    grid-template-columns: auto repeat(4, 1fr) auto;
    justify-items: center;
    align-items: center;
    column-gap: 10px;

    margin-top: 30px;

    div {
        width: 100%;
        height: 300px;

        background-color: ${({ theme }) => theme.color.lightgray};
    }

    .arrow {
        width: 50px;
        height: 50px;

        filter: invert(88%) sepia(0%) saturate(4%) hue-rotate(149deg) brightness(94%) contrast(81%);

        cursor: pointer;

        @media ${({ theme }) => theme.device.tablet} {
            width: 20px;
            height: 20px;
        }
    }

    .left {
        transform: rotate(0.75turn);
    }

    .right {
        transform: rotate(0.25turn);
    }

    @media ${({ theme }) => theme.device.tablet} {
        grid-template-columns: auto repeat(2, 1fr) auto;

        .mobile {
            display: none;
        }
    }
`;
