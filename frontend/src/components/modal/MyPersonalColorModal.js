import styled from 'styled-components';
import { ContainerDiv } from '..';

function MyPersonalColorModal() {
    return (
        <>
            <TableContainerDiv>
                <table className="type11">
                    <thead>
                        <tr width="20px">
                            <th>번호</th>
                            <th>분석 날짜</th>
                            <th>제목</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr width="20px">
                            <td>1</td>
                            <td>2022.02.11</td>
                            <td>사용자 지정 제목</td>
                        </tr>
                    </tbody>
                </table>
            </TableContainerDiv>

            <ResultContainerDiv />

            <TextH1>회원님은 봄 웜톤 입니다.</TextH1>

            <ColorContainerDiv>
                <div className="wrapper">
                    <div className="text">회원님에게 어울리는 컬러</div>
                    <div className="blank_circle" />
                    <div className="blank_circle" />
                    <div className="blank_circle" />
                </div>
                <div className="wrapper">
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                </div>
                <div className="wrapper">
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                </div>
                <div className="wrapper">
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                </div>
            </ColorContainerDiv>
        </>
    );
}

export { MyPersonalColorModal };

// styled-components
const TableContainerDiv = styled.div`
    @media ${({ theme }) => theme.device.mobile} {
        background-color: ${({ theme }) => theme.color.white};
        display: flex;
        flex-direction: column;
        margin-bottom: 8px;
        margin-top: 8px;
    }

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 8px;
    margin-top: 8px;

    table.type11 {
        border-collapse: separate;
        text-align: center;
        line-height: 1.5;
        margin: 20px 10px;
        width: 600px;
        border-spacing: 0px;
        border-right: 1px solid black;
        border-bottom: 1px solid black;
    }
    table.type11 th {
        padding: 10px;
        font-weight: bold;
        vertical-align: top;

        border-bottom: 1px solid black;
        border-top: 1px solid black;
        border-left: 1px solid black;
    }

    table.type11 td {
        padding: 10px;
        vertical-align: top;

        border-left: 1px solid black;
    }
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const ColorContainerDiv = styled(ContainerDiv)`
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 80px;
    margin-left: 200px;
    margin-right: 200px;

    .wrapper {
        width: 100%;
        height: auto;
        position: relative;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 7px;
    }

    .circle {
        width: 100px;
        height: 100px;
        position: relative;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.color.blue};
    }

    .blank_circle {
        width: 50px;
        height: 70px;
        position: relative;
        border-radius: 50%;
        background-color: white;
    }

    .text {
        font-size: 1.15rem;
    }

    @media ${({ theme }) => theme.device.laptop} {
        background-color: ${({ theme }) => theme.color.white};
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 8px;
        margin-top: 50px;
        margin-left: 80px;
        margin-right: 80px;

        .wrapper {
            width: 100%;
            height: auto;
            position: relative;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin-bottom: 7px;
        }

        .circle {
            width: 100px;
            height: 100px;
            position: relative;
            border-radius: 50%;
            background-color: ${({ theme }) => theme.color.blue};
        }

        .blank_circle {
            width: 50px;
            height: 70px;
            position: relative;
            border-radius: 50%;
            background-color: white;
        }

        .text {
            font-size: 1.15rem;
        }
    }

    @media ${({ theme }) => theme.device.mobile} {
        all: unset;

        background-color: ${({ theme }) => theme.color.white};
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 8px;
        margin-top: 30px;
        margin-left: 20px;
        margin-right: 20px;

        .wrapper {
            width: 100%;
            height: auto;
            position: relative;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin-bottom: 7px;
        }

        .circle {
            width: 55px;
            height: 55px;
            position: relative;
            border-radius: 50%;
            background-color: ${({ theme }) => theme.color.blue};
        }

        .blank_circle {
            width: 30px;
            height: 30px;
            position: relative;
            border-radius: 50%;
            background-color: white;
        }

        .text {
            font-size: ${({ theme }) => theme.fontSizes.smalltext};
        }
    }
`;

const ResultContainerDiv = styled(ContainerDiv)`
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 8px;
    margin-top: 8px;

    @media ${({ theme }) => theme.device.tablet} {
        background-color: ${({ theme }) => theme.color.white};
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 30px;
        margin-top: 20px;
    }

    @media ${({ theme }) => theme.device.mobile} {
        background-color: ${({ theme }) => theme.color.white};
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 8px;
        margin-top: 15px;
    }
`;

const TextH1 = styled.h1`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.smalltext};
        font-weight: bold;
        margin: 20px;
    }
    font-size: ${({ theme }) => theme.fontSizes.bigtext};
    font-weight: bold;
    text-align: center;
    margin: 20px;
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;
