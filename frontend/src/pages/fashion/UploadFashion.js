/* eslint-disable react/jsx-no-useless-fragment */
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import Stack from '@mui/material/Stack';
import { postFashionPhoto } from '../../utils/api/service';
import { PhotoUpload, ContainerDiv, Fashion, SubTitleP, BestWorstLi, BlueButton, WhiteButton } from '../../components';
import { fashionPageState } from '../../utils/data/atom';
import { MatchingLoading } from '.';

function UploadFashion() {
    const setFashionPage = useSetRecoilState(fashionPageState);
    const [fashionData, setFashionData] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [photoUpload, setPhotoUpload] = useState('');
    const seasonTone = sessionStorage.getItem('season');

    const photoInput = useRef();
    const handleClick = () => {
        photoInput.current.click();
    };

    const handlePhoto = e => {
        const photoToAdd = e.target.files;
        console.log(photoToAdd[0]);
        const fileImg = URL.createObjectURL(photoToAdd[0]);
        console.log(fileImg);
        const uploadFile = photoToAdd[0];

        const formData = new FormData();
        formData.append('image', uploadFile);
        formData.append('color', seasonTone);
        console.log(formData);
        setFashionData(formData);

        setPhotoUpload(fileImg);
    };

    const fileCheck = async () => {
        if (photoUpload === '') {
            alert('사진을 올려주세요.');
        } else if (photoUpload !== '') {
            setIsLoading(true);
            const matchingResult = await postFashionPhoto(fashionData);
            console.log(matchingResult);
            setIsLoading(false);
            setFashionPage(3);
        }
    };

    return (
        <>
            {isLoading ? (
                <MatchingLoading />
            ) : (
                <>
                    <Fashion />
                    <SubTitleP>가지고 계신 옷을 올려주세요.</SubTitleP>
                    <ContentContainerDiv>
                        <PhotoContainerDiv>
                            <PhotoUpload photoProps={photoUpload} />
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

export { UploadFashion };

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
