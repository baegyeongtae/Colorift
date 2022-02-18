import styled from 'styled-components';
import { useScrollToTop } from '../../utils/hooks/useScrollToTop';
import { HomeBanner } from './HomeBanner';

// nav 테스트용 코드입니다.
function Home() {
    useScrollToTop();

    return (
        <>
            <OneSection>
                <HomeBanner />
            </OneSection>
            <DivTwo />
            <DivThree />
        </>
    );
}

export { Home };

// styled-components

const OneSection = styled.section`
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
