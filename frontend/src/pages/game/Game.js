import { useState, useMemo } from 'react';
import { GameStart, GameEnd } from '.';
import gameImages from '../../image/game';
import { useScrollToTop } from '../../utils/hooks/useScrollToTop';

export function Game() {
    // 재도전 state
    const [retry, setRetry] = useState(0);

    // 0~39까지 난수 생성
    const randomNumber = useMemo(() => Math.floor(Math.random() * 40), [retry]);

    // 난수에 해당되는 이미지 정보
    const image = useMemo(() => gameImages[randomNumber], [randomNumber]);

    // 페이지 state
    const [gamePage, setGamePage] = useState(0);

    // 유저가 선택한 답
    const [select, setSelect] = useState('');

    // 다음 페이지로 넘기는 함수
    const setNextPage = selected => {
        setSelect(selected);
        setGamePage(1);
    };

    // 재도전 횟수 추가
    const setRetryHandler = () => {
        setRetry(current => current + 1);
        setGamePage(0);
    };

    // 한번 게임이 진행될 때마다 스크롤 위로 올리기 (모바일용)
    useScrollToTop(retry);

    // 페이지에 따라 컴포넌트 렌더링할 함수
    function renderHTML() {
        if (gamePage === 0) {
            return <GameStart image={image} nextPage={setNextPage} />;
        }
        return <GameEnd image={image} select={select} retry={setRetryHandler} />;
    }

    const renderPage = renderHTML();

    return renderPage;
}
