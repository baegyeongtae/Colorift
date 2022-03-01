import styled from 'styled-components';
import { BackgroundDiv, ModalCloseIcon, SubTitleP } from '..';

export function NoUserModal({ clickProps, className }) {
    const handleClick = () => {
        clickProps();
    };

    return (
        <>
            <BackgroundDiv className={className} onClick={handleClick} />
            <ModalDiv className={className}>
                <SubTitleP className="text">존재하지 않는 아이디입니다.</SubTitleP>
                <ModalCloseIcon clickProps={handleClick} />
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

            width: 80%;
        }
    }
`;
