import { useRecoilValue } from 'recoil';
import { colorPageState } from '../../utils/data/atom';
import { ColorResult, UploadFace, Loading } from '.';

function PersonalColorPage() {
    // 0은 정보 입력, 1은 직군 선택
    const colorPage = useRecoilValue(colorPageState);
    // 페이지 나갔을 때 pageState가 0으로 set

    // 페이지에 따라 컴포넌트 렌더링할 함수
    function renderHTML() {
        if (colorPage === 0) {
            return <UploadFace />;
        }
        if (colorPage === 1) {
            return <Loading />;
        }
        return <ColorResult />;
    }

    const renderPage = renderHTML();

    return renderPage;
}

export { PersonalColorPage };
