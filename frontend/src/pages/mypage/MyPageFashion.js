import styled from 'styled-components';
import { useState } from 'react';

export function MyPageFashion() {
    // 패션 사진 더미 데이터
    const fashionData = [
        {
            id: 1,
            date: '2022-02-24',
            image: 'https://colorfit.s3.ap-northeast-2.amazonaws.com/fashion/gucci.jpg',
        },
        {
            id: 2,
            date: '2022-02-24',
            image: 'https://colorfit.s3.ap-northeast-2.amazonaws.com/fashion/moncler.jpg',
        },
        {
            id: 3,
            date: '2022-02-24',
            image: 'https://colorfit.s3.ap-northeast-2.amazonaws.com/fashion/moncler_i0f6Fwi.jpg',
        },
        {
            id: 4,
            date: '2022-02-26',
            image: 'https://colorfit.s3.ap-northeast-2.amazonaws.com/fashion/gucci.jpg',
        },
        {
            id: 5,
            date: '2022-02-27',
            image: 'https://colorfit.s3.ap-northeast-2.amazonaws.com/fashion/gucci.jpg',
        },
        {
            id: 6,
            date: '2022-02-28',
            image: 'https://colorfit.s3.ap-northeast-2.amazonaws.com/fashion/gucci.jpg',
        },
        {
            id: 7,
            date: '2022-02-28',
            image: 'https://colorfit.s3.ap-northeast-2.amazonaws.com/fashion/gucci.jpg',
        },
        {
            id: 8,
            date: '2022-03-01',
            image: 'https://colorfit.s3.ap-northeast-2.amazonaws.com/fashion/gucci.jpg',
        },
        {
            id: 9,
            date: '2022-03-02',
            image: 'https://colorfit.s3.ap-northeast-2.amazonaws.com/fashion/gucci.jpg',
        },
        {
            id: 10,
            date: '2022-03-02',
            image: 'https://colorfit.s3.ap-northeast-2.amazonaws.com/fashion/gucci.jpg',
        },
    ];

    // 버튼 클릭 횟수
    const [buttonClick, setButtonClick] = useState(0);

    // 마이 패션에 보이는 사진의 최대 갯수
    const imageMaxIndex = 4 * (buttonClick + 1) < fashionData.length ? 4 * (buttonClick + 1) : fashionData.length;

    // 더보기 버튼 클릭 함수
    const handleMoreClick = () => {
        setButtonClick(current => current + 1);
    };

    return (
        <FashionDiv>
            <FasionImageDiv>
                {fashionData.slice(0, imageMaxIndex).map(item => (
                    <img key={item.id} src={item.image} alt={`패션 이미지 ${item.id}`} />
                ))}
            </FasionImageDiv>
            <PlusButton onClick={handleMoreClick}>더보기</PlusButton>
        </FashionDiv>
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

    img {
        width: 100%;
        height: 300px;

        background-color: ${({ theme }) => theme.color.lightgray};
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
