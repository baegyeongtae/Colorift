import styled from 'styled-components';

export function ModalCloseIcon({ clickProps }) {
    const handleClick = () => {
        clickProps();
    };
    return (
        <ModalCloseDiv onClick={handleClick}>
            <img src="./image/x-mark.svg" alt="모달 닫기 아이콘" />
        </ModalCloseDiv>
    );
}

const ModalCloseDiv = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;

    width: 30px;
    height: 30px;

    ${({ theme }) => theme.flexStyled.flexCenter};

    border-radius: 5px;

    background-color: ${({ theme }) => theme.color.darkgray};

    cursor: pointer;

    img {
        display: block;

        width: 50%;
        height: 50%;

        filter: invert(100%) sepia(49%) saturate(2%) hue-rotate(35deg) brightness(110%) contrast(101%);
    }
`;
