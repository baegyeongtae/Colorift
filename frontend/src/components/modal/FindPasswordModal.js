import styled from 'styled-components';
import { BackgroundDiv, ModalCloseIcon, TitleP, UserInputDiv, UserButton } from '..';
import { ModalDiv } from './ModalDiv';

export function FindPasswordModal({ clickProps, className }) {
    const handleClick = () => {
        clickProps();
    };
    return (
        <>
            <BackgroundDiv className={className} onClick={handleClick} />
            <ModalGridDiv className={className}>
                <TitleP color="#3C64B1">
                    Change
                    <br />
                    Password
                </TitleP>
                <UserInputDiv text="가입한 ID를 입력해주세요." type="text" />
                <UserInputDiv text="가입한 닉네임을 입력해주세요." type="text" />
                <UserButton width="80%">비밀번호 변경</UserButton>
                <ModalCloseIcon clickProps={handleClick} />
            </ModalGridDiv>
        </>
    );
}

// styled-components

const ModalGridDiv = styled(ModalDiv)`
    &.show {
        display: grid;
        grid-template-rows: 1fr repeat(2, 0.5fr) 0.8fr;
        justify-items: center;

        .title {
            justify-self: start;

            margin: 20px 0;
        }

        @media ${({ theme }) => theme.device.mobile} {
            width: 80%;
        }
    }
`;
