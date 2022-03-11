import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { fashionPageState } from '../../utils/data/atom';
import { UploadFashion, MatchingLoading, PersonalColorChoice, FashionResult } from '.';

function FashionMatchingPage() {
    // 0은 컬러 선택 페이지, 1은 패션 선택 페이지, 2는 로딩, 3은 결과 페이지
    const fashionPage = useRecoilValue(fashionPageState);
    const setFashionPage = useSetRecoilState(fashionPageState);

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

    // 페이지 초기화
    useEffect(() => setFashionPage(0), []);

    return renderPage;
}

export { FashionMatchingPage };
