// 정규표현식
const pattern3 = /[ㄱ-ㅎㅏ-ㅣ가-힣]/; // 한글
const pattern4 = /[~!@#$%<>^&*]/; // 특수문자
const pattern5 = /\s/; // 공백

// id 정규식 체크
export function checkRegexId(id) {
    if (id.length >= 4 && !pattern3.test(id) && !pattern4.test(id) && !pattern5.test(id)) {
        return true;
    }

    return false;
}

// 닉네임 체크
export function checkRegexNickname(nickname) {
    if (nickname.length >= 4 && !pattern4.test(nickname) && !pattern5.test(nickname)) {
        return true;
    }

    return false;
}

// 비밀번호 체크
export function checkRegexPassword(password) {
    if (password.length >= 8 && !pattern3.test(password) && !pattern5.test(password)) {
        return true;
    }

    return false;
}
