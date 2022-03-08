import styled from 'styled-components';
import { ContainerDiv, NavBackgroundDiv, Article } from '../../components';

export function GameStart() {
    return (
        <Article>
            <NavBackgroundDiv />
            <GameContainerDiv>
                <p>
                    나는야 퍼스널 컬러 전문가!
                    <br />
                    연예인의 퍼스널 컬러를 맞춰보세요 😀
                </p>
                <ImageDiv>연예인 사진</ImageDiv>
                <ButtonsDiv>
                    <ColorDiv>봄 웜톤</ColorDiv>
                    <ColorDiv>여름 쿨톤</ColorDiv>
                    <ColorDiv>가을 웜톤</ColorDiv>
                    <ColorDiv>겨울 쿨톤</ColorDiv>
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
    width: 400px;
    height: 500px;

    margin: 5vh 0;

    background-color: gray;
`;

const ButtonsDiv = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 10px;
`;

const ColorDiv = styled.div`
    width: 200px;
    height: 50px;

    border-radius: 100px;

    text-align: center;
    line-height: 50px;

    background-color: ${({ theme }) => theme.color.lightgray};
`;
