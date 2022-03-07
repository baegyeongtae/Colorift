import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { ModalDiv } from './ModalDiv';
import { BackgroundDiv, ModalCloseIcon, GrayButton, BlueButton, MyPersonalColorModal, TextModal } from '..';
import { getColorList } from '../../utils/api/service';
import { seasonPersonal } from '../../utils/data/season';

export function MyPersonalListModal({ toggleProps, checkProps, className }) {
    // API로 받아온 컬러 데이터 목록
    const [colorList, setColorList] = useState([]);

    // 상세보기 모달 상태
    const [personalListModal, setPersonalListModal] = useState(false);

    // 컬러 선택 모달
    const [colorChoiceModal, setColorChoiceModal] = useState(false);

    // 상세보기 모달에서 선택한 컬러 ID 값
    const [colorId, setColorId] = useState(0);

    // CheckBox Button Select
    const [chosen, setChosen] = useState('');
    const handleSelectChange = event => {
        const { value } = event.target;
        setChosen(value);
    };

    // 확인 버튼 눌렀을 때 함수
    const handlePropsClick = () => {
        if (!chosen) {
            setColorChoiceModal(true);
        } else {
            const chosenColor = seasonPersonal[chosen];
            // eslint-disable-next-line no-unused-expressions
            checkProps && checkProps({ chosenColor });
        }
    };

    // 마이퍼스널 목록 모달 닫는 토글 함수
    const handleClosedClick = () => {
        toggleProps();
    };

    // 컬러를 선택해주세요 모달 닫는 함수
    const handleChoiceClick = () => {
        setColorChoiceModal(current => !current);
    };

    // 상세보기 모달을 클릭 할 때
    const handleToggleClick = (id = colorId) => {
        if (personalListModal) setPersonalListModal(false);
        if (!personalListModal) {
            setColorId(id);
            setPersonalListModal(true);
        }
    };

    // 컬러 목록 API 요청
    useEffect(async () => {
        const response = await getColorList();
        setColorList(response.data);
    }, []);

    return (
        <>
            <BackgroundDiv className={className} onClick={handleClosedClick} />
            <ModalTableDiv className={className}>
                <TextP>회원님이 저장한 퍼스널 컬러 목록입니다.</TextP>
                <PersonalTableDiv>
                    {colorList.length !== 0 ? (
                        <table>
                            <tbody>
                                {colorList.map(item => (
                                    <tr key={item.id}>
                                        <td className="checkbox">
                                            <CheckboxInput
                                                type="radio"
                                                name="checkbox"
                                                value={item.color}
                                                onChange={event => handleSelectChange(event)}
                                            />
                                        </td>
                                        <td className="id">{item.id}</td>
                                        <td className="date">{item.date?.replace(/-/gi, '. ')}</td>
                                        <td className="color">{seasonPersonal[item.color]}</td>
                                        <td className="button">
                                            <GrayButton width="90%" onClick={() => handleToggleClick(item.id)}>
                                                상세보기
                                            </GrayButton>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>저장된 퍼스널컬러가 없습니다.</p>
                    )}
                    <ModalCloseIcon toggleProps={handleClosedClick} />
                </PersonalTableDiv>
                <BlueButton onClick={handlePropsClick}>확인</BlueButton>
            </ModalTableDiv>
            <MyPersonalColorModal
                className={personalListModal && 'show'}
                toggleProps={handleToggleClick}
                colorId={colorId}
            />
            {colorChoiceModal && (
                <TextModal
                    text="색상을 선택해주세요."
                    toggleProps={handleChoiceClick}
                    className={colorChoiceModal && 'show'}
                />
            )}
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

    p {
        line-height: 200px;
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
