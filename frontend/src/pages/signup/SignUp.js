import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { setUserRegister } from '../../utils/api/user';
import { useUser } from '../../utils/hooks/useUser';
import { UserInputDiv, TitleP, UserButton, NavBackgroundDiv, TextModal, ContainerDiv, Article } from '../../components';

export function SignUp() {
    // 가입 완료 or 존재하는 아이디 모달에 들어갈 텍스트
    const [signUpSuccess, setSignUpSuccess] = useState(false);

    // 가입 완료 or 존재하는 아이디 모달
    const [regiseterModal, setRegisterModal] = useState(false);

    // 입력 값 가져오는 ref
    const { idRef, nicknameRef, passwordRef, passwordCheckRef } = useUser();

    // 정규표현식
    const pattern3 = /[ㄱ-ㅎㅏ-ㅣ가-힣]/; // 한글
    const pattern4 = /[~!@#$%<>^&*]/; // 특수문자
    const pattern5 = /\s/; // 공백

    // id 정규식 체크
    function checkRegexId(id) {
        if (id.length >= 4 && !pattern3.test(id) && !pattern4.test(id) && !pattern5.test(id)) {
            return true;
        }

        return false;
    }

    // 닉네임 체크
    function checkRegexNickname(nickname) {
        if (nickname.length >= 4 && !pattern4.test(nickname) && !pattern5.test(nickname)) {
            return true;
        }

        return false;
    }

    // 비밀번호 체크
    function checkRegexPassword(password) {
        if (password.length >= 8 && !pattern3.test(password) && !pattern5.test(password)) {
            return true;
        }

        return false;
    }

    // 정규표현식에 맞는지, 패스워드는 일치하는지 체크
    const [regexCheck, setRegexCheck] = useState({
        id: true,
        nickname: true,
        password: true,
        passwordCheck: true,
    });

    // 이메일, 비밀번호 form submit 함수
    const handleSubmit = async event => {
        event.preventDefault();
        const idTest = checkRegexId(idRef.current.value);
        const nicknameTest = checkRegexNickname(nicknameRef.current.value);
        const passwordTest = checkRegexPassword(passwordRef.current.value);
        const passwordDoubleTest = passwordRef.current.value === passwordCheckRef.current.value;
        setRegexCheck(current => ({
            ...current,
            id: idTest,
            nickname: nicknameTest,
            password: passwordTest,
            passwordCheck: passwordDoubleTest,
        }));
        if (idTest && nicknameTest && passwordTest && passwordDoubleTest) {
            const response = await setUserRegister(idRef.current.value, passwordRef.current.value);
            if (response.status === 201) {
                setSignUpSuccess(true);
            }
            if (response.status === 400) {
                setSignUpSuccess(false);
            }
            setRegisterModal(current => !current);
        }
    };

    const handleToggleModal = () => {
        setRegisterModal(current => !current);
        if (signUpSuccess) window.open('/login', '_self');
    };

    return (
        <>
            <TextModal
                className={regiseterModal && 'show'}
                toggleClickProps={() => handleToggleModal()}
                text={signUpSuccess ? '가입을 환영합니다.' : '존재하는 아이디입니다.'}
            />
            <Article>
                <NavBackgroundDiv />
                <ContainerDiv>
                    <SignUpForm onSubmit={handleSubmit}>
                        <div className="title_div">
                            <TitleP color="#3C64B1">Sign Up</TitleP>
                            <p>가입하면 분석 결과를 저장할 수 있습니다.</p>
                        </div>
                        <div>
                            <UserInputDiv text="Id" ref={idRef} />
                            <p className="rule">영문/숫자 4글자 이상 입력해주세요.</p>
                            {!regexCheck.id && <p className="error">아이디가 옳지 않습니다.</p>}
                        </div>
                        <div>
                            <UserInputDiv text="Nickname" ref={nicknameRef} />
                            <p className="rule">영문/숫자/한글 4글자 이상 입력해주세요.</p>
                            {!regexCheck.nickname && <p className="error">닉네임이 옳지 않습니다.</p>}
                        </div>
                        <div>
                            <UserInputDiv text="Password" type="password" ref={passwordRef} />
                            <p className="rule">영문/숫자 8자 이상 입력해주세요.</p>
                            {!regexCheck.password && <p className="error">비밀번호가 옳지 않습니다.</p>}
                        </div>
                        <div>
                            <UserInputDiv text="Password Check" type="password" ref={passwordCheckRef} />
                            {!regexCheck.passwordCheck && <p className="error">비밀번호가 일치하지 않습니다.</p>}
                        </div>
                        <UserButton type="submit" width="60%" height="50%" className="button">
                            회원가입
                        </UserButton>
                    </SignUpForm>
                </ContainerDiv>
            </Article>
        </>
    );
}

// styled-components

const SignUpForm = styled.form`
    display: grid;
    grid-template-rows: 1fr repeat(4, 0.9fr) 1fr;
    align-items: center;
    justify-items: center;

    .input_div {
        width: 300px;
        margin: 0;
    }

    .title {
        margin: 0;
    }

    .title_div {
        margin-bottom: 50px;
    }

    .rule {
        font-size: 0.8rem;
    }

    .error {
        font-size: 0.7rem;
        color: red;
    }

    @media screen and (max-width: 420px) {
        grid-template-rows: 1fr repeat(4, 1.2fr) 1fr;

        font-size: 1.6rem;

        .title_div {
            margin-bottom: 20px;
        }

        .button {
            width: 50%;
            height: 70%;
        }
    }
`;
