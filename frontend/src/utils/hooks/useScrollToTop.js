import { useEffect } from 'react';

export function useScrollToTop(deps) {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [deps && deps]);
}
