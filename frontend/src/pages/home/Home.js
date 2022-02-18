import styled from 'styled-components';
import { useScrollToTop } from '../../utils/hooks/useScrollToTop';
import { ContainerDiv, HomeButton } from '../../components';

// nav 테스트용 코드입니다.
function Home() {
    useScrollToTop();

    return (
        <>
            <DivOne>
                <BannerArticle>
                    <BannerContainerDiv>
                        <TextDiv>
                            <TitleH>
                                퍼스널 컬러를 통해
                                <br />
                                나만의 스타일을 찾아보세요.
                            </TitleH>
                            <SubTitleP>
                                AI 알고리즘으로 정확한 분석을 통해 본인의 피부톤을 이해하고
                                <br />
                                가장 잘 맞는 퍼스널 컬러를 추천해드립니다.
                                <br />
                                또한, 퍼스널 컬러와 패션 아이템의 조화로움을 알려드립니다.
                            </SubTitleP>
                            <ButtonDiv>
                                <HomeButton text="퍼스널 컬러 찾기" />
                                <HomeButton text="패션 매칭하기" />
                            </ButtonDiv>
                        </TextDiv>
                        <ExampleImgDiv />
                    </BannerContainerDiv>
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
    height: 55vh;

    background-image: url('./image/color.jpg');
    background-repeat: no-repeat;
    background-size: cover;
`;

const BannerContainerDiv = styled(ContainerDiv)`
    display: grid;
    grid-template-columns: 1fr 1fr;

    height: 100%;

    @media ${({ theme }) => theme.device.mobile} {
        grid-template-rows: 1fr 1fr 1fr;
    }
`;

const TextDiv = styled.div`
    ${({ theme }) => theme.flexStyled.flexColumn};
    justify-content: center;

    width: 100%;
`;

const ExampleImgDiv = styled.div`
    ${({ theme }) => theme.flexStyled.flexCenter};
`;

const TitleH = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.title};
    font-weight: bold;
    color: white;
`;

const SubTitleP = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.mediumtext};
    color: #a4b2b6;

    margin: 1vw 0;
`;

const ButtonDiv = styled.div`
    display: grid;
    grid-template-columns: 210px auto;
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
