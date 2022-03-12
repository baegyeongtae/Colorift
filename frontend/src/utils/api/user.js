import Cookies from 'js-cookie';
import axios from 'axios';
import { getMaxSeason } from '../data/getMaxSeason';

// access 토큰 유효기간 변수
export const expire = (1 / 24 / 60) * 5; // 5분

// axios 기본 인스턴스 생성
export const axiosUserConfig = axios.create({
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

// 회원가입
export async function setUserRegister(_userId, _nickname, _password) {
    try {
        const response = await axiosUserConfig({
            url: '/app/register/',
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
            url: '/app/token/',
            data: userData,
        });

        sessionStorage.setItem('userId', _userId);
        sessionStorage.setItem('userNickname', response.data.nickname);

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

        return response;
    } catch (error) {
        return error.response;
    }
}

// 비밀번호 변경
export async function setUserPassword(_userId, _nickname, _password) {
    try {
        const response = await axiosUserConfig({
            method: 'patch',
            url: '/app/edit/password/',
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

// 퍼스널컬러 분석 결과 (비유저용)
export async function postNotLoggedInFacePhoto(imgData) {
    try {
        const response = await axiosUserConfig({
            method: 'post',
            url: '/app/color/test/',
            data: imgData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        const season = getMaxSeason(
            response.data.spring_rate,
            response.data.summer_rate,
            response.data.autumn_rate,
            response.data.winter_rate,
        );

        const result = {
            id: response.data.id,
            springRate: response.data.spring_rate,
            summerRate: response.data.summer_rate,
            autumnRate: response.data.autumn_rate,
            winterRate: response.data.winter_rate,
            keyword: season,
        };

        sessionStorage.setItem('result', JSON.stringify(result));
        sessionStorage.setItem('season', season);

        return null;
    } catch (error) {
        return error.response;
    }
}

// 패션 사진 및 컬러 조합 결과 (비유저용)
export async function postNotLoggedInFashionPhoto(fashionData) {
    try {
        const response = await axiosUserConfig({
            method: 'post',
            url: '/app/fashion/test/',
            data: fashionData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        const result = {
            id: response.data.id,
            springRate: response.data.spring_rate,
            summerRate: response.data.summer_rate,
            autumnRate: response.data.autumn_rate,
            winterRate: response.data.winter_rate,
            match: response.data.result,
        };

        sessionStorage.setItem('result', JSON.stringify(result));
        return null;
    } catch (error) {
        return error.response;
    }
}

// 패션 사진 및 컬러 조합 결과 (비유저용)
export async function getColorShare(id) {
    try {
        const response = await axiosUserConfig({
            method: 'get',
            url: `/app/color/share/${id}/`,
        });

        const resultRate = {
            springRate: response.data.spring_rate,
            summerRate: response.data.summer_rate,
            autumnRate: response.data.autumn_rate,
            winterRate: response.data.winter_rate,
            image: response.data.image,
        };

        return resultRate;
    } catch (error) {
        return error.response;
    }
}

// 패션 사진 및 컬러 조합 결과 (비유저용)
export async function getFashionShare(id) {
    try {
        const response = await axiosUserConfig({
            method: 'get',
            url: `/app/fashion/share/${id}/`,
        });
        const resultRate = {
            color: response.data.color,
            springRate: response.data.spring_rate,
            summerRate: response.data.summer_rate,
            autumnRate: response.data.autumn_rate,
            winterRate: response.data.winter_rate,
            image: response.data.image,
            match: response.data.result,
        };

        return resultRate;
    } catch (error) {
        return error.response;
    }
}
