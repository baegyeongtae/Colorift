import styled from 'styled-components';
import { useScrollToTop } from '../../utils/hooks/useScrollToTop';
import { HomeBanner, HomeService } from '.';

// nav 테스트용 코드입니다.
export function Home() {
    useScrollToTop();

    return (
        <>
            <HomeBanner />
            <HomeService />
        </>
    );
}

// styled-components

const Section = styled.section`
    height: 100vh;
`;

// 삭제 예정
const DivTwo = styled.div`
    height: 100vh;

    background-color: green;
`;

// 삭제 예정
const DivThree = styled.div`
    height: 100vh;

    background-color: blue;
`;
