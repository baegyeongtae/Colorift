import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import Result from '../../components/Result';
import ProgressBar from '../../components/ProgressBar';
import Footer from '../../components/Footer';

function ColorResult() {
    return (
        <>
            <ContainerCircleDiv>
                <LeftCircleDiv>
                    <TextH2>
                        얼굴 사진 <br /> 업로드
                    </TextH2>
                </LeftCircleDiv>
                <LeftCircleDiv>
                    <LineDiv>
                        <TextH2>
                            피부톤 <br />
                            정밀 분석
                        </TextH2>
                    </LineDiv>
                </LeftCircleDiv>
                <CurrentCircleDiv>
                    <TextH2>
                        퍼스널 컬러 <br /> 분석 결과
                    </TextH2>
                </CurrentCircleDiv>
            </ContainerCircleDiv>

            <ContainerDiv>
                <Result />
            </ContainerDiv>

            <ContainerDiv>
                <TextH1>회원님은 봄 웜톤 입니다.</TextH1>
            </ContainerDiv>

            <ContainerDiv>
                <ProgressDiv>
                    <dl>
                        <dt className="progress">봄 웜톤</dt>
                        <dt className="progress">여름 쿨톤</dt>
                        <dt className="progress">가을 웜톤</dt>
                        <dt className="progress">겨울 쿨톤</dt>
                    </dl>
                    <dl>
                        <dt className="progress">
                            <ProgressBar percent={70} />
                        </dt>
                        <dt className="progress">
                            <ProgressBar percent={8} />
                        </dt>
                        <dt className="progress">
                            <ProgressBar percent={43} />
                        </dt>
                        <dt className="progress">
                            <ProgressBar percent={20} />
                        </dt>
                    </dl>
                    <dl>
                        <dt className="progress">70%</dt>
                        <dt className="progress">8%</dt>
                        <dt className="progress">43%</dt>
                        <dt className="progress">20%</dt>
                    </dl>
                </ProgressDiv>
            </ContainerDiv>

            <TextH3>회원님에게 어울리는 컬러</TextH3>

            <ContainerDiv>
                <div className="wrapper">
                    <div className="circle" />
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
                    <div className="circle" />
                </div>
                <div className="wrapper">
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                </div>
            </ContainerDiv>

            <ContainerDiv>
                <Stack spacing={2} direction="row">
                    <CustomButton>업로드</CustomButton>
                    <CustomButton>결과보기</CustomButton>
                </Stack>
            </ContainerDiv>

            <Footer />
        </>
    );
}

export { ColorResult };

// styled-components

const CurrentCircleDiv = styled.div`
    @media ${({ theme }) => theme.device.mobile} {
        background-color: ${({ theme }) => theme.color.blue};

        width: 73.36px;
        height: 73.36px;
        border-radius: 50%;
        text-align: center;
        margin-top: 86px;
        margin-left: 0 auto;
        margin-bottom: 10px;
        font-size: 12px;
        color: #fff;
    }

    color: ${({ theme }) => theme.color.blue};
    background-color: ${props => props.theme.color.blue};
`;

const LeftCircleDiv = styled.div`
    @media ${({ theme }) => theme.device.mobile} {
        background-color: ${({ theme }) => theme.color.lightgray};
        width: 73.36px;
        height: 73.36px;
        border-radius: 50%;
        position: relative;
        text-align: center;
        display: inline-block;
        margin-top: 86px;
        margin-left: 0 auto;
        margin-bottom: 10px;
        font-size: 12px;
        color: #fff;

        ::after {
            content: '';
            width: 42px;
            height: 2px;
            background-color: ${({ theme }) => theme.color.lightgray};
            position: absolute;
            top: 50%;
            left: 100%;
        }
    }

    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.blue};
`;

const ContainerCircleDiv = styled.div`
    @media ${({ theme }) => theme.device.mobile} {
        background-color: ${({ theme }) => theme.color.white};
        display: flex;
        margin-bottom: 10px;
        margin: 0 auto;
        justify-content: space-evenly;
    }

    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const ContainerDiv = styled.div`
    @media ${({ theme }) => theme.device.mobile} {
        background-color: ${({ theme }) => theme.color.white};
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 8px;
        margin-top: 8px;

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
            width: 48px;
            height: 48px;
            position: relative;
            border-radius: 50%;
            background-color: ${({ theme }) => theme.color.blue};
        }
    }
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const TextH1 = styled.h1`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.smalltext};
        font-weight: bold;
        margin: 8px;
    }
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const TextH2 = styled.h2`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.mobiletext};
        margin-top: 20px;
    }
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const TextH3 = styled.h3`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.smalltext};
        margin: 25px;
        font-weight: 550;
    }
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const LineDiv = styled.div`
    @media ${({ theme }) => theme.device.mobile} {
        .hr-sect::before,
        .hr-sect::after {
            content: '';
            flex-grow: 1;
            background-color: ${({ theme }) => theme.color.lightgray};
            height: 1px;
            font-size: 0px;
            line-height: 0px;
            margin: 0px;
        }
    }
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const CustomButton = styled('span')`
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

const ProgressDiv = styled.div`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.smalltext};
        color: ${({ theme }) => theme.color.darkgray};
        display: flex;
        flex-direction: row;
        align-items: center;

        .progress {
            margin: 8px;
        }
    }
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;
