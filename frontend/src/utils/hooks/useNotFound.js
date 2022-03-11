import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useNotFound(boolean) {
    const navigate = useNavigate();

    // 로그인 or 비로그인 유저가 접근 시 404로 보내버리기
    // true 일 땐 로그인 유저 막기
    // false 일 땐 비로그인 유저 막기
    useEffect(() => {
        const userId = sessionStorage.getItem('userId');

        if ((boolean && userId) || (!boolean && !userId)) {
            navigate('/404');
        }
    }, []);
}
