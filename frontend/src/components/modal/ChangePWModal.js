/* eslint-disable no-unused-expressions */
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlurBackgroundDiv, ModalCloseIcon, UserInputDiv, UserButton, TitleP } from '..';
import { ModalDiv } from './ModalDiv';
import { TextModal } from './TextModal';
import { setUserPassword } from '../../utils/api/user';
import { useUser } from '../../utils/hooks/useUser';
import { checkRegexPassword } from '../../utils/data/checkRegexUser';

export function ChangePWModal({ toggleProps, className }) {
    const navigate = useNavigate();

    // 입력 값 가져오는 ref
    const { idRef, nicknameRef, passwordRef, passwordCheckRef } = useUser();

    // 비밀번호 변경 성공 및 실패 여부
    const [changeSuccess, setChangeSuccess] = useState(false);

    // 비밀번호 변경 성공 및 실패 모달 띄우기
    const [changeModal, setChangeModal] = useState(false);

    // 변경할 비밀번호가 정규표현식에 맞는지, 일치하는지 체크
    const [regexCheck, setRegexCheck] = useState({
        password: true,
        passwordCheck: true,
    });

    // 모달 ON/OFF 함수
    const handleClick = () => {
        toggleProps && toggleProps();
    };

    // 변경하기 버튼 클릭 시 API 요청
    const handleSubmit = async event => {
        event.preventDefault();
        const passwordTest = checkRegexPassword(passwordRef.current.value);
        const passwordDoubleTest = passwordRef.current.value === passwordCheckRef.current.value;
        setRegexCheck(current => ({
            ...current,
            password: passwordTest,
            passwordCheck: passwordDoubleTest,
        }));
        if (passwordTest && passwordDoubleTest) {
            const response = await setUserPassword(
                idRef.current.value,
                nicknameRef.current.value,
                passwordRef.current.value,
            );

            if (response.status === 200) {
                setChangeSuccess(true);
            }
            if (response.status === 400) {
                setChangeSuccess(false);
            }
            setChangeModal(true);
        }
    };

    const handleToggleModal = () => {
        setChangeModal(current => !current);
        if (changeSuccess) navigate('/login');
    };

    return (
        <>
            <BlurBackgroundDiv className={className} onClick={handleClick} />
            <ModalGridDiv className={className}>
                <form onSubmit={handleSubmit}>
                    <TitleP color="#3C64B1">
                        Change
                        <br />
                        Password
                    </TitleP>
                    <UserInputDiv text="가입한 ID를 입력해주세요." type="text" ref={idRef} />
                    <UserInputDiv text="가입한 닉네임을 입력해주세요." type="text" ref={nicknameRef} />
                    <div>
                        <UserInputDiv text="변경할 비밀번호를 입력해주세요." type="password" ref={passwordRef} />
                        {!regexCheck.password && <p className="error">비밀번호는 공백 없이 8자 이상입니다.</p>}
                    </div>
                    <div>
                        <UserInputDiv text="비밀번호를 한번 더 입력해주세요." type="password" ref={passwordCheckRef} />
                        {!regexCheck.passwordCheck && <p className="error">비밀번호가 일치하지 않습니다.</p>}
                    </div>
                    <UserButton width="80%" className="button" type="submit">
                        비밀번호 변경
                    </UserButton>
                </form>
                <ModalCloseIcon toggleProps={handleClick} />
            </ModalGridDiv>
            <TextModal
                className={changeModal && 'show'}
                toggleProps={handleToggleModal}
                text={
                    changeSuccess ? (
                        <>
                            비밀번호가 변경되었습니다.
                            <br />
                            변경된 비밀번호로 접속해주세요.
                        </>
                    ) : (
                        <>
                            존재하지 않는 유저입니다.
                            <br />
                            입력하신 정보를 다시 확인해주세요.
                        </>
                    )
                }
            />
        </>
    );
}

// styled-components

const ModalGridDiv = styled(ModalDiv)`
    &.show {
        ${({ theme }) => theme.flexStyled.flexColumn};

        form {
            display: grid;
            grid-template-rows: 1fr repeat(4, 0.6fr) 0.8fr;
            justify-items: center;

            .title {
                justify-self: start;

                margin-bottom: 20px;
            }

            div .error {
                font-size: 0.7rem;
                color: red;
            }

            .button {
                align-self: end;
            }
        }

        @media ${({ theme }) => theme.device.mobile} {
            width: 80%;
        }
    }
`;
