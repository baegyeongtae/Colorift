import Cookies from 'js-cookie';
import { useSetRecoilState } from 'recoil';
import axiosConfig from './token';
import { colorPageState, seasonState } from '../data/atom';

// 회원탈퇴
export async function setUserOut() {
    try {
        await axiosConfig({
            method: 'delete',
            url: 'quit/',
        });
        sessionStorage.clear();
        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
        window.open('/', '_self');
    } catch (error) {
        return error.response;
    }
    return null;
}

// 퍼스널 컬러 목록 조회
export async function getPersonalList() {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: 'color/list/',
        });
        return response;
    } catch (error) {
        return error.response;
    }
}

// 패션 목록 조회
export async function getFashionList() {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: 'fashion/list/',
        });
        return response;
    } catch (error) {
        return error.response;
    }
}

// 얼굴 사진 업로드
export async function postFacePhoto(imgData) {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: 'color/test/',
            data: imgData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        console.log(response);
        const season = response.data.color;
        sessionStorage.setItem('season', season);

        return season;
    } catch (error) {
        return error.response;
    }
}

// 패션 사진 및 컬러 조합 결과
export async function postFashionPhoto(fashionData) {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: 'fashion/test/',
            data: fashionData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        console.log(response);
        const season = response.data.color;

        return season;
    } catch (error) {
        return error.response;
    }
}
