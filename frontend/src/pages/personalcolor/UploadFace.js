import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import { Footer, PhotoUpload, ContainerDiv } from '../../components';

function UploadFace() {
    return (
        <>
            <CircleContainerDiv>
                <div className="wrapper">
                    <div className="current_circle">
                        <TextH0>
                            얼굴 사진 <br /> 업로드
                        </TextH0>
                    </div>
                    <div className="left_circle">
                        <TextH0>
                            피부톤 <br />
                            정밀 분석
                        </TextH0>
                    </div>
                    <div className="left_circle">
                        <TextH0>
                            퍼스널 컬러 <br /> 분석 결과
                        </TextH0>
                    </div>
                </div>
            </CircleContainerDiv>

            <TextH1>얼굴 사진을 올려주세요.</TextH1>

            <ContentContainerDiv>
                <PhotoContainerDiv>
                    <PhotoUpload />
                    <TextContainerDiv>
                        <TextH3>BEST</TextH3>
                        <TextH2>
                            <ul>
                                <li>· 크고 뚜렷한 사진</li>
                                <li>· 적절한 밝기에서 촬영한 사진</li>
                                <li>· 배경이 없는 깔끔한 사진</li>
                            </ul>
                        </TextH2>
                        <TextH3>WORST</TextH3>
                        <TextH2>
                            <ul>
                                <li>· 그림자 지거나 흐릿한 사진</li>
                                <li>· 너무 밝거나 너무 어두운 곳에서 촬영한 사진</li>
                                <li>· 너무 작은 사진</li>
                            </ul>
                        </TextH2>
                        <ButtonContainerDiv>
                            <Stack spacing={2} direction="row">
                                <CustomButton1>업로드</CustomButton1>
                                <CustomButton2>결과보기</CustomButton2>
                            </Stack>
                        </ButtonContainerDiv>
                    </TextContainerDiv>
                </PhotoContainerDiv>
            </ContentContainerDiv>

            <FooterContainerDiv>
                <Footer />
            </FooterContainerDiv>
        </>
    );
}

export { UploadFace };

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

const TextContainerDiv = styled(ContainerDiv)`
    @media ${({ theme }) => theme.device.mobile} {
        all: unset;

        background-color: ${({ theme }) => theme.color.white};
        display: flex;
        flex-direction: column;
        align-items: left;
        margin-bottom: 30px;
    }
    all: unset;

    top: 50%;
    left: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: left;
    margin-bottom: 30px;
    margin-left: 30px;

    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const PhotoContainerDiv = styled(ContainerDiv)`
    @media ${({ theme }) => theme.device.mobile} {
        background-color: ${({ theme }) => theme.color.white};
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 0px;
    }
    margin: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const ContentContainerDiv = styled(ContainerDiv)`
    align-items: center;

    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const ButtonContainerDiv = styled(ContainerDiv)`
    @media ${({ theme }) => theme.device.mobile} {
        background-color: ${({ theme }) => theme.color.white};
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 0px;
    }

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 40px;
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
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
        font-weight: bold;
        margin: 20px;
    }
    font-size: ${({ theme }) => theme.fontSizes.bigtext};
    font-weight: bold;
    text-align: center;
    margin: 30px;
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const TextH2 = styled.h2`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.mobiletext};
        margin-top: 5px;
        align-items: left;
        color: ${({ theme }) => theme.color.darkgray};

        li {
            list-style: none;
        }
    }
    li {
        list-style: none;
    }

    align-items: left;
    font-weight: bold;
    font-size: 1rem;
    color: ${({ theme }) => theme.color.darkgray};
    background-color: ${props => props.theme.color.white};
`;

const TextH3 = styled.h3`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.smalltext};
        margin-top: 10px;
        font-weight: bold;
        align-items: left;
        color: ${({ theme }) => theme.color.darkgray};
    }

    align-items: left;
    margin-top: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.darkgray};
    background-color: ${props => props.theme.color.white};
`;

const CustomButton1 = styled('span')`
    @media ${({ theme }) => theme.device.mobile} {
        font-weight: bold;
        font-size: 0.875rem;
        background-color: ${({ theme }) => theme.color.blue};
        padding: 12px 24px;
        border-radius: 0px;
        color: white;
        transition: all 150ms ease;
        cursor: pointer;
        border: none;
        width: 100px;
    }
    font-weight: bold;
    font-size: 0.875rem;
    background-color: ${({ theme }) => theme.color.blue};
    padding: 12px 24px;
    border-radius: 0px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: none;
    width: 170px;
    text-align: center;
`;

const CustomButton2 = styled('span')`
    @media ${({ theme }) => theme.device.mobile} {
        font-weight: bold;
        font-size: 0.875rem;
        background-color: ${({ theme }) => theme.color.white};
        padding: 12px 20px;
        border-style: solid;
        border-width: 2px;
        color: ${({ theme }) => theme.color.blue};
        transition: all 150ms ease;
        cursor: pointer;
        width: 120px;
    }
    font-weight: bold;
    font-size: 0.875rem;
    background-color: ${({ theme }) => theme.color.white};
    padding: 12px 20px;
    border-style: solid;
    border-width: 2px;
    color: ${({ theme }) => theme.color.blue};
    transition: all 150ms ease;
    cursor: pointer;
    width: 170px;
    text-align: center;
`;
