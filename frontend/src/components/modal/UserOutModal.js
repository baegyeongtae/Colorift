import styled from 'styled-components';
import { setUserOut } from '../../utils/api/service';
import { BackgroundDiv, ModalCloseIcon, SubTitleP, HomeButton } from '..';
import { ModalDiv } from './ModalDiv';

export function UserOutModal({ toggleClickProps, className, text }) {
    const handleToggleClick = () => {
        toggleClickProps();
    };

    const handleUserOut = () => {
        setUserOut();
    };

    return (
        <>
            <BackgroundDiv className={className} onClick={handleToggleClick} />
            <ModalColumnDiv className={className}>
                <SubTitleP className="text">{text}</SubTitleP>
                <ButtonDiv>
                    <HomeButton onClick={handleUserOut}>탈퇴</HomeButton>
                    <HomeButton onClick={handleToggleClick}>취소</HomeButton>
                </ButtonDiv>
                <ModalCloseIcon clickProps={handleToggleClick} />
            </ModalColumnDiv>
        </>
    );
}

// styled-components

const ModalColumnDiv = styled(ModalDiv)`
    &.show {
        ${({ theme }) => theme.flexStyled.flexColumn};
    }
`;

const ButtonDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;

    width: 80%;

    margin-top: 20px;

    @media ${({ theme }) => theme.device.mobile} {
        all: unset;

        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-row-gap: 10px;

        width: 80%;

        margin-top: 20px;
    }
`;
