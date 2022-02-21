import styled from 'styled-components';
import { Article, ContainerDiv, UserButton, Input } from '../../components';

export function MyPage() {
    return (
        <Article marginTop="7vh" height="93vh">
            <FlexContainerDiv>
                <FlexRowDiv className="area">
                    <UserInfoDiv>
                        <p className="option">이메일</p>
                        <p className="email">admin@naver.com</p>
                        <p className="option">비밀번호 변경</p>
                        <Input type="password" width="80%" />
                        <UserButton onClick={() => alert('패스워드 변경 완료')}>변경하기</UserButton>
                        <p className="option delete">회원탈퇴는 신중히 결정해주세요.</p>
                        <UserButton onClick={() => alert('회원탈퇴 완료')}>회원탈퇴</UserButton>
                    </UserInfoDiv>
                    <PersonalDiv />
                </FlexRowDiv>
                <FassionDiv className="area" />
            </FlexContainerDiv>
        </Article>
    );
}

// styled-components

const FlexContainerDiv = styled(ContainerDiv)`
    height: 100%;

    ${({ theme }) => theme.flexStyled.flexColumn};
    ${({ theme }) => theme.flexStyled.flexCenter};

    .area {
        width: 100%;
        height: 50%;
    }
`;

const FlexRowDiv = styled.div`
    ${({ theme }) => theme.flexStyled.flexRow};

    div {
        width: 50%;
    }
`;

const UserInfoDiv = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;

    padding: 100px 60px;

    .option {
        font-weight: bold;
    }

    .email {
        grid-column-start: 2;
        grid-column-end: 4;
    }

    .delete {
        grid-column-start: 1;
        grid-column-end: 3;
    }
`;

const PersonalDiv = styled.div`
    background-color: gray;
`;

const FassionDiv = styled.div`
    background-color: green;
`;
