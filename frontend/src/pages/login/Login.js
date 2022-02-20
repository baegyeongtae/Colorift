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
                        width="80%"
                        height="100%"
                        type="button"
                        className="login_button"
                        onClick={() => window.open('/')}
                    >
                        로그인
                    </UserButton>
                    <UserInputDiv text="Password" />
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
    grid-template-rows: repeat(5, 1fr);
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
