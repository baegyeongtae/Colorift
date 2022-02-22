import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import { ResultImage, Footer, ContainerDiv } from '../../components';

function ColorResult() {
    return (
        <>
            <CircleContainerDiv>
                <div className="wrapper">
                    <div className="left_circle">
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
                    <div className="current_circle">
                        <TextH2>
                            퍼스널 컬러 <br /> 분석 결과
                        </TextH2>
                    </div>
                </div>
            </CircleContainerDiv>

            <ResultContainerDiv>
                <ResultImage />
            </ResultContainerDiv>

            <TextH1>회원님은 봄 웜톤 입니다.</TextH1>

            <ColorContainerDiv>
                <div className="wrapper">
                    <div className="text">회원님에게 어울리는 컬러</div>
                    <div className="blank_circle" />
                    <div className="blank_circle" />
                    <div className="blank_circle" />
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
                <div className="wrapper">
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                </div>
            </ColorContainerDiv>

            <ButtonContainerDiv>
                <Stack spacing={2} direction="row">
                    <CustomButton>업로드 </CustomButton>
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
    margin-top: 120px;
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
        all: unset;

        background-color: ${({ theme }) => theme.color.white};
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 20px;
        margin-top: 120px;
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
    margin-bottom: 20px;
    margin-top: 80px;
    margin-left: 200px;
    margin-right: 200px;

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

    .blank_circle {
        width: 50px;
        height: 70px;
        position: relative;
        border-radius: 50%;
        background-color: white;
    }

    .text {
        font-size: 1.15rem;
    }

    @media ${({ theme }) => theme.device.laptop} {
        background-color: ${({ theme }) => theme.color.white};
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 8px;
        margin-top: 50px;
        margin-left: 80px;
        margin-right: 80px;

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

        .blank_circle {
            width: 50px;
            height: 70px;
            position: relative;
            border-radius: 50%;
            background-color: white;
        }

        .text {
            font-size: 1.15rem;
        }
    }

    @media ${({ theme }) => theme.device.mobile} {
        all: unset;

        background-color: ${({ theme }) => theme.color.white};
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 8px;
        margin-top: 30px;
        margin-left: 20px;
        margin-right: 20px;

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
            width: 55px;
            height: 55px;
            position: relative;
            border-radius: 50%;
            background-color: ${({ theme }) => theme.color.blue};
        }

        .blank_circle {
            width: 30px;
            height: 30px;
            position: relative;
            border-radius: 50%;
            background-color: white;
        }

        .text {
            font-size: ${({ theme }) => theme.fontSizes.smalltext};
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

    @media ${({ theme }) => theme.device.tablet} {
        background-color: ${({ theme }) => theme.color.white};
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 30px;
        margin-top: 20px;
    }

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

const ButtonContainerDiv = styled.div`
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 100px;
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
        margin: 20px;
    }
    font-size: ${({ theme }) => theme.fontSizes.bigtext};
    font-weight: bold;
    text-align: center;
    margin: 20px;
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const TextH2 = styled.h2`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.mobiletext};
        margin-top: 20px;
    }
    margin-top: 38px;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.mediumtext};
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
