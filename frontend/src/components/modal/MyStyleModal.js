import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { season, SeasonTone, seasonPersonal } from '../../utils/data/season';
import { getFashionDetailModal } from '../../utils/api/service';
import { ContainerDiv, BlurBackgroundDiv, ModalCloseIcon, SubTitleP, ResultImage, PercentResult } from '..';
import { MyModalTable } from './MyModalTable';
import { getFashionText } from '../../utils/data/getFashionText';

export function MyStyleModal({ toggleProps, className, selectData }) {
    // API 요청 결과
    const [resultFashion, setResultFashion] = useState({});

    // 퍼스널컬러 결과에 따른 폰트 색상
    const resultColor = SeasonTone(season[resultFashion?.color]);

    // 3가지 결과에 따른 평균 점수
    const average =
        (Number(resultFashion?.color_match_rate) +
            Number(resultFashion?.saturation_match_rate) +
            Number(resultFashion?.brightness_match_rate)) /
        3;

    // 모달 ON/OFF 함수
    const handleToggleClick = () => {
        toggleProps && toggleProps();
    };

    // 모달 켜지면 API 요청
    useEffect(() => {
        selectData &&
            (async () => {
                const response = await getFashionDetailModal(selectData.id);
                setResultFashion(response.data);
            })();
    }, [selectData.id]);

    return (
        <>
            <BlurBackgroundDiv className={className} onClick={handleToggleClick} />
            <ModalDiv className={className}>
                <MyModalTable id={selectData.index} date={resultFashion.date} title={resultFashion.color} />
                <ModalCloseIcon toggleProps={handleToggleClick} />
                <ContentContainerDiv>
                    <ResultImage image={resultFashion.image} />
                </ContentContainerDiv>

                <SubTitleP>
                    이 옷은 <ResultTextS color={resultColor}>{seasonPersonal[resultFashion.color]}</ResultTextS>인
                    회원님께
                </SubTitleP>
                <PercentResult
                    resultColor={resultColor}
                    hue={resultFashion.color_match_rate}
                    saturation={resultFashion.brightness_match_rate}
                    value={resultFashion.saturation_match_rate}
                />
                <SubTitleP>
                    {getFashionText(
                        resultFashion,
                        resultFashion.spring_rate,
                        resultFashion.summer_rate,
                        resultFashion.autumn_rate,
                        resultFashion.winter_rate,
                    )}
                </SubTitleP>
                <ColorContainerDiv />
            </ModalDiv>
        </>
    );
}

// styled-components

const ContentContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 8px;
    margin-top: 8px;
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
`;

const ResultTextS = styled.span`
    font-weight: bold;
    color: ${props => `${props.color}`};
`;

const ModalDiv = styled(ContainerDiv)`
    display: none;

    &.show {
        overflow-y: auto;
        position: fixed;
        z-index: 9999;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 100%;
        height: 80%;
        padding: 50px 30px;

        ${({ theme }) => theme.flexStyled.flexColumn};

        background-color: white;

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

        @media ${({ theme }) => theme.device.tablet} {
            width: 80%;
        }
    }
`;
