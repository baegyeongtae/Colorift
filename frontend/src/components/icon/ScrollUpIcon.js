import styled from 'styled-components';
import { arrowIcon } from '../../image';

export function ScrollUpIcon() {
    const handleUpScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <ScrollUpDiv onClick={handleUpScroll}>
            <img src={arrowIcon} alt="스크롤 업 화살표" />
        </ScrollUpDiv>
    );
}

// styled-components

const ScrollUpDiv = styled.div`
    position: fixed;
    right: 30px;
    bottom: 70px;
    z-index: 9;

    width: 50px;
    height: 50px;

    text-align: center;
    line-height: 60px;

    border-radius: 10px;

    background-color: ${({ theme }) => theme.color.darkgray};

    cursor: pointer;

    img {
        filter: invert(100%) sepia(49%) saturate(2%) hue-rotate(35deg) brightness(110%) contrast(101%);
    }
`;
