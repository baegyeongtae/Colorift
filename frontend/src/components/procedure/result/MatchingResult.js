/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import { BigTextP, ContainerDiv } from '../../index';
import { happy, soso, bad } from '../../../image';

export function MatchingResult({ match }) {
    const resultData = {
        Good: ['Happy Fashion', happy],
        SoSo: ['So So', soso],
        Bad: ['Bad', bad],
    };

    const state = match === 'B' ? 'Bad' : match === 'G' ? 'Good' : 'SoSo';

    return (
        <>
            <ResultText>{resultData[state][0]}</ResultText>
            <ImgContainerDiv>
                <img src={resultData[state][1]} alt="state" width="90px" height="90px" />
            </ImgContainerDiv>
        </>
    );
}

// styled-components

const ResultText = styled(BigTextP)`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.bigtext};
    }
    font-size: 3rem;
    margin-top: 30px;
`;

const ImgContainerDiv = styled(ContainerDiv)`
    margin-top: 20px;

    img {
        @media ${({ theme }) => theme.device.mobile} {
            width: 60px;
            height: 60px;
        }
    }
`;
