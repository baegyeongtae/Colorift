// import Box from '@mui/material/Box';
import styled from 'styled-components';

export function ResultImage() {
    const uploadedImage = sessionStorage.getItem('photoProps');
    // if (colorPage === 2 && fashionPage !== 3)
    //     return (
    //         <BoxDiv>
    //             <div className="faceImg">
    //                 <img className="photoImg" alt="Img" src={faceImg} />
    //             </div>
    //         </BoxDiv>
    //     );
    // if (colorPage !== 2 && fashionPage === 3)
    return (
        <BoxDiv>
            <div className="faceImg">
                <img className="photoImg" alt="Img" src={uploadedImage} />
            </div>
        </BoxDiv>
    );
}

const BoxDiv = styled.div`
    @media ${({ theme }) => theme.device.mobile} {
        position: relative;
        width: 200px;
        height: 200px;
    }
    align-items: center;
    position: relative;
    width: 300px;
    height: 300px;
    margin-top: 20px;
    margin-bottom: 20px;

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

    background-color: white;
`;
