import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { colorPageState } from '../../utils/data/atom';
import { ColorResult, UploadFace } from '.';

function PersonalColorPage() {
    // 0은 컬러 선택 페이지, 1은 로딩, 2는 결과 페이지
    const colorPage = useRecoilValue(colorPageState);
    const setColorPage = useSetRecoilState(colorPageState);

    // 페이지에 따라 컴포넌트 렌더링할 함수
    function renderHTML() {
        if (colorPage === 0) {
            return <UploadFace />;
        }
        if (colorPage === 2) {
            return <ColorResult />;
        }
        return null;
    }

    const renderPage = renderHTML();

    // 페이지 초기화
    useEffect(() => setColorPage(0), []);

    return renderPage;
}

export { PersonalColorPage };
