import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { ContainerDiv, DescriptionP } from '../..';
import { fashionPageState } from '../../../utils/data/atom';

export function Fashion({ number }) {
    const currentPage = useRecoilValue(fashionPageState);

    return (
        <CircleContainerDiv>
            <div className="wrapper">
                <div className={` ${currentPage === 0 ? 'current_circle' : 'left_circle'}`}>
                    <TextH0>
                        퍼스널 컬러 <br /> 선택
                    </TextH0>
                </div>
                <div className={` ${currentPage === 1 && number === 1 ? 'current_circle' : 'left_circle'}`}>
                    <TextH0>
                        패션 사진 <br /> 업로드
                    </TextH0>
                </div>
                <div className={` ${currentPage === 1 && number === 2 ? 'current_circle' : 'left_circle'}`}>
                    <TextH0>
                        퍼스널컬러와
                        <br /> 비교 매칭
                    </TextH0>
                </div>
                <div className={` ${currentPage === 3 ? 'current_circle' : 'left_circle'}`}>
                    <TextH0>
                        패션 매칭
                        <br /> 결과
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
        width: 70%;
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
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-top: 4vh;
        margin-bottom: 4vh;
        color: white;

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

            width: 63px;
            height: 63px;
            position: relative;
            border-radius: 50%;
            background-color: ${({ theme }) => theme.color.blue};
            text-align: center;
        }
        .left_circle {
            all: unset;

            width: 65px;
            height: 65px;
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
