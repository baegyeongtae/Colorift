import Cookies from 'js-cookie';
import axios from 'axios';

// access 토큰 유효기간 변수
export const expire = (1 / 24 / 60) * 5; // 5분

// axios 기본 인스턴스 생성
export const axiosUserConfig = axios.create({
    method: 'post',
    baseURL: `${process.env.REACT_APP_SERVER_ADDRESS}`, // 기본 서버 주소 입력 => 아직 미정
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

// 회원가입
export async function setUserRegister(_userId, _nickname, _password) {
    try {
        const response = await axiosUserConfig({
            url: 'register/',
            data: {
                username: _userId,
                nickname: _nickname,
                password: _password,
            },
        });
        return response;
    } catch (error) {
        return error.response;
    }
}

// 로그인
export async function setUserLogin(_userId, _password) {
    const userData = {
        username: _userId,
        password: _password,
    };

    try {
        const response = await axiosUserConfig({
            url: 'token/',
            data: userData,
        });

        sessionStorage.setItem('userEmail', _userId);
        Cookies.set('accessToken', response.data.access, {
            path: '/',
            expires: expire, // 테스트 기준 5분 (하루 단위로 응답)
            secure: true,
            // httpOnly: true, // 배포하면 주석 제거 필수 (보안용)
        });
        Cookies.set('refreshToken', response.data.refresh, {
            path: '/',
            expires: 90, // 테스트 기준 90일
            secure: true,
            // httpOnly: true, // 배포하면 주석 제거 필수 (보안용)
        });

        window.open('/', '_self');
    } catch (error) {
        return error.response;
    }
    return null;
}

// 비밀번호 변경
export async function setUserPassword(_userId, _nickname, _password) {
    try {
        const response = await axiosUserConfig({
            method: 'patch',
            url: 'edit/',
            data: {
                username: _userId,
                nickname: _nickname,
                password: _password,
            },
        });
        return response;
    } catch (error) {
        return error.response;
    }
}
