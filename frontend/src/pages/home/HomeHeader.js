import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HomeContainerDiv, HomeButton, TitleP } from '../../components';
import { browserImg, colorBackgroundImg } from '../../image';

export const HomeHeader = React.forwardRef((props, ref) => (
    <Header>
        <HeaderContainerDiv ref={ref}>
            <TextDiv>
                <TitleP color="white">
                    퍼스널 컬러를 통해
                    <br />
                    나만의 스타일을 찾아보세요.
                </TitleP>
                <SubTitleP>
                    AI 알고리즘으로 정확한 분석을 통해 본인의 피부톤을 이해하고
                    <br />
                    가장 잘 맞는 퍼스널 컬러를 추천해드립니다.
                    <br />
                    또한, 퍼스널 컬러와 패션 아이템의 조화로움을 알려드립니다.
                </SubTitleP>
                <ButtonDiv>
                    <Link to="/personalcolor">
                        <HomeButton maxWidth="200px" width="45vw">
                            퍼스널 컬러 찾기
                        </HomeButton>
                    </Link>
                    <Link to="/fashion">
                        <HomeButton maxWidth="200px" width="45vw">
                            패션 매칭하기
                        </HomeButton>
                    </Link>
                </ButtonDiv>
            </TextDiv>
            <ExampleImgDiv>
                <img src={browserImg} alt="샘플 이미지" />
            </ExampleImgDiv>
        </HeaderContainerDiv>
    </Header>
));

// styled-components

const HeaderContainerDiv = styled(HomeContainerDiv)`
    @media ${({ theme }) => theme.device.tablet} {
        div:nth-child(1) {
            order: 2;
        }

        div:nth-child(2) {
            order: 1;
        }
    }
`;

const Header = styled.header`
    background-image: url(${colorBackgroundImg});
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
    img {
        width: 100%;
    }

    @media ${({ theme }) => theme.device.tablet} {
        padding: 0 30px;
    }
`;

const SubTitleP = styled.p`
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
        grid-template-columns: 1.1fr 1fr;
        justify-items: left;
    }
`;
