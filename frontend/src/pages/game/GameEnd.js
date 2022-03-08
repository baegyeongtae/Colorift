import styled from 'styled-components';
import { NavBackgroundDiv, Article } from '../../components';
import { seasonPersonal, season } from '../../utils/data/season';
import { GameContainerDiv, ImageDiv, CheckDiv, ArrowDiv } from './GameStart';
import { arrowIcon } from '../../image';

export function GameEnd({ image, select, retry }) {
    const text = image.season === select ? '정답입니다 🥰' : '아쉽네요 😢 다시 생각해보세요';

    const handleRetryClick = () => {
        retry && retry();
    };

    return (
        <Article>
            <NavBackgroundDiv />
            <GameContainerDiv>
                <p>{text}</p>
                <ImageDiv>
                    {image && <img src={image?.src} alt={`${image?.name} 이미지`} width="360px" height="450px" />}
                </ImageDiv>
                <AnswerDiv>
                    <p>{image?.name}</p>
                    <ColorDiv className={season[image.season]}>{seasonPersonal?.[image?.season]}</ColorDiv>
                </AnswerDiv>
                <ArrowDiv onClick={handleRetryClick}>
                    <p>다시풀기</p>
                    <img src={arrowIcon} alt="오른쪽 슬라이드 화살표" className="arrow right" />
                </ArrowDiv>
            </GameContainerDiv>
        </Article>
    );
}

// styled-components

const AnswerDiv = styled(CheckDiv)`
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
`;

const ColorDiv = styled.div`
    width: 150px;

    border-radius: 100px;

    text-align: center;
    line-height: 50px;
    color: white;
    font-weight: bold;

    background-color: ${({ theme }) => theme.color.lightgray};

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
