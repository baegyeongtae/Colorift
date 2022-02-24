import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import Stack from '@mui/material/Stack';
import { colorPageState } from '../../utils/data/atom';
import { PhotoUpload, ContainerDiv, BestWorstLi, SubTitleP, Color, BlueButton, WhiteButton } from '../../components';

function UploadFace() {
    const setColorPage = useSetRecoilState(colorPageState);

    return (
        <>
            <Color />
            <SubTitleP>얼굴 사진을 올려주세요.</SubTitleP>

            <ContentContainerDiv>
                <PhotoContainerDiv>
                    <PhotoUpload />
                    <TextContainerDiv>
                        <BestWorstLi />
                        <ButtonContainerDiv>
                            <Stack spacing={2} direction="row">
                                <BlueButton>업로드</BlueButton>
                                <WhiteButton type="submit" onClick={() => setColorPage(1)}>
                                    결과보기
                                </WhiteButton>
                            </Stack>
                        </ButtonContainerDiv>
                    </TextContainerDiv>
                </PhotoContainerDiv>
            </ContentContainerDiv>
        </>
    );
}

export { UploadFace };

// styled-components

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
