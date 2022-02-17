import styled from 'styled-components';
import loader from '../../images/loader.png';

function PersonalColorChoice() {
    return (
        <>
            <ContainerCircleDiv>
                <LeftCircleDiv>
                    <dl>
                        <dt>STEP 02</dt>
                    </dl>
                </LeftCircleDiv>
            </ContainerCircleDiv>

            <ContainerDiv>
                <img src={loader} alt="loader" width="130px" height="130px" />
                <TextH1>피부톤을 분석하는 중입니다.</TextH1>
            </ContainerDiv>
        </>
    );
}

export { PersonalColorChoice };

// styled-components

// const CurrentCircleDiv = styled.div`
//     @media ${({ theme }) => theme.device.mobile} {
//         background-color: ${({ theme }) => theme.color.blue};
//         position: absolute;
//         width: 73.36px;
//         height: 73.36px;
//         border-radius: 75px;
//         text-align: center;
//         margin-top: 86px;
//         margin-left: 45px;
//         margin-bottom: 10px;
//         font-size: 12px;
//         color: #fff;
//     }

//     color: ${({ theme }) => theme.color.blue};
//     background-color: ${props => props.theme.color.blue};
// `;

const LeftCircleDiv = styled.div`
    @media ${({ theme }) => theme.device.mobile} {
        background-color: ${({ theme }) => theme.color.lightgray};
        position: absolute;
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
    *::after {
        width: 269.69px;
        height: 0px;
        border: 3px solid #c4c4c4;
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
        margin-top: 120px;
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

// const TextH2 = styled.h2`
//     @media ${({ theme }) => theme.device.mobile} {
//         font-size: ${({ theme }) => theme.fontSizes.mobiletext};
//         list-style: inside;
//         margin-top: 20px;
//     }
//     color: ${({ theme }) => theme.color.white};
//     background-color: ${props => props.theme.color.white};
// `;

// const LineDiv = styled.div`
//     @media ${({ theme }) => theme.device.mobile} {
//         position: relative;
//         width: 251.53px;
//         height: 0px;
//         left: 79.37px;
//         top: 121.37px;

//         border: 3px solid #C4C4C4;
//         }
//     }
//     color: ${({ theme }) => theme.color.white};
//     background-color: ${props => props.theme.color.white};
// `;
