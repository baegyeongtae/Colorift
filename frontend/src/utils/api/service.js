import Cookies from 'js-cookie';
import axiosConfig from './token';

// 퍼스널 컬러 목록 조회
export async function getPersonalList() {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/color/list/',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${Cookies.get('accessToken')}`,
            },
        });
        console.log(response);
        return response;
    } catch (error) {
        return error.response;
    }
}
