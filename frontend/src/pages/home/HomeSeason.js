import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BigTextP, DescriptionP, HomeButton, BackgroundArticle, HomeContainerDiv } from '../../components';
import { colorCircleImg } from '../../image';

export const HomeSeason = React.forwardRef((props, ref) => (
    <BackgroundArticle color="#f8f7f3">
        <SeasonContainerDiv ref={ref}>
            <SeasonImgDiv>
                <img src={colorCircleImg} alt="계절별 퍼스널 컬러 이미지" />
            </SeasonImgDiv>
            <TextContainerDiv>
                <BigTextP>계절과 어울리는 피부톤</BigTextP>
                <DescriptionLeftP>
                    사람의 피부톤은 계절에 비유할 수 있습니다.
                    <br />
                    봄(Spring)은 따뜻한 색상을, 여름(Summer)은 시원한 색상을, 가을(Autumn)은 차분한 색상을,
                    겨울(Winter)은 선명한 색상을 뜻합니다.
                    <br />
                    <br />
                    저희 Color Fit은 먼저 사용자의 피부톤을 정밀 분석하고
                    <br />
                    분석된 결과를 토대로 어울리는 색상을 추천해드립니다.
                </DescriptionLeftP>
                <Link to="/example">
                    <HomeButton>퍼스널 컬러 예시 보기</HomeButton>
                </Link>
            </TextContainerDiv>
        </SeasonContainerDiv>
    </BackgroundArticle>
));

// styled-components

const SeasonContainerDiv = styled(HomeContainerDiv)`
    padding: 50px 0;

    @media ${({ theme }) => theme.device.tablet} {
        padding: 100px 0;
    }
`;

export const SeasonImgDiv = styled.div`
    width: 400px;

    text-align: center;

    margin: 100px auto;

    img {
        width: 400px;
    }

    @media ${({ theme }) => theme.device.tablet} {
        width: 100vw;

        margin: 0 0 30px 0;

        img {
            width: 60%;
        }
    }
`;

export const TextContainerDiv = styled.div`
    width: 80%;

    text-align: left;

    ${({ theme }) => theme.flexStyled.flexColumn};

    @media ${({ theme }) => theme.device.laptop} {
        all: unset;

        text-align: center;

        padding: 0 50px;
    }
`;

export const DescriptionLeftP = styled(DescriptionP)`
    text-align: left;

    line-height: 1.7rem;

    padding: 30px 0;
`;
