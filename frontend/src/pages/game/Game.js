import { useState } from 'react';
import { GameStart, GameEnd } from '.';

export function Game() {
    // 0~39까지 난수 생성
    const randomNumber = Math.floor(Math.random() * 10);

    // 페이지 state
    const [gamePage, setGamePage] = useState(0);

    // 유저가 선택한 답
    const [select, setSelect] = useState('');

    // 다음 페이지로 넘기는 함수
    const setNextPage = selected => {
        setSelect(selected);
        setGamePage(1);
    };

    // 페이지에 따라 컴포넌트 렌더링할 함수
    function renderHTML() {
        if (gamePage === 0) {
            return <GameStart number={randomNumber} nextPage={setNextPage} />;
        }
        return <GameEnd select={select} />;
    }

    const renderPage = renderHTML();

    return renderPage;
}
