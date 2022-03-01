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

// 얼굴 사진 업로드
export async function postFacePhoto({ imgData }) {
    try {
        const setColorPage = useSetRecoilState(colorPageState);
        const setSeasonState = useSetRecoilState(seasonState);

        setColorPage(1);
        const response = await axiosConfig({
            method: 'post',
            url: 'color/test/',
            data: imgData,
        });

        console.log(response.data.color);
        const season = response.data.color;
        setSeasonState(season);
        return response.data.color;
    } catch (error) {
        return error.response;
    }
}
