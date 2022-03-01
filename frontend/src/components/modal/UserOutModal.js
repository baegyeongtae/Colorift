import styled from 'styled-components';
import { setUserOut } from '../../utils/api/service';
import { BackgroundDiv, ModalCloseIcon, SubTitleP, HomeButton } from '..';

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
            <ModalDiv className={className}>
                <SubTitleP className="text">{text}</SubTitleP>
                <ButtonDiv>
                    <HomeButton onClick={handleUserOut}>탈퇴</HomeButton>
                    <HomeButton onClick={handleToggleClick}>취소</HomeButton>
                </ButtonDiv>
                <ModalCloseIcon clickProps={handleToggleClick} />
            </ModalDiv>
        </>
    );
}

// styled-components

const ModalDiv = styled.div`
    display: none;

    &.show {
        position: fixed;
        z-index: 9999;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        padding: 50px 30px;

        ${({ theme }) => theme.flexStyled.flexColumn};
        ${({ theme }) => theme.flexStyled.flexCenter};

        width: 550px;
        height: 300px;

        background-color: white;

        .text {
            margin: 0;
        }

        @media ${({ theme }) => theme.device.tablet} {
            .text {
                font-size: 1.5rem;
            }

            width: 70%;
        }
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
