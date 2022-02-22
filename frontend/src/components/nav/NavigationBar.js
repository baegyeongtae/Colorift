import { useEffect, useState } from 'react';
import { Outlet, useLocation, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Menubox } from './Menubox';
import { Logo, Footer } from '..';
import { ContainerDiv } from '../area/ContainerDiv';
import { useGetScrollY } from '../../utils/hooks/useGetScrollY';
import { setScrollDisabled } from '../../utils/data/setScrollDisabled';

function NavigationBar() {
    // true 이면 메뉴 바 나옴
    const [isToggle, setIsToggle] = useState(false);

    // 현재 url 받아오기
    const location = useLocation();
    const { pathname } = location;

    // 현재 스크롤 위치 받아오기
    const { scrollY } = useGetScrollY();

    // 상단바 메뉴 목록
    const menus = [
        {
            name: 'Home',
            path: '/',
            className: 'home',
        },
        {
            name: 'Personal Color',
            path: '/example',
            className: 'example',
        },
        {
            name: 'Color Analysis',
            path: '/personalcolor',
            className: 'personalcolor',
        },
        {
            name: 'Fashion Matching',
            path: '/fashion',
            className: 'fashion',
        },
    ];

    const handleToggleClick = () => {
        setIsToggle(current => !current);
    };

    useEffect(() => setScrollDisabled(isToggle), [isToggle]);

    return (
        <>
            <header>
                {isToggle && <Menubox clickProps={handleToggleClick} />}
                <Nav className={pathname === '/' && scrollY === 0 && 'transparent'}>
                    <ContainerGridDiv>
                        <Logo />
                        <MenuDiv>
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
                        <UserDiv>
                            <NavLink
                                to="/login"
                                className={pathname === '/' && scrollY === 0 ? 'transparent login' : 'login'}
                            >
                                Log In
                            </NavLink>
                            <NavLink
                                to="/signup"
                                className={pathname === '/' && scrollY === 0 ? 'transparent signup' : 'signup'}
                            >
                                <span>Sign Up</span>
                            </NavLink>
                        </UserDiv>
                        <MenuIconDiv>
                            <MenuImg
                                onClick={handleToggleClick}
                                className={pathname === '/' && scrollY === 0 && 'transparent'}
                            />
                        </MenuIconDiv>
                    </ContainerGridDiv>
                </Nav>
            </header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export { NavigationBar };

// styled-components

const Nav = styled.nav`
    position: fixed;
    top: 0;
    z-index: 99;

    width: 100vw;
    height: 60px;

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
    grid-template-columns: 1fr 8fr 3fr;
    align-items: center;

    @media ${({ theme }) => theme.device.tablet} {
        ${({ theme }) => theme.flexStyled.flexRow};
        justify-content: space-between;
        align-items: center;
    } ;
`;

const MenuDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    a {
        color: #616161;
        font-weight: bold;

        text-align: center;
        line-height: 60px;

        cursor: pointer;
    }

    a:hover {
        color: ${({ theme }) => theme.color.blue};

        background-color: #dde4f6;
    }

    a.active {
        color: ${({ theme }) => theme.color.blue};
    }

    .transparent {
        color: #a6a6a6;
    }

    .transparent:hover,
    .transparent.active {
        color: white;

        background-color: unset;
    }

    @media ${({ theme }) => theme.device.tablet} {
        display: none;
    } ;
`;

const UserDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;

    text-align: center;

    a {
        color: #616161;
        font-weight: bold;

        cursor: pointer;
    }

    a.transparent {
        color: white;
    }

    .login {
        margin-left: 40%;
    }

    .signup span {
        color: white;
        font-weight: bold;

        background-color: ${({ theme }) => theme.color.blue};

        padding: 10px;
    }

    @media ${({ theme }) => theme.device.tablet} {
        display: none;
    } ;
`;

const MenuIconDiv = styled.div`
    display: none;

    @media ${({ theme }) => theme.device.tablet} {
        display: block;

        ${({ theme }) => theme.flexStyled.flexCenter};

        margin: 0 3vw;
    } ;
`;

const MenuImg = styled.img.attrs(() => ({
    src: './image/menu.svg',
    alt: '메뉴 아이콘',
}))`
    display: none;

    @media ${({ theme }) => theme.device.tablet} {
        display: block;

        height: 30px;

        filter: invert(38%) sepia(8%) saturate(4242%) hue-rotate(182deg) brightness(94%) contrast(91%);

        cursor: pointer;

        &.transparent {
            filter: invert(100%) sepia(0%) saturate(7493%) hue-rotate(148deg) brightness(117%) contrast(101%);
        }
    }
`;
