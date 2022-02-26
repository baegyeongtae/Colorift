import styled from 'styled-components';
import { BigTextP, ContainerDiv } from '../../index';

export function MatchingResult() {
    const resultData = {
        Good: ['Happy Fashion', 'happy'],
        SoSo: ['So So', 'soso'],
        Bad: ['Bad', 'bad'],
    };
    return (
        <>
            <ResultText>Happy Fashion</ResultText>
            <ImgContainerDiv>
                <img src="./image/emoticon/happy.png" alt="Happy" width="90px" height="90px" />
            </ImgContainerDiv>
        </>
    );
}

// styled-components

const ResultText = styled(BigTextP)`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.bigtext};
        margin-top: 20px;
    }
    font-size: 3rem;
    margin-top: 80px;
`;

const ImgContainerDiv = styled(ContainerDiv)`
    margin-top: 20px;
    margin-bottom: 30px;

    img {
        @media ${({ theme }) => theme.device.mobile} {
            width: 60px;
            height: 60px;
        }
    }
`;
