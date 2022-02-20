import styled from 'styled-components';
import { Article, ContainerDiv, UserInputDiv, TitleP, UserButton } from '../../components';

export function Login() {
    return (
        <Article height="100vh">
            <CenterContainerDiv>
                <LoginDiv>
                    <TitleP color="#3C64B1" className="title">
                        Login
                    </TitleP>
                    <UserInputDiv text="Email" />
                    <UserButton
                        type="submit"
                        width="80%"
                        height="80%"
                        className="login_button"
                        onClick={() => window.open('/', '_self')}
                    >
                        로그인
                    </UserButton>
                    <UserInputDiv text="Password" type="password" />
                    <p>비밀번호를 잊어버리셨나요?</p>
                    <UserButton
                        type="button"
                        width="80%"
                        height="50%"
                        onClick={() => window.open('/findpassword', '_self')}
                    >
                        비밀번호 찾기
                    </UserButton>
                    <p>회원이 아니신가요?</p>
                    <UserButton type="button" width="80%" height="50%" onClick={() => window.open('/signup', '_self')}>
                        회원가입
                    </UserButton>
                </LoginDiv>
            </CenterContainerDiv>
        </Article>
    );
}

// styled-components

const CenterContainerDiv = styled(ContainerDiv)`
    ${({ theme }) => theme.flexStyled.flexCenter};

    height: 100%;
`;

const LoginDiv = styled.div`
    display: grid;
    grid-template-rows: 5fr 3fr 3fr 3fr 3fr;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;

    .title {
        grid-column-start: 1;
        grid-column-end: 3;

        justify-self: start;
    }

    .login_button {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 4;
    }
`;
