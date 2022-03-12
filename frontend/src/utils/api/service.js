import Cookies from 'js-cookie';
import axiosConfig from './token';
import { getMaxSeason } from '../data/getMaxSeason';

// 닉네임 변경
export async function setUserNickname(_nickname) {
    try {
        const response = await axiosConfig({
            method: 'patch',
            url: '/app/edit/nickname/',
            data: {
                nickname: _nickname,
            },
        });
        return response;
    } catch (error) {
        return error.response;
    }
}

// 회원탈퇴
export async function setUserOut() {
    try {
        await axiosConfig({
            method: 'delete',
            url: '/app/quit/',
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

// 패션 목록 조회
export async function getFashionList() {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/app/fashion/list/',
        });
        return response;
    } catch (error) {
        return error.response;
    }
}

// 퍼스널컬러 목록 조회
export async function getColorList() {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/app/color/list/',
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

// 패션 사진 및 컬러 조합 결과
export async function postFashionPhoto(fashionData) {
    try {
        const response = await axiosConfig({
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

// 퍼스널컬러 상세보기
export async function getColorDetailModal(id) {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: `/app/color/detail/${id}/`,
        });
        return response.data;
    } catch (error) {
        return error.response;
    }
}

// 패션 상세보기
export async function getFashionDetailModal(id) {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: `/app/fashion/detail/${id}/`,
        });
        return response;
    } catch (error) {
        return error.response;
    }
}

// 퍼스널컬러 삭제하기
export async function setDeletePersonal(id) {
    try {
        const response = await axiosConfig({
            method: 'delete',
            url: `/app/color/detail/${id}/`,
        });
        return response;
    } catch (error) {
        return error.response;
    }
}

// 패션 삭제하기
export async function setDeleteFashion(id) {
    try {
        const response = await axiosConfig({
            method: 'delete',
            url: `/app/fashion/detail/${id}/`,
        });
        return response;
    } catch (error) {
        return error.response;
    }
}
