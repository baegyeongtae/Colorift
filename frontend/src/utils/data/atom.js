// recoil atom 관련 파일입니다
import { atom } from 'recoil';

export const colorPageState = atom({
    key: 'colorPageState',
    default: 0,
});

export const fashionPageState = atom({
    key: 'fashionPageState',
    default: 0,
});
