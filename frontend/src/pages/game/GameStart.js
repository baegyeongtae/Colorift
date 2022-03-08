import styled, { keyframes } from 'styled-components';
import { useState } from 'react';
import gameImages from '../../image/game';
import { ContainerDiv, NavBackgroundDiv, Article } from '../../components';
import { arrowIcon } from '../../image';

export function GameStart({ number }) {
    // 현재 선택된 체크박스
    const [select, setSelect] = useState('');

    // 체크박스 클릭 시 함수
    const handleClick = event => {
        setSelect(event.target.value);
    };

    return (
        <Article>
            <NavBackgroundDiv />
            <GameContainerDiv>
                <p>
                    나는야 퍼스널 컬러 전문가!
                    <br />
                    연예인의 퍼스널 컬러를 맞춰보세요 😀
                </p>
                <ImageDiv>
                    <img
                        src={gameImages[number].src}
                        alt={`${gameImages[number].name} 이미지`}
                        width="360px"
                        height="450px"
                    />
                </ImageDiv>
                <CheckDiv>
                    <ColorLabel className={select === 'spring' && 'spring'}>
                        <input type="radio" name="check" value="spring" onClick={handleClick} />봄 웜톤
                    </ColorLabel>
                    <ColorLabel className={select === 'summer' && 'summer'}>
                        <input type="radio" name="check" value="summer" onClick={handleClick} />
                        여름 쿨톤
                    </ColorLabel>
                    <ColorLabel className={select === 'autumn' && 'autumn'}>
                        <input type="radio" name="check" value="autumn" onClick={handleClick} />
                        가을 웜톤
                    </ColorLabel>
                    <ColorLabel className={select === 'winter' && 'winter'}>
                        <input type="radio" name="check" value="winter" onClick={handleClick} />
                        겨울 쿨톤
                    </ColorLabel>
                </CheckDiv>
                <ArrowDiv>
                    <p>정답보기</p>
                    <img src={arrowIcon} alt="오른쪽 슬라이드 화살표" className="arrow right" />
                </ArrowDiv>
            </GameContainerDiv>
        </Article>
    );
}

// styled-components

const GameContainerDiv = styled(ContainerDiv)`
    width: 50%;

    ${({ theme }) => theme.flexStyled.flexColumn};
    ${({ theme }) => theme.flexStyled.flexCenter};

    p {
        font-size: ${({ theme }) => theme.fontSizes.bigtext};
        font-weight: bold;
        text-align: center;
    }
`;

const ImageDiv = styled.div`
    width: 360px;
    height: 450px;

    margin: 5vh 0;

    background-color: gray;
`;

const CheckDiv = styled.div`
    height: 50px;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 1vw;
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
`;

const blinkKeyframes = keyframes`
    0% {
        opacity: 0.3;
    }
    100% {
        opacity: 1;
    }
`;

const moveKeyframes = keyframes`
0% {
    margin-right: 5px;
}
100% {
    margin-right: 0;
}
`;

const ArrowDiv = styled.div`
    position: absolute;
    top: 50%;
    right: 0;

    ${({ theme }) => theme.flexStyled.flexRow};

    animation: ${blinkKeyframes} 1s ease-in infinite alternate;

    cursor: pointer;

    p {
        color: ${({ theme }) => theme.color.darkgray};
        font-weight: bold;
    }

    img {
        width: 50px;
        height: 50px;

        transform: rotate(0.25turn);

        filter: invert(23%) sepia(7%) saturate(691%) hue-rotate(145deg) brightness(97%) contrast(93%);

        cursor: pointer;

        animation: ${moveKeyframes} 0.5s ease-in infinite alternate;

        @media ${({ theme }) => theme.device.tablet} {
            width: 20px;
            height: 20px;
        }
    }
`;
