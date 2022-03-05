/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import { BigTextP, ContainerDiv } from '../../index';
import { happy, soso, bad } from '../../../image';

export function MatchingResult({ average }) {
    const resultData = {
        Good: ['Happy Fashion', happy],
        SoSo: ['So So', soso],
        Bad: ['Bad', bad],
    };

    const state = average < 34 ? 'Bad' : average < 67 ? 'SoSo' : 'Good';

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
