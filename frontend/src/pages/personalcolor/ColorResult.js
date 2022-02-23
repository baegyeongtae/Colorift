import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import { ResultImage, Color, SubTitleP, ContainerDiv, BlueButton } from '../../components';

function ColorResult() {
    return (
        <>
            <Color />

            <ResultContainerDiv>
                <ResultImage />
            </ResultContainerDiv>

            <SubTitleP>회원님은 봄 웜톤 입니다.</SubTitleP>

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
                    <BlueButton>업로드 </BlueButton>
                    <BlueButton>결과보기</BlueButton>
                </Stack>
            </ButtonContainerDiv>
        </>
    );
}

export { ColorResult };

// styled-components

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
