import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useGetScrollY() {
    // 현재 url 받아오기
    const location = useLocation();
    const { pathname } = location;

    const [scrollY, setScrollY] = useState(0);

    const listener = () => {
        setScrollY(window.pageYOffset); // window.pageYOffset은 window.scrollY와 동일함 (오래된 브라우저 호환)
        console.log(scrollY);
    };

    useEffect(() => {
        if (pathname === '/') {
            window.addEventListener('scroll', listener);
        }
        return () => {
            window.removeEventListener('scroll', listener);
        };
    });

    return {
        scrollY,
    };
}
