import styled from 'styled-components';
import { Article, UserInputDiv, TitleP, UserButton, NavBackgroundDiv } from '../../components';
import { CenterContainerDiv, LoginDiv } from '../login/Login';

export function SignUp() {
    return (
        <>
            <NavBackgroundDiv />
            <Article height="88vh">
                <CenterContainerDiv>
                    <SignUpDiv>
                        <div className="column title_div">
                            <TitleP color="#3C64B1">Sign Up</TitleP>
                            <p>가입하면 분석 결과를 저장할 수 있습니다.</p>
                        </div>
                        <UserInputDiv text="Email" />
                        <UserButton
                            type="submit"
                            width="80%"
                            height="50%"
                            className="check_button"
                            onClick={() => alert('중복 확인 완료')}
                        >
                            중복 확인
                        </UserButton>
                        <div className="column">
                            <UserInputDiv text="Password" type="password" />
                            <p className="password_rule">비밀번호는 영문/숫자/특수문자 포함 8자 이상 입력해주세요.</p>
                            <p className="password_rule password_error">비밀번호가 유효하지 않습니다.</p>
                        </div>
                        <div className="column">
                            <UserInputDiv text="Password Check" type="password" />
                            <p className="password_rule password_error">비밀번호가 일치하지 않습니다.</p>
                        </div>
                        <UserButton
                            type="button"
                            width="40%"
                            height="50%"
                            className="column button"
                            onClick={() => window.open('/', '_self')}
                        >
                            회원가입
                        </UserButton>
                    </SignUpDiv>
                </CenterContainerDiv>
            </Article>
        </>
    );
}

// styled-components

const SignUpDiv = styled(LoginDiv)`
    grid-template-rows: 1fr repeat(4, 1fr);

    .input_div {
        width: 250px;
    }

    .column {
        grid-column-start: 1;
        grid-column-end: 3;
        justify-self: start;
    }

    .title {
        margin: 0;
    }

    .title_div {
        margin-bottom: 50px;
    }

    .password_rule {
        font-size: 0.8rem;
    }

    .password_error {
        font-size: 0.7rem;
        color: red;
    }

    .button {
        justify-self: center;
    }

    @media screen and (max-width: 420px) {
        grid-template-rows: 1fr 0.8fr 0.5fr repeat(3, 1fr);
        justify-items: center;

        font-size: 1.6rem;

        .input_div {
            width: 300px;
        }

        .title_div {
            margin: 0 0 20px 0;
        }

        .column {
            grid-column-start: 1;
            grid-column-end: 2;
            justify-self: center;
        }

        .check_button {
            width: 30%;
            height: 100%;

            justify-self: end;
        }

        .button {
            width: 50%;
            height: 50%;
        }
    }
`;
