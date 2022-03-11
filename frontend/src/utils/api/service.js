import Cookies from 'js-cookie';
import axiosConfig from './token';

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
            url: '/app/fashion/test/',
            data: fashionData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        const result = {
            springRate: response.data.sprint_rate,
            summerRate: response.data.summer_rate,
            autumnRate: response.data.autumn_rate,
            winterRate: response.data.winter_rate,
            result: response.data.result,
        };

        return result;
    } catch (error) {
        console.log(error.response);
        return error.response;
    }
}

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
