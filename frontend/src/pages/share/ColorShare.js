/* eslint-disable react/button-has-type */
/* eslint-disable react/style-prop-object */
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { getColorShare } from '../../utils/api/user';
import { getMaxSeason } from '../../utils/data/getMaxSeason';
import { season, SeasonTone, seasonPersonal } from '../../utils/data/season';
import {
    ResultImage,
    NavBackgroundDiv,
    SubTitleP,
    ContainerDiv,
    BlueButton,
    SeasonColor,
    MediumTextH,
    PercentResult,
} from '../../components';

function ColorShare() {
    const [result, setResult] = useState({});
    const location = useLocation();
    const { pathname } = location;
    const pathnameId = pathname.split('/')[3];
    console.log(result);
    const navigate = useNavigate();
    const seasonKeyword = getMaxSeason(result.springRate, result.summerRate, result.autumnRate, result.winterRate);

    useEffect(() => {
        pathnameId &&
            (async () => {
                const response = await getColorShare(pathnameId);
                setResult(response);
            })();
    }, [pathnameId]);

    return (
        <>
            <NavBackgroundDiv />
            <ResultContainerDiv>
                <ResultImage image={result.image} />
            </ResultContainerDiv>
            <PercentResult
                resultColor={SeasonTone(season[seasonKeyword])}
                spring={result.springRate}
                summer={result.summerRate}
                autumn={result.autumnRate}
                winter={result.winterRate}
            />
            <SubTitleP>
                회원님은{' '}
                <ResultTextS color={SeasonTone(season[seasonKeyword])}>{seasonPersonal[seasonKeyword]}</ResultTextS>{' '}
                입니다.
            </SubTitleP>

            <ColorContainerDiv>
                <MediumTextLeftH>회원님에게 어울리는 컬러</MediumTextLeftH>
                <SeasonColor season={season[seasonKeyword]} />
            </ColorContainerDiv>

            <ButtonContainerDiv>
                <Stack spacing={2} direction="row">
                    <BlueButton type="submit" onClick={() => navigate('/personalcolor')}>
                        나도 분석하기
                    </BlueButton>
                    <BlueButton type="submit" onClick={() => navigate('/')}>
                        홈으로
                    </BlueButton>
                </Stack>
            </ButtonContainerDiv>
        </>
    );
}

export { ColorShare };

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
