import { useRecoilValue } from 'recoil';
import { colorPageState, fashionPageState } from '../../utils/data/atom';
import { UploadFashion, MatchingLoading, PersonalColorChoice, FashionResult } from '.';

function PersonalColorPage() {
    // 0은 정보 입력, 1은 직군 선택
    const page = useRecoilValue(colorPageState);

    // 페이지에 따라 컴포넌트 렌더링할 함수
    function renderHTML() {
        if (page === 0) {
            return <PersonalColorChoice />;
        }
        if (page === 1) {
            return <UploadFashion />;
        }
        if (page === 2) {
            return <MatchingLoading />;
        }
        if (page === 3) {
            return <FashionResult />;
        }
    }

    const renderPage = renderHTML();

    return { renderPage };
}

export { PersonalColorPage };
