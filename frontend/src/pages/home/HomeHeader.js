import styled from 'styled-components';
import { HomeContainerDiv, HomeButton } from '../../components';

export function HomeHeader() {
    return (
        <Header>
            <HomeContainerDiv>
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
                        <HomeButton text="퍼스널 컬러 찾기" maxWidth="200px" width="45vw" />
                        <HomeButton text="패션 매칭하기" maxWidth="200px" width="45vw" />
                    </ButtonDiv>
                </TextDiv>
                <ExampleImgDiv>
                    <img src="./image/browser.png" alt="샘플 이미지" />
                </ExampleImgDiv>
            </HomeContainerDiv>
        </Header>
    );
}

// styled-components

const Header = styled.header`
    height: 600px;

    background-image: url('./image/color.jpg');
    background-repeat: no-repeat;
    background-size: cover;
`;

const TextDiv = styled.div`
    ${({ theme }) => theme.flexStyled.flexColumn};
    justify-content: center;

    width: 100%;

    @media ${({ theme }) => theme.device.tablet} {
        align-items: center;

        text-align: center;
    }
`;

const ExampleImgDiv = styled.div`
    ${({ theme }) => theme.flexStyled.flexCenter};

    @media ${({ theme }) => theme.device.laptop} {
        width: 100%;

        margin: 30px 0;

        img {
            width: 90vw;
        }
    }
`;

const TitleH = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.title};
    font-weight: bold;
    color: white;
`;

const SubTitleP = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.mediumtext};
    color: #a4b2b6;

    margin: 2vh 0;

    @media ${({ theme }) => theme.device.tablet} {
        margin: 3vh 0;
    }
`;

const ButtonDiv = styled.div`
    display: grid;
    grid-template-columns: 210px auto;

    @media ${({ theme }) => theme.device.tablet} {
        grid-template-columns: 47vw auto;
        justify-content: center;
    }
`;
