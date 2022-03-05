import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { season } from '../../utils/data/season';
import { getPercentDetailModal } from '../../utils/api/service';
import { ContainerDiv, BackgroundDiv, ModalCloseIcon, SubTitleP, SeasonTone, ResultImage, PercentResult } from '..';
import { MyModalTable } from './MyModalTable';

export function MyStyleModal({ toggleClickProps, className, colorId }) {
    const handleToggleClick = () => {
        toggleClickProps();
    };

    console.log(colorId);

    const [resultPercent, setResultPercent] = useState('');
    useEffect(async () => {
        const response = await getPercentDetailModal(colorId);
        setResultPercent(response);
    }, [colorId]);

    console.log(resultPercent[4]);

    const resultColor = SeasonTone(season[resultPercent[4]]);
    return (
        <>
            <BackgroundDiv className={className} onClick={handleToggleClick} />
            <ModalDiv className={className}>
                <MyModalTable />
                <ModalCloseIcon clickProps={handleToggleClick} />
                <ContentContainerDiv>
                    <ResultImage />
                </ContentContainerDiv>

                <SubTitleP>
                    이 옷은 <ResultTextS color={resultColor}>봄 웜톤</ResultTextS>인 회원님께
                </SubTitleP>
                <PercentResult
                    resultColor={resultColor}
                    hue={resultPercent[0]}
                    saturation={resultPercent[1]}
                    value={resultPercent[2]}
                />
                <SubTitleP>
                    종합 <ResultTextS color={resultColor}>{resultPercent[3]}%</ResultTextS>만큼 매칭됩니다.
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
