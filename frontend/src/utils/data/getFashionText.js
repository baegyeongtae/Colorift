// 계절 값과 rate를 받아서 그에 맞는 텍스트를 반환하는 함수
// 가장 잘 어울립니다! / 무난하게 어울립니다 / 잘 안어울립니다 ㅠㅠ
export function getFashionText(season, springRate, summerRate, autumnRate, winterRate) {
    const index = {
        0: 'SP',
        1: 'SU',
        2: 'AU',
        3: 'WI',
    };

    const paramsArray = [springRate, summerRate, autumnRate, winterRate];

    // 최대값 최소값 추출
    const maxRate = Math.max(...paramsArray);
    const minRate = Math.min(...paramsArray);

    // 최대값 최소값에 해당하는 인덱스 추출
    const maxIndex = paramsArray.indexOf(maxRate);
    const minIndex = paramsArray.indexOf(minRate);

    if (season === index[maxIndex]) '가장 잘 어울립니다!';
    if (season === index[minIndex]) '잘 안어울립니다 ㅠㅠ';
    return '무난하게 어울립니다';
}
