import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Article, ContainerDiv, UserInputDiv, TitleP, UserButton, FindPasswordModal } from '../../components';
import { setScrollDisabled } from '../../utils/data/setScrollDisabled';

export function Login() {
    // 로그인 더미 데이터
    const dummyUser = {
        email: 'admin@naver.com',
        password: '123456789a!',
    };

    const [findModal, setFindModal] = useState(false);

    function handleToggleModal() {
        setFindModal(current => !current);
    }

    useEffect(() => setScrollDisabled(findModal), [findModal]);

    return (
        <>
            {findModal && <FindPasswordModal clickProps={() => handleToggleModal()} />}
            <Article height="100vh">
                <CenterContainerDiv>
                    <LoginDiv>
                        <TitleP color="#3C64B1" className="column">
                            Login
                        </TitleP>
                        <UserInputDiv text="Email" type="email" />
                        <UserInputDiv text="Password" type="password" />
                        <UserButton
                            type="submit"
                            width="80%"
                            height="80%"
                            className="login_button column"
                            onClick={() => window.open('/', '_self')}
                        >
                            로그인
                        </UserButton>

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
    grid-template-rows: 1.5fr repeat(4, 1fr);
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;

    .title {
        grid-column-start: 1;
        grid-column-end: 3;

        justify-self: start;

        margin: 0 0 50px 10px;
    }

    .login_button {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 4;
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

            margin: 0 0 20px 0;
        }

        .column {
            grid-column-start: 1;
            grid-column-end: 2;
        }

        .login_button {
            grid-row-start: 4;
            grid-row-end: 5;

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
