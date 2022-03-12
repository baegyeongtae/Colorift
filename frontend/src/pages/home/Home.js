import { useRef, useEffect } from 'react';
import { HomeHeader, HomeService, HomeSeason, HomeAI, HomeFooter } from '.';
import { HomeColorBar, ScrollUpIcon } from '../../components';

export function Home() {
    // intersection observer가 관찰할 요소들
    const target1 = useRef(null);
    const target2 = useRef(null);
    const target3 = useRef(null);
    const target4 = useRef(null);
    const target5 = useRef(null);
    const target6 = useRef(null);

    // intersection observer 객체 콜백 함수
    // entry는 관찰하는 요소를 배열로 반환한다
    const onIntersect = async (entrys, observer) => {
        entrys.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('event');
                observer.unobserve(entry.target); // 관찰 취소
            }
        });
    };

    // intersection observer 옵션
    const options = {
        root: null, // 관찰 대상의 부모 요소를 지정 (기본값 null)
        rootMargin: '0px', // 관찰하는 뷰포트의 마진 지정 (기본값 0 0 0 0)
        threshold: 0.6, // 관찰 요소와 어느정도 겹쳤을 때 콜백을 수행할지 지정
    };

    useEffect(() => {
        const observer = new IntersectionObserver(onIntersect, options);
        [target1, target2, target3, target4, target5, target6].forEach(target => {
            if (target.current) observer.observe(target.current);
        });

        return () => observer.disconnect(); // 관찰 종료
    });

    return (
        <>
            <ScrollUpIcon />
            <HomeHeader ref={target1} />
            <HomeService ref={target2} />
            <HomeColorBar ref={target3} />
            <HomeSeason ref={target4} />
            <HomeAI ref={target5} />
            <HomeFooter ref={target6} />
        </>
    );
}
