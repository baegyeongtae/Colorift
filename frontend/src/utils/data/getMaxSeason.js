// 봄 여름 가을 겨울 퍼센티지를 받아서 최대값 계절을 문자열로 반환하는 함수
export function getMaxSeason(springRate = 0, summerRate = 0, autumnRate = 0, winterRate = 0) {
    const index = {
        0: 'SP',
        1: 'SU',
        2: 'AU',
        3: 'WI',
    };

    // 최대값 추출
    const maxRate = Math.max(springRate, summerRate, autumnRate, winterRate);

    // 최대값에 해당하면 params에 대입해서 계절 값으로 치환하기
    const result = [springRate, summerRate, autumnRate, winterRate].indexOf(maxRate);

    // 반환 값은 'SP', 'SU', 'AU', 'WI' 중 하나
    return index[result];
}
