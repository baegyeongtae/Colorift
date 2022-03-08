import styled, { keyframes } from 'styled-components';
import { useState } from 'react';
import { ContainerDiv, NavBackgroundDiv, Article } from '../../components';
import { arrowIcon } from '../../image';

export function GameStart({ image, nextPage }) {
    // 현재 선택된 체크박스
    const [select, setSelect] = useState('');

    // 체크박스 클릭 시 함수
    const handleLabelClick = event => {
        setSelect(event.target.value);
    };

    // 정답보기 클릭 시 함수
    const handleResultClick = () => {
        nextPage && select && nextPage(select);
    };

    return (
        <>
            <NavBackgroundDiv />
            <GameArticle>
                <GameContainerDiv>
                    <p>
                        나는야 퍼스널 컬러 전문가!
                        <br />
                        연예인의 퍼스널 컬러를 맞춰보세요 😀
                    </p>
                    <ImageDiv>{image && <img src={image?.src} alt={`${image?.name} 이미지`} />}</ImageDiv>
                    <CheckDiv>
                        <ColorLabel className={select === 'SP' && 'spring'}>
                            <input type="radio" name="check" value="SP" onClick={handleLabelClick} />봄 웜톤
                        </ColorLabel>
                        <ColorLabel className={select === 'SU' && 'summer'}>
                            <input type="radio" name="check" value="SU" onClick={handleLabelClick} />
                            여름 쿨톤
                        </ColorLabel>
                        <ColorLabel className={select === 'AU' && 'autumn'}>
                            <input type="radio" name="check" value="AU" onClick={handleLabelClick} />
                            가을 웜톤
                        </ColorLabel>
                        <ColorLabel className={select === 'WI' && 'winter'}>
                            <input type="radio" name="check" value="WI" onClick={handleLabelClick} />
                            겨울 쿨톤
                        </ColorLabel>
                    </CheckDiv>
                    <ArrowDiv onClick={handleResultClick}>
                        <p>정답보기</p>
                        <img src={arrowIcon} alt="오른쪽 슬라이드 화살표" className="arrow right" />
                    </ArrowDiv>
                </GameContainerDiv>
            </GameArticle>
        </>
    );
}

// styled-components

export const GameArticle = styled(Article)`
    @media ${({ theme }) => theme.device.tablet} {
        position: relative;

        height: auto;
    }
`;

export const GameContainerDiv = styled(ContainerDiv)`
    width: 100%;

    ${({ theme }) => theme.flexStyled.flexColumn};
    ${({ theme }) => theme.flexStyled.flexCenter};

    p {
        font-size: ${({ theme }) => theme.fontSizes.bigtext};
        font-weight: bold;
        text-align: center;
    }

    @media ${({ theme }) => theme.device.tablet} {
        padding-top: 5vh;
    }
`;

export const ImageDiv = styled.div`
    margin: 5vh 0;

    img {
        height: 50vh;
    }

    @media screen and (max-width: 360px) {
        width: 90%;
        img {
            width: 100%;
            height: auto;
        }
    }
`;

export const CheckDiv = styled.div`
    height: 50px;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 1vw;

    @media ${({ theme }) => theme.device.tablet} {
        height: auto;

        grid: unset;

        display: grid;
        grid-template-rows: repeat(4, 1fr);
        grid-row-gap: 2vh;
    }
`;

const ColorLabel = styled.label`
    width: 150px;

    border-radius: 100px;

    text-align: center;
    line-height: 50px;
    color: white;
    font-weight: bold;

    background-color: ${({ theme }) => theme.color.lightgray};

    cursor: pointer;

    input {
        appearance: none;
        -webkit-appearance: none;
    }

    &.spring {
        background-color: ${({ theme }) => theme.color.spring};
    }

    &.summer {
        background-color: ${({ theme }) => theme.color.summer};
    }

    &.autumn {
        background-color: ${({ theme }) => theme.color.autumn};
    }

    &.winter {
        background-color: ${({ theme }) => theme.color.winter};
    }

    @media ${({ theme }) => theme.device.tablet} {
        height: 50px;

        font-size: ${({ theme }) => theme.fontSizes.mediumtext};
    }
`;

export const blinkKeyframes = keyframes`
    0% {
        opacity: 0.3;
        margin-right: 5px;
    }
    100% {
        opacity: 1;
        margin-right: 0;
    }
`;

export const ArrowDiv = styled.div`
    position: absolute;
    top: 50%;
    right: 10%;

    height: 50px;

    ${({ theme }) => theme.flexStyled.flexRow};

    animation: ${blinkKeyframes} 0.5s ease-in infinite alternate;

    cursor: pointer;

    p {
        color: ${({ theme }) => theme.color.darkgray};
        font-weight: bold;

        margin: auto 0;
    }

    img {
        transform: rotate(0.25turn);

        filter: invert(23%) sepia(7%) saturate(691%) hue-rotate(145deg) brightness(97%) contrast(93%);

        cursor: pointer;

        @media ${({ theme }) => theme.device.tablet} {
            width: 20px;
            height: 20px;
        }
    }

    @media ${({ theme }) => theme.device.tablet} {
        position: unset;
        animation: unset;

        width: 150px;
        margin: 40px 0 20px 0;

        border-radius: 5px;

        background-color: ${({ theme }) => theme.color.blue};

        p {
            color: white;
            font-weight: bold;
            font-size: inherit;

            text-align: center;
            margin: auto;
        }

        img {
            display: none;
        }
    }
`;
