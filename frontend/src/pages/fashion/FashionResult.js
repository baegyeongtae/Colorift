import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { useSetRecoilState } from 'recoil';
import { season, SeasonTone, seasonPersonal } from '../../utils/data/season';
import { fashionPageState } from '../../utils/data/atom';
import { getFashionText } from '../../utils/data/getFashionText';
import {
    ResultImage,
    NavBackgroundDiv,
    Fashion,
    SubTitleP,
    DescriptionP,
    BlueButton,
    MatchingResult,
    ContainerDiv,
    PercentResult,
    ShareButton,
} from '../../components';
import { hue, saturation, value } from '../../image';

function FashionResult() {
    const navigate = useNavigate();

    // 리코일 페이지 state
    const setFashionPage = useSetRecoilState(fashionPageState);

    // 유저가 선택한 퍼스널컬러
    const seasonTone = sessionStorage.getItem('color');

    // API 호출 후 세션스토리지에 저장했던 결과 값
    const percentList = JSON.parse(sessionStorage.getItem('result'));

    // 퍼스널컬러에 따른 대표 색상
    const resultColor = SeasonTone(season[seasonTone]);

    return (
        <>
            <NavBackgroundDiv />
            <Fashion />
            <ContentContainerDiv>
                <ResultImage />
            </ContentContainerDiv>

            <SubTitleP>
                이 옷은 <ResultTextS color={resultColor}>{seasonPersonal[seasonTone]}</ResultTextS>인 회원님께
            </SubTitleP>
            <PercentResult
                resultColor={resultColor}
                spring={percentList?.springRate}
                summer={percentList?.summerRate}
                autumn={percentList?.autumnRate}
                winter={percentList?.winterRate}
            />
            <SubTitleP>{getFashionText(percentList?.match)}</SubTitleP>
            <ColorContainerDiv>
                <div className="wrapper">
                    <div>
                        <DescriptionLeftTitleP>색상(Color, Hue)이란</DescriptionLeftTitleP>
                        <DescriptionLeftSubTitleP>일반적으로 부르는 빛깔 이름을 뜻합니다.</DescriptionLeftSubTitleP>
                        <ImgContainerDiv>
                            <img src={hue} alt="Hue" />
                        </ImgContainerDiv>
                    </div>
                    <div>
                        <DescriptionLeftTitleP>명도(Brightness, Value)란</DescriptionLeftTitleP>
                        <DescriptionLeftSubTitleP>밝기로 색상을 표현하는 것을 말합니다.</DescriptionLeftSubTitleP>
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
            </ColorContainerDiv>

            <ContentContainerDiv>
                <MatchingResult match={percentList?.match} />
            </ContentContainerDiv>
            <ButtonContainerDiv>
                <Stack spacing={2} direction="row">
                    <CustomButton type="submit" onClick={() => setFashionPage(0)}>
                        다른 옷 매칭하기
                    </CustomButton>
                    <CustomButton type="submit" onClick={() => navigate('/personalcolor')}>
                        퍼스널 컬러 찾기
                    </CustomButton>
                </Stack>
            </ButtonContainerDiv>
        </>
    );
}

export { FashionResult };

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
        height: 250px;
        border-radius: 20px;
        background-color: #efefef;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin-top: 50px;

        @media ${({ theme }) => theme.device.mobile} {
            all: unset;

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

    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
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

    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const ButtonContainerDiv = styled.div`
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 50px;
    margin-top: 20px;

    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

// 버튼을 배치시키는 컨테이너
const GridContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

const ResultTextS = styled.span`
    font-weight: bold;
    color: ${props => `${props.color}`};
`;
