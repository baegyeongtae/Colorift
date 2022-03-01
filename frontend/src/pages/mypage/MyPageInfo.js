import styled from 'styled-components';
import { useState } from 'react';
import { UserButton, Input, UserOutModal } from '../../components';

export function MyPageInfo() {
    // 회원탈퇴 모달
    const [userOutModal, setUserOutModal] = useState(false);

    // 회원탈퇴 함수
    const handleUserOut = () => {
        setUserOutModal(current => !current);
    };

    return (
        <>
            <UserOutModal
                className={userOutModal && 'show'}
                toggleClickProps={() => handleUserOut()}
                text="정말 탈퇴하시겠습니까?"
            />
            <UserInfoDiv>
                <p className="option">이메일</p>
                <p className="email">{sessionStorage.getItem('userEmail')}</p>
                <p className="option">비밀번호 변경</p>
                <Input type="password" width="80%" />
                <UserButton height="90%" onClick={() => alert('패스워드 변경 완료')}>
                    변경하기
                </UserButton>
                <p className="option delete">회원탈퇴는 신중히 결정해주세요.</p>
                <UserButton height="90%" onClick={handleUserOut}>
                    회원탈퇴
                </UserButton>
            </UserInfoDiv>
        </>
    );
}

// styled-components

const UserInfoDiv = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr 2fr 1fr;
    grid-row-gap: 20px;
    align-items: center;

    padding: 50px 60px;

    .option {
        font-weight: bold;
    }

    .email {
        grid-column-start: 2;
        grid-column-end: 4;
    }

    .delete {
        grid-column-start: 1;
        grid-column-end: 3;
    }

    @media ${({ theme }) => theme.device.tablet} {
        padding: 30px;

        grid-row-gap: 0;

        button {
            height: 80%;

            border-radius: 5px;
        }
    }
`;
