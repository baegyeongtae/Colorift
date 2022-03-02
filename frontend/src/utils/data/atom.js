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

// 퍼스널 컬러 테스트 결과 계절톤
export const seasonState = atom({
    key: 'seasonState',
    default: '',
});

// PersonalColorChoice Page에서 '기본 퍼스널 컬러' 선택된 값
export const toneChoiceState = atom({
    key: 'tonechoicestate',
    default: '',
});

// PersonalColorChoice Page에서 '기본 퍼스널 컬러' 선택된 값
export const myPersonalColorState = atom({
    key: 'mypersonalcolorstate',
    default: '',
});
