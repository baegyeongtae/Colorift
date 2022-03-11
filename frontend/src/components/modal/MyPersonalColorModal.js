/* eslint-disable no-unused-expressions */
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { season, SeasonTone, seasonPersonal } from '../../utils/data/season';
import {
    ContainerDiv,
    ModalCloseIcon,
    ResultImage,
    SubTitleP,
    MediumTextH,
    SeasonColor,
    BlurBackgroundDiv,
    PercentResult,
} from '..';
import { MyModalTable } from './MyModalTable';
import { getColorDetailModal } from '../../utils/api/service';

export function MyPersonalColorModal({ toggleProps, className, selectData }) {
    // API 요청 결과
    const [resultColor, setResultColor] = useState({});

    // 어울리는 컬러 목록을 위한 계절 추출
    // ex. "spring"
    const colorList = season[selectData?.season];

    // 퍼스널컬러 키워드에 따른 색상 추출
    // ex. "#E6324B"
    const seasonColor = SeasonTone(colorList);

    // 모달 ON/OFF 함수
    const handleToggleClick = () => {
        toggleProps && toggleProps();
    };

    // 모달 켜지면 API 요청
    useEffect(() => {
        selectData &&
            (async () => {
                const response = await getColorDetailModal(selectData.id);
                setResultColor(response);
            })();
    }, [selectData]);

    return (
        <>
            <BlurBackgroundDiv className={className} onClick={handleToggleClick} />
            <ModalDiv className={className}>
                <ModalCloseIcon toggleProps={handleToggleClick} />
                <Div>
                    <MyModalTable id={selectData?.index} date={resultColor?.date} title={selectData?.season} />

                    <ResultContainerDiv>
                        <ResultImage image={resultColor.image} />
                    </ResultContainerDiv>

                    <SubTitleP>
                        회원님은 <ResultTextS color={seasonColor}>{seasonPersonal[selectData.season]}</ResultTextS>{' '}
                        입니다.
                    </SubTitleP>
                    <PercentResult
                        resultColor={seasonColor}
                        spring={resultColor.spring_rate || 0}
                        summer={resultColor.summer_rate || 0}
                        autumn={resultColor.autumn_rate || 0}
                        winter={resultColor.winter_rate || 0}
                    />
                    <ColorContainerDiv>
                        <MediumTextLeftH>회원님에게 어울리는 컬러</MediumTextLeftH>
                        <SeasonColor season={colorList} />
                    </ColorContainerDiv>
                </Div>
            </ModalDiv>
        </>
    );
}

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
const ModalDiv = styled(ContainerDiv)`
    display: none;

    &.show {
        position: fixed;
        z-index: 9999;
        top: 50%;
        left: 50%;
        height: 80%;
        transform: translate(-50%, -50%);
        padding: 50px 30px;

        width: 100%;

        ${({ theme }) => theme.flexStyled.flexColumn};

        background-color: white;

        border: 1px solid #f3f3f3;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        @media ${({ theme }) => theme.device.tablet} {
            width: 80%;
        }
    }
`;

const Div = styled.div`
    overflow-y: auto;

    width: 100%;
    height: 100%;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
        border-radius: 100px;

        margin: 20px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 100px;
        background-color: #e9e9e9;
        box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
    }
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
