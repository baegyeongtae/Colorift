import Cookies from 'js-cookie';
import axios from 'axios';

// 토큰 넣은 상태의 axios 인스턴스 생성
const axiosGetUserConfig = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_ADDRESS}`, // 기본 서버 주소 입력 => 아직 미정
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

// 쿠키가 존재할 경우 헤더에 넣는 함수
function setAccessToken() {
    const accessToken = Cookies.get('accessToken');
    if (accessToken) axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
}

// refresh 토큰 발급
export async function setRefreshToken() {
    try {
        const response = await axiosGetUserConfig({
            method: 'post',
            url: '/token/refresh/',
        });
        return response;
    } catch (error) {
        return error.response;
    }
}

// export async function setRefreshToken() {
//     const accessToken = Cookies.get("accessToken");
//     const refreshToken = Cookies.get("refreshToken");

//     // 로그인 된 상태라면
//     if (refreshToken) {
//       // 토큰이 유효한지 검증한다.
//       let response = await userTokenVerify(accessToken);

//       // access token이 토큰이 만료 되었다면
//       if (response.status >= 300) {
//         //refresh 를 시도한다.
//         response = await userTokenRefresh(refreshToken, secure);

//         // refresh 가 안된다면
//         if (response.status >= 300) {
//           // refresh 토큰도 만료된 것
//           // 로그아웃 처리
//           Cookies.remove("accessToken");
//           Cookies.remove("refreshToken");
//           Cookies.remove("username");
//           Cookies.remove("email");
//           return false;
//         }
//       }
//       return true;
//     }
//     return true;
//   }

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
    try {
        const response = await axiosGetUserConfig({
            method: 'post',
            url: '/token/',
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
