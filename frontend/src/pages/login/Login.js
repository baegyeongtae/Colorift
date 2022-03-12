import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ContainerDiv,
    UserInputDiv,
    TitleP,
    UserButton,
    ChangePWModal,
    NavBackgroundDiv,
    TextModal,
    Article,
} from '../../components';
import { setUserLogin } from '../../utils/api/user';
import { useNotFound } from '../../utils/hooks/useNotFound';

export function Login() {
    const navigate = useNavigate();

    // 비밀번호 찾기 모달
    const [findModal, setFindModal] = useState(false);

    // 존재하지 않는 아이디 모달
    const [noUserModal, setNoUserModal] = useState(false);

    // input 값을 받아오기 위한 ref
    const idRef = useRef();
    const passwordRef = useRef();

    // 비밀번호 찾기 모달의 상태 변환 함수
    const handlePasswordToggleModal = () => {
        setFindModal(current => !current);
    };

    // 아이디 비밀번호 오류 모달의 상태 변환 함수
    const handleNoUserToggleModal = () => {
        setNoUserModal(current => !current);
    };

    // 이메일, 비밀번호 form submit 함수
    const handleSubmit = async event => {
        event.preventDefault();
        const response = await setUserLogin(idRef.current.value, passwordRef.current.value);
        if (response.status === 200) {
            navigate('/');
        } else if (response.status === 401) setNoUserModal(true);
    };

    // 로그인 유저가 접근 시 404로 보내버리기
    useNotFound(true);

    return (
        <>
            <TextModal
                className={noUserModal && 'show'}
                toggleProps={handleNoUserToggleModal}
                text="아이디 또는 비밀번호를 잘못 입력했습니다"
            />
            <ChangePWModal className={findModal && 'show'} toggleProps={handlePasswordToggleModal} />
            <NavBackgroundDiv />
            <Article>
                <ContainerDiv>
                    <LoginDiv>
                        <TitleP color="#3C64B1" className="column">
                            Login
                        </TitleP>
                        <UserForm onSubmit={handleSubmit}>
                            <UserInputDiv text="Id" type="text" ref={idRef} />
                            <UserInputDiv text="Password" type="password" ref={passwordRef} />
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
                            onClick={handlePasswordToggleModal}
                        >
                            비밀번호 변경
                        </UserButton>
                        <p>회원이 아니신가요?</p>
                        <UserButton
                            type="button"
                            width="80%"
                            height="50%"
                            className="button"
                            onClick={() => navigate('/signup')}
                        >
                            회원가입
                        </UserButton>
                    </LoginDiv>
                </ContainerDiv>
            </Article>
        </>
    );
}

// styled-components

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
