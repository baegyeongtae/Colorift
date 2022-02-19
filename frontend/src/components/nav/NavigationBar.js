import { useState, useEffect } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Menubox } from './Menubox';
import { Logo } from '..';
import { useGetScrollY } from '../../utils/hooks/useGetScrollY';
import { ContainerDiv } from '../ContainerDiv';

function NavigationBar() {
    // true 이면 메뉴 바 나옴
    const [istoggle, setIsToggle] = useState(false);

    // 현재 url 받아오기
    const location = useLocation();
    const { pathname } = location;

    // 현재 스크롤 위치 받아오기
    const { scrollY } = useGetScrollY();

    const handleToggleClick = () => {
        setIsToggle(current => !current);
    };

    return (
        <>
            <header>
                {istoggle && <Menubox clickProps={handleToggleClick} />}
                <Nav pathname={pathname} scrollY={scrollY}>
                    <ContainerGridDiv>
                        <Logo />
                        <MenuDiv pathname={pathname} scrollY={scrollY}>
                            <Link to="/">
                                <div className="menu home">Home</div>
                            </Link>
                            <Link to="/example">
                                <div className="menu example">Personal Color</div>
                            </Link>
                            <Link to="/personalcolor">
                                <div className="menu personalcolor">Color Analysis</div>
                            </Link>
                            <Link to="/fassion">
                                <div className="menu fassion">Fasshion Matching</div>
                            </Link>
                        </MenuDiv>
                        <UserDiv pathname={pathname} scrollY={scrollY}>
                            <Link to="/login">
                                <div className="login">Log In</div>
                            </Link>
                            <Link to="/signup">
                                <div className="signup">
                                    <span>Sign Up</span>
                                </div>
                            </Link>
                        </UserDiv>
                        <MenuIconDiv>
                            <MenuImg onClick={handleToggleClick} pathname={pathname} scrollY={scrollY} />
                        </MenuIconDiv>
                    </ContainerGridDiv>
                </Nav>
            </header>
            <main>
                <Outlet />
            </main>
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
    height: 7vh;

    background-color: ${({ pathname, scrollY, theme }) =>
        pathname === '/' && scrollY === 0 ? 'transparent' : theme.color.nav};

    box-shadow: ${({ pathname }) => pathname !== '/' && '0px 4px 4px rgba(0, 0, 0, 0.25)'};
`;

const ContainerGridDiv = styled(ContainerDiv)`
    display: grid;
    grid-template-columns: 1fr 8fr 3fr;

    height: 100%;

    @media ${({ theme }) => theme.device.tablet} {
        ${({ theme }) => theme.flexStyled.flexRow};
        justify-content: space-between;
        align-items: center;
    } ;
`;

const MenuDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    div {
        color: ${({ pathname, scrollY }) => (pathname === '/' && scrollY === 0 ? '#A6A6A6' : '#616161')};
        font-weight: bold;

        height: 100%;

        text-align: center;
        line-height: 7vh;

        cursor: pointer;
    }

    .menu:hover {
        color: ${({ pathname, scrollY, theme }) => (pathname === '/' && scrollY === 0 ? 'white' : theme.color.blue)};

        background-color: ${({ pathname, scrollY }) => (pathname === '/' && scrollY === 0 ? '' : '#dde4f6')};
    }

    .home {
        color: ${({ pathname, scrollY, theme }) =>
            pathname === '/' && scrollY === 0 ? 'white' : pathname === '/' && scrollY !== 0 && theme.color.blue};
    }

    .example {
        color: ${({ pathname, theme }) => pathname === '/example' && theme.color.blue};
    }

    .personalcolor {
        color: ${({ pathname, theme }) => pathname === '/personalcolor' && theme.color.blue};
    }

    .fassion {
        color: ${({ pathname, theme }) => pathname === '/fassion' && theme.color.blue};
    }

    @media ${({ theme }) => theme.device.tablet} {
        display: none;
    } ;
`;

const UserDiv = styled(MenuDiv)`
    grid-template-columns: repeat(2, 1fr);

    span {
        color: white;

        background-color: ${({ theme }) => theme.color.blue};

        padding: 10px;

        margin-right: 1vw;
    }

    .login {
        color: ${({ pathname, scrollY }) => pathname === '/' && scrollY === 0 && 'white'};

        margin-left: 40%;
    }
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

        height: 4vh;

        filter: ${({ pathname, scrollY }) =>
            pathname === '/' && scrollY === 0
                ? 'invert(100%) sepia(0%) saturate(7493%) hue-rotate(148deg) brightness(117%) contrast(101%)'
                : 'invert(38%) sepia(8%) saturate(4242%) hue-rotate(182deg) brightness(94%) contrast(91%)'};

        cursor: pointer;
    }
`;
