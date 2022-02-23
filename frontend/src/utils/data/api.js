import Cookies from 'js-cookie';
import axios from 'axios';

// 쿠키가 존재할 경우 헤더에 넣는 함수
function setAccessToken() {
    const accessToken = Cookies.get('accessToken');
    if (accessToken) axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
}

// 토큰 넣은 상태의 axios 인스턴스 생성
const axiosGetUserConfig = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_ADDRESS}`, // 기본 서버 주소 입력 => 아직 미정
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

// 회원가입
export async function userRegister(_email, _password) {
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
