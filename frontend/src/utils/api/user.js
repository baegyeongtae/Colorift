/* eslint-disable no-nested-ternary */
/* eslint-disable consistent-return */
import Cookies from 'js-cookie';
import axios from 'axios';

// access 토큰 유효기간 변수
export const expire = (1 / 24 / 60) * 5; // 5분

// axios 기본 인스턴스 생성
export const axiosUserConfig = axios.create({
    method: 'post',
    // baseURL: `${process.env.REACT_APP_SERVER_ADDRESS}`, // 기본 서버 주소 입력 => 아직 미정
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

        const userId = response.data.id;
        const spring = response.data.spring_rate;
        const summer = response.data.summer_rate;
        const autumn = response.data.autumn_rate;
        const winter = response.data.winter_rate;
        const seasonList = [spring, summer, autumn, winter];
        const season =
            Math.max(...seasonList) === seasonList[0]
                ? 'SP'
                : Math.max(...seasonList) === seasonList[1]
                ? 'SU'
                : Math.max(...seasonList) === seasonList[2]
                ? 'AU'
                : 'WI';
        const colorResult = [userId, spring, summer, autumn, winter, season];

        sessionStorage.setItem('colorResult', JSON.stringify(colorResult));
        return colorResult;
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

        const userId = response.data.id;
        const spring = response.data.spring_rate;
        const summer = response.data.summer_rate;
        const autumn = response.data.autumn_rate;
        const winter = response.data.winter_rate;
        const feeling = response.data.result;
        const fashionResult = [userId, spring, summer, autumn, winter, feeling];

        const season = () => {
            fashionResult.forEach(item => {
                if (item === Math.max.apply(null, fashionResult)) {
                    return item;
                }
            });
        };
        console.log(season);

        sessionStorage.setItem('fashionResult', fashionResult);
        return fashionResult;
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
        console.log(resultRate);
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

        return response;
    } catch (error) {
        return error.response;
    }
}
