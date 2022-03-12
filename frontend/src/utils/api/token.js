import Cookies from 'js-cookie';
import axios from 'axios';
import { axiosUserConfig, expire } from './user';

// axios 기본 인스턴스 생성 (토큰 검증 포함)
const axiosConfig = axios.create({
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
    },
});

// acces 토큰 재발급
async function getAccessToken() {
    try {
        const response = await axiosUserConfig({
            url: '/app/token/refresh/',
            data: {
                refresh: Cookies.get('refreshToken'),
            },
        });

        // 토큰 유효성 검사할 때 필요
        sessionStorage.setItem('accessToken', response.data.access);

        // 토큰 유효기간 검사용으로 필요
        Cookies.set('accessToken', response.data.access, {
            path: '/',
            expires: expire, // 테스트 기준 5분 (하루 단위로 응답)
        });

        Cookies.set('refreshToken', response.data.refresh, {
            path: '/',
            expires: 90, // 테스트 기준 90일
        });

        return null;
    } catch (error) {
        return error.response;
    }
}

// 액세스 토큰 존재 여부 확인
async function isVerify() {
    try {
        // 액세스 토큰 존재 여부 확인
        const response = await axiosUserConfig({
            url: '/app/token/verify/',
            data: {
                token: sessionStorage.getItem('accessToken'),
            },
        });

        return response;
    } catch (error) {
        return error.response;
    }
}

// access 토큰 유효성 검증 함수
async function accessAvailableCheck() {
    const isExistence = Cookies.get('accessToken');
    const refreshToken = Cookies.get('refreshToken');

    try {
        // 리프레시 토큰이 존재하지 않으면 로그아웃
        if (!refreshToken) {
            sessionStorage.clear();
            window.open('/', '_self');
        }

        // 액세스 토큰 시간이 지났다면
        // 유효성 검사 해본다
        if (!isExistence) {
            const response = await isVerify();

            // 서버에서도 토큰이 존재하지 않는다면 재발급 요청
            if (response.status === 401) {
                await getAccessToken();
            }
        }

        return sessionStorage.getItem('accessToken');
    } catch (error) {
        return error;
    }
}

// axios 인터셉터 생성
axiosConfig.interceptors.request.use(
    async config => {
        const axiosInstance = config;
        const accessToken = await accessAvailableCheck();

        axiosInstance.headers.Authorization = `Bearer ${accessToken}`;
        return axiosInstance;
    },
    error => {
        console.log(error);
    },
);

export default axiosConfig;
