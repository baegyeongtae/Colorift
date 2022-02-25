import Cookies from 'js-cookie';
import { axiosPostConfig } from './config';
import { expire } from './token';

// 회원가입
export async function setUserRegister(_email, _password) {
    try {
        const response = await axiosPostConfig({
            url: '/register/',
            data: {
                username: _email,
                password: _password,
            },
        });
        alert('회원가입이 완료되었습니다.');

        window.open('/login', '_self');
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
        const response = await axiosPostConfig({
            url: '/token/',
            data: userData,
        });

        sessionStorage.setItem('userEmail', _email);
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
        return response;
    } catch (error) {
        return error.response;
    }
}
