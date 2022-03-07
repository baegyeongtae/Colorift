import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyStyleModal, GrayButton } from '../../components';
import { setScrollDisabled } from '../../utils/data/setScrollDisabled';
import { getFashionList, setDeleteFashion } from '../../utils/api/service';

export function MyPageFashion() {
    const navigate = useNavigate();

    // 상세보기 모달
    const [fashionModal, setFashionModal] = useState(false);

    // 상세보기 모달에서 선택한 컬러 ID 값
    const [colorId, setColorId] = useState(0);

    // API로 받아온 패션 데이터 목록
    const [fashionList, setFashionList] = useState([]);

    // 버튼 클릭 횟수
    const [buttonClick, setButtonClick] = useState(0);

    // 마이 패션에 보이는 사진의 최대 갯수
    const imageMaxIndex = 4 * (buttonClick + 1) < fashionList?.length ? 4 * (buttonClick + 1) : fashionList?.length;

    // 더보기 버튼 클릭 함수
    const handleMoreClick = () => {
        setButtonClick(current => current + 1);
    };
    // 사진 이미지 클릭 했을 때
    const handleToggleDetailClick = (id = colorId) => {
        setColorId(id);
        setFashionModal(current => !current);
    };

    // 상세보기 모달 토클 함수
    const handleToggleClick = () => {
        if (fashionModal) setFashionModal(current => !current);
    };

    // 삭제하기 버튼 클릭 시 함수
    async function handleDeleteClick(id, index) {
        const result = window.confirm('정말 삭제하시겠습니까?');
        if (result) {
            const response = await setDeleteFashion(id);
            if (response.status === 204) {
                window.open('/mypage', '_self');
                // setFashionList(current => {
                //     const newCurrent = current;
                //     newCurrent.splice(index, 1);
                //     return newCurrent;
                // });
            }
        }
    }

    // 패션 목록 API 요청
    useEffect(async () => {
        const response = await getFashionList();
        setFashionList(response.data);
    }, []);

    // 모달 뜬 상태에서는 스크롤 막기
    useEffect(() => setScrollDisabled(fashionModal), [fashionModal]);

    return (
        <>
            {fashionModal && (
                <MyStyleModal className={fashionModal && 'show'} toggleProps={handleToggleClick} colorId={colorId} />
            )}
            <FashionDiv>
                <FasionImageDiv>
                    {fashionList?.slice(0, imageMaxIndex + 1)?.map((item, index) => (
                        <div key={item.id}>
                            <GrayButton width="70px" onClick={() => handleDeleteClick(item.id, index)}>
                                삭제하기
                            </GrayButton>
                            <input
                                type="image"
                                src={item.image}
                                alt={`패션 이미지 ${item.id}`}
                                onClick={() => handleToggleDetailClick(item.id)}
                            />
                        </div>
                    ))}
                </FasionImageDiv>
                {fashionList?.length === 0 ? (
                    <p>매칭한 패션이 없습니다.</p>
                ) : (
                    <PlusButton disabled={4 * (buttonClick + 1) >= fashionList?.length} onClick={handleMoreClick}>
                        더보기
                    </PlusButton>
                )}
            </FashionDiv>
        </>
    );
}

// styled-components

const FashionDiv = styled.div`
    ${({ theme }) => theme.flexStyled.flexColumn};
    ${({ theme }) => theme.flexStyled.flexCenter};

    width: 100%;
`;

const FasionImageDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    justify-items: center;
    align-items: center;
    column-gap: 10px;
    row-gap: 10px;

    width: 100%;

    margin-top: 10px;

    div {
        position: relative;
    }

    button {
        position: absolute;
        top: 10px;
        right: 10px;
    }

    input {
        width: 100%;
        height: 300px;

        background-color: ${({ theme }) => theme.color.lightgray};

        cursor: pointer;
    }

    @media ${({ theme }) => theme.device.tablet} {
        grid: unset;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        row-gap: 10px;
    }
`;

const PlusButton = styled.button`
    width: 150px;
    height: 50px;

    margin: 30px 0 100px 0;

    color: white;
    text-align: center;
    font-weight: bold;

    border-radius: 100px;

    background-color: ${({ theme }) => theme.color.blue};

    cursor: pointer;
`;
