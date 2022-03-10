import { NavBackgroundDiv, Article, BigTextP } from '../../components';

export function NotFound() {
    return (
        <>
            <NavBackgroundDiv />
            <Article>
                <BigTextP>
                    <span style={{ color: 'red', fontWeight: 'bold' }}>404</span> 잘못된 접근입니다 😅
                </BigTextP>
            </Article>
        </>
    );
}
