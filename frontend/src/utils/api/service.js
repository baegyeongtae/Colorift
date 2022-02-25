import { accessAvailableCheck } from './token';
import { axiosGetConfig } from './config';

// 퍼스널 컬러 목록 조회
export async function getPersonalList() {
    try {
        await accessAvailableCheck();
        const response = await axiosGetConfig({
            url: '/color/list/',
        });
        console.log(response);
        return response;
    } catch (error) {
        return error.response;
    }
}
