import { useEffect, useState, useMemo } from 'react';
import { Outlet, useLocation, NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Cookies from 'js-cookie';
import { Logo, Footer, BlurBackgroundDiv } from '..';
import { ContainerDiv } from '../area/ContainerDiv';
import { useGetScrollY } from '../../utils/hooks/useGetScrollY';
import { setScrollDisabled } from '../../utils/data/setScrollDisabled';
import { xmarkIcon, menuIcon, profileIcon } from '../../image';
import { useScrollToTop } from '../../utils/hooks/useScrollToTop';

function NavigationBar() {
    // true 이면 메뉴 바 나옴
    const [isToggle, setIsToggle] = useState(false);

    // 현재 url과 로그인 여부 체크하기
    const location = useLocation();
    const { pathname } = location;
    const isLogin = sessionStorage.getItem('userId') || '';

    // 현재 스크롤 위치 받아오기
    const { scrollY } = useGetScrollY();

    // 상단바 메뉴 목록
    const menus = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'Personal Color',
            path: '/example',
        },
        {
            name: 'Color Analysis',
            path: '/personalcolor',
        },
        {
            name: 'Fashion Matching',
            path: '/fashion',
        },
        {
            name: 'Mini Game',
            path: '/game',
        },
    ];

    // 메뉴바 클릭 상태 변환하는 함수
    const handleToggleClick = () => {
        setIsToggle(current => !current);
    };

    // 쿠키, 세션 모두 리셋하는 함수
    function userSessionReset() {
        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
        sessionStorage.clear();
    }

    // pathname이 바뀔 때 스크롤바 위로 이동
    useScrollToTop(pathname);

    // 모바일 버전 메뉴바 show 상태에서는 스크롤 막기
    useEffect(() => setScrollDisabled(isToggle), [isToggle]);

    // 라우터가 변경될 때는 상단바 toggle 초기화
    useEffect(() => setIsToggle(false), [pathname]);

    // 홈페이지가 꺼질 때 토큰도 정리하기
    useEffect(
        () => () => {
            userSessionReset();
        },
        [],
    );

    return (
        <>
            <header>
                <Nav className={pathname === '/' && scrollY === 0 && 'transparent'}>
                    <ContainerGridDiv>
                        <Logo />
                        <MenuBoxDiv className={isToggle && 'show'}>
                            <MenuDiv className={isToggle && 'show'}>
                                {menus.map(menu => (
                                    <NavLink
                                        key={menu.name}
                                        to={menu.path}
                                        className={pathname === '/' && scrollY === 0 && 'transparent'}
                                    >
                                        {menu.name}
                                    </NavLink>
                                ))}
                            </MenuDiv>
                            <UserDiv className={isToggle && 'show'} login={isLogin}>
                                <NavLink
                                    to={isLogin ? '/' : '/login'}
                                    className={pathname === '/' && scrollY === 0 ? 'transparent login' : 'login'}
                                    onClick={() => (isLogin ? userSessionReset() : undefined)}
                                >
                                    {isLogin ? 'Logout' : 'Log In'}
                                </NavLink>
                                <NavLink
                                    to={isLogin ? `/mypage` : '/signup'}
                                    className={pathname === '/' && scrollY === 0 ? 'transparent signup' : 'signup'}
                                >
                                    {isLogin ? (
                                        <img
                                            src={profileIcon}
                                            alt="마이페이지 아이콘"
                                            height="40px"
                                            className={pathname === '/' && scrollY === 0 ? 'transparent' : 'signup'}
                                        />
                                    ) : (
                                        <span>Sign Up</span>
                                    )}
                                </NavLink>
                            </UserDiv>
                        </MenuBoxDiv>
                        <MenuIconDiv>
                            <MenuImg
                                onClick={handleToggleClick}
                                className={isToggle ? 'show' : pathname === '/' && scrollY === 0 && 'transparent'}
                            />
                        </MenuIconDiv>
                    </ContainerGridDiv>
                </Nav>
                <BlurBackgroundDiv onClick={handleToggleClick} className={isToggle && 'show'} />
            </header>
            <main style={{ minHeight: '100%', paddingBottom: '5vh' }}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export { NavigationBar };

// styled-components

const boxKeyframe = keyframes`
    0% {
        right: -50vw;
    }
    100% {
        right: 0;
    }
`;

const Nav = styled.nav`
    position: fixed;
    top: 0;
    z-index: 99;

    width: 100vw;
    height: 7vh;

    background-color: ${({ theme }) => theme.color.nav};

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &.transparent {
        background-color: transparent;
        box-shadow: unset;
    }
`;

const ContainerGridDiv = styled(ContainerDiv)`
    height: 100%;

    display: grid;
    grid-template-columns: 1fr 11fr;
    align-items: center;

    @media ${({ theme }) => theme.device.tablet} {
        ${({ theme }) => theme.flexStyled.flexRow};
        justify-content: space-between;
        align-items: center;
    } ;
`;

const MenuBoxDiv = styled.div`
    display: grid;
    grid-template-columns: 4fr 0.9fr;

    &.show {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 9999;

        ${({ theme }) => theme.flexStyled.flexColumn};

        width: 50vw;
        height: 100%;

        font-size: 1.6rem;

        background-color: ${({ theme }) => theme.color.nav};
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        animation: ${boxKeyframe} 1s ease-in-out 1;
    }

    @media ${({ theme }) => theme.device.tablet} {
        display: none;
    } ;
`;

const MenuDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    a {
        color: #616161;
        font-weight: bold;

        text-align: center;
        line-height: 7vh;

        cursor: pointer;

        &:hover {
            color: ${({ theme }) => theme.color.blue};

            background-color: #dde4f6;
        }

        &.active {
            color: ${({ theme }) => theme.color.blue};
        }
    }

    .transparent {
        color: #a6a6a6;

        &:hover,
        &.active {
            color: white;

            background-color: unset;
        }
    }

    &.show {
        ${({ theme }) => theme.flexStyled.flexColumn};
        justify-content: center;

        height: 80%;

        a {
            ${({ theme }) => theme.flexStyled.flexCenter};
            color: #616161;

            height: 20%;

            &.active {
                color: ${({ theme }) => theme.color.blue};
            }
        }
    }
`;

const UserDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: right;

    a {
        color: #616161;
        font-weight: bold;

        cursor: pointer;

        &.transparent {
            color: white;
        }
    }

    .signup {
        justify-self: ${({ login }) => login && 'center'};

        span {
            color: white;
            font-weight: bold;

            background-color: ${({ theme }) => theme.color.blue};

            padding: 10px;

            @media ${({ theme }) => theme.device.laptop} {
                padding: 5px;
            }
        }

        img {
            filter: invert(37%) sepia(15%) saturate(2388%) hue-rotate(181deg) brightness(96%) contrast(89%);

            &.transparent {
                filter: invert(100%) sepia(1%) saturate(2506%) hue-rotate(213deg) brightness(112%) contrast(101%);
            }
        }
    }

    &.show {
        ${({ theme }) => theme.flexStyled.flexColumn};

        height: 30%;

        a {
            ${({ theme }) => theme.flexStyled.flexCenter};

            width: 100%;
            height: 40%;

            color: #616161;
        }

        img {
            filter: invert(37%) sepia(15%) saturate(2388%) hue-rotate(181deg) brightness(96%) contrast(89%) !important;
        }
    }
`;

const MenuIconDiv = styled.div`
    display: none;

    @media ${({ theme }) => theme.device.tablet} {
        z-index: 9999;

        ${({ theme }) => theme.flexStyled.flexCenter};

        margin-right: 3vw;
    } ;
`;

const MenuImg = styled.img.attrs(({ className }) => ({
    src: className === 'show' ? xmarkIcon : menuIcon,
    alt: '메뉴 아이콘',
}))`
    display: block;

    height: 30px;

    filter: invert(38%) sepia(8%) saturate(4242%) hue-rotate(182deg) brightness(94%) contrast(91%);

    cursor: pointer;

    &.transparent {
        filter: invert(100%) sepia(0%) saturate(7493%) hue-rotate(148deg) brightness(117%) contrast(101%);
    }
`;
