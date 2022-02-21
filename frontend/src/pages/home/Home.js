import { useScrollToTop } from '../../utils/hooks/useScrollToTop';
import { HomeHeader, HomeService, HomeSeason, HomeAI, HomeFooter } from '.';
import { HomeColorBar, ScrollUpIcon, Footer } from '../../components';

// nav 테스트용 코드입니다.
export function Home() {
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
            <Footer />
        </>
    );
}
