import styled from 'styled-components';
import { ContainerDiv, BackgroundDiv } from '..';

export function MyPersonalColorModal({ toggleClickProps, className }) {
    const handleToggleClick = () => {
        toggleClickProps();
    };

    return (
        <>
            <BackgroundDiv className={className} onClick={handleToggleClick} />
            <ModalDiv className={className}>
                <TableDiv>
                    <table>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>분석 날짜</th>
                                <th>제목</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>2022.02.11</td>
                                <td>사용자 지정 제목</td>
                            </tr>
                        </tbody>
                    </table>
                </TableDiv>
            </ModalDiv>
        </>
    );
}

// styled-components

const ModalDiv = styled(ContainerDiv)`
    display: none;

    &.show {
        position: fixed;
        z-index: 9999;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 100%;
        padding: 50px 30px;

        ${({ theme }) => theme.flexStyled.flexColumn};

        background-color: white;

        ::-webkit-scrollbar {
            width: 10px;
        }

        ::-webkit-scrollbar-track {
            background-color: transparent;
            border-radius: 100px;

            margin: 20px;
        }

        ::-webkit-scrollbar-thumb {
            border-radius: 100px;
            background-color: #e9e9e9;
            box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
        }

        @media ${({ theme }) => theme.device.tablet} {
            width: 80%;
        }
    }
`;

const TableDiv = styled.div`
    ${({ theme }) => theme.flexStyled.flexCenter};

    width: 100%;

    table {
        width: 80%;

        margin: 20px 10px;

        text-align: center;
        line-height: 3rem;

        border-collapse: collapse;

        th {
            font-weight: bold;
        }
    }

    table,
    th,
    td {
        border: 1px solid black;
    }
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
