import styled from 'styled-components';
import { Article, ContainerDiv, UserInputDiv, TitleP, UserButton } from '../../components';

export function SignUp() {
    return (
        <Article height="100vh">
            <CenterContainerDiv>
                <LoginDiv>
                    <div className="row title">
                        <TitleP color="#3C64B1">Sign Up</TitleP>
                        <p>가입하면 분석 결과를 저장할 수 있습니다.</p>
                    </div>
                    <div>
                        <UserInputDiv text="Email" />
                    </div>
                    <UserButton
                        type="submit"
                        width="80%"
                        height="50%"
                        className="login_button"
                        onClick={() => alert('중복 확인 완료')}
                    >
                        중복 확인
                    </UserButton>
                    <div className="row">
                        <UserInputDiv text="Password" type="password" />
                        <p className="password_rule">비밀번호는 영문/숫자/특수문자 포함 8자 이상 입력해주세요.</p>
                        <p className="password_rule password_error">비밀번호가 유효하지 않습니다.</p>
                    </div>
                    <div className="row">
                        <UserInputDiv text="Password Check" type="password" />
                        <p className="password_rule password_error">비밀번호가 일치하지 않습니다.</p>
                    </div>
                    <UserButton
                        type="button"
                        width="40%"
                        height="50%"
                        className="row button"
                        onClick={() => window.open('/', '_self')}
                    >
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
    grid-template-rows: 1.3fr repeat(4, 1fr);
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;

    .row {
        grid-column-start: 1;
        grid-column-end: 3;
        justify-self: start;
    }

    .title {
        margin: 0 0 50px 10px;

        @media screen and (max-width: 420px) {
            margin: 0 0 20px 0;
        }
    }

    .password_rule {
        margin-left: 10px;
    }

    .password_error {
        font-size: 0.7rem;
        color: red;
    }

    .button {
        justify-self: center;
    }

    @media screen and (max-width: 420px) {
        all: unset;

        display: grid;
        grid-template-rows: repeat(3, 1fr) 2fr repeat(4, 0.5fr);
        align-items: center;
        justify-items: start;

        font-size: 1.6rem;

        .title {
            grid-row-start: 1;
            grid-row-end: 2;
            grid-column-start: 1;
            grid-column-end: 2;
        }

        .login_button {
            grid-row-start: 4;
            grid-row-end: 5;
            grid-column-start: 1;
            grid-column-end: 2;

            width: 100%;
            height: 60%;

            margin-bottom: 30px;
        }

        .button {
            width: 100%;
            height: 100%;

            margin-bottom: 20px;
        }
    }
`;
