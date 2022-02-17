import styled from 'styled-components';
import Result from '../../components/Result';
import ProgressBar from '../../components/ProgressBar';

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
                <ProgressBarDiv>
                    봄 웜톤
                    <ProgressBar percent={70} />
                    70%
                </ProgressBarDiv>
            </ContainerDiv>
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
        border-radius: 75px;
        text-align: center;
        margin-top: 86px;
        margin-left: 45px;
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
        border-radius: 75px;
        text-align: center;
        margin-top: 86px;
        margin-left: 45px;
        margin-bottom: 10px;
        font-size: 12px;
        color: #fff;
    }

    *::before,
    *::after {
        height: 0px;

        border: 3px solid #c4c4c4;
    }
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.blue};
`;

const ContainerCircleDiv = styled.div`
    @media ${({ theme }) => theme.device.mobile} {
        background-color: ${({ theme }) => theme.color.white};
        display: flex;
        margin-bottom: 10px;
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
        margin-bottom: 20px;
        margin-top: 110px;
    }
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const TextH1 = styled.h1`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.smalltext};
        font-weight: bold;
        margin-bottom: 10px;
    }
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const TextH2 = styled.h2`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.mobiletext};
        list-style: inside;
        margin-top: 20px;
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

const ProgressBarDiv = styled.div`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.smalltext};
        color: ${({ theme }) => theme.color.darkgray};
        display: flex;
        flex-direction: row;
        text-align: center;
        line-height: %;
    }
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;
