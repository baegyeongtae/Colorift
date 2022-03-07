import styled from 'styled-components';
import { useState } from 'react';
import { BackgroundDiv, ModalCloseIcon, UserInputDiv, UserButton } from '..';
import { ModalDiv } from './ModalDiv';
import { TextModal } from './TextModal';
import { setUserPassword } from '../../utils/api/user';
import { useUser } from '../../utils/hooks/useUser';
import { checkRegexPassword } from '../../utils/data/checkRegexUser';

export function MyChangePWModal({ toggleClickProps, className }) {
    // 비밀번호 변경 시 필요한 유저 정보
    const userId = sessionStorage.getItem('userId');
    const userNickname = sessionStorage.getItem('userNickname');

    // 입력 값 가져오는 ref
    const { passwordRef, passwordCheckRef } = useUser();

    // 비밀번호 변경 성공 및 실패 모달 띄우기
    const [changeModal, setChangeModal] = useState(false);

    // 변경할 비밀번호가 정규표현식에 맞는지, 일치하는지 체크
    const [regexCheck, setRegexCheck] = useState({
        password: true,
        passwordCheck: true,
    });

    // 모달 ON/OFF 함수
    const handleClick = () => {
        toggleClickProps();
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
            await setUserPassword(userId, userNickname, passwordRef.current.value);
            setChangeModal(true);
        }
    };

    const handleToggleModal = () => {
        setChangeModal(current => !current);
    };

    return (
        <>
            <BackgroundDiv className={className} onClick={handleClick} />
            <ModalGridDiv className={className}>
                <form onSubmit={handleSubmit}>
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
                <ModalCloseIcon toggleClickProps={handleClick} />
            </ModalGridDiv>
            <TextModal
                className={changeModal && 'show'}
                toggleClickProps={handleToggleModal}
                text="비밀번호가 변경되었습니다."
            />
        </>
    );
}

// styled-components

const ModalGridDiv = styled(ModalDiv)`
    &.show {
        form {
            display: grid;
            grid-template-rows: repeat(2, 0.8fr) 1fr;
            justify-items: center;

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
