import styled from 'styled-components';
import { ModalDiv } from './ModalDiv';
import { BackgroundDiv, ModalCloseIcon } from '..';

export function MyPersonalListModal({ toggleClickProps, className }) {
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
            <ModalDiv className={className}>
                <ModalCloseIcon clickProps={handleToggleClick} />
            </ModalDiv>
        </>
    );
}

// styled-components

const PersonalTableDiv = styled.div`
    width: 100%;
    height: 250px;

    overflow-y: auto;

    margin-top: 5px;
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

    tr {
        height: 40px;
    }

    .id {
        width: 20px;
    }

    .date {
        width: 150px;
    }

    .color {
        width: 200px;
    }

    .button {
        width: 100px;
    }

    @media ${({ theme }) => theme.device.tablet} {
        padding: 10px;
    }
`;
