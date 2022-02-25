import Cookies from 'js-cookie';
import { axiosPostConfig, axiosGetConfig } from './config';

// access 토큰 유효기간 변수
export const expire = (1 / 24 / 60) * 5; // 5분

// acces 토큰 재발급
export async function getAccessToken() {
    try {
        const response = await axiosPostConfig({
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

        console.log('access 토큰 재발급 완료');
        return response.data.access;
    } catch (error) {
        return error.response;
    }
}

// access 토큰 유효성 검증 함수
export async function accessAvailableCheck() {
    const accessToken = Cookies.get('accessToken');
    const refreshToken = Cookies.get('refreshToken');

    try {
        // accessToken이 존재할 경우 헤더에 넣는다
        if (accessToken) {
            console.log('accessToken이 존재한다');
            axiosGetConfig.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
            // axiosPostConfig.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
            return;
        }

        // accessToken이 존재하지 않고, refreshToken은 존재할 경우
        if (refreshToken) {
            console.log('accessToken이 존재하지 않으니 재발급한다');
            const reAccessToken = await getAccessToken();
            axiosGetConfig.defaults.headers.common.Authorization = `Bearer ${reAccessToken}`;
            // axiosPostConfig.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
            console.log('Bearer에 새로운 토큰을 넣었다');
            return;
        }

        // accessToken이 존재하지 않고, refreshToken도 존재하지 않을 경우
        console.log('refreshToken도 존재하지 않는다');
        sessionStorage.clear();
        window.open('/', '_self');
    } catch (error) {
        console.log(error);
    }
}
