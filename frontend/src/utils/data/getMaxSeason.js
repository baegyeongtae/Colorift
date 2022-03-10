import { seasonPersonal } from './season';

// 봄 여름 가을 겨울 퍼센티지를 받아서 최대값 계절을 문자열로 반환하는 함수
export function getMaxSeason(springRate, summerRate, autumnRate, winterRate) {
    const params = {
        0: 'SP',
        1: 'SU',
        2: 'AU',
        3: 'WI',
    };

    // 최대값 추출
    const maxRate = Math.max(springRate, summerRate, autumnRate, winterRate);

    let result = '';

    // 최대값에 해당하면 params에 대입해서 계절 값으로 치환하고 문자열로 붙이기
    [springRate, summerRate, autumnRate, winterRate].forEach((item, index) => {
        if (item === maxRate) {
            result = `${result} ${seasonPersonal[params[index]]}`;
        }
    });

    // 문자열 시작과 끝에 공백 제거
    return result.trim();
}
