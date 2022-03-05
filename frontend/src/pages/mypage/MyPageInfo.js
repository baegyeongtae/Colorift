import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { UserButton, Input, UserOutModal } from '../../components';
import { setScrollDisabled } from '../../utils/data/setScrollDisabled';

export function MyPageInfo() {
    // 회원탈퇴 모달
    const [userOutModal, setUserOutModal] = useState(false);

    // 회원탈퇴 함수
    const handleUserOut = () => {
        setUserOutModal(current => !current);
    };

    // 모달 뜬 상태에서는 스크롤 막기
    useEffect(() => setScrollDisabled(userOutModal), [userOutModal]);

    return (
        <>
            <UserOutModal
                className={userOutModal && 'show'}
                toggleClickProps={handleUserOut}
                text="정말 탈퇴하시겠습니까?"
            />
            <UserInfoDiv>
                <p className="option">아이디</p>
                <p className="id">{sessionStorage.getItem('userId')}</p>
                <p className="option">닉네임</p>
                <p className="nickname">{sessionStorage.getItem('userNickname')}</p>
                <p className="option">비밀번호 변경</p>
                <UserButton height="100%" onClick={() => alert('패스워드 변경 완료')}>
                    변경하기
                </UserButton>
                <p className="option">회원탈퇴는 신중히 결정해주세요.</p>
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
    grid-template-columns: 3fr 1fr;
    grid-row-gap: 20px;
    align-items: center;

    padding: 50px;

    .option {
        font-weight: bold;
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
