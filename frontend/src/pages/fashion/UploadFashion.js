import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import { Footer, PhotoUpload } from '../../components';

function UploadFashion() {
    return (
        <>
            <ContainerDiv>
                <div className="wrapper">
                    <div className="left_circle">
                        <TextH0>
                            퍼스널 컬러 <br /> 선택
                        </TextH0>
                    </div>
                    <div className="current_circle">
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
            </ContainerDiv>
            <TextH1>얼굴 사진을 올려주세요.</TextH1>
            <PhotoContainerDiv>
                <PhotoUpload />
            </PhotoContainerDiv>
            <ListContainerDiv>
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
            </ListContainerDiv>
            <ContainerDiv>
                <Stack spacing={2} direction="row">
                    <CustomButton1>업로드</CustomButton1>
                    <CustomButton2>결과보기</CustomButton2>
                </Stack>
            </ContainerDiv>

            <Footer />
        </>
    );
}

export { UploadFashion };

// styled-components

const ContainerDiv = styled.div`
    @media ${({ theme }) => theme.device.mobile} {
        background-color: ${({ theme }) => theme.color.white};
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 20px;
        margin-top: 50px;
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

const ListContainerDiv = styled.div`
    @media ${({ theme }) => theme.device.mobile} {
        background-color: ${({ theme }) => theme.color.white};
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-top: 20px;
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
    }
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const TextH0 = styled.h1`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.mobiletext};
        list-style: inside;
        text-align: center;
        margin-top: 20px;
    }
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const TextH1 = styled.h1`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.mediumtext};
        font-weight: bold;
        margin-bottom: 10px;
        text-align: center;
    }
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const TextH2 = styled.h2`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.mobiletext};
        list-style: inside;
    }
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const TextH3 = styled.h3`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.smalltext};
        font-weight: bold;
        margin-bottom: 3px;
        margin-top: 10px;
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
