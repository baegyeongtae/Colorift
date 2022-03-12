import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import Stack from '@mui/material/Stack';
import { colorPageState } from '../../utils/data/atom';
import { season, SeasonTone, seasonPersonal } from '../../utils/data/season';
import {
    ResultImage,
    NavBackgroundDiv,
    Color,
    SubTitleP,
    ContainerDiv,
    BlueButton,
    SeasonColor,
    MediumTextH,
    ShareButton,
    PercentResult,
} from '../../components';

function ColorResult() {
    const navigate = useNavigate();

    // 리코일 페이지 state
    const setColorPage = useSetRecoilState(colorPageState);

    // API 요청 결과
    const percentList = JSON.parse(sessionStorage.getItem('result'));

    // 퍼스널컬러 결과 (SP / SU / AU / WI)
    const seasonTone = sessionStorage.getItem('season');

    // 퍼스널 결과에 따른 색상코드
    const resultColor = SeasonTone(season[seasonTone]);

    return (
        <>
            <NavBackgroundDiv />
            <Color number={2} />

            <ResultContainerDiv>
                <ResultImage />
            </ResultContainerDiv>
            <MainP>
                회원님은 <ResultTextS color={resultColor}>{seasonPersonal[seasonTone]}</ResultTextS> 입니다.
            </MainP>
            <PercentResult
                resultColor={resultColor}
                spring={percentList?.springRate}
                summer={percentList?.summerRate}
                autumn={percentList?.autumnRate}
                winter={percentList?.winterRate}
            />

            <ColorContainerDiv>
                <MediumTextLeftH>회원님에게 어울리는 컬러</MediumTextLeftH>
                <SeasonColor season={season[seasonTone]} />
            </ColorContainerDiv>
            <GridContainer>
                <ShareButton id={percentList?.id} path="/color/" />
            </GridContainer>
            <ButtonContainerDiv>
                <Stack spacing={2} direction="row">
                    <BlueButton type="submit" onClick={() => setColorPage(0)}>
                        다시 분석하기
                    </BlueButton>
                    <BlueButton type="submit" onClick={() => navigate('/fashion')}>
                        패션 매칭하기
                    </BlueButton>
                </Stack>
            </ButtonContainerDiv>
        </>
    );
}

export { ColorResult };

// styled-components

const ColorContainerDiv = styled(ContainerDiv)`
    align-items: center;

    width: 640px;

    margin-top: 100px;
    margin-bottom: 50px;

    @media ${({ theme }) => theme.device.mobile} {
        all: unset;

        width: 270px;
        align-items: center;
        margin-bottom: 8px;
        margin-left: 20px;
        margin-right: 20px;
    }
`;

const ResultContainerDiv = styled(ContainerDiv)`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 8px;
    margin-top: 8px;

    @media ${({ theme }) => theme.device.tablet} {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 30px;
        margin-top: 20px;
    }

    @media ${({ theme }) => theme.device.mobile} {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 8px;
        margin-top: 15px;
    }
`;

const ButtonContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 50px 0;

    @media ${({ theme }) => theme.device.mobile} {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 20px;
        margin-top: 40px;
    }
`;

// 버튼을 배치시키는 컨테이너
const GridContainer = styled.div`
    ${({ theme }) => theme.flexStyled.flexColumn};
    ${({ theme }) => theme.flexStyled.flexCenter};
`;

const MediumTextLeftH = styled(MediumTextH)`
    margin-bottom: 20px;
    margin-left: 30px;
    text-align: left;
    font-size: ${({ theme }) => theme.fontSizes.mediumtext};

    @media ${({ theme }) => theme.device.mobile} {
        margin-top: 30px;
        font-size: ${({ theme }) => theme.fontSizes.mobiletext};
        width: 260px;
        align-items: center;
    }
`;

const ResultTextS = styled.span`
    font-weight: bold;
    color: ${props => `${props.color}`};
`;

const MainP = styled(SubTitleP)`
    @media ${({ theme }) => theme.device.mobile} {
        margin-top: 2vh;
        margin-bottom: 2vh;
    }
`;
