// 계절 값과 rate를 받아서 그에 맞는 텍스트를 반환하는 함수
// 가장 잘 어울립니다! / 무난하게 어울립니다 / 잘 안어울립니다 ㅠㅠ
export function getFashionText(season, springRate, summerRate, autumnRate, winterRate) {
    const index = {
        SP: 0,
        SU: 1,
        AU: 2,
        WI: 3,
    };

    const paramsArray = [springRate, summerRate, autumnRate, winterRate];

    // 최대값 최소값 추출
    const maxRate = Math.max(...paramsArray); // 40
    const minRate = Math.min(...paramsArray); // 10

    // 최대값 최소값에 해당하는 인덱스 추출
    // 최대값 1
    // 최소값 0
    // 그 외 나머지는 -1
    const indexArray = paramsArray.map(item => {
        if (item === maxRate) {
            return 1;
        }
        if (item === minRate) {
            return 0;
        }
        return -1;
    });

    if (indexArray[index[season]] === 1) {
        return '가장 잘 어울립니다!';
    }
    if (indexArray[index[season]] === 0) {
        return '잘 안어울립니다 ㅠㅠ';
    }
    return '무난하게 어울립니다';
}
