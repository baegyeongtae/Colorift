import { useState } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Menubox } from './Menubox';
import { Logo } from '..';
import { useScroll } from '../../utils/hooks/useScroll';

function NavigationBar() {
    // true 이면 메뉴 바 나옴
    const [istoggle, setIsToggle] = useState(false);

    // 현재 url 받아오기
    const location = useLocation();
    const { pathname } = location;

    // 현재 스크롤 위치 받아오기
    const { scrollY } = useScroll();

    const handleToggleClick = () => {
        setIsToggle(current => !current);
    };

    return (
        <>
            <header>
                {istoggle && <Menubox clickProps={handleToggleClick} />}
                <Nav pathname={pathname} scrollY={scrollY}>
                    <Logo />
                    <MenuDiv pathname={pathname} scrollY={scrollY}>
                        <Link to="/">
                            <div className="menu">Home</div>
                        </Link>
                        <Link to="/example">
                            <div className="menu">Personal Color</div>
                        </Link>
                        <Link to="/personalcolor">
                            <div className="menu">Color Analysis</div>
                        </Link>
                        <Link to="/fassion">
                            <div className="menu">Fashion Matching</div>
                        </Link>
                    </MenuDiv>
                    <MenuDiv pathname={pathname} scrollY={scrollY}>
                        <Link to="/login">
                            <div className="login">Log In</div>
                        </Link>
                        <Link to="/signup">
                            <div className="signup">
                                <span>Sign Up</span>
                            </div>
                        </Link>
                    </MenuDiv>
                    <MenuIconDiv>
                        <MenuImg onClick={handleToggleClick} />
                    </MenuIconDiv>
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

    ${({ theme }) => theme.flexStyled.flexRow};
    justify-content: space-between;
`;

const MenuDiv = styled.div`
    ${({ theme }) => theme.flexStyled.flexRow};
    justify-content: center;
    align-items: center;

    flex-basis: 15vw;

    div {
        color: #616161;
        font-weight: bold;

        height: 100%;

        text-align: center;
        line-height: 7vh;

        cursor: pointer;
    }

    .menu {
        width: 15vw;
    }

    .menu:hover {
        color: ${({ pathname, scrollY, theme }) => (pathname === '/' && scrollY === 0 ? 'white' : theme.color.blue)};

        background-color: ${({ pathname, scrollY }) => (pathname === '/' && scrollY === 0 ? '' : '#dde4f6')};
    }

    .login,
    .signup {
        width: 100px;

        span {
            color: white;

            background-color: ${({ theme }) => theme.color.blue};

            padding: 10px;

            margin-right: 1vw;
        }
    }

    .login {
        color: ${({ pathname, scrollY }) => pathname === '/' && scrollY === 0 && 'white'};
    }

    @media ${({ theme }) => theme.device.laptop} {
        display: none;
    } ;
`;

const MenuIconDiv = styled.div`
    display: none;

    @media ${({ theme }) => theme.device.laptop} {
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

    @media ${({ theme }) => theme.device.laptop} {
        display: block;

        height: 4vh;

        filter: invert(38%) sepia(8%) saturate(4242%) hue-rotate(182deg) brightness(94%) contrast(91%);

        cursor: pointer;
    }
`;
