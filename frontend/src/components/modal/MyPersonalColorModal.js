import styled from 'styled-components';
import { ContainerDiv, BackgroundDiv } from '..';
import { MyModalTable } from './MyModalTable';

export function MyPersonalColorModal({ toggleClickProps, className }) {
    const handleToggleClick = () => {
        toggleClickProps();
    };

    return (
        <>
            <BackgroundDiv className={className} onClick={handleToggleClick} />
            <ModalDiv className={className}>
                <MyModalTable />
            </ModalDiv>
        </>
    );
}

// styled-components

const ModalDiv = styled(ContainerDiv)`
    display: none;

    &.show {
        position: fixed;
        z-index: 9999;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 100%;
        padding: 50px 30px;

        ${({ theme }) => theme.flexStyled.flexColumn};

        background-color: white;

        ::-webkit-scrollbar {
            width: 10px;
        }

        ::-webkit-scrollbar-track {
            background-color: transparent;
            border-radius: 100px;

            margin: 20px;
        }

        ::-webkit-scrollbar-thumb {
            border-radius: 100px;
            background-color: #e9e9e9;
            box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
        }

        @media ${({ theme }) => theme.device.tablet} {
            width: 80%;
        }
    }
`;
