import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import { Result, Footer, ContainerDiv } from '../../components';

function ColorResult() {
    return (
        <>
            <CircleContainerDiv>
                <div className="wrapper">
                    <div className="current_circle">
                        <TextH2>
                            얼굴 사진 <br /> 업로드
                        </TextH2>
                    </div>
                    <div className="left_circle">
                        <TextH2>
                            피부톤 <br />
                            정밀 분석
                        </TextH2>
                    </div>
                    <div className="left_circle">
                        <TextH2>
                            퍼스널 컬러 <br /> 분석 결과
                        </TextH2>
                    </div>
                </div>
            </CircleContainerDiv>

            <ResultContainerDiv>
                <Result />
            </ResultContainerDiv>

            <TextH1>회원님은 봄 웜톤 입니다.</TextH1>

            <TextContainerDiv>
                <TextH3>회원님에게 어울리는 컬러</TextH3>
            </TextContainerDiv>

            <ColorContainerDiv>
                <div className="wrapper">
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                </div>
                <div className="wrapper">
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                </div>
                <div className="wrapper">
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                </div>
            </ColorContainerDiv>

            <ButtonContainerDiv>
                <Stack spacing={2} direction="row">
                    <CustomButton>업로드</CustomButton>
                    <CustomButton>결과보기</CustomButton>
                </Stack>
            </ButtonContainerDiv>

            <Footer />
        </>
    );
}

export { ColorResult };

// styled-components

const CircleContainerDiv = styled(ContainerDiv)`
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 70px;
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
        height: 5px;
        background-color: ${({ theme }) => theme.color.lightgray};
        position: absolute;
        top: 50%;
        left: 100;
    }

    .current_circle {
        width: 160px;
        height: 160px;
        position: relative;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.color.blue};
        text-align: center;
    }

    .left_circle {
        width: 160px;
        height: 160px;
        position: relative;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.color.lightgray};
        text-align: center;
    }

    @media ${({ theme }) => theme.device.mobile} {
        all: unset;

        background-color: ${({ theme }) => theme.color.white};
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 20px;
        margin-top: 70px;
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

const ColorContainerDiv = styled(ContainerDiv)`
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 8px;
    margin-top: 15px;

    .wrapper {
        width: 100%;
        height: auto;
        position: relative;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 7px;
    }

    .circle {
        width: 100px;
        height: 100px;
        position: relative;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.color.blue};
    }

    @media ${({ theme }) => theme.device.mobile} {
        background-color: ${({ theme }) => theme.color.white};
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 8px;
        margin-top: 15px;

        .wrapper {
            width: 100%;
            height: auto;
            position: relative;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin-bottom: 7px;
        }

        .circle {
            width: 60px;
            height: 60px;
            position: relative;
            border-radius: 50%;
            background-color: ${({ theme }) => theme.color.blue};
        }
    }
`;

const ResultContainerDiv = styled(ContainerDiv)`
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 8px;
    margin-top: 8px;

    @media ${({ theme }) => theme.device.mobile} {
        background-color: ${({ theme }) => theme.color.white};
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 8px;
        margin-top: 15px;
    }
`;

const TextContainerDiv = styled(ContainerDiv)`
    @media ${({ theme }) => theme.device.mobile} {
        background-color: ${({ theme }) => theme.color.white};
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 8px;
        margin-top: 15px;
    }

    background-color: ${({ theme }) => theme.color.white};
    align-items: left;
    margin-bottom: 8px;
    margin-top: 8px;
    margin-left: 10px;
`;

const ButtonContainerDiv = styled.div`
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 50px;

    @media ${({ theme }) => theme.device.mobile} {
        background-color: ${({ theme }) => theme.color.white};
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 20px;
        margin-top: 40px;
    }
`;

const TextH1 = styled.h1`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.smalltext};
        font-weight: bold;
        margin: 8px;
    }
    font-size: ${({ theme }) => theme.fontSizes.bigtext};
    font-weight: bold;
    text-align: center;
    margin: 8px;
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const TextH2 = styled.h2`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.mobiletext};
        margin-top: 20px;
    }
    margin-top: 45px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const TextH3 = styled.h3`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.smalltext};
        margin: 25px;
        font-weight: 550;
    }

    font-weight: 50;
    font-size: ${({ theme }) => theme.fontSizes.mediumtext};
    margin: 25px;
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const CustomButton = styled('span')`
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.mediumtext};
    background-color: ${({ theme }) => theme.color.blue};
    padding: 10px 25px;
    border-radius: 1px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: none;

    @media ${({ theme }) => theme.device.mobile} {
        font-weight: bold;
        font-size: 0.875rem;
        background-color: ${({ theme }) => theme.color.blue};
        padding: 10px 20px;
        border-radius: 0px;
        color: white;
        transition: all 150ms ease;
        cursor: pointer;
        border: none;
    }
`;
