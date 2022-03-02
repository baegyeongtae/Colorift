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
                    Find
                    <br />
                    Password
                </TitleP>
                <UserInputDiv text="가입한 ID(이메일)을 기입해주세요." type="email" />
                <UserButton width="150px">비밀번호 찾기</UserButton>
                <ModalCloseIcon clickProps={handleClick} />
            </ModalGridDiv>
        </>
    );
}

// styled-components

const ModalGridDiv = styled(ModalDiv)`
    &.show {
        display: grid;
        grid-template-rows: auto;
        justify-items: center;

        width: 330px;
        height: 350px;

        .title {
            justify-self: start;
        }

        @media ${({ theme }) => theme.device.mobile} {
            width: 80%;
            height: 300px;
        }
    }
`;
