import { useRef } from 'react';

export function useUser() {
    const idRef = useRef();
    const nicknameRef = useRef();
    const passwordRef = useRef();
    const passwordCheckRef = useRef();

    return {
        idRef,
        nicknameRef,
        passwordRef,
        passwordCheckRef,
    };
}
