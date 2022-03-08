import styled from 'styled-components';

function BestWorstLi() {
    return (
        <>
            <TextH3>BEST</TextH3>
            <TextH2>
                <ul>
                    <li>· 크고 뚜렷한 사진</li>
                    <li>· 적절한 밝기에서 촬영한 사진</li>
                    <li>· 배경이 없는 깔끔한 사진</li>
                </ul>
            </TextH2>
            <TextH3>WORST</TextH3>
            <TextH2>
                <ul>
                    <li>· 그림자 지거나 흐릿한 사진</li>
                    <li>· 너무 밝거나 너무 어두운 곳에서 촬영한 사진</li>
                    <li>· 너무 작은 사진</li>
                </ul>
            </TextH2>
        </>
    );
}

export { BestWorstLi };

const TextH2 = styled.h2`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.mobiletext};
        margin-top: 5px;
        align-items: left;
        color: ${({ theme }) => theme.color.darkgray};

        li {
            list-style: none;
        }
    }
    li {
        list-style: none;
    }

    align-items: left;
    font-weight: bold;
    font-size: 1rem;
    color: ${({ theme }) => theme.color.darkgray};
`;

const TextH3 = styled.h3`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.smalltext};
        margin-top: 10px;
        font-weight: bold;
        align-items: left;
        color: ${({ theme }) => theme.color.darkgray};
    }

    align-items: left;
    margin-top: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.darkgray};
`;
