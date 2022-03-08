import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getColorList, setDeletePersonal } from '../../utils/api/service';
import { GrayButton, MyPersonalColorModal } from '../../components';
import { setScrollDisabled } from '../../utils/data/setScrollDisabled';
import { seasonPersonal } from '../../utils/data/season';

export function MyPagePersonal() {
    // 상세보기 모달
    const [personalModal, setPersonalModal] = useState(false);

    // 유저가 선택한 패션 사진의 정보
    const [personalInfo, setPersonalInfo] = useState({
        id: 0,
        index: 0,
    });

    // API로 받아온 컬러 데이터 목록
    const [colorList, setColorList] = useState([]);

    // 상세보기 또는 삭제하기 클릭 시 모달 토클 함수
    const handleToggleClick = () => {
        if (personalModal) setPersonalModal(current => !current);
    };

    // 상세보기 버튼 클릭했을 때
    const handleToggleDetailClick = (id, index) => {
        setPersonalInfo(current => ({
            ...current,
            id,
            index,
        }));
        setPersonalModal(current => !current);
    };

    // 삭제하기 버튼 클릭 시 함수
    async function handleDeleteClick(id, index) {
        const result = window.confirm('정말 삭제하시겠습니까?');
        if (result) {
            const response = await setDeletePersonal(id);
            if (response.status === 204) {
                setColorList(current => {
                    const newCurrent = [...current];
                    newCurrent.splice(index, 1);
                    return newCurrent;
                });
            }
        }
    }

    // 컬러 목록 API 요청
    useEffect(async () => {
        const response = await getColorList();
        setColorList(response.data);
    }, []);

    // 모달 뜬 상태에서는 스크롤 막기
    useEffect(() => setScrollDisabled(personalModal), [personalModal]);

    return (
        <>
            {personalModal && (
                <MyPersonalColorModal
                    className={personalModal && 'show'}
                    toggleProps={handleToggleClick}
                    selectData={personalInfo}
                />
            )}
            <PersonalTableDiv className="personal">
                {!colorList?.length ? (
                    <table>
                        <tbody>
                            {colorList?.map((item, index) => (
                                <tr key={item.id}>
                                    <td className="id">{index + 1}</td>
                                    <td className="date">{item.date}</td>
                                    <td className="color">{seasonPersonal[item.color]}</td>
                                    <td className="button">
                                        <GrayButton
                                            width="90%"
                                            onClick={() => handleToggleDetailClick(item.id, index + 1)}
                                        >
                                            상세보기
                                        </GrayButton>
                                    </td>
                                    <td className="button">
                                        <GrayButton width="90%" onClick={() => handleDeleteClick(item.id, index)}>
                                            삭제하기
                                        </GrayButton>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>분석한 퍼스널컬러가 없습니다.</p>
                )}
            </PersonalTableDiv>
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

    p {
        line-height: 200px;
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
