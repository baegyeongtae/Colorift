import styled from 'styled-components';
import { ContainerDiv, SubTitle, DescriptionP, HomeButton } from '../../components';

export function HomeSeason() {
    return (
        <SeasonArticle>
            <SeasonContainerDiv>
                <SeasonImgDiv>
                    <img src="./image/color_circle.png" alt="계절별 퍼스널 컬러 이미지" />
                </SeasonImgDiv>
                <TextContainerDiv>
                    <SubTitle>계절과 어울리는 피부톤</SubTitle>
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
                    <HomeButton text="퍼스널 컬러 예시 보기" />
                </TextContainerDiv>
            </SeasonContainerDiv>
        </SeasonArticle>
    );
}

// styled-components

const SeasonArticle = styled.article`
    height: 700px;

    background-color: #f8f7f3;
`;

const SeasonContainerDiv = styled(ContainerDiv)`
    height: 100%;
    ${({ theme }) => theme.flexStyled.flexRow};
    align-items: center;

    @media ${({ theme }) => theme.device.laptop} {
        ${({ theme }) => theme.flexStyled.flexColumn};
        align-items: center;
    }
`;

const SeasonImgDiv = styled.div`
    width: 50%;

    text-align: center;

    img {
        width: 400px;
    }

    @media ${({ theme }) => theme.device.laptop} {
        width: 100%;

        margin: auto 0;

        img {
            width: 60vw;
        }
    }
`;

const TextContainerDiv = styled.div`
    width: 50%;

    text-align: left;

    margin-right: 100px;

    ${({ theme }) => theme.flexStyled.flexColumn};

    @media ${({ theme }) => theme.device.laptop} {
        all: unset;

        text-align: center;

        margin: 0 50px 50px 50px;
    }
`;

const DescriptionLeftP = styled(DescriptionP)`
    text-align: left;

    line-height: 1.7rem;

    padding: 30px 0;
`;
