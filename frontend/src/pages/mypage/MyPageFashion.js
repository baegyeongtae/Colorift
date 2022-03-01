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
    ];

    // 마이 패션에 보이는 사진의 갯수
    const [imageMaxLength, setImageMaxLength] = useState(4);

    return (
        <FashionDiv>
            <FasionImageDiv>
                {fashionData.map(item => (
                    <img key={item.id} src={item.image} alt={`패션 이미지 ${item.id}`} />
                ))}
            </FasionImageDiv>
            <PlusButton>더보기</PlusButton>
        </FashionDiv>
    );
}

// styled-components

const FashionDiv = styled.div`
    ${({ theme }) => theme.flexStyled.flexColumn};
    ${({ theme }) => theme.flexStyled.flexCenter};
`;

const FasionImageDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    justify-items: center;
    align-items: center;
    column-gap: 10px;
    row-gap: 10px;

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

        img {
            height: 200px;
        }
    }
`;

const PlusButton = styled.button`
    width: 150px;
    height: 50px;

    margin-top: 30px;

    color: white;
    text-align: center;
    font-weight: bold;

    border-radius: 100px;

    background-color: ${({ theme }) => theme.color.blue};

    cursor: pointer;
`;
