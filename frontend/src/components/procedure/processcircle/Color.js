import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { ContainerDiv, DescriptionP } from '../..';
import { colorPageState } from '../../../utils/data/atom';

export function Color({ number }) {
    const currentPage = useRecoilValue(colorPageState);

    return (
        <CircleContainerDiv>
            <div className="wrapper">
                <div className={` ${currentPage === 0 && number === 0 ? 'current_circle' : 'left_circle'}`}>
                    <TextH0>
                        얼굴 사진 <br /> 업로드
                    </TextH0>
                </div>
                <div className={` ${currentPage === 0 && number === 1 ? 'current_circle' : 'left_circle'}`}>
                    <TextH0>
                        피부톤 <br />
                        정밀 분석
                    </TextH0>
                </div>
                <div className={` ${currentPage === 2 ? 'current_circle' : 'left_circle'}`}>
                    <TextH0>
                        퍼스널 컬러 <br /> 분석 결과
                    </TextH0>
                </div>
            </div>
        </CircleContainerDiv>
    );
}

// styled-components
const CircleContainerDiv = styled(ContainerDiv)`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 6vh;
    margin-bottom: 6vh;
    color: white;
    width: 100%;

    .wrapper {
        width: 100%;
        height: auto;
        position: relative;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 7px;
    }

    .wrapper::before {
        content: '';
        width: 50%;
        height: 5px;
        background-color: ${({ theme }) => theme.color.lightgray};
        position: absolute;
        top: 50%;
        left: 100;
    }

    .current_circle {
        width: 130px;
        height: 130px;
        position: relative;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.color.blue};
        text-align: center;
    }

    .left_circle {
        width: 130px;
        height: 130px;
        position: relative;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.color.lightgray};
        text-align: center;
    }

    @media ${({ theme }) => theme.device.mobile} {
        margin-top: 4vh;
        margin-bottom: 4vh;
        .wrapper {
            width: 100%;
            height: auto;
            position: relative;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin-bottom: 7px;
            padding-left: 30px;
            padding-right: 30px;
        }
        .wrapper::before {
            content: '';
            width: 50%;
            height: 2px;
            background-color: ${({ theme }) => theme.color.lightgray};
            position: absolute;
            top: 50%;
            left: 100;
        }
        .current_circle {
            all: unset;

            width: 68px;
            height: 68px;
            position: relative;
            border-radius: 50%;
            background-color: ${({ theme }) => theme.color.blue};
            text-align: center;
        }
        .left_circle {
            all: unset;

            width: 68px;
            height: 68px;
            position: relative;
            border-radius: 50%;
            background-color: ${({ theme }) => theme.color.lightgray};
            text-align: center;
        }
    }
`;

const TextH0 = styled(DescriptionP)`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.mobiletext};
        margin-top: 20px;
        line-height: 15px;
    }
    margin-top: 38px;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.mediumtext};
`;
