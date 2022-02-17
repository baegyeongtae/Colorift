import styled from 'styled-components';

// nav 테스트용 코드입니다.
function Home() {
    return (
        <>
            <DivOne>
                <BannerArticle>
                    <TextDiv>
                        <TitleH>
                            퍼스널 컬러를 통해
                            <br />
                            나만의 스타일을 찾아보세요.
                        </TitleH>
                    </TextDiv>
                    <ExampleImgDiv />
                </BannerArticle>
            </DivOne>
            <DivTwo />
            <DivThree />
        </>
    );
}

export { Home };

// styled-components

// 삭제 예정
const DivOne = styled.div`
    height: 100vh;

    background-color: black;
`;

const BannerArticle = styled.article`
    ${({ theme }) => theme.flexStyled.flexRow};
    justify-content: center;
    align-items: center;

    height: 50vh;

    background-image: url('./image/color.jpg');
    background-repeat: no-repeat;
    background-size: cover;
`;

const TextDiv = styled.div`
    ${({ theme }) => theme.flexStyled.flexColumn};

    width: 50vw;
`;

const ExampleImgDiv = styled.div`
    width: 300px;

    width: 50vw;
    height: 20%;

    background-color: pink;
`;

const TitleH = styled.h1`
    font-size: 30px;
    font-weight: bold;
`;

// 삭제 예정
const DivTwo = styled.div`
    height: 100vh;

    background-color: green;
`;

// 삭제 예정
const DivThree = styled.div`
    height: 100vh;

    background-color: blue;
`;
