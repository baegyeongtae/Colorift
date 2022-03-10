import styled from 'styled-components';
import { useState } from 'react';
import { UserButton, UserOutModal, MyChangePWModal, ChangeNameModal } from '../../components';

export function MyPageInfo() {
    // 회원탈퇴 모달
    const [userOutModal, setUserOutModal] = useState(false);

    // 닉네임 변경 모달
    const [changeNicknameModal, setChangeNicknameModal] = useState(false);

    // 비밀번호 변경 모달
    const [changePasswordModal, setChangePasswordModal] = useState(false);

    // 회원탈퇴 모달 토글 함수
    const handleUserOut = () => {
        setUserOutModal(current => !current);
    };

    // 닉네임 변경 모달 토글 함수
    const handleChangeNickname = () => {
        setChangeNicknameModal(current => !current);
    };

    // 비밀번호 변경 모달 토글 함수
    const handleChangePassword = () => {
        setChangePasswordModal(current => !current);
    };

    return (
        <>
            <UserOutModal
                className={userOutModal && 'show'}
                toggleProps={handleUserOut}
                text="정말 탈퇴하시겠습니까?"
            />
            <MyChangePWModal className={changePasswordModal && 'show'} toggleProps={handleChangePassword} />
            <ChangeNameModal className={changeNicknameModal && 'show'} toggleProps={handleChangeNickname} />
            <UserInfoDiv>
                <p className="option">아이디</p>
                <p className="id">{sessionStorage.getItem('userId')}</p>
                <p className="option">닉네임</p>
                <p className="nickname">{sessionStorage.getItem('userNickname')}</p>
                <UserButton height="100%" onClick={handleChangeNickname}>
                    변경하기
                </UserButton>
                <p className="option password">비밀번호 변경</p>
                <UserButton height="100%" onClick={handleChangePassword}>
                    변경하기
                </UserButton>
                <p className="option delete">회원탈퇴는 신중히 결정해주세요.</p>
                <UserButton height="100%" onClick={handleUserOut}>
                    회원탈퇴
                </UserButton>
            </UserInfoDiv>
        </>
    );
}

// styled-components

const UserInfoDiv = styled.div`
    width: 50%;

    display: grid;
    grid-template-rows: repeat(4, 30px);
    grid-template-columns: 1fr 1.5fr 1fr;
    grid-row-gap: 20px;
    align-items: center;

    padding: 50px;

    .option {
        font-weight: bold;
    }

    .id {
        grid-column-start: 2;
        grid-column-end: 4;
    }

    .password,
    .delete {
        grid-column-start: 1;
        grid-column-end: 3;
    }

    @media ${({ theme }) => theme.device.tablet} {
        width: 100%;
        padding: 30px;

        grid-row-gap: 0;

        button {
            height: 80%;

            border-radius: 5px;
        }
    }
`;
