import styled from 'styled-components';
import { BackgroundDiv } from '..';

export function FindPasswordModal({ clickProps }) {
    const handleClick = () => {
        clickProps();
    };
    return (
        <>
            <BackgroundDiv onClick={handleClick} />
            <ModalDiv>
                <p>Find Password</p>
            </ModalDiv>
        </>
    );
}

// styled-components

const ModalDiv = styled.div`
    position: fixed;
    z-index: 9999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 400px;
    height: 400px;

    background-color: white;
`;
