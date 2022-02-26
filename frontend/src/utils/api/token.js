import Cookies from 'js-cookie';
import axios from 'axios';
import { axiosUserConfig, expire } from './user';

// axios 기본 인스턴스 생성 (토큰 검증 포함)
const axiosConfig = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_ADDRESS}`, // 기본 서버 주소 입력 => 아직 미정
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${Cookies.get('accessToken')}`,
    },
});

// acces 토큰 재발급
async function getAccessToken() {
    try {
        const response = await axiosUserConfig({
            url: '/token/refresh/',
            data: {
                refresh: Cookies.get('refreshToken'),
            },
        });

        Cookies.set('accessToken', response.data.access, {
            path: '/',
            expires: expire, // 테스트 기준 5분 (하루 단위로 응답)
            // secure: true,
            // httpOnly: true, // 배포하면 주석 제거 필수 (보안용)
        });

        Cookies.set('refreshToken', response.data.refresh, {
            path: '/',
            expires: 90, // 테스트 기준 90일
            // secure: true,
            // httpOnly: true, // 배포하면 주석 제거 필수 (보안용)
        });

        return response.data.access;
    } catch (error) {
        return error.response;
    }
}

// access 토큰 유효성 검증 함수
async function accessAvailableCheck() {
    const accessToken = Cookies.get('accessToken');
    const refreshToken = Cookies.get('refreshToken');

    try {
        // accessToken이 존재할 경우 그대로 반환
        if (accessToken) {
            return accessToken;
        }

        // accessToken이 존재하지 않고, refreshToken은 존재할 경우
        if (refreshToken) {
            const reAccessToken = await getAccessToken();
            return reAccessToken;
        }

        // accessToken이 존재하지 않고, refreshToken도 존재하지 않을 경우
        sessionStorage.clear();
        window.open('/', '_self');
    } catch (error) {
        console.log(error);
    }

    return accessToken;
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
