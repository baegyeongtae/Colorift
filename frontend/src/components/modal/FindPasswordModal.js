import styled from 'styled-components';
import { BackgroundDiv, ModalCloseIcon, TitleP, UserInputDiv, UserButton } from '..';

export function FindPasswordModal({ clickProps, className }) {
    const handleClick = () => {
        clickProps();
    };
    return (
        <>
            <BackgroundDiv className={className} onClick={handleClick} />
            <ModalDiv className={className}>
                <TitleP color="#3C64B1">
                    Find
                    <br />
                    Password
                </TitleP>
                <UserInputDiv text="가입한 ID(이메일)을 기입해주세요." type="email" />
                <UserButton width="150px">비밀번호 찾기</UserButton>
                <ModalCloseIcon clickProps={handleClick} />
            </ModalDiv>
        </>
    );
}

// styled-components

const ModalDiv = styled.div`
    display: none;

    &.show {
        display: initial;

        position: fixed;
        z-index: 9999;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        padding: 50px 30px;

        display: grid;
        grid-template-rows: auto;
        justify-items: center;

        width: 330px;
        height: 350px;

        background-color: white;

        .title {
            justify-self: start;
        }

        @media ${({ theme }) => theme.device.mobile} {
            width: 80%;
            height: 300px;
        }
    }
`;
