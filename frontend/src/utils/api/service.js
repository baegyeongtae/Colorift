import axiosConfig from './token';

// 회원탈퇴
export async function setUserOut() {
    try {
        const response = await axiosConfig({
            method: 'delete',
            url: '/quit/',
        });
        alert('회원탈퇴가 완료되었습니다');
        window.open('/', '_self');
        return response;
    } catch (error) {
        return error.response;
    }
}

// 퍼스널 컬러 목록 조회
export async function getPersonalList() {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/color/list/',
        });
        return response;
    } catch (error) {
        return error.response;
    }
}
