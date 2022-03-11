/* eslint-disable no-unused-expressions */
import styled from 'styled-components';
import { useState } from 'react';
import { BlurBackgroundDiv, ModalCloseIcon, UserInputDiv, UserButton } from '..';
import { ModalDiv } from './ModalDiv';
import { TextModal } from './TextModal';
import { setUserNickname } from '../../utils/api/service';
import { useUser } from '../../utils/hooks/useUser';
import { checkRegexNickname } from '../../utils/data/checkRegexUser';

export function ChangeNameModal({ toggleProps, className }) {
    // 입력 값 가져오는 ref
    const { nicknameRef } = useUser();

    // 비밀번호 변경 성공 모달 띄우기
    const [changeModal, setChangeModal] = useState(false);

    // 변경할 닉네임이 정규표현식에 맞는지 체크
    const [regexCheck, setRegexCheck] = useState(true);

    // 모달 ON/OFF 함수
    const handleToggleClick = () => {
        toggleProps && toggleProps();
    };

    // 변경하기 버튼 클릭 시 API 요청
    const handleSubmit = async event => {
        event.preventDefault();
        const nicknameTest = checkRegexNickname(nicknameRef.current.value);
        if (nicknameTest) {
            const response = await setUserNickname(nicknameRef.current.value);
            if (response.status === 200) {
                sessionStorage.setItem('userNickname', nicknameRef.current.value);
                setChangeModal(true);
                setTimeout(() => {
                    setChangeModal(false);
                    handleToggleClick();
                }, 2000);
            }
        } else {
            setRegexCheck(false);
        }
    };

    const handleToggleModal = () => {
        setChangeModal(current => !current);
    };

    return (
        <>
            <BlurBackgroundDiv className={className} onClick={handleToggleClick} />
            <ModalGridDiv className={className}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <UserInputDiv text="변경할 닉네임을 입력해주세요." type="text" ref={nicknameRef} />
                        {!regexCheck && <p className="error">영문/숫자/한글 4글자 이상 입력해주세요.</p>}
                    </div>
                    <UserButton width="80%" className="button" type="submit">
                        닉네임 변경
                    </UserButton>
                </form>
                <ModalCloseIcon toggleProps={handleToggleClick} />
            </ModalGridDiv>
            {changeModal && (
                <TextModal
                    className={changeModal && 'show'}
                    toggleProps={handleToggleModal}
                    text="닉네임이 변경되었습니다."
                />
            )}
        </>
    );
}

// styled-components

const ModalGridDiv = styled(ModalDiv)`
    &.show {
        form {
            display: grid;
            grid-template-rows: repeat(2, 1fr);
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
