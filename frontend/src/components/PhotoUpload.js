import styled from 'styled-components';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export function PhotoUpload() {
    return (
        <ButtonContainerDiv>
            <Button>
                <div className="ButtonContainer">
                    <AddPhotoAlternateIcon />
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
        height: 300px;

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
`;
