// result를 받아서 텍스트로 치환
// 가장 잘 어울립니다! / 무난하게 어울립니다 / 잘 안어울립니다 ㅠㅠ
export function getFashionText(result = '') {
    if (result === 'G') {
        return '가장 잘 어울립니다!';
    }
    if (result === 'B') {
        return '잘 안어울립니다 ㅠㅠ';
    }
    return '무난하게 어울립니다';
}
