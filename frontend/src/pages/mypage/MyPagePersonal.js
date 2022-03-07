import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getColorList, setDeletePersonal } from '../../utils/api/service';
import { GrayButton, MyPersonalColorModal } from '../../components';
import { setScrollDisabled } from '../../utils/data/setScrollDisabled';
import { seasonPersonal } from '../../utils/data/season';

export function MyPagePersonal() {
    // 상세보기 모달
    const [personalModal, setPersonalModal] = useState(false);

    // 상세보기 모달에서 선택한 컬러 ID 값
    const [colorId, setColorId] = useState(0);

    // API로 받아온 컬러 데이터 목록
    const [colorList, setColorList] = useState([]);

    // 상세보기 또는 삭제하기 클릭 시 모달 토클 함수
    const handleToggleClick = () => {
        if (personalModal) setPersonalModal(current => !current);
    };

    // 상세보기 버튼 클릭했을 때
    const handleToggleDetailClick = (id = colorId) => {
        setColorId(id);
        setPersonalModal(current => !current);
    };

    // 삭제하기 버튼 클릭 시 함수
    async function handleDeleteClick(id) {
        const result = window.confirm('정말 삭제하시겠습니까?');
        if (result) {
            const response = await setDeletePersonal(id);
            if (response.status === 204) {
                window.open('/mypage', '_self');
            }
        }
    }

    // 모달 뜬 상태에서는 스크롤 막기
    useEffect(() => setScrollDisabled(personalModal), [personalModal]);

    // 컬러 목록 API 요청
    useEffect(async () => {
        const response = await getColorList();
        setColorList(response.data);
    }, []);

    return (
        <>
            {personalModal && (
                <MyPersonalColorModal
                    className={personalModal && 'show'}
                    toggleProps={handleToggleClick}
                    colorId={colorId}
                />
            )}
            <PersonalTableDiv className="personal">
                {colorList.length !== 0 ? (
                    <table>
                        <tbody>
                            {colorList?.map((item, index) => (
                                <tr key={item.id}>
                                    <td className="id">{index + 1}</td>
                                    <td className="date">{item.date}</td>
                                    <td className="color">{seasonPersonal[item.color]}</td>
                                    <td className="button">
                                        <GrayButton width="90%" onClick={() => handleToggleDetailClick(item.id)}>
                                            상세보기
                                        </GrayButton>
                                    </td>
                                    <td className="button">
                                        <GrayButton width="90%" onClick={() => handleDeleteClick(item.id)}>
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
