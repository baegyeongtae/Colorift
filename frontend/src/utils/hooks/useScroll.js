import { useState, useEffect } from 'react';

export function useScroll() {
    const [scrollY, setScrollY] = useState(0);

    const listener = () => {
        setScrollY(window.pageYOffset); // window.pageYOffset은 window.scrollY와 동일함 (오래된 브라우저 호환)
    };

    useEffect(() => {
        window.addEventListener('scroll', listener);
        return () => {
            window.removeEventListener('scroll', listener);
        };
    });

    return {
        scrollY,
    };
}
