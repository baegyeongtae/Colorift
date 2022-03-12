import Cookies from 'js-cookie';
import axios from 'axios';
import { axiosUserConfig, expire } from './user';

// axios 기본 인스턴스 생성 (토큰 검증 포함)
const axiosConfig = axios.create({
    // baseURL: `${process.env.REACT_APP_SERVER_ADDRESS}`, // 기본 서버 주소 입력 => 아직 미정
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

        sessionStorage.setItem('accessToken', response.data.access);

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
    const refreshToken = Cookies.get('refreshToken');

    try {
        // 리프레스 토큰이 존재하지 않으면 로그아웃
        if (!refreshToken) {
            sessionStorage.clear();
            window.open('/', '_self');
        }

        // 액세스 토큰 존재 여부 확인
        const response = await isVerify();

        if (response.status === 401) {
            await getAccessToken();
            // setHeaderAccess();
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
