import styled from 'styled-components';
import Footer from '../../components/Footer';
import loader from '../../images/loader.png';

function MatchingLoading() {
    return (
        <>
            <ContainerDiv>
                <div className="wrapper">
                    <div className="circle">
                        <TextH2>
                            퍼스널 컬러 <br /> 선택
                        </TextH2>
                    </div>
                    <div className="circle">
                        <TextH2>
                            패션 사진 <br /> 업로드
                        </TextH2>
                    </div>
                    <div className="circle">
                        <TextH2>
                            퍼스널컬러와
                            <br /> 비교 매칭
                        </TextH2>
                    </div>
                    <div className="circle">
                        <TextH2>
                            패션 매칭
                            <br /> 결과
                        </TextH2>
                    </div>
                </div>
            </ContainerDiv>

            <ContainerDiv>
                <img src={loader} alt="loader" width="130px" height="130px" />
                <TextH1>퍼스널 컬러와 패션을 매칭하는 중입니다.</TextH1>
            </ContainerDiv>

            <Footer />
        </>
    );
}

export { MatchingLoading };

const ContainerDiv = styled.div`
    @media ${({ theme }) => theme.device.mobile} {
        background-color: ${({ theme }) => theme.color.white};
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 160px;
        margin-top: 100px;
    }
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

    .circle {
        width: 68px;
        height: 68px;
        position: relative;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.color.blue};
        text-align: center;
    }
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const TextH1 = styled.h1`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.smalltext};
        margin-top: 20px;
        font-weight: bold;
    }
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const TextH2 = styled.h2`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.mobiletext};
        color: white;
        margin-top: 20px;
    }
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;
