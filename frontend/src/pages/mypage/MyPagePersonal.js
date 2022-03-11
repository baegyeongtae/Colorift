import styled from 'styled-components';
import { useEffect, useState, useMemo, useCallback } from 'react';
import { getColorList, setDeletePersonal } from '../../utils/api/service';
import { GrayButton, MyPersonalColorModal } from '../../components';
import { setScrollDisabled } from '../../utils/data/setScrollDisabled';
import { seasonPersonal } from '../../utils/data/season';
import { getMaxSeason } from '../../utils/data/getMaxSeason';

export function MyPagePersonal() {
    // 상세보기 모달
    const [personalModal, setPersonalModal] = useState(false);

    // 유저가 선택한 퍼스널컬러의 정보
    const [personalInfo, setPersonalInfo] = useState(undefined);

    // API로 받아온 컬러 데이터 목록
    const [colorList, setColorList] = useState([]);

    // colorList를 토대로 최대값 계절 키워드로 가져오기
    // ex. ['SP', 'AU', ...]
    const maxSeason = useMemo(() => {
        const season = colorList?.map(item => {
            const result = getMaxSeason(item.spring_rate, item.summer_rate, item.autumn_rate, item.winter_rate);
            return result;
        });

        return season;
    }, [colorList]);

    // 상세보기 또는 삭제하기 클릭 시 모달 토클 함수
    const handleToggleClick = useCallback(() => {
        if (personalModal) setPersonalModal(current => !current);
    }, [personalModal]);

    // 상세보기 버튼 클릭했을 때
    const handleToggleDetailClick = useCallback(
        (id, index, season) => {
            setPersonalInfo({
                id,
                index,
                season,
            });
            setPersonalModal(current => !current);
        },
        [personalInfo, personalModal],
    );

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
    useEffect(() => {
        (async () => {
            const response = await getColorList();
            setColorList(response.data);
        })();
    }, []);

    // 모달 뜬 상태에서는 스크롤 막기
    useEffect(() => setScrollDisabled(personalModal), [personalModal]);

    // 모달이 닫힐 때 personalInfo도 초기화
    useEffect(() => !personalModal && setPersonalInfo(undefined), [personalModal]);

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
                {colorList?.length ? (
                    <table>
                        <tbody>
                            {colorList.map((item, index) => (
                                <tr key={item.id}>
                                    <td className="id">{index + 1}</td>
                                    <td className="date">{item.date}</td>
                                    <td className="color">{maxSeason && seasonPersonal[maxSeason[index]]}</td>
                                    <td className="button">
                                        <GrayButton
                                            width="90%"
                                            onClick={() =>
                                                handleToggleDetailClick(item.id, index + 1, maxSeason[index])
                                            }
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
