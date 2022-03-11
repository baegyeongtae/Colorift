import styled from 'styled-components';
import Button from '@mui/material/Button';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export function PhotoUpload({ photoProps, clickProps }) {
    sessionStorage.setItem('photoProps', photoProps);

    const handleClick = () => {
        clickProps && clickProps();
    };

    if (photoProps === '') {
        return (
            <ButtonContainerDiv onClick={handleClick}>
                <Button>
                    <div className="ButtonContainer">
                        <p>클릭하여 사진 업로드</p>
                        <AddPhotoAlternateIcon />
                    </div>
                </Button>
            </ButtonContainerDiv>
        );
    }
    return (
        <ButtonContainerDiv onClick={handleClick}>
            <Button>
                <div className="faceImg" key={photoProps}>
                    <img className="photoImg" alt="face" src={photoProps} />
                    <p className="hover">클릭하여 사진 업로드</p>
                </div>
            </Button>
        </ButtonContainerDiv>
    );
}

const ButtonContainerDiv = styled.div`
    background-color: #f3fcff;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: evenly;
    position: relative;

    .ButtonContainer {
        width: 350px;
        height: 350px;

        @media ${({ theme }) => theme.device.laptop} {
            width: 300px;
            height: 300px;
        }

        @media ${({ theme }) => theme.device.tablet} {
            width: 300px;
            height: 300px;
        }

        @media ${({ theme }) => theme.device.mobile} {
            width: 230px;
            height: 220px;
        }

        border: 2px dashed ${({ theme }) => theme.color.lightgray};
        top: 50%;
        left: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .faceImg {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 350px;
        height: 350px;

        position: relative;

        .hover {
            display: none;
        }

        @media ${({ theme }) => theme.device.mobile} {
            width: 220px;
            height: 220px;
        }
    }

    .photoImg {
        @media ${({ theme }) => theme.device.mobile} {
            all: unset;

            width: 100%;
            height: 220px;
        }

        width: 100%;
        height: 100%;

        :hover {
            filter: blur(1px) contrast(50%);

            + .hover {
                display: initial;
                position: absolute;
                color: white;
            }
        }
    }
`;
