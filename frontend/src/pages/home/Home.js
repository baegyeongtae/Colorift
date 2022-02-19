import { useScrollToTop } from '../../utils/hooks/useScrollToTop';
import { HomeBanner, HomeService, HomeSeason } from '.';

// nav 테스트용 코드입니다.
export function Home() {
    useScrollToTop();

    return (
        <>
            <HomeBanner />
            <HomeService />
            <HomeSeason />
        </>
    );
}
