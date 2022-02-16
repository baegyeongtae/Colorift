import styled from 'styled-components';
import { Logo } from '..';

function Navigation() {
    return (
        <Nav>
            <Logo />
            <MenuDiv>
                <MenuImg />
            </MenuDiv>
        </Nav>
    );
}

export default Navigation;

// styled-components

const Nav = styled.nav`
    width: 100%;
    height: 7vh;

    background-color: ${({ theme }) => theme.color.nav};

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    ${({ theme }) => theme.flexStyled.flexRow};
    justify-content: space-between;
`;

const MenuDiv = styled.div`
    ${({ theme }) => theme.flexStyled.flexCenter};

    width: 15%;
`;

const MenuImg = styled.img.attrs(() => ({
    src: './image/menu.svg',
    alt: '메뉴 아이콘',
}))`
    width: 7vw;

    filter: invert(38%) sepia(8%) saturate(4242%) hue-rotate(182deg) brightness(94%) contrast(91%);

    cursor: pointer;
`;
