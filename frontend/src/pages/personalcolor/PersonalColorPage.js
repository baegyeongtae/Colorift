import { useRecoilValue } from 'recoil';
import { colorPageState } from '../../utils/data/atom';
import { ColorResult, UploadFace, Loading } from '.';
import { PersonalColorChoice } from '..';

function PersonalColorPage() {
    // 0은 정보 입력, 1은 직군 선택
    const page = useRecoilValue(colorPageState);

    // 페이지에 따라 컴포넌트 렌더링할 함수
    function renderHTML() {
        if (page === 0) {
            return <UploadFace />;
        }
        if (page === 1) {
            return <Loading />;
        }
        if (page === 2) {
            return <ColorResult />;
        }
        if (page === 3) {
            return <PersonalColorChoice />;
        }
    }

    const renderPage = renderHTML();

    return { renderPage };
}

export { PersonalColorPage };
