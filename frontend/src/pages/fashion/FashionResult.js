import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import Color from '../../images/Color.png';
import { Result, ProgressBar, Footer } from '../../components';

function FashionResult() {
    return (
        <>
            <CircleContainerDiv>
                <div className="wrapper">
                    <div className="current_circle">
                        <TextH2>
                            퍼스널 컬러 <br /> 선택
                        </TextH2>
                    </div>
                    <div className="left_circle">
                        <TextH2>
                            패션 사진 <br /> 업로드
                        </TextH2>
                    </div>
                    <div className="left_circle">
                        <TextH2>
                            퍼스널컬러와
                            <br /> 비교 매칭
                        </TextH2>
                    </div>
                    <div className="left_circle">
                        <TextH2>
                            패션 매칭
                            <br /> 결과
                        </TextH2>
                    </div>
                </div>
            </CircleContainerDiv>

            <ContainerDiv>
                <Result />
            </ContainerDiv>

            <ContainerDiv>
                <TextH1>이 옷은 봄 웜톤인 회원님께</TextH1>
            </ContainerDiv>

            <ContainerDiv>
                <ProgressDiv>
                    <dl>
                        <dt className="progress">색상</dt>
                        <dt className="progress">명도</dt>
                        <dt className="progress">채도</dt>
                    </dl>
                    <dl>
                        <dt className="progress">
                            <ProgressBar percent={82} />
                        </dt>
                        <dt className="progress">
                            <ProgressBar percent={65} />
                        </dt>
                        <dt className="progress">
                            <ProgressBar percent={70} />
                        </dt>
                    </dl>
                    <dl>
                        <dt className="progress">82%</dt>
                        <dt className="progress">65%</dt>
                        <dt className="progress">70%</dt>
                    </dl>
                </ProgressDiv>
                <TextH1>종합 67%만큼 매칭됩니다.</TextH1>
            </ContainerDiv>

            <ContainerDiv>
                <img src={Color} alt="Color" width="343px" height="90px" />
            </ContainerDiv>

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

export { FashionResult };

// styled-components

const CircleContainerDiv = styled.div`
    @media ${({ theme }) => theme.device.mobile} {
        background-color: ${({ theme }) => theme.color.white};
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 20px;
        margin-top: 70px;
        color: white;
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

    .current_circle {
        width: 68px;
        height: 68px;
        position: relative;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.color.blue};
        text-align: center;
    }

    .left_circle {
        width: 68px;
        height: 68px;
        position: relative;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.color.lightgray};
        text-align: center;
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
    }
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const ButtonContainerDiv = styled.div`
    @media ${({ theme }) => theme.device.mobile} {
        background-color: ${({ theme }) => theme.color.white};
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 50px;
        margin-top: 20px;

        .wrapper {
            width: 100%;
            height: auto;
            position: relative;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin-bottom: 7px;
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

// const TextH3 = styled.h3`
//     @media ${({ theme }) => theme.device.mobile} {
//         font-size: ${({ theme }) => theme.fontSizes.smalltext};
//         margin: 25px;
//         font-weight: 550;
//     }
//     color: ${({ theme }) => theme.color.white};
//     background-color: ${props => props.theme.color.white};
// `;

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
            font-weight: bold;
        }
    }
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;
