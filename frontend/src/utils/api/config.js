import Cookies from 'js-cookie';
import axios from 'axios';

// axios 기본 인스턴스 생성
export const axiosConfig = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_ADDRESS}`, // 기본 서버 주소 입력 => 아직 미정
});

// axios post 인스턴스 생성
export const axiosPostConfig = axiosConfig.create({
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

// axios post bearer 인스턴스 생성
export const axiosPostBearerConfig = axiosPostConfig.create({
    headers: {
        Authorization: `Bearer ${Cookies.get('accessToken')}`,
    },
});

// axios get 인스턴스 생성
export const axiosGetConfig = axiosConfig.create({
    method: 'get',
    headers: {
        Authorization: `Bearer ${Cookies.get('accessToken')}`,
    },
});
