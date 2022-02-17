import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Menubox } from '.';
import { Logo } from '..';

function NavigationBar() {
    // true 이면 메뉴 바 나옴
    const [istoggle, setIsToggle] = useState(false); // eslint-disable-line no-unused-vars

    const handleToggleClick = () => {
        setIsToggle(current => !current);
    };

    return (
        <>
            <header>
                {istoggle && <Menubox clickProps={handleToggleClick} />}
                <Nav>
                    <Logo />
                    <MenuDiv>
                        <div className="menu">Home</div>
                        <div className="menu">Personal Color</div>
                        <div className="menu">Color Analysis</div>
                        <div className="menu">Fashion Matching</div>
                    </MenuDiv>
                    <MenuDiv>
                        <div className="login">Log In</div>
                        <div className="signup">
                            <span>Sign Up</span>
                        </div>
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
    width: 100vw;
    height: 7vh;

    background-color: ${({ theme }) => theme.color.nav};

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    ${({ theme }) => theme.flexStyled.flexRow};
    justify-content: space-between;
`;

const MenuDiv = styled.div`
    ${({ theme }) => theme.flexStyled.flexRow};
    justify-content: center;
    align-items: center;

    margin: 0 100px;

    div {
        color: #616161;
        font-weight: bold;

        height: 100%;

        text-align: center;
        line-height: 7vh;

        cursor: pointer;
    }

    .menu {
        width: 300px;
    }

    .menu:hover {
        color: #3c64b1;

        background-color: #dde4f6;
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
