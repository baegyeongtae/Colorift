import styled from 'styled-components';
import { useRef, useState } from 'react';
import { setUserRegister } from '../../utils/api/user';
import { UserInputDiv, TitleP, UserButton, NavBackgroundDiv, TextModal, ContainerDiv, Article } from '../../components';

export function SignUp() {
    // 가입 완료 모달
    const [regiseterModal, setRegisterModal] = useState(false);

    // 입력 값 가져오는 ref
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordCheckRef = useRef();

    // 정규표현식
    const emailRegex = /^([\w._-])*[a-zA-Z0-9]+([\w._-])*([a-zA-Z0-9])+([\w._-])+@([a-zA-Z0-9]+.)+[a-zA-Z0-9]{2,8}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    // 정규표현식에 맞는지, 패스워드는 일치하는지 체크
    const [regexCheck, setRegexCheck] = useState({
        email: true,
        password: true,
        passwordCheck: true,
    });

    // 이메일, 비밀번호 form submit 함수
    const handleSubmit = async event => {
        event.preventDefault();
        const emailTest = emailRegex.test(emailRef.current.value);
        const passwordTest = passwordRegex.test(passwordRef.current.value);
        const passwordDoubleTest = passwordRef.current.value === passwordCheckRef.current.value;
        setRegexCheck(current => ({
            ...current,
            email: emailTest,
            password: passwordTest,
            passwordCheck: passwordDoubleTest,
        }));
        if (emailTest && passwordTest && passwordDoubleTest) {
            const response = await setUserRegister(emailRef.current.value, passwordRef.current.value);
            if (response.status === 201) setRegisterModal(current => !current);
        }
    };

    const handleToggleModal = () => {
        setRegisterModal(current => !current);
        window.open('/login', '_self');
    };

    return (
        <>
            <TextModal
                className={regiseterModal && 'show'}
                toggleClickProps={() => handleToggleModal()}
                text="가입을 환영합니다."
            />
            <Article>
                <NavBackgroundDiv />
                <ContainerDiv>
                    <SignUpForm onSubmit={handleSubmit}>
                        <div className="column title_div">
                            <TitleP color="#3C64B1">Sign Up</TitleP>
                            <p>가입하면 분석 결과를 저장할 수 있습니다.</p>
                        </div>
                        <div>
                            <UserInputDiv text="Email" ref={emailRef} />
                            {!regexCheck.email && <p className="error">이메일 주소를 입력해주세요.</p>}
                        </div>
                        <div className="column">
                            <UserInputDiv text="Password" type="password" ref={passwordRef} />
                            <p className="password_rule">영문/숫자 포함 8자 이상 입력해주세요.</p>
                            {!regexCheck.password && <p className="error">비밀번호가 유효하지 않습니다.</p>}
                        </div>
                        <div className="column">
                            <UserInputDiv text="Password Check" type="password" ref={passwordCheckRef} />
                            {!regexCheck.passwordCheck && <p className="error">비밀번호가 일치하지 않습니다.</p>}
                        </div>
                        <UserButton type="submit" width="40%" height="50%" className="column button">
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
    grid-template-rows: repeat(5, 1fr);
    align-items: center;
    justify-items: center;

    .input_div {
        width: 250px;
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

    .error {
        font-size: 0.7rem;
        color: red;
    }

    .button {
        justify-self: center;
    }

    @media screen and (max-width: 420px) {
        all: unset;

        display: grid;
        grid-template-rows: 1fr 0.8fr 0.5fr repeat(3, 1fr);
        align-items: center;
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
