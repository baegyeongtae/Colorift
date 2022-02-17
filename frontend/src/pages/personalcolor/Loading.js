import styled from 'styled-components';
import Footer from '../../components/Footer';
import loader from '../../images/loader.png';

function Loading() {
    return (
        <>
            <ContainerCircleDiv>
                <LeftCircleDiv>
                    <TextH2>
                        얼굴 사진 <br /> 업로드
                    </TextH2>
                </LeftCircleDiv>

                <CurrentCircleDiv>
                    <LineDiv>
                        <TextH2>
                            피부톤 <br />
                            정밀 분석
                        </TextH2>
                    </LineDiv>
                </CurrentCircleDiv>

                <LeftCircleDiv>
                    <TextH2>
                        퍼스널 컬러 <br /> 분석 결과
                    </TextH2>
                </LeftCircleDiv>
            </ContainerCircleDiv>
            <ContainerDiv>
                <img src={loader} alt="loader" width="130px" height="130px" />
                <TextH1>피부톤을 분석하는 중입니다.</TextH1>
            </ContainerDiv>

            <Footer />
        </>
    );
}

export { Loading };

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
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.blue};
`;

const ContainerCircleDiv = styled.div`
    @media ${({ theme }) => theme.device.mobile} {
        background-color: ${({ theme }) => theme.color.white};
        display: flex;
        margin-bottom: 20px;
    }
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const ContainerDiv = styled.div`
    @media ${({ theme }) => theme.device.mobile} {
        background-color: ${({ theme }) => theme.color.white};
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 30px;
        margin-top: 120px;
    }
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const TextH1 = styled.h1`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.mediumtext};
        margin-top: 20px;
        font-weight: bold;
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
