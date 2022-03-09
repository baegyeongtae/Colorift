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
                        <AddPhotoAlternateIcon />
                    </div>
                </Button>
            </ButtonContainerDiv>
        );
    }
    return (
        <ButtonContainerDiv>
            <div className="faceImg" key={photoProps}>
                <img className="photoImg" alt="face" src={photoProps} />
            </div>
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
        width: 400px;
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

        @media ${({ theme }) => theme.device.mobile} {
            width: 220px;
            height: 220px;
        }
        width: 300px;
        height: 300px;
    }

    .photoImg {
        @media ${({ theme }) => theme.device.mobile} {
            all: unset;

            width: 100%;
            height: 220px;
        }
        width: 100%;
        height: 300px;
    }
`;
