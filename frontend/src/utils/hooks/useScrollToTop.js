import { useEffect } from 'react';

export function useScrollToTop() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
}
