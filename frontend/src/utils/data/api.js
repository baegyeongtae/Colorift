import Cookies from 'js-cookie';
import axios from 'axios';

// axios 인스턴스 생성
const axiosGetUserConfig = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_ADDRESS}`, // 기본 서버 주소 입력 => 아직 미정
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

// acces 토큰 재발급
export async function getAccessToken() {
    try {
        const response = await axiosGetUserConfig({
            method: 'post',
            url: '/token/refresh/',
        });

        Cookies.set('accessToken', response.data.tokens.access, {
            path: '/',
            expires: new Date(response.data.tokens.expired * 1000), // 테스트 기준 5분 (초 단위로 응답)
            secure: true,
            // httpOnly: true, // 배포하면 주석 제거 필수 (보안용)
        });

        return response.data.tokens.access;
    } catch (error) {
        return error.response;
    }
}

// access 토큰 유효성 검증 함수
export async function accessAvailableCheck() {
    const accessToken = Cookies.get('accessToken');
    const refreshToken = Cookies.get('refreshToken');

    // accessToken이 존재할 경우 헤더에 넣는다
    if (accessToken) {
        axiosGetUserConfig.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
        return;
    }

    // accessToken이 존재하지 않고, refreshToken은 존재할 경우
    if (refreshToken) {
        const reAccessToken = await getAccessToken();
        axiosGetUserConfig.defaults.headers.common.Authorization = `Bearer ${reAccessToken}`;
        return;
    }

    // accessToken이 존재하지 않고, refreshToken도 존재하지 않을 경우
    throw new Error('refreshToken이 없습니다. 다시 로그인 해주세요.');
}

// 회원가입
export async function setUserRegister(_email, _password) {
    try {
        const response = await axiosGetUserConfig({
            method: 'post',
            url: '/register/',
            data: {
                username: _email,
                password: _password,
            },
        });
        return response;
    } catch (error) {
        return error.response;
    }
}

// 로그인
export async function setUserLogin(_email, _password) {
    const userData = {
        username: _email,
        password: _password,
    };

    try {
        const response = await axiosGetUserConfig({
            method: 'post',
            url: '/token/',
            data: userData,
        });

        console.log(response);

        const expire = (1 / 24 / 60) * 5; // 5분

        sessionStorage.setItem('userProfile', JSON.stringify(userData));
        Cookies.set('accessToken', response.data.access, {
            path: '/',
            expires: expire, // 테스트 기준 5분 (초 단위로 응답)
            secure: true,
            // httpOnly: true, // 배포하면 주석 제거 필수 (보안용)
        });
        Cookies.set('refreshToken', response.data.refresh, {
            path: '/',
            expires: 90, // 테스트 기준 90일
            secure: true,
            // httpOnly: true, // 배포하면 주석 제거 필수 (보안용)
        });

        return true;
    } catch (error) {
        return error.response;
    }
}
