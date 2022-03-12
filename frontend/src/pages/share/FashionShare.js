import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { useSetRecoilState } from 'recoil';
import { season, SeasonTone, seasonPersonal } from '../../utils/data/season';
import { getFashionShare } from '../../utils/api/user';
import { fashionPageState } from '../../utils/data/atom';
import { getFashionText } from '../../utils/data/getFashionText';
import {
    ResultImage,
    NavBackgroundDiv,
    SubTitleP,
    DescriptionP,
    BlueButton,
    MatchingResult,
    ContainerDiv,
    PercentResult,
} from '../../components';
import { hue, saturation, value } from '../../image';

function FashionShare() {
    const [result, setResult] = useState({});
    const location = useLocation();
    const { pathname } = location;
    // id값 추출
    const pathnameId = pathname.split('/')[3];

    const navigate = useNavigate();

    const [errorStatus, setErrorStatus] = useState(false);

    // 리코일 페이지 state
    const setFashionPage = useSetRecoilState(fashionPageState);

    // 퍼스널컬러에 따른 대표 색상
    const resultColor = SeasonTone(season[result.color]);

    useEffect(() => {
        pathnameId &&
            (async () => {
                const response = await getFashionShare(pathnameId);
                if (response.status === 404) setErrorStatus(true);
                setResult(response);
            })();
    }, [pathnameId]);

    return (
        <>
            <NavBackgroundDiv />
            {errorStatus ? (
                <ContainerDiv>
                    <DescriptionTextP>삭제된 목록입니다.</DescriptionTextP>
                </ContainerDiv>
            ) : (
                <>
                    <ContentContainerDiv>
                        <ResultImage image={result?.image} />
                    </ContentContainerDiv>

                    <SubTitleP>
                        이 옷은 <ResultTextS color={resultColor}>{seasonPersonal[result.color]}</ResultTextS>인 회원님께
                    </SubTitleP>
                    <PercentResult
                        resultColor={resultColor}
                        spring={result?.springRate}
                        summer={result?.summerRate}
                        autumn={result?.autumnRate}
                        winter={result?.winterRate}
                    />
                    <SubTitleP>{getFashionText(result.match)}</SubTitleP>

                    <ColorContainerDiv>
                        <div className="wrapper">
                            <div className="wrapping">
                                <div>
                                    <DescriptionLeftTitleP>색상(Color, Hue)이란</DescriptionLeftTitleP>
                                    <DescriptionLeftSubTitleP>
                                        일반적으로 부르는 빛깔 이름을 뜻합니다.
                                    </DescriptionLeftSubTitleP>
                                    <ImgContainerDiv>
                                        <img src={hue} alt="Hue" />
                                    </ImgContainerDiv>
                                </div>
                                <div>
                                    <DescriptionLeftTitleP>명도(Brightness, Value)란</DescriptionLeftTitleP>
                                    <DescriptionLeftSubTitleP>
                                        밝기로 색상을 표현하는 것을 말합니다.
                                    </DescriptionLeftSubTitleP>
                                    <ImgContainerDiv>
                                        <img src={saturation} alt="Brightness" />
                                    </ImgContainerDiv>
                                </div>
                                <div>
                                    <DescriptionLeftTitleP>채도(Saturation)란</DescriptionLeftTitleP>
                                    <DescriptionLeftSubTitleP>색의 선명함 정도를 말합니다.</DescriptionLeftSubTitleP>
                                    <ImgContainerDiv>
                                        <img src={value} alt="Saturation" />
                                    </ImgContainerDiv>
                                </div>
                            </div>
                            <ContainerDiv>
                                <DescriptionTextP>
                                    컬러핏 패션 매칭 알고리즘은 옷의 색상 / 명도 / 채도를 추출하여 퍼스널 컬러 및 회원님
                                    피부톤과의 조화도를 보여드립니다
                                </DescriptionTextP>
                            </ContainerDiv>
                        </div>
                    </ColorContainerDiv>

                    <ContentContainerDiv>
                        <MatchingResult match={result.match} />
                    </ContentContainerDiv>
                    <ButtonContainerDiv>
                        <Stack spacing={2} direction="row">
                            <CustomButton type="submit" onClick={() => setFashionPage(0)}>
                                나도 패션매칭하기
                            </CustomButton>
                            <CustomButton type="submit" onClick={() => navigate('/personalcolor')}>
                                퍼스널 컬러 찾기
                            </CustomButton>
                        </Stack>
                    </ButtonContainerDiv>
                </>
            )}
        </>
    );
}

export { FashionShare };

// styled-components

const ContentContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 8px;
    margin-top: 8px;

    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const ColorContainerDiv = styled(ContainerDiv)`
    .wrapper {
        width: 1100px;
        height: 350px;
        border-radius: 20px;
        background-color: #efefef;
        margin-top: 50px;
        .wrapping {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            @media ${({ theme }) => theme.device.mobile} {
                all: unset;

                display: grid;
                grid-template-rows: repeat(3, 1fr);
                align-items: center;
                justify-content: center;
            }
        }
        @media ${({ theme }) => theme.device.mobile} {
            all: unset;
            margin-top: 30px;
            border-radius: 20px;
            width: 300px;
            height: 600px;
            background-color: #efefef;
            display: grid;
            grid-template-rows: repeat(3, 1fr);
            align-items: center;
            justify-content: center;
        }
    }

    display: flex;
    flex-direction: column;

    align-items: center;
    margin-bottom: 8px;
    margin-top: 8px;
`;

const ImgContainerDiv = styled(ContainerDiv)`
    img {
        @media ${({ theme }) => theme.device.mobile} {
            all: unset;

            width: 250px;
            height: 85px;
        }
    }

    display: flex;
    flex-direction: column;

    align-items: center;
    margin-bottom: 8px;
    margin-top: 20px;
`;

const ButtonContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 50px;
    margin-top: 20px;
`;

const CustomButton = styled(BlueButton)`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.smalltext};
        width: 130px;
    }
    width: 180px;
`;

const DescriptionLeftTitleP = styled(DescriptionP)`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.smalltext};
        margin-left: 10px;
        width: 130px;
    }
    margin-left: 25px;
    margin-top: 20px;
    font-weight: bold;
    text-align: left;
`;

const DescriptionLeftSubTitleP = styled.p`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.smalltext};
        width: 250px;
    }
    font-size: 0.9rem;
    margin-left: 25px;
    margin-top: 5px;
    text-align: left;
`;

const DescriptionTextP = styled.p`
    margin-top: 70px;
    font-weight: bold;
    text-align: center;
    align-items: center;

    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.smalltext};
        margin-top: 20px;
        width: 200px;
        padding-left: 5px;
        padding-right: 5px;
    }
`;

const ResultTextS = styled.span`
    font-weight: bold;
    color: ${props => `${props.color}`};
`;
