import styled from 'styled-components';
import gameImages from '../../image/game';
import { ContainerDiv, NavBackgroundDiv, Article } from '../../components';

export function GameStart() {
    // 0~39까지 난수 생성
    const randomNumber = Math.floor(Math.random() * 10);

    const handleClick = event => {
        console.log(event.target.value);
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
                        src={gameImages[randomNumber].src}
                        alt={`${gameImages[randomNumber].name} 이미지`}
                        width="360px"
                        height="450px"
                    />
                </ImageDiv>
                <ButtonsDiv>
                    <ColorLabel>
                        <input type="radio" name="check" value="spring" onClick={handleClick} />봄 웜톤
                    </ColorLabel>
                    <ColorLabel>
                        <input type="radio" name="check" value="summer" onClick={handleClick} />
                        여름 쿨톤
                    </ColorLabel>
                    <ColorLabel>
                        <input type="radio" name="check" value="autumn" onClick={handleClick} />
                        가을 웜톤
                    </ColorLabel>
                    <ColorLabel>
                        <input type="radio" name="check" value="winter" onClick={handleClick} />
                        겨울 쿨톤
                    </ColorLabel>
                </ButtonsDiv>
            </GameContainerDiv>
        </Article>
    );
}

// styled-components

const GameContainerDiv = styled(ContainerDiv)`
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

const ButtonsDiv = styled.div`
    width: 100%;
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
`;
