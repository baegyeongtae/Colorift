import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import {
    Article,
    ContainerDiv,
    UserInputDiv,
    TitleP,
    UserButton,
    FindPasswordModal,
    NavBackgroundDiv,
} from '../../components';
import { setScrollDisabled } from '../../utils/data/setScrollDisabled';
import { setUserLogin } from '../../utils/data/api';

export function Login() {
    // 비밀번호 찾기 모달
    const [findModal, setFindModal] = useState(false);

    // input 값을 받아오기 위한 ref
    const emailRef = useRef();
    const passwordRef = useRef();

    // 비밀번호 찾기 모달의 상태 변환 함수
    function handleToggleModal() {
        setFindModal(current => !current);
    }

    // 이메일, 비밀번호 form submit 함수
    const handleSubmit = event => {
        event.preventDefault();
        setUserLogin(emailRef.current.value, passwordRef.current.value);
    };

    useEffect(() => setScrollDisabled(findModal), [findModal]);

    return (
        <>
            <FindPasswordModal className={findModal && 'show'} clickProps={() => handleToggleModal()} />
            <NavBackgroundDiv />
            <Article height="88vh">
                <CenterContainerDiv>
                    <LoginDiv>
                        <TitleP color="#3C64B1" className="column">
                            Login
                        </TitleP>
                        <UserForm onSubmit={handleSubmit}>
                            <UserInputDiv text="Email" type="text" name="email" ref={emailRef} />
                            <UserInputDiv text="Password" type="password" name="password" ref={passwordRef} />
                            <UserButton type="submit" width="80%" height="80%" className="login_button column">
                                로그인
                            </UserButton>
                        </UserForm>
                        <p>비밀번호를 잊어버리셨나요?</p>
                        <UserButton
                            type="button"
                            width="80%"
                            height="50%"
                            className="button"
                            onClick={() => handleToggleModal()}
                        >
                            비밀번호 찾기
                        </UserButton>
                        <p>회원이 아니신가요?</p>
                        <UserButton
                            type="button"
                            width="80%"
                            height="50%"
                            className="button"
                            onClick={() => window.open('/signup', '_self')}
                        >
                            회원가입
                        </UserButton>
                    </LoginDiv>
                </CenterContainerDiv>
            </Article>
        </>
    );
}

// styled-components

export const CenterContainerDiv = styled(ContainerDiv)`
    ${({ theme }) => theme.flexStyled.flexCenter};

    height: 100%;
`;

export const LoginDiv = styled.div`
    display: grid;
    grid-template-rows: 1.5fr 2fr repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;

    .title {
        grid-column-start: 1;
        grid-column-end: 3;

        justify-self: start;

        margin: 0 0 50px 10px;
    }

    @media screen and (max-width: 420px) {
        all: unset;

        display: grid;
        grid-template-rows: 1fr 4fr repeat(4, 0.5fr);
        align-items: center;
        justify-items: start;

        font-size: 1.6rem;

        .title {
            grid-row-start: 1;
            grid-row-end: 2;

            margin: 0 0 20px 0;
        }

        .column {
            grid-column-start: 1;
            grid-column-end: 2;
        }

        .button {
            width: 100%;
            height: 100%;

            margin-bottom: 20px;
        }
    }
`;

const UserForm = styled.form`
    grid-column-start: 1;
    grid-column-end: 3;

    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;

    .login_button {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 3;
    }

    @media screen and (max-width: 420px) {
        all: unset;

        display: grid;
        grid-template-rows: repeat(2, 1fr) 2fr;
        align-items: center;
        justify-items: start;

        font-size: 1.6rem;

        .column {
            grid-column-start: 1;
            grid-column-end: 2;
        }

        .login_button {
            grid-row-start: 3;
            grid-row-end: 5;

            width: 100%;
            height: 60%;

            margin-bottom: 30px;
        }
    }
`;
