/* eslint-disable react/jsx-no-useless-fragment */
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import Stack from '@mui/material/Stack';
import { postFashionPhoto } from '../../utils/api/service';
import { postNotLoggedInFashionPhoto } from '../../utils/api/user';
import {
    PhotoUpload,
    NavBackgroundDiv,
    ContainerDiv,
    Fashion,
    SubTitleP,
    BestWorstLi,
    BlueButton,
    WhiteButton,
    TextModal,
} from '../../components';
import { fashionPageState } from '../../utils/data/atom';
import { MatchingLoading } from '.';

function UploadFashion() {
    const setFashionPage = useSetRecoilState(fashionPageState);
    const [fashionData, setFashionData] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [photoUpload, setPhotoUpload] = useState('');
    const seasonTone = sessionStorage.getItem('color');

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
        formData.append('color', seasonTone);

        setFashionData(formData);
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

    const handleFileCheck = async () => {
        if (!photoUpload) {
            setTextModal(true);
        } else {
            setIsLoading(true);
            const checkedUser = sessionStorage.getItem('userId');
            if (checkedUser) {
                await postFashionPhoto(fashionData);
            }
            if (!checkedUser) {
                await postNotLoggedInFashionPhoto(fashionData);
            }
            setIsLoading(false);
            setFashionPage(3);
        }
    };

    const handleReturn = () => {
        setFashionPage(0);
    };

    return (
        <>
            <TextModal className={textModal && 'show'} toggleProps={handleToggleClick} text="사진을 올려주세요." />
            <NavBackgroundDiv />
            {isLoading ? (
                <>
                    <Fashion number={2} />
                    <MatchingLoading />
                </>
            ) : (
                <>
                    <Fashion number={1} />
                    <SubTitleP>매칭하고 싶은 옷을 올려주세요.</SubTitleP>
                    <ContentContainerDiv>
                        <PhotoContainerDiv>
                            <PhotoUpload photoProps={photoUpload} clickProps={handleClick} />
                            <TextContainerDiv>
                                <BestWorstLi />
                                <ButtonContainerDiv>
                                    <Stack spacing={2} direction="row">
                                        <BlueButton onClick={handleClick}>
                                            <input
                                                type="file"
                                                accept="image/jpg, image/jpeg, image/png"
                                                ref={photoInput}
                                                onChange={e => handlePhoto(e)}
                                                style={{ display: 'none' }}
                                            />
                                            업로드
                                        </BlueButton>
                                        <WhiteButton onClick={handleFileCheck}>결과보기</WhiteButton>
                                        <WhiteButton onClick={handleReturn}>컬러 다시선택</WhiteButton>
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

export { UploadFashion };

// styled-components

const TextContainerDiv = styled(ContainerDiv)`
    @media ${({ theme }) => theme.device.mobile} {
        all: unset;
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
        ${({ theme }) => theme.flexStyled.flexColumn};
        justify-content: space-around;
        align-items: center;
        margin-bottom: 0px;
    }
    margin: 50px 0;
    ${({ theme }) => theme.flexStyled.flexRow};
    justify-content: center;
    align-items: center;
`;

const ContentContainerDiv = styled(ContainerDiv)`
    align-items: center;
`;

const ButtonContainerDiv = styled(ContainerDiv)`
    @media ${({ theme }) => theme.device.mobile} {
        margin-bottom: 0px;
    }

    ${({ theme }) => theme.flexStyled.flexColumn};
    justify-content: space-around;
    align-items: center;
    margin-top: 40px;
`;
