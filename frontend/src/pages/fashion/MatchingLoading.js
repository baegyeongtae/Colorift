import styled from 'styled-components';
import { Footer, ContainerDiv } from '../../components';
import loader from '../../images/loader.png';

function MatchingLoading() {
    return (
        <>
            <CircleContainerDiv>
                <div className="wrapper">
                    <div className="current_circle">
                        <TextH0>
                            퍼스널 컬러 <br /> 선택
                        </TextH0>
                    </div>
                    <div className="left_circle">
                        <TextH0>
                            패션 사진 <br /> 업로드
                        </TextH0>
                    </div>
                    <div className="left_circle">
                        <TextH0>
                            퍼스널컬러와
                            <br /> 비교 매칭
                        </TextH0>
                    </div>
                    <div className="left_circle">
                        <TextH0>
                            패션 매칭
                            <br /> 결과
                        </TextH0>
                    </div>
                </div>
            </CircleContainerDiv>

            <LoadingContainerDiv>
                <img src={loader} alt="loader" width="130px" height="130px" />
                <TextH1>퍼스널 컬러와 패션을 매칭하는 중입니다.</TextH1>
            </LoadingContainerDiv>

            <FooterContainerDiv>
                <Footer />
            </FooterContainerDiv>
        </>
    );
}

export { MatchingLoading };

const CircleContainerDiv = styled(ContainerDiv)`
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 50px;
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

const LoadingContainerDiv = styled(ContainerDiv)`
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 100px;
`;

const FooterContainerDiv = styled.div`
    position: absolute;
    bottom: 0;
`;
const TextH0 = styled.h2`
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

const TextH1 = styled.h1`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.smalltext};
        margin-top: 20px;
        font-weight: bold;
    }
    font-weight: bold;
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const TextH2 = styled.h2`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.mobiletext};
        color: white;
        margin-top: 20px;
    }
    margin-top: 45px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;
