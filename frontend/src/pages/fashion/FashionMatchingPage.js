import { useRecoilValue, selector } from 'recoil';
import { fashionPageState } from '../../utils/data/atom';
import { UploadFashion, MatchingLoading, PersonalColorChoice, FashionResult } from '.';

function FashionMatchingPage() {
    // 0은 정보 입력, 1은 직군 선택
    const fashionPage = useRecoilValue(fashionPageState);

    // 페이지에 따라 컴포넌트 렌더링할 함수
    function renderHTML() {
        if (fashionPage === 0) {
            return <PersonalColorChoice />;
        }
        if (fashionPage === 1) {
            return <UploadFashion />;
        }
        if (fashionPage === 2) {
            return <MatchingLoading />;
        }

        return <FashionResult />;
    }

    const renderPage = renderHTML();

    return renderPage;
}

export { FashionMatchingPage };
