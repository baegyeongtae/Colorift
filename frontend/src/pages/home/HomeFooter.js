import styled from 'styled-components';
import { Article, ContainerDiv, SubTitle, DescriptionP, HomeButton } from '../../components';

export function HomeFooter() {
    return (
        <Article height="700px" color="#f8f7f3">
            <FlexContainerDiv>
                <SubTitle>시작할 준비 되셨나요?</SubTitle>
                <DescriptionP>
                    퍼스널 컬러 분석과 진단을 통해
                    <br />
                    알맞는 패션으로 패피가 되어보세요!
                </DescriptionP>
                <ButtonDiv>
                    <HomeButton text="퍼스널 컬러 찾기" maxWidth="200px" width="40vw" />
                    <HomeButton text="패션 매칭하기" maxWidth="200px" width="40vw" />
                    <HomeButton text="회원가입" maxWidth="200px" width="40vw" />
                </ButtonDiv>
            </FlexContainerDiv>
        </Article>
    );
}

// styled-components

const FlexContainerDiv = styled(ContainerDiv)`
    height: 100%;

    ${({ theme }) => theme.flexStyled.flexColumn};
    ${({ theme }) => theme.flexStyled.flexCenter};
`;

const ButtonDiv = styled.div`
    ${({ theme }) => theme.flexStyled.flexRow};
    ${({ theme }) => theme.flexStyled.flexCenter};
`;
