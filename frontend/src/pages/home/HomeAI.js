import React from 'react';
import styled from 'styled-components';
import { TextContainerDiv, DescriptionLeftP, SeasonImgDiv } from './HomeSeason';
import { BigTextP, BackgroundArticle, HomeContainerDiv } from '../../components';
import { chartImg } from '../../image';

export const HomeAI = React.forwardRef((props, ref) => (
    <BackgroundArticle>
        <AIContainerDiv ref={ref}>
            <TextContainerDiv>
                <BigTextP>AI 분석</BigTextP>
                <DescriptionLeftP>
                    피부의 명도와채도, 적색도와 황색도,
                    <br />
                    RGB를 분석하여 얼굴의 각 구간에 알맞는 특성을
                    <br />
                    비교하고 퍼스널 컬러를 추출합니다.
                </DescriptionLeftP>
            </TextContainerDiv>
            <SeasonImgDiv>
                <img src={chartImg} alt="AI 분석 이미지" />
            </SeasonImgDiv>
        </AIContainerDiv>
    </BackgroundArticle>
));

// styled-components

const AIContainerDiv = styled(HomeContainerDiv)`
    padding: 50px 0;

    @media ${({ theme }) => theme.device.tablet} {
        padding: 100px 0;
    }
`;
