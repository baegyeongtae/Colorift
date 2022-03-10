/* eslint-disable react/button-has-type */
/* eslint-disable react/style-prop-object */
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
    const setColorPage = useSetRecoilState(colorPageState);
    const seasonTone = sessionStorage.getItem('colorResult');
    const percentList = JSON.parse(sessionStorage.getItem('colorResult'));
    console.log(seasonTone);
    console.log(percentList);
    const resultColor = SeasonTone(season[seasonTone]);

    return (
        <>
            <NavBackgroundDiv />
            <Color number={2} />

            <ResultContainerDiv>
                <ResultImage />
            </ResultContainerDiv>

            <SubTitleP>
                회원님은 <ResultTextS color={resultColor}>{seasonPersonal[seasonTone]}</ResultTextS> 입니다.
            </SubTitleP>
            <PercentResult
                resultColor={resultColor}
                spring={percentList[0]}
                summer={percentList[1]}
                autumn={percentList[2]}
                winter={percentList[3]}
            />
            <GridContainer>
                <ShareButton />
            </GridContainer>

            <ColorContainerDiv>
                <MediumTextLeftH>회원님에게 어울리는 컬러</MediumTextLeftH>
                <SeasonColor season={season[seasonTone]} />
            </ColorContainerDiv>

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
    margin-bottom: 100px;
    margin-top: 50px;
    padding-bottom: 100px;

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MediumTextLeftH = styled(MediumTextH)`
    margin-top: 120px;
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
