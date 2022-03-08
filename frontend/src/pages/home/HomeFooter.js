import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BackgroundArticle, ContainerDiv, BigTextP, DescriptionP, HomeButton } from '../../components';

export const HomeFooter = React.forwardRef((props, ref) => (
    <BackgroundArticle height="500px" color="#f8f7f3">
        <FlexContainerDiv ref={ref}>
            <BigTextP>시작할 준비 되셨나요?</BigTextP>
            <DescriptionCenterP>
                퍼스널 컬러 분석과 진단을 통해
                <br />
                알맞는 패션으로 패피가 되어보세요!
            </DescriptionCenterP>
            <ButtonDiv>
                <Link to="/personalcolor">
                    <HomeButton maxWidth="200px" width="40vw">
                        퍼스널 컬러 찾기
                    </HomeButton>
                </Link>
                <Link to="/fashion">
                    <HomeButton maxWidth="200px" width="40vw">
                        패션 매칭하기
                    </HomeButton>
                </Link>
                <Link to="/signup">
                    <HomeButton maxWidth="200px" width="40vw">
                        회원가입
                    </HomeButton>
                </Link>
            </ButtonDiv>
        </FlexContainerDiv>
    </BackgroundArticle>
));

// styled-components

const FlexContainerDiv = styled(ContainerDiv)`
    opacity: 0;

    height: 100%;

    ${({ theme }) => theme.flexStyled.flexColumn};
    ${({ theme }) => theme.flexStyled.flexCenter};

    &.event {
        opacity: 1;
        transition: opacity 1.3s ease-in-out;
    }
`;

const ButtonDiv = styled.div`
    ${({ theme }) => theme.flexStyled.flexRow};
    justify-content: space-between;

    width: 60%;

    @media ${({ theme }) => theme.device.tablet} {
        ${({ theme }) => theme.flexStyled.flexColumn};
        align-items: center;

        height: 40%;
    }
`;

const DescriptionCenterP = styled(DescriptionP)`
    margin: 30px 0;
`;
