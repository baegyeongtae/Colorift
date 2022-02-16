import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import PhotoUpload from '../../components/PhotoUpload';

function UploadFace() {
    return (
        <>
            <ContainerCircleDiv>
                <CurrentCircleDiv>
                    <TextH2>
                        얼굴 사진 <br /> 업로드
                    </TextH2>
                </CurrentCircleDiv>
                <LeftCircleDiv>
                    <TextH2>
                        피부톤 <br />
                        정밀 분석
                    </TextH2>
                </LeftCircleDiv>
                <LeftCircleDiv>
                    <TextH2>
                        퍼스널 컬러 <br /> 분석 결과
                    </TextH2>
                </LeftCircleDiv>
            </ContainerCircleDiv>
            <ContainerDiv>
                <TextH1>얼굴 사진을 올려주세요.</TextH1>
            </ContainerDiv>
            <PhotoContainerDiv>
                <PhotoUpload />
            </PhotoContainerDiv>
            <ContainerDiv>
                <TextH2>
                    <TextH3>BEST</TextH3>
                    <ul>
                        <li>크고 뚜렷한 사진</li>
                        <li>적절한 밝기에서 촬영한 사진</li>
                        <li>배경이 없는 깔끔한 사진</li>
                    </ul>
                    <TextH3>WORST</TextH3>
                    <ul>
                        <li>그림자 지거나 흐릿한 사진</li>
                        <li>너무 밝거나 너무 어두운 곳에서 촬영한 사진</li>
                        <li>너무 작은 사진</li>
                    </ul>
                </TextH2>
            </ContainerDiv>
            <ContainerDiv>
                <Stack spacing={2} direction="row">
                    <CustomButton1>업로드</CustomButton1>
                    <CustomButton2>결과보기</CustomButton2>
                </Stack>
            </ContainerDiv>
        </>
    );
}

export { UploadFace };

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
        margin-left: 40px;
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
    }
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const PhotoContainerDiv = styled.div`
    @media ${({ theme }) => theme.device.mobile} {
        background-color: ${({ theme }) => theme.color.white};
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 0px;
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

const TextH3 = styled.h3`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.smalltext};
        margin-top: 10px;
        font-weight: bold;
    }
    color: ${({ theme }) => theme.color.white};
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
    }
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
    }
`;
