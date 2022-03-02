import styled from 'styled-components';
import { useState } from 'react';
import { ModalDiv } from './ModalDiv';
import { BackgroundDiv, ModalCloseIcon, GrayButton, BlueButton } from '..';

export function MyPersonalListModal({ toggleClickProps, className }) {
    // 상세보기 모달
    const [personalModal, setPersonalModal] = useState(false);

    // 퍼스널 컬러 더미 데이터
    const dummyData = [
        {
            id: 1,
            date: '2022.02.10',
            color: '봄 웜톤',
        },
        {
            id: 2,
            date: '2022.02.12',
            color: '여름 쿨톤',
        },
        {
            id: 3,
            date: '2022.02.15',
            color: '겨울 쿨톤',
        },
        {
            id: 4,
            date: '2022.02.18',
            color: '가을 웜톤',
        },
        {
            id: 5,
            date: '2022.02.20',
            color: '봄 웜톤',
        },
        {
            id: 6,
            date: '2022.02.21',
            color: '가을 웜톤',
        },
        {
            id: 7,
            date: '2022.02.25',
            color: '겨울 쿨톤',
        },
    ];

    const handleToggleClick = () => {
        toggleClickProps();
    };

    return (
        <>
            <BackgroundDiv className={className} onClick={handleToggleClick} />
            <ModalTableDiv className={className}>
                <TextP>회원님이 저장한 퍼스널 컬러 목록입니다.</TextP>
                <PersonalTableDiv>
                    <table>
                        <tbody>
                            {dummyData.map(item => (
                                <tr key={item.id}>
                                    <td className="checkbox">
                                        <CheckboxInput type="checkbox" />
                                    </td>
                                    <td className="id">{item.id}</td>
                                    <td className="date">{item.date}</td>
                                    <td className="color">{item.color}</td>
                                    <td className="button">
                                        <GrayButton width="90%" onClick={() => setPersonalModal(current => !current)}>
                                            상세보기
                                        </GrayButton>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <ModalCloseIcon clickProps={handleToggleClick} />
                </PersonalTableDiv>
                <BlueButton>확인</BlueButton>
            </ModalTableDiv>
        </>
    );
}

// styled-components

const ModalTableDiv = styled(ModalDiv)`
    &.show {
        ${({ theme }) => theme.flexStyled.flexColumn};

        width: 700px;
        height: auto;

        padding: 30px;

        @media ${({ theme }) => theme.device.tablet} {
            width: 90%;
        }
    }
`;

const TextP = styled.p`
    font-size: 1.2rem;
    font-weight: bold;

    align-self: start;
`;

const PersonalTableDiv = styled.div`
    width: 100%;
    height: 250px;

    overflow-y: auto;

    margin: 20px;
    padding: 20px;

    border: 1px solid #dbdbdb;
    border-radius: 15px;

    text-align: center;

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

    table {
        width: 100%;
    }

    tr {
        height: 40px;
    }

    .checkbox {
        width: 40px;
    }

    .id {
        width: 20px;
    }

    .date {
        width: 100px;
    }

    .color {
        width: 150px;
    }

    .button {
        width: 100px;
    }

    @media ${({ theme }) => theme.device.tablet} {
        padding: 10px;
    }
`;

const CheckboxInput = styled.input`
    appearance: none;
    -webkit-appearance: none;

    width: 15px;
    height: 15px;

    border-width: 1px;
    border-color: black;
    border-style: solid;
    border-radius: 3px;

    background-color: white;

    :checked::before {
        content: '';

        display: block;

        width: 9px;
        height: 9px;

        margin: 17%;

        border-radius: 2px;

        background-color: ${({ theme }) => theme.color.blue};
    }
`;
