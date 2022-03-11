import { useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import { postFacePhoto } from '../../utils/api/service';
import { postNotLoggedInFacePhoto } from '../../utils/api/user';
import {
    PhotoUpload,
    NavBackgroundDiv,
    ContainerDiv,
    BestWorstLi,
    SubTitleP,
    Color,
    BlueButton,
    WhiteButton,
    TextModal,
    Article,
} from '../../components';
import { colorPageState } from '../../utils/data/atom';
import { Loading } from '.';

function UploadFace() {
    const [imgData, setImgData] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [photoUpload, setPhotoUpload] = useState('');
    const setColorPage = useSetRecoilState(colorPageState);

    const photoInput = useRef();
    const handleClick = () => {
        photoInput.current.click();
    };

    const handlePhoto = e => {
        // 확장자 체크
        const extension = e.target.value.split('.').pop().toLowerCase();
        if (!['', 'png', 'jpg', 'jpeg'].includes(extension)) {
            alert('등록할 수 없는 파일입니다.');
            return;
        }

        const photoToAdd = e.target.files;
        const fileImg = URL.createObjectURL(photoToAdd?.[0]);
        const uploadFile = photoToAdd?.[0];

        const formData = new FormData();
        formData.append('image', uploadFile);
        setImgData(formData);

        setPhotoUpload(fileImg);
    };

    // 사진 올려주세요 모달
    const [textModal, setTextModal] = useState(false);

    const handleToggleClick = () => {
        if (textModal) setTextModal(false);
        if (!textModal) {
            setTextModal(true);
        }
    };

    const fileCheck = async () => {
        if (photoUpload === '') {
            setTextModal(true);
        } else if (photoUpload !== '') {
            setIsLoading(true);
            const checkedUser = sessionStorage.getItem('userId');
            if (checkedUser) {
                await postFacePhoto(imgData);
            }
            if (!checkedUser) {
                await postNotLoggedInFacePhoto(imgData);
            }
            setIsLoading(false);
            setColorPage(2);
        }
    };
    return (
        <>
            <TextModal className={textModal && 'show'} toggleProps={handleToggleClick} text="사진을 올려주세요." />
            <NavBackgroundDiv />
            {isLoading ? (
                <>
                    <Color number={1} />
                    <Loading />
                </>
            ) : (
                <>
                    <Color number={0} />
                    <SubTitleP>얼굴 사진을 올려주세요.</SubTitleP>
                    <ContentContainerDiv>
                        <PhotoContainerDiv>
                            <PhotoUpload photoProps={photoUpload} clickProps={handleClick} />
                            <TextContainerDiv>
                                <BestWorstLi />
                                <ButtonContainerDiv>
                                    <Stack spacing={2} direction="row">
                                        <BlueButton onClick={handleClick}>
                                            <input
                                                name="image"
                                                type="file"
                                                accept="image/jpg, image/jpeg, image/png"
                                                ref={photoInput}
                                                onChange={e => handlePhoto(e)}
                                                style={{ display: 'none' }}
                                            />
                                            업로드
                                        </BlueButton>
                                        <WhiteButton onClick={() => fileCheck()}>결과보기</WhiteButton>
                                    </Stack>
                                </ButtonContainerDiv>
                            </TextContainerDiv>
                        </PhotoContainerDiv>
                    </ContentContainerDiv>
                </>
            )}
        </>
    );
}

export { UploadFace };

// styled-components

const TestArticle = styled(Article)`
    ${({ theme }) => theme.flexStyled.flexColumn};
`;

const TextContainerDiv = styled(ContainerDiv)`
    @media ${({ theme }) => theme.device.mobile} {
        all: unset;

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
`;

const PhotoContainerDiv = styled(ContainerDiv)`
    @media ${({ theme }) => theme.device.mobile} {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 0px;
    }
    margin: 50px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const ContentContainerDiv = styled(ContainerDiv)`
    align-items: center;
`;

const ButtonContainerDiv = styled(ContainerDiv)`
    @media ${({ theme }) => theme.device.mobile} {
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
`;
