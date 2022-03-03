import { useRef, useEffect } from 'react';
import { useScrollToTop } from '../../utils/hooks/useScrollToTop';
import { HomeHeader, HomeService, HomeSeason, HomeAI, HomeFooter } from '.';
import { HomeColorBar, ScrollUpIcon } from '../../components';

// nav 테스트용 코드입니다.
export function Home() {
    // intersection observer가 관찰할 요소
    const target = useRef(null);

    // intersection observer 객체 콜백 함수
    // entry는 관찰하는 요소를 배열로 반환한다
    const onIntersect = async ([entry], observer) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('event');
            observer.unobserve(entry.target);
        }
    };

    // intersection observer 옵션
    const options = {
        root: null, // 관찰 대상의 부모 요소를 지정 (기본값 null)
        rootMargin: '0px', // 관찰하는 뷰포트의 마진 지정 (기본값 0 0 0 0)
        threshold: 0.8, // 관찰 요소와 어느정도 겹쳤을 때 콜백을 수행할지 지정
    };

    useEffect(() => {
        const observer = new IntersectionObserver(onIntersect, options);
        if (target.current) observer.observe(target.current);
        return () => observer.disconnect();
    }, [target]);

    // 이 페이지에 오면 스크롤바 맨 위로 올리기
    useScrollToTop();

    return (
        <>
            <ScrollUpIcon />
            <HomeHeader />
            <HomeService />
            <HomeColorBar />
            <HomeSeason />
            <HomeAI />
            <HomeFooter />
        </>
    );
}
